<template>
  <div class="home">
    <Navbar></Navbar>
    <article>
      <div class="card m-3">
        <section class="row">
          <div class="col-sm">
            <img alt="Vue logo" height="200" width="200" src="../assets/logo.png">
          </div>
          <div class="col-sm mt-auto mb-auto p-4">
            Este <strong class="text-success">site</strong> e todos outros projetos de minha autoria
            são de código aberto e podem ser acessados pelo <strong>GitHub</strong>,
            sinta-se livre para enviar melhorias ou para utilizar
            como base para projetos pessoais, mas não se esqueça de informar os devidos créditos.
          </div>
        </section>
      </div>
    </article>
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
