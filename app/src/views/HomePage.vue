<template>
  <div class="home-page-wrapper">
    <tech-background />

    <div class="home-content">
      <!-- Seção Hero / Apresentação -->
      <section class="hero-section">
        <div class="content-container">
          <div class="badge-tag">
            <span class="status-dot"></span>
            Engenharia de Software & Soluções Escaláveis
          </div>
          <h1 class="main-title">Engenheiro de Software</h1>
          <p class="subtitle">
            <q>Simplicity is prerequisite for reliability.</q>
            <br />
            <cite>Edsger W. Dijkstra</cite>
          </p>
        </div>
      </section>

      <!-- Seção Sobre Mim & Pilares Técnicos -->
      <section class="about-section">
        <div class="content-container">
          <div class="about-intro">
            <h2 class="about-greeting">
              Fala tu! Me chamo Yuri Nogueira, prazer em te conhecer!
            </h2>
            <p class="about-description">
              Sou um <b>Engenheiro de Software</b> focado em arquitetura limpa, código manutenível e sistemas de alta performance. Apaixonado por resolver problemas complexos, aprender profundamente novas tecnologias e transformar desafios de negócio em soluções de software elegantes, seguras e escaláveis.
            </p>
          </div>

          <div class="cards-wrapper">
            <about-cards />
          </div>
        </div>
      </section>

      <!-- Seção Projetos / Experiências -->
      <section class="projects-section">
        <div class="content-container">
          <div class="section-badge">TRAJETÓRIA & EXPERIÊNCIAS</div>
          <h2 class="section-main-title">Projetos & Atuações Profissionais</h2>
          <p class="section-subtitle">
            Conheça as principais plataformas e produtos em que atuei. Cada experiência reflete dedicação em arquitetura, confiabilidade e geração de valor técnico real.
          </p>

          <div class="projects-wrapper">
            <projects />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TechBackground from "../components/TechBackground.vue";
import AboutCards from "../components/AboutCards.vue";
import Projects from "../components/Projects.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    TechBackground,
    AboutCards,
    Projects,
  },
});
</script>

<style scoped>
.home-page-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

.home-content {
  position: relative;
  z-index: 1;
}

.content-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

/* Hero Section */
.hero-section {
  padding: 64px 0 52px;
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 230, 118, 0.08);
  border: 1px solid rgba(0, 230, 118, 0.25);
  color: #00e676;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #00e676;
  box-shadow: 0 0 8px #00e676;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(0, 230, 118, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0);
  }
}

.main-title {
  font-size: 44px;
  color: #ffffff;
  margin: 0 0 14px 0;
  font-weight: 800;
  letter-spacing: -1px;
  text-align: center;
}

.subtitle {
  font-size: 18px;
  color: #94a3b8;
  margin: 0;
  line-height: 1.6;
  text-align: center;
}

.subtitle cite {
  font-size: 14px;
  color: #00e676;
  font-style: normal;
  font-weight: 600;
}

/* About Section */
.about-section {
  background: rgba(14, 18, 20, 0.7);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 230, 118, 0.1);
  border-bottom: 1px solid rgba(0, 230, 118, 0.1);
  padding: 72px 0 80px;
}

.about-intro {
  text-align: center;
  max-width: 860px;
  margin-bottom: 56px;
}

.about-greeting {
  font-size: 28px;
  color: #ffffff;
  margin: 0 0 20px 0;
  font-weight: 700;
}

.about-description {
  font-size: 18px;
  line-height: 1.8;
  color: #cbd5e0;
  margin: 0;
}

.about-description b {
  color: #00e676;
}

.cards-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Projects Section */
.projects-section {
  padding: 80px 0 96px;
  text-align: center;
}

.section-badge {
  font-size: 12px;
  color: #00e676;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
}

.section-main-title {
  font-size: 32px;
  color: #ffffff;
  margin: 0 0 12px 0;
  font-weight: 700;
}

.section-subtitle {
  font-size: 17px;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 760px;
  margin: 0 auto 36px;
}

.projects-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 48px 0 36px;
  }
  .main-title {
    font-size: 32px;
  }
  .about-greeting {
    font-size: 22px;
  }
  .about-description {
    font-size: 16px;
  }
  .section-main-title {
    font-size: 24px;
  }
  .about-section {
    padding: 56px 0 64px;
  }
  .about-intro {
    margin-bottom: 40px;
  }
}
</style>
