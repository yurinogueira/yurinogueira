<template>
  <div class="contact-page-wrapper">
    <tech-background />

    <div class="contact-content">
      <el-row justify="center">
        <el-col class="top-nav" :span="24">
          <el-button class="back-btn" round @click="goHome">
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="btn-icon" />
            Voltar para o Início
          </el-button>
        </el-col>
      </el-row>

      <el-row justify="center">
        <el-col class="name-box" :span="24">
          <div class="contact-badge">VAMOS CONVERSAR?</div>
          <h1 class="contact-title">Yuri Nogueira</h1>
          <p class="contact-subtitle">
            Engenheiro de Software disponível para novos desafios, parcerias técnicas e conexões profissionais.
          </p>
        </el-col>
      </el-row>

      <el-row justify="center" class="links-row">
        <el-col class="contacts-box" :span="24">
          <div class="contact-card" @click="openLinkedIn">
            <div class="icon-circle">
              <font-awesome-icon class="brand-size" icon="fa-brands fa-linkedin-in" />
            </div>
            <div class="card-info">
              <span class="card-title">LinkedIn</span>
              <span class="card-desc">linkedin.com/in/yurinmds</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="action-arrow" />
          </div>

          <div class="contact-card" @click="openGitHub">
            <div class="icon-circle">
              <font-awesome-icon class="brand-size" icon="fa-brands fa-github" />
            </div>
            <div class="card-info">
              <span class="card-title">GitHub</span>
              <span class="card-desc">github.com/yurinogueira</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="action-arrow" />
          </div>

          <div class="contact-card" @click="sendToEmail">
            <div class="icon-circle">
              <font-awesome-icon class="brand-size" icon="fa-solid fa-at" />
            </div>
            <div class="card-info">
              <span class="card-title">E-mail Direto</span>
              <span class="card-desc">personal@yurinogueira.dev.br</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="action-arrow" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TechBackground from "../components/TechBackground.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    TechBackground,
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    openGitHub() {
      window.open("https://github.com/yurinogueira/", "_blank");
    },
    openLinkedIn() {
      window.open("https://www.linkedin.com/in/yurinmds/", "_blank");
    },
    sendToEmail() {
      window.open(
        "mailto:personal@yurinogueira.dev.br?subject=Oi!%20Vim%20pelo%20seu%20site!",
        "_blank"
      );
    },
  },
});
</script>

<style scoped>
.contact-page-wrapper {
  position: relative;
  min-height: 85vh;
  padding: 32px 16px 80px;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.top-nav {
  max-width: 760px;
  text-align: left;
  margin-bottom: 24px;
}

.back-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  padding: 10px 20px;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: rgba(0, 230, 118, 0.12);
  border-color: #00e676;
  color: #00e676;
}

.btn-icon {
  margin-right: 8px;
}

.name-box {
  max-width: 760px;
  text-align: center;
  margin-bottom: 40px;
}

.contact-badge {
  font-size: 12px;
  color: #00e676;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
}

.contact-title {
  font-size: 38px;
  color: #ffffff;
  margin: 0 0 12px 0;
  font-weight: 800;
}

.contact-subtitle {
  font-size: 17px;
  color: #94a3b8;
  margin: 0;
  line-height: 1.6;
}

.links-row {
  margin-bottom: 32px;
}

.contacts-box {
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  background: rgba(14, 18, 20, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.contact-card:hover {
  border-color: #00e676;
  background: rgba(0, 230, 118, 0.06);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 230, 118, 0.18);
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(0, 230, 118, 0.1);
  border: 1px solid rgba(0, 230, 118, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
}

.brand-size {
  font-size: 22px;
  color: #00e676;
}

.card-info {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
}

.card-desc {
  font-size: 13px;
  color: #94a3b8;
  font-family: monospace;
}

.action-arrow {
  color: #00e676;
  font-size: 16px;
  transition: transform 0.2s ease;
}

.contact-card:hover .action-arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .name-box,
  .top-nav,
  .contacts-box {
    max-width: 95%;
  }
  .contact-title {
    font-size: 28px;
  }
  .contact-card {
    padding: 14px 18px;
  }
}
</style>
