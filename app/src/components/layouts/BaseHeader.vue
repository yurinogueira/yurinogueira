<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1">
      <RouterLink to="/">Início</RouterLink>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Projetos</template>
      <el-menu-item index="2-1">
        <RouterLink to="/mic1">Simulador Mic1</RouterLink>
      </el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>
