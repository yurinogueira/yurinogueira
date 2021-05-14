<template>
  <div class="about">
    <Navbar></Navbar>
    <h1>This is an about page</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default {
  name: 'About',

  components: {
    Navbar,
    Footer
  },
}
</script>
