<template>
  <el-row justify="center">
    <el-col class="name-box" :span="24">
      <h1>Yuri Nogueira</h1>
      <p>
        Gostaria de bater um papo comigo?
      </p>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col class="contacts-box" :span="24">
      <el-button :onclick="downloadCurriculum" type="success" round>
        <font-awesome-icon class="brand-size" icon="fa-solid fa-download"/>
        <b>Curriculum</b>
      </el-button>
    </el-col>
    <el-col class="contacts-box" :span="24">
      <el-button :onclick="openLinkedIn" type="success" round>
        <font-awesome-icon class="brand-size" icon="fa-brands fa-linkedin-in"/>
        <b>LinkedIn</b>
      </el-button>
    </el-col>
    <el-col class="contacts-box" :span="24">
      <el-button :onclick="openGitHub" type="success" round>
        <font-awesome-icon class="brand-size" icon="fa-brands fa-github"/>
        <b>GitHub</b>
      </el-button>
    </el-col>
    <el-col class="contacts-box" :span="24">
      <el-button :onclick="sendToEmail" type="success" round>
        <font-awesome-icon class="brand-size" icon="fa-solid fa-at"/>
        <b>E-mail</b>
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
    name: "ContactPage",

    methods: {
        downloadCurriculum() {
            window.open("/docs/curriculum-pt.pdf", "_blank",);
        },
        openGitHub() {
            window.open("https://github.com/yurinogueira/", "_blank");
        },
        openLinkedIn() {
            window.open("https://www.linkedin.com/in/yurinmds/", "_blank");
        },
        sendToEmail() {
            window.open("mailto:yurinogueira@id.uff.br?subject=Oi!%20vim%20pelo%20seu%20site!", "_blank");
        }
    },
}
</script>

<style scoped>
.name-box {
  width: 1100px;
}

.brand-size {
  width: 48px;
  margin-right: 8px;
  height: 32px;
}

.el-row {
  margin-bottom: 64px;
}

.contacts-box {
  width: 1100px;
  margin-top: 8px;
  margin-bottom: 32px;
}

.el-button {
  height: 56px;
  width: 768px;
  font-size: 40px;
}

@media (max-width: 1200px) {
  .el-button {
    width: 512px;
  }
  .name-box {
    width: 80%;
  }
  .contacts-box {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .el-button {
    width: 384px;
  }
  .name-box {
    width: 95%;
  }
  .contacts-box {
    width: 95%;
  }
}

@media (max-width: 416px) {
  .el-button {
    width: 256px;
  }
}
</style>
