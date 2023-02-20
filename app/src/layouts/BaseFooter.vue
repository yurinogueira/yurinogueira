<template>
  <el-row class="footer-row" justify="center">
    <p class="footer-text">
      <el-row :gutter="12" justify="center">
        <el-col :xs="{span: 24}" :span="6">
          <el-button :onclick="openGitHub" class="button-size" round>
            <font-awesome-icon class="brand-size" icon="fa-brands fa-github"/>
            <b>GitHub</b>
          </el-button>
        </el-col>
        <el-col :xs="{span: 24}" :span="6">
          <el-button :onclick="openLinkedIn" class="button-size" round>
            <font-awesome-icon class="brand-size" icon="fa-brands fa-linkedin-in"/>
            <b>LinkedIn</b>
          </el-button>
        </el-col>
        <el-col :xs="{span: 24}" :span="6">
          <el-button :onclick="goToFalaTu" class="button-size" round>
            <font-awesome-icon class="brand-size" icon="fa-solid fa-address-book"/>
            <b>Contatos</b>
          </el-button>
        </el-col>
      </el-row>
      <br/>
      <br/>
      Copyright © 2022 <b>Yuri Nogueira Moreira da Silva</b>
    </p>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "BaseFooter",

  methods: {
    openGitHub() {
      window.open("https://github.com/yurinogueira/", "_blank");
    },
    openLinkedIn() {
      window.open("https://www.linkedin.com/in/yurinmds/", "_blank");
    },
    goToFalaTu() {
      this.$router.push({ path: "/fala-tu" });
    }
  }
})
</script>

<style scoped>
.el-col {
  margin-top: 8px;
}

.footer-row {
  background-color: #006928;
}

.footer-text {
  width: 1100px;
  margin-top: 48px;
  margin-bottom: 64px;
}

.button-size {
  height: 56px;
  width: 128px;
}

.brand-size {
  width: 48px;
  height: 32px;
}

@media (max-width: 1200px) {
  .footer-text {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .footer-text {
    width: 95%;
  }
  .button-size {
    width: 384px;
  }
}

@media (max-width: 416px) {
  .button-size {
    width: 256px;
  }
}
</style>