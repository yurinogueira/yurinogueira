<template>
  <el-row class="cards-container" :gutter="12">
    <el-col class="backend-card" :md="{span: 8}" :span="24">
      <el-image class="cards-logo" alt="Icone Desenvolvedor Back-End" :src="terminalIcon.default"></el-image>
      <h2 class="cards-title">Desenvolvedor Back-End</h2>
      <p class="cards-text">
        <br/>
        Aprecio uma estrutura bem feita e um código simples sempre tendo
        em mente explicito é melhor que implicito.
      </p>
    </el-col>
    <el-col class="student-card" :md="{span: 8}" :span="24">
      <el-image class="cards-logo" alt="Icone Estudante" :src="bookIcon.default"></el-image>
      <h2 class="cards-title">Estudante</h2>
      <p class="cards-text">
        <br/>
        <q>O mais sábio é aquele que sabe que não sabe.</q> <cite>Sócrates</cite>
        <br/>
        Levo isso para a vida e procuro sempre aprender algo novo.
      </p>
    </el-col>
    <el-col class="father-card" :md="{span: 8}" :span="24">
      <el-image class="cards-logo" alt="Icone Pai" :src="fatherIcon.default"></el-image>
      <h2 class="cards-title">Pai</h2>
      <p class="cards-text">
        <br/>
        Ser pai é desafiador, é necessário ter responsabilidade e esse é
        um ponto extremamente importante! Acima de tudo prezo por cumprir
        minhas responsabilidades.
      </p>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import * as TerminalIcon from "../assets/terminalIcon.webp";
import * as BookIcon from "../assets/bookIcon.webp";
import * as FatherIcon from "../assets/fatherIcon.webp";

export default defineComponent({
  name: "AboutCards",
  data() {
    return {
      terminalIcon: TerminalIcon,
      bookIcon: BookIcon,
      fatherIcon: FatherIcon,
    }
  },
})
</script>

<style scoped>

.cards-container {
  width: 1000px;
  background-color: #0a0a0a;
  border-radius: 20px;
  border: 1px solid #1d1e1f;
}

.cards-logo {
  width: 72px;
  margin-top: 32px;
}

.cards-text {
  font-size: 16px;
}

.cards-title {
  font-size: 20px;
}

.backend-card {
  width: 100%;
}

.student-card {
  width: 100%;
  border-left: 1px solid #1d1e1f;
}

.father-card {
  width: 100%;
  border-left: 1px solid #1d1e1f;
}

@media (max-width: 1200px) {
  .cards-container {
    width: 80%;
  }
}

@media (max-width: 991px) {
  .student-card {
    border-top: 1px solid #1d1e1f;
    border-left: 0;
  }
  .father-card {
    border-top: 1px solid #1d1e1f;
    border-left: 0;
  }
  .cards-container {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .cards-container {
    width: 95%;
  }
}

</style>
