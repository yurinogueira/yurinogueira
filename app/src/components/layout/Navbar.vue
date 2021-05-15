<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="nav-item">
      <router-link class="secondary primary nav-link" to="/">
        Yuri Nogueira
      </router-link>
    </div>
    <button class="me-2 navbar-toggler mt-auto mb-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="size navbar-toggler-icon"></span>
    </button>
    <ul class="collapse navbar-collapse navbar-nav mt-auto mb-auto navbar-nav-scroll" id="navbarScroll">
      <li class="nav-item">
        <router-link class="secondary nav-link" to="/sobre">Sobre</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>
