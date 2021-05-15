<template>
  <div class="about">
    <Navbar></Navbar>
    <article class="container">
      <section class="mt-5 mb-5">
        <div class="row">
          <div class="col-sm">
            <img alt="logo" height="200" width="200" src="../assets/logo.png">
          </div>

          <div class="col-sm mt-auto mb-auto p-4">
            Antes de tudo, só para deixar mais claro do que já está,
            a logo do site é baseada na logo do
            <strong class="text-success">VueJs</strong> e isso é uma
            referência ao site ser feito em
            <strong class="text-success">VueJs</strong>
          </div>
        </div>
      </section>

      <hr>

      <section class="mt-5 mb-5">
        <div class="row">
          <div class="col-sm">
            <p>
              Agora deixe-me explicar o que eu pretendo realizar neste site.
              Irei utiliza-lo para além de praticar tentar ajudar outras
              pessoas na área de Arquiteturas de Computadores. Para isso
              irei procurar atualizar o site de tempos em tempos para
              adicionar novas funcionalidades que possam contribuir para a
              aprendizagem nessa área
            </p>
            <p>
              Segue abaixo alguns dos projetos que desejo implementar.
              Após esses projetos serem concluídos eu irei adicionar
              novos.
            </p>
          </div>
        </div>

        <hr>

        <div class="row">
          <div class="col-sm">
            <div class="card-header text-danger h4">Conversor de Bases</div>
            <div class="card-body">
              <p>
                Um converso entre bases que mostre o que está sendo feito e
                informe as etapas para realizar a conversão
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="card-header text-danger h4">Ponto Flutuante</div>
            <div class="card-body">
              <p>
                Por possuir uma complexidade um pouco maior ele será separado
                do Converso de Bases.
              </p>
            </div>
          </div>
          <div class="col-sm">
            <div class="card-header text-danger h4">Macro Instruções</div>
            <div class="card-body">
              <p>
                Diferente dos anteriores esse "programa" não tem o objetivo
                de produzir código, mas sim de ensinar as instruções.
              </p>
            </div>
          </div>
        </div>

        <hr>

      </section>
    </article>
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
