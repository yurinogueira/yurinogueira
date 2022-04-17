<template>
    <el-row justify="center">
        <el-col>
            <el-avatar :size="200" :src="image.default" />
        </el-col>
        <el-col>
            <WelcomeTitle msg="Yuri Nogueira" />
        </el-col>
    </el-row>
</template>

<script lang="ts">
import * as ProfileImage from '../assets/logo.png';
export default {
    data() {
        return {
            image: ProfileImage
        };
    }
}
</script>
