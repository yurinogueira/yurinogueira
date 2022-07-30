<template>
  <el-tabs v-model="activeName" class="projects-tab" @tab-click="handleClick">
    <el-tab-pane v-for="project in projectsData" :name="project.name">
      <template #label><span class="project-label"><b>{{ project.label }}</b></span></template>
      <el-row class="project-tab-row" :gutter="12">
        <el-col :md="{span: 12}" :span="24">
          <p>{{project.description}}</p>
          <div v-if="project.links" v-for="link in project.links">
            <br/>
            <el-link :href="link.url" target="_blank">
              {{ link.name }}
            </el-link>
          </div>
        </el-col>
        <el-col :md="{span: 12}" :span="24">
          <el-image class="cards-logo" :alt="project.image.alt" :src="project.image.src"></el-image>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import projectsJson from "../assets/projects.json";

export default defineComponent({
  name: "Projects",
  data() {
    return {
      activeName: ref("Expeer"),
      projectsData: projectsJson
    }
  },
  methods: {
    handleClick(tab: TabsPaneContext, event: Event) {
      console.log(tab, event)
    }
  }
});
</script>

<style scoped>

.el-image {
  margin-top: 64px;
}

p {
  font-size: 18px;
}

.el-link {
  font-size: 26px;
}

.projects-tab {
  width: 1100px;
  margin-bottom: -6px;
}

.project-label {
  font-size: 16px;
  color: antiquewhite;
}

@media (max-width: 1200px) {
  .projects-tab {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .projects-tab {
    width: 95%;
  }
}

</style>
