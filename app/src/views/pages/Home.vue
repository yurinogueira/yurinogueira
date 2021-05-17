<template>
  <div class="home">
    <Navbar></Navbar>
    <article class="container">
      <section class="mt-5 mb-5">
        <div class="row">
          <div class="col-sm">
            <img alt="logo" height="200" width="200" src="../../assets/logo.png">
          </div>

          <div class="col-sm mt-auto mb-auto p-4">
            Este <strong class="text-success">site</strong> e todos outros projetos de minha autoria
            são de código aberto e podem ser acessados pelo <strong>GitHub</strong>,
            sinta-se livre para enviar melhorias ou para utilizar
            como base para projetos pessoais, mas não se esqueça de informar os devidos créditos
          </div>
        </div>
      </section>

      <section class="mt-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="card col-sm d-block">
              <img alt="IEEE 754" width="200" height="200" src="../../assets/ieee754.png">
              <h5 class="card-title">Ponto Flutuante</h5>
              <p class="card-text">
                Possui dúvidas em Ponto Flutuante? Não se desespere,
                isso é normal, clique no botão abaixo, talvez isso
                possa te ajudar <span class="secondary">:)</span>
              </p>
              <router-link to="/ieee754" tag="button" type="button" class="btn btn-outline-success w-100 mb-2">
                Acessar
              </router-link>
            </div>

            <div class="col-sm-1"></div>

            <div class="card col-sm d-block">
              <img alt="Conversões de Bases" width="200" height="200" src="../../assets/base-convertion.png">
              <h5 class="card-title">Conversões de Bases</h5>
              <p class="card-text">
                Acha que errou alguma coisa na hora de alterar a
                base de um número? Acho que vale apena você dá
                uma verificada, não custa nada
              </p>
              <router-link to="/" tag="button" type="button" class="btn btn-outline-success w-100 mb-2">
                Acessar
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default {
  name: 'Home',

  components: {
    Navbar,
    Footer
  },
}
</script>
