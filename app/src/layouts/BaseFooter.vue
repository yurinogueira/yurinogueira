<template>
  <footer class="footer-wrapper">
    <div class="footer-container">
      <div class="buttons-group">
        <a
          href="https://github.com/yurinogueira/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link-btn"
        >
          <font-awesome-icon class="brand-icon" icon="fa-brands fa-github" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/yurinmds/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link-btn"
        >
          <font-awesome-icon class="brand-icon" icon="fa-brands fa-linkedin-in" />
          <span>LinkedIn</span>
        </a>

        <router-link to="/fala-tu" class="footer-link-btn">
          <font-awesome-icon class="brand-icon" icon="fa-solid fa-address-book" />
          <span>Contatos</span>
        </router-link>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          Copyleft 🄯 {{ currentYear }} <b>Yuri Nogueira Moreira da Silva</b>
        </p>
        <span class="role-caption">Engenheiro de Software</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped>
.footer-wrapper {
  background: #090c0e;
  border-top: 1px solid rgba(0, 230, 118, 0.15);
  position: relative;
  z-index: 10;
  padding: 48px 24px 36px;
}

.footer-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.footer-link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 44px;
  padding: 0 24px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-link-btn:hover {
  background: rgba(0, 230, 118, 0.1);
  border-color: #00e676;
  color: #00e676;
  box-shadow: 0 0 20px rgba(0, 230, 118, 0.25);
  transform: translateY(-2px);
}

.brand-icon {
  font-size: 16px;
  line-height: 1;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 24px;
  width: 100%;
}

.copyright {
  color: #94a3b8;
  font-size: 14px;
  margin: 0 0 6px 0;
}

.copyright b {
  color: #f1f5f9;
}

.role-caption {
  font-size: 12px;
  color: #00e676;
  font-family: monospace;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .buttons-group {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
  .footer-link-btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>