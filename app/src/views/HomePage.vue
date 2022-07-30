<template>
  <el-row justify="center">
    <el-col class="title-box" :span="24">
      <h1>Desenvolvedor Back-End, Estudante & Pai</h1>
      <p>
        <q>Trabalhe com o que você ama e nunca mais precisará trabalhar na vida.</q>
        <br/>
        <cite>Confúcio</cite>
      </p>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-image class="home-image" alt="Imagem de Fundo" :src="backHomeImage.default"></el-image>
  </el-row>
  <el-row class="about" justify="center">
    <p class="text-box">
      <b>Fala tu! Me chamo Yuri Nogueira, prazer em te conhecer!</b>
      <br/>
      <br/>
      Um desenvolvedor Back-End especializado em orientação a objetos.
      Sempre fascinado a aprender, naturalmente curioso, bastante agitado e bem
      confiante sobre minha capacidade.
    </p>
  </el-row>
  <el-row class="cards-row" justify="center">
    <about-cards></about-cards>
  </el-row>
  <el-row justify="center">
    <p class="text-box">
      <b>Opa quer conhecer mais sobre mim?</b>
      <br/>
      <br/>
      Veja um pouco sobre alguns dos projetos em que eu estive envolvido.
      Possuo um carinho especial por todos eles. Veja um pouco sobre, talvez
      você possa achar algo de seu interesse.
    </p>
  </el-row>
  <el-row justify="center">
    <projects></projects>
  </el-row>
</template>

<script lang="ts">
import * as BackHomeImage from "../assets/backHomeImage.webp";

export default {
  name: "Home",

  data() {
    return {
      backHomeImage: BackHomeImage
    }
  },
}

</script>

<style scoped>

h1 {
  font-size: 28px;
}

p {
  margin-top: -16px;
  font-size: 20px;
}

.about {
  background-color: #006928;
}

.about p {
  margin-top: 80px;
  margin-bottom: 144px;
}

.about p b {
  margin-top: 64px;
  margin-bottom: 64px;
  font-size: 24px;
}

.cards-row {
  margin-top: -96px;
  margin-bottom: 64px;
}

.title-box {
  width: 1100px;
}

.text-box {
  width: 1100px;
}

.home-image {
  width: 1100px;
}

@media (max-width: 1200px) {
  .text-box {
    width: 80%;
  }
  .title-box {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .text-box {
    width: 95%;
  }
  .title-box {
    width: 95%;
  }
}

</style>
