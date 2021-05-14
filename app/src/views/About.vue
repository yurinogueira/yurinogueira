<template>
  <div class="about">
    <Navbar></Navbar>
    <h1>This is an about page</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'About',

  components: {
    Navbar,
    Footer
  },
}
</script>
