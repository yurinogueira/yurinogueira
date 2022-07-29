<template>
  <el-row justify="space-between">
    <el-col :span="12">
      <el-image style="width: 72px" :src="siteLogo.default"></el-image>
    </el-col>
    <el-col :span="12" class="fala-tu-button">
      <el-button type="success" round plain>
        Fala Tu
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import * as Logo from "../assets/logo.png";

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
.fala-tu-button {
  margin-top: 20px;
}
</style>