<template>
  <div class="home">
    <Navbar></Navbar>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'Home',

  components: {
    Navbar
  },
}
</script>
