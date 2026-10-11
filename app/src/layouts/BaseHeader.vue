<template>
  <el-row justify="center" class="header-container">
    <el-row class="header-row" justify="space-between" align="middle">
      <el-col :span="8" class="logo-col">
        <router-link to="/" class="brand-link">
          <el-image
            alt="Logo Yuri Nogueira"
            :src="siteLogo.default"
            draggable="false"
            class="site-logo"
          />
          <span class="brand-name">Yuri Nogueira</span>
        </router-link>
      </el-col>
      <el-col :span="16" class="nav-col">
        <router-link to="/" class="nav-link">Início</router-link>
        <router-link to="/fala-tu" class="fala-tu-link">
          FALA TU
        </router-link>
      </el-col>
    </el-row>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as Logo from "../assets/logo.webp";

export default defineComponent({
  name: "BaseHeader",
  data() {
    return {
      siteLogo: Logo,
    };
  },
});
</script>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 15, 17, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 230, 118, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.header-row {
  width: 1100px;
  height: 72px;
}

.logo-col {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.site-logo {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 230, 118, 0.3);
  transition: transform 0.2s ease;
}

.brand-link:hover .site-logo {
  transform: rotate(5deg) scale(1.05);
}

.brand-name {
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.2px;
}

.nav-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
}

.nav-link {
  color: #cbd5e0;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #00e676;
}

.fala-tu-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #00c853;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 22px;
  border-radius: 9999px;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.fala-tu-link:hover {
  background-color: #00e676;
  box-shadow: 0 0 16px rgba(0, 230, 118, 0.4);
  transform: translateY(-1px);
  color: #ffffff;
}

@media (max-width: 1200px) {
  .header-row {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .header-row {
    width: 95%;
  }
  .brand-name {
    display: none;
  }
}
</style>