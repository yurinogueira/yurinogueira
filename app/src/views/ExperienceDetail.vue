<template>
  <div v-if="project" class="experience-detail-page">
    <el-row justify="center">
      <el-col class="page-container" :span="24">
        <!-- Navegação de Retorno -->
        <div class="top-nav">
          <router-link to="/" class="back-link-btn">
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="btn-icon" />
            Voltar para o Início
          </router-link>
        </div>

        <!-- Cabeçalho da Experiência -->
        <div class="header-card">
          <div class="header-content">
            <div class="badges-row">
              <span class="company-badge">{{ project.company }}</span>
              <span class="role-badge">{{ project.role }}</span>
              <span class="period-badge">{{ project.period }}</span>
            </div>
            <h1 class="project-title">{{ project.label }}</h1>
            <p class="project-headline">{{ project.description }}</p>

            <div v-if="project.links && project.links.length" class="header-actions">
              <a
                v-for="link in project.links"
                :key="link.index"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="action-btn"
              >
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" class="btn-icon" />
                {{ link.title }}
              </a>
            </div>
          </div>

          <div class="header-image-wrapper">
            <el-image
              class="header-image"
              :src="project.image.src"
              :alt="project.image.alt"
              fit="cover"
            />
          </div>
        </div>

        <!-- Seções Detalhadas -->
        <el-row :gutter="24" class="content-row">
          <!-- Coluna Principal -->
          <el-col :md="{ span: 15 }" :span="24">
            <!-- Visão Geral -->
            <div class="section-card">
              <h2 class="section-title">
                <span class="title-accent">/</span> Visão Geral da Solução
              </h2>
              <p class="section-text">{{ project.overview }}</p>
            </div>

            <!-- Principais Responsabilidades & Desafios -->
            <div class="section-card">
              <h2 class="section-title">
                <span class="title-accent">/</span> Atuação & Responsabilidades
              </h2>
              <ul class="items-list">
                <li v-for="(item, idx) in project.responsibilities" :key="idx">
                  <font-awesome-icon icon="fa-solid fa-circle-check" class="check-icon" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Destaques & Impactos -->
            <div class="section-card">
              <h2 class="section-title">
                <span class="title-accent">/</span> Impacto & Resultados de Destaque
              </h2>
              <ul class="items-list highlights-list">
                <li v-for="(item, idx) in project.highlights" :key="idx">
                  <font-awesome-icon icon="fa-solid fa-bolt" class="bolt-icon" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </el-col>

          <!-- Coluna Lateral -->
          <el-col :md="{ span: 9 }" :span="24">
            <!-- Stack Tecnológica -->
            <div class="section-card side-card">
              <h2 class="section-title">
                <span class="title-accent">/</span> Stack Tecnológica
              </h2>
              <div class="tech-pills">
                <span v-for="tech in project.techStack" :key="tech" class="tech-pill">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Outras Experiências Rápidas -->
            <div class="section-card side-card">
              <h2 class="section-title">
                <span class="title-accent">/</span> Outras Experiências
              </h2>
              <div class="other-projects-list">
                <router-link
                  v-for="other in otherProjects"
                  :key="other.id"
                  :to="'/experiencias/' + other.id"
                  class="other-project-item"
                >
                  <div class="other-info">
                    <span class="other-title">{{ other.label }}</span>
                    <span class="other-role">{{ other.role }}</span>
                  </div>
                  <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow-icon" />
                </router-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

  <div v-else class="not-found-container">
    <h2>Experiência não encontrada</h2>
    <router-link to="/" class="back-link-btn">Voltar para o início</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import projectsJson from "../assets/projects.json";

export default defineComponent({
  name: "ExperienceDetail",
  setup() {
    const route = useRoute();

    const currentId = computed(() => route.params.id as string);

    const project = computed(() => {
      return projectsJson.find(
        (p) => p.id === currentId.value || p.title.toLowerCase() === currentId.value.toLowerCase()
      );
    });

    const otherProjects = computed(() => {
      return projectsJson.filter((p) => p.id !== currentId.value);
    });

    return {
      project,
      otherProjects,
    };
  },
});
</script>

<style scoped>
.experience-detail-page {
  padding: 32px 16px 80px;
  position: relative;
  z-index: 1;
}

.page-container {
  max-width: 1100px;
  text-align: left;
}

.top-nav {
  margin-bottom: 24px;
}

.back-link-btn {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  padding: 10px 20px;
  border-radius: 9999px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.back-link-btn:hover {
  background: rgba(0, 230, 118, 0.12);
  border-color: #00e676;
  color: #00e676;
}

.btn-icon {
  margin-right: 8px;
}

.header-card {
  background: rgba(14, 18, 20, 0.75);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 230, 118, 0.2);
  border-radius: 18px;
  padding: 36px;
  display: flex;
  gap: 32px;
  align-items: center;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
}

.header-content {
  flex: 1;
}

.header-image-wrapper {
  width: 475px;
  height: 230px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(0, 230, 118, 0.25);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
  background-color: #0c1012;
}

.header-image {
  width: 100%;
  height: 100%;
  display: block;
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
}

.company-badge {
  background: rgba(0, 230, 118, 0.15);
  color: #00e676;
  border: 1px solid rgba(0, 230, 118, 0.35);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
}

.role-badge {
  background: rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.period-badge {
  background: rgba(255, 255, 255, 0.04);
  color: #94a3b8;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.project-title {
  font-size: 32px;
  color: #ffffff;
  margin: 0 0 14px 0;
  font-weight: 800;
}

.project-headline {
  font-size: 16px;
  color: #cbd5e0;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.header-actions {
  display: flex;
  gap: 14px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  background-color: #00c853;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background-color: #00e676;
  box-shadow: 0 0 16px rgba(0, 230, 118, 0.4);
  color: #ffffff;
}

.content-row {
  margin-top: 8px;
}

.section-card {
  background: rgba(14, 18, 20, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px 30px;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.section-title {
  font-size: 20px;
  color: #f8fafc;
  margin: 0 0 18px 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-accent {
  color: #00e676;
  font-family: monospace;
}

.section-text {
  font-size: 16px;
  color: #cbd5e0;
  line-height: 1.7;
  margin: 0;
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.items-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: #cbd5e0;
  line-height: 1.6;
}

.check-icon {
  color: #00e676;
  margin-top: 4px;
  flex-shrink: 0;
}

.bolt-icon {
  color: #ffb703;
  margin-top: 4px;
  flex-shrink: 0;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-pill {
  background: #141f23;
  color: #4ade80;
  border: 1px solid rgba(0, 230, 118, 0.2);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-family: monospace;
  font-weight: 500;
}

.other-projects-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.other-project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

.other-project-item:hover {
  background: rgba(0, 230, 118, 0.08);
  border-color: rgba(0, 230, 118, 0.3);
  transform: translateX(4px);
}

.other-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.other-title {
  color: #f1f5f9;
  font-weight: 600;
  font-size: 14px;
}

.other-role {
  color: #94a3b8;
  font-size: 12px;
}

.arrow-icon {
  color: #00e676;
  font-size: 12px;
}

.not-found-container {
  padding: 100px 20px;
  text-align: center;
}

@media (max-width: 991px) {
  .header-card {
    flex-direction: column;
    padding: 24px;
  }
  .header-image-wrapper {
    width: 100%;
    height: 220px;
  }
}
</style>
