<template>
  <div class="cards-grid">
    <div class="feature-card">
      <div class="icon-wrapper">
        <font-awesome-icon class="card-fa-icon" icon="fa-solid fa-code" />
      </div>
      <h3 class="card-title">Engenheiro de Software</h3>
      <p class="card-text">
        Construção de aplicações escaláveis, resilientes e de alta performance, priorizando código limpo, padrões de projeto e manutenibilidade contínua.
      </p>
    </div>

    <div class="feature-card">
      <div class="icon-wrapper">
        <font-awesome-icon class="card-fa-icon" icon="fa-solid fa-cubes-stacked" />
      </div>
      <h3 class="card-title">Clean Architecture & Performance</h3>
      <p class="card-text">
        Desenvolvimento orientado a domínios bem modelados, otimização crítica de bancos de dados relacionais/NoSQL e microsserviços desacoplados.
      </p>
    </div>

    <div class="feature-card">
      <div class="icon-wrapper">
        <font-awesome-icon class="card-fa-icon" icon="fa-solid fa-bolt" />
      </div>
      <h3 class="card-title">Autonomia & Resolução de Problemas</h3>
      <p class="card-text">
        Ownership total do ciclo de vida da solução, do levantamento técnico e design ao deploy com esteiras CI/CD e monitoramento em produção.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutCards",
});
</script>

<style scoped>
.cards-grid {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  box-sizing: border-box;
}

.feature-card {
  background: rgba(14, 18, 20, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 230, 118, 0.2);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  box-sizing: border-box;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: #00e676;
  box-shadow: 0 14px 36px rgba(0, 230, 118, 0.18);
  background: rgba(14, 22, 22, 0.85);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: rgba(0, 230, 118, 0.1);
  border: 1px solid rgba(0, 230, 118, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  box-shadow: 0 0 16px rgba(0, 230, 118, 0.15);
}

.card-fa-icon {
  font-size: 26px;
  color: #00e676;
}

.card-title {
  font-size: 19px;
  color: #ffffff;
  margin: 0 0 14px 0;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.2px;
}

.card-text {
  font-size: 15px;
  line-height: 1.65;
  color: #cbd5e0;
  margin: 0;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
    max-width: 650px;
    gap: 20px;
  }

  .feature-card {
    padding: 28px 20px;
  }
}

@media (max-width: 768px) {
  .cards-grid {
    width: 92%;
  }
}
</style>
