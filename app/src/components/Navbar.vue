<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
    <router-link class="navbar-brand" to="/">Yuri Nogueira</router-link>
    <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="collapse navbar-collapse navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id="navbarScroll">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">Sobre</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>