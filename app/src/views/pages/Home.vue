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
          <el-col class="intern-card el-col-lg-4 el-col-sm-8 el-col-xs-12">
            <el-avatar
              :size="200"
              :src="profilePicture.default"
            />
          </el-col>
          <el-col class="intern-card el-col-lg-4 el-col-sm-8 el-col-xs-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin id nulla quis ex facilisis ullamcorper.
            Curabitur vestibulum sapien sollicitudin lectus egestas, ultricies euismod dolor lobortis.
            Cras congue orci eget ante pellentesque feugiat.
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
  margin-top: 20px;
}
.intern-card {
  width: 200px;
  font-size: 16px;
}
</style>
