<template>
  <base-header></base-header>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
  <base-footer></base-footer>
</template>


<script>
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";

import ptBr from "element-plus/lib/locale/lang/pt-br";
import BaseHeader from "~/layouts/BaseHeader.vue";
import BaseFooter from "~/layouts/BaseFooter.vue";

export default defineComponent({
  components: {
    BaseHeader,
    BaseFooter,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: ptBr,
    }
  },
})
</script>

<style>
html, body {
  background-color: #0a0a0a;
}

#app {
  text-align: center;
  color: antiquewhite;
}

a {
  text-decoration: none;
}
</style>
