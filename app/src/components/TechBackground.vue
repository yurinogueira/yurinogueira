<template>
  <canvas ref="canvasRef" class="tech-canvas"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export default defineComponent({
  name: "TechBackground",
  setup() {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const initParticles = (width: number, height: number) => {
      const count = Math.min(Math.floor((width * height) / 12000), 85);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 1,
          baseAlpha: Math.random() * 0.4 + 0.2,
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    onMounted(() => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
      initParticles(width, height);

      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles(width, height);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);

      const render = () => {
        ctx.clearRect(0, 0, width, height);

        // Desenhar sutil grid de coordenadas no fundo
        const gridSize = 64;
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(0, 230, 118, 0.02)";
        ctx.beginPath();
        for (let x = 0; x < width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();

        // Atualizar e renderizar partículas
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;

          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;

          // Interação do mouse (repulsão e glow)
          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          let particleColor = `rgba(0, 230, 118, ${p.baseAlpha})`;
          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            p.x -= (dxMouse / distMouse) * force * 2;
            p.y -= (dyMouse / distMouse) * force * 2;
            particleColor = `rgba(0, 255, 136, ${Math.min(1, p.baseAlpha + 0.4)})`;
          }

          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          // Conectar partículas próximas
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              const alpha = (1 - dist / 110) * 0.18;
              ctx.strokeStyle = `rgba(0, 230, 118, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Conectar ao mouse se próximo
          if (distMouse < mouse.radius) {
            const mouseAlpha = (1 - distMouse / mouse.radius) * 0.35;
            ctx.strokeStyle = `rgba(0, 255, 136, ${mouseAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      onUnmounted(() => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return {
      canvasRef,
    };
  },
});
</script>

<style scoped>
.tech-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>
