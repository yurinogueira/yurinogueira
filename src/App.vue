<template>
  <div>
    <router-view></router-view>
    <loading :show="loading" :label="label"></loading>
  </div>

</template>

<script>

import Loading from "vue-full-loading";
import events from "./events";

export default {
  data (){
    return {
      loading: false,
      label: 'Carregando ...'
    }
  },

  components: {Loading},
  mounted(){
    events.$on('loading', this.showLoading);
    events.$on('unloading', this.unShowLoading);
  },
  methods: {
    showLoading (){
      this.loading = true;
    },
    unShowLoading(){
      this.loading = false;
    }
  }
}
</script>

<style>
* {
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>