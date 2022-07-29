<template>
  <el-row class="footer-row" justify="center">
    <p class="footer-text">
      <el-row :gutter="12" justify="center">
        <el-col :xs="{span: 24}" :span="12">
          <el-button :onclick="openGitHub" class="button-size" round>
            <font-awesome-icon class="brand-size" icon="fa-brands fa-github"/>
            <b>GitHub</b>
          </el-button>
        </el-col>
        <el-col :xs="{span: 24}" :span="12">
          <el-button :onclick="openLinkedIn" class="button-size" round>
            <font-awesome-icon class="brand-size" icon="fa-brands fa-linkedin-in"/>
            <b>LinkedIn</b>
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
      window.open("https://www.linkedin.com/in/yuri-nogueira-moreira-da-silva/", "_blank");
    }
  }
})
</script>

<style scoped>
.footer-row {
  margin-top: 64px;
  background-color: #006928;
}

.footer-text {
  margin-top: 64px;
  margin-bottom: 64px;
}

.button-size {
  margin-top: 8px;
  height: 48px;
  width: 128px;
}

.brand-size {
  width: 48px;
  height: 32px;
}
</style>