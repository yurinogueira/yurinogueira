<template>
    <el-row class="top-row" justify="center">
        <el-avatar :size="300" :src="image.default" />
    </el-row>
    <el-row justify="center">
        <h1>Yuri Nogueira</h1>
    </el-row>
</template>

<script lang="ts">
import * as ProfileImage from '../assets/logo.png';
export default {
    data() {
        return {
            image: ProfileImage
        }
    }
}
</script>

<style scoped>
.top-row {
    margin-top: 10px;
}
</style>
