<template>
  <el-row :gutter="20">
    <el-col align="center">
      <label class="title">
        Yuri Nogueira
      </label>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col align="center">
      <el-card
        class="about"
        shadow="off"
      >
        <el-row
          :gutter="20"
          justify="center"
        >
          <el-col class="intern-card el-col-md-6 el-col-sm-8 el-col-xs-24">
            <el-avatar
              :size="200"
              :src="profilePicture.default"
            />
          </el-col>
          <el-col class="intern-card el-col-md-6 el-col-sm-8 el-col-xs-24">
            Olá! Meu nome você já sabe, sou <strong>desenvolvedor</strong>,
            <strong>estudante</strong> e <strong>pai</strong> <s>eta</s>.
            <hr>
            Sou fascinado por desenvolvimento Back-End e por linguagens POO
            <s>e fortemente tipadas</s>.
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
const profilePicture = require('../../assets/duo_color_small_compress_quad.png')

export default {
  name: 'Home',

  data() {
    return {
      profilePicture
    }
  }
}
</script>
<style scoped>
.about {
  margin-top: 30px;
}
.intern-card {
  width: 200px;
  height: auto;
  font-size: 16px;
  padding-top: 10px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
