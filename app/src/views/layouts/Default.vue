<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-tabs v-model="menuChoice">
          <el-tab-pane
            label="Início"
            name="home"
          />
          <el-tab-pane
            label="Contato"
            name="contact"
          />
          <el-tab-pane
            label="Projetos"
            name="projects"
          />
          <el-tab-pane
            label="Alterações"
            name="changelog"
          />
        </el-tabs>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuChoice: 'home'
    };
  },

  watch: {
    menuChoice: function(value) {
      this.$router.push({name: value});
    }
  }
};
</script>

<style scoped>

</style>