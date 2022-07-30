<template>
  <el-row justify="center">
    <el-row class="header-row" justify="space-between">
      <el-col :span="4">
        <el-image alt="Logo" :src="siteLogo.default"></el-image>
      </el-col>
      <el-col :span="4">
        <el-button type="success" round plain>Fala Tu</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import * as Logo from "../assets/logo.webp";

export default defineComponent({
  name: "BaseHeader",
  data() {
    return {
      siteLogo: Logo
    }
  },
})
</script>

<style scoped>
.header-row {
  width: 1100px;
  margin-bottom: 8px;
}

.el-image {
  width: 72px;
  float: left;
}

.el-button {
  margin-top: 20px;
  width: 32px;
  float: right;
  margin-right: 8px;
}

@media (max-width: 1200px) {
  .header-row {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .header-row {
    width: 95%;
  }
}

</style>