<template>
  <router-view></router-view>
</template>

<style>
* {
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.secondary {
  color: darkgray !important;
  font-weight: bolder !important;
}

.secondary:hover {
  color: royalblue !important;
}

.primary {
  color: lightgray !important;
}

.primary:hover {
  color: mediumspringgreen !important;
}
</style>
