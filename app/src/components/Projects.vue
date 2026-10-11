<template>
  <el-tabs v-model="activeName" class="projects-tab">
    <el-tab-pane
      v-for="project in projectsData"
      :key="project.id"
      :name="project.title"
      :id="project.id"
    >
      <template #label>
        <span class="project-label">
          <b>{{ project.label }}</b>
        </span>
      </template>

      <div class="project-card-wrapper">
        <el-row class="project-tab-row" :gutter="28" align="middle">
          <el-col :md="{ span: 11 }" :span="24" class="project-info-col">
            <div class="project-meta-badges">
              <span class="role-badge">{{ project.role }}</span>
              <span class="period-badge">{{ project.period }}</span>
            </div>

            <h3 class="project-inner-title">{{ project.label }}</h3>
            <p class="project-desc">{{ project.description }}</p>

            <div class="tech-tags">
              <span
                v-for="tech in project.techStack.slice(0, 5)"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 5" class="tech-tag-more">
                +{{ project.techStack.length - 5 }}
              </span>
            </div>

            <div class="project-actions">
              <router-link
                :to="'/experiencias/' + project.id"
                class="details-btn"
              >
                Saiba Mais
                <font-awesome-icon class="btn-icon" icon="fa-solid fa-arrow-right" />
              </router-link>

              <div
                v-if="project.links && project.links.length"
                class="external-links-group"
              >
                <a
                  v-for="link in project.links"
                  :key="link.index"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="external-link"
                >
                  <font-awesome-icon icon="fa-solid fa-up-right-from-square" class="link-icon" />
                  {{ link.title }}
                </a>
              </div>
            </div>
          </el-col>

          <el-col :md="{ span: 13 }" :span="24" class="project-image-col">
            <router-link
              :to="'/experiencias/' + project.id"
              class="image-container"
              title="Clique para ver detalhes desta experiência"
            >
              <el-image
                class="project-image"
                :alt="project.image.alt"
                :src="project.image.src"
                fit="cover"
              />
              <div class="image-overlay">
                <span class="overlay-text">
                  Ver Detalhes
                  <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </span>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import projectsJson from "../assets/projects.json";

export default defineComponent({
  name: "Projects",
  setup() {
    const activeName = ref(projectsJson[0]?.title || "Siteware Stratws");
    const projectsData = projectsJson;

    return {
      activeName,
      projectsData,
    };
  },
});
</script>

<style scoped>
.projects-tab {
  width: 100%;
  max-width: 1100px;
  margin-top: 16px;
  margin-bottom: 24px;
}

:deep(.el-tabs__nav-wrap::after) {
  background-color: rgba(255, 255, 255, 0.08);
}

:deep(.el-tabs__item) {
  color: #8892b0;
  font-size: 16px;
  padding: 0 20px;
  transition: all 0.2s ease;
}

:deep(.el-tabs__item.is-active) {
  color: #00e676;
}

:deep(.el-tabs__active-bar) {
  background-color: #00e676;
  height: 3px;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 230, 118, 0.5);
}

.project-label {
  font-size: 16px;
}

.project-card-wrapper {
  background: rgba(14, 18, 20, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 230, 118, 0.15);
  border-radius: 16px;
  padding: 36px 32px;
  margin-top: 24px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  text-align: left;
}

.project-meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}

.role-badge {
  background: rgba(0, 230, 118, 0.12);
  color: #00e676;
  border: 1px solid rgba(0, 230, 118, 0.25);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.period-badge {
  background: rgba(255, 255, 255, 0.05);
  color: #a0aec0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.project-inner-title {
  font-size: 26px;
  color: #ffffff;
  margin: 0 0 14px 0;
  font-weight: 700;
}

.project-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #cbd5e0;
  margin: 0 0 20px 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.tech-tag {
  background: #162024;
  color: #4ade80;
  border: 1px solid #23353b;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-family: monospace;
}

.tech-tag-more {
  background: rgba(255, 255, 255, 0.04);
  color: #718096;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
}

.project-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.details-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background-color: #00c853;
  border: 1px solid #00c853;
  border-radius: 9999px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.details-btn:hover {
  background-color: #00e676;
  border-color: #00e676;
  box-shadow: 0 0 16px rgba(0, 230, 118, 0.4);
  transform: translateY(-2px);
  color: #ffffff;
}

.btn-icon {
  margin-left: 8px;
  font-size: 13px;
}

.external-links-group {
  display: flex;
  gap: 16px;
}

.external-link {
  display: inline-flex;
  align-items: center;
  color: #00e676;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.external-link:hover {
  color: #69f0ae;
}

.link-icon {
  margin-right: 6px;
  font-size: 12px;
}

.image-container {
  display: block;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0, 230, 118, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 16 / 7.75;
  background-color: #0c1012;
  text-decoration: none;
}

.image-container:hover {
  transform: scale(1.02);
  border-color: #00e676;
  box-shadow: 0 12px 30px rgba(0, 230, 118, 0.25);
}

.project-image {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.4s ease;
}

.image-container:hover .project-image {
  transform: scale(1.04);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7, 12, 10, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.overlay-text {
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  background: rgba(0, 200, 83, 0.9);
  padding: 8px 18px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

@media (max-width: 991px) {
  .project-image-col {
    margin-top: 24px;
  }
}

@media (max-width: 768px) {
  .project-card-wrapper {
    padding: 24px 18px;
  }
  .project-inner-title {
    font-size: 22px;
  }
}
</style>
