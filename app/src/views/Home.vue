<template>
  <div class="home">
    <Navbar></Navbar>
    <img alt="Vue logo" src="../assets/logo.png">
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'Home',

  components: {
    Navbar,
    Footer
  },
}
</script>
