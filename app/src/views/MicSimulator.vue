<template>
    <el-row justify="center">
        <h1>Simulador MIC-1</h1>
    </el-row>
    <el-row justify="center">
        <el-card style="width: 80%;">
            <el-row justify="center">
                <MicLine v-for="i in lineAmount" v-bind:key="i" />
            </el-row>
            <el-row class="top-row" justify="center">
                <el-button type="primary" @click="++lineAmount" :icon="buttonEdit" circle />
                <el-button type="success" :icon="buttonRun" circle />
                <el-button type="danger" @click="--lineAmount" :icon="buttonDanger" circle />
            </el-row>
        </el-card>
    </el-row>
</template>

<script lang="ts">
import { Check, Edit, Delete } from '@element-plus/icons-vue';

export default {
    data: function() {
        return {
            buttonRun: Check,
            buttonEdit: Edit,
            buttonDanger: Delete,
            lineAmount: 1,
        }
    },
}
</script>

<style scoped>
.top-row {
    margin-top: 10px;
}
</style>
