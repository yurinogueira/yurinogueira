<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-tabs v-model="menuChoice">
          <el-tab-pane
            label="Início"
            name="home"
          />
          <el-tab-pane
            label="Contato"
            name="contact"
          />
          <el-tab-pane
            label="Projetos"
            name="projects"
          />
          <el-tab-pane
            label="Alterações"
            name="changelog"
          />
        </el-tabs>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <div class="footer-content">
          <el-row :gutter="10">
            <el-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
            >
              <font-awesome-icon :icon="getFas('gem')" />
              Contatos
              &nbsp;
              <a
                href="https://discordapp.com/users/228707634319065088"
                class="me-5 text-reset"
              >
                <font-awesome-icon :icon="getFab('discord')" />
              </a>
              &nbsp;
              <a
                href="https://facebook.com/yuri.resgatgames"
                class="me-5 text-reset"
              >
                <font-awesome-icon :icon="getFab('facebook-f')" />
              </a>
              &nbsp;
              <a
                href="https://twitter.com/yuri_nmds"
                class="me-5 text-reset"
              >
                <font-awesome-icon :icon="getFab('twitter')" />
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/yuri-nogueira-moreira-da-silva-9132571bb/"
                class="me-5 text-reset"
              >
                <font-awesome-icon :icon="getFab('linkedin')" />
              </a>
              &nbsp;
              <a
                href="https://github.com/yurinogueira/"
                class="me-1 text-reset"
              >
                <font-awesome-icon :icon="getFab('github')" />
              </a>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col
              class="padding-on-top"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="12"
              :xl="12"
            >
              <font-awesome-icon :icon="getFas('gem')" />
              Projetos
              <el-divider />
              <font-awesome-icon :icon="getFas('cubes')" />
              EterniaServer
              <el-divider />
              <font-awesome-icon :icon="getFas('mobile')" />
              UFFC
            </el-col>
            <el-col
              class="padding-on-top"
              :xs="24"
              :sm="24"
              :md="12"
              :lg="12"
              :xl="12"
            >
              <font-awesome-icon :icon="getFas('gem')" />
              Interesses
              <el-divider />
              <font-awesome-icon :icon="getFab('java')" />
              Java
              <el-divider />
              <font-awesome-icon :icon="getFab('python')" />
              Python
            </el-col>
          </el-row>
          <el-row
            class="padding-on-top"
            :gutter="10"
          >
            <el-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
            >
              <a
                rel="license"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
              ><img
                alt="Licença Creative Commons"
                src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
              ></a>
              <br>
              Este obra de
              <a
                href="https://yurinogueira.dev.br"
                property="cc:attributionName"
                rel="cc:attributionURL"
              >Yuri Nogueira</a> está licenciado com uma Licença
              <a
                rel="license"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
              >Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional</a>.
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faJava, faDiscord, faFacebookF, faPython} from '@fortawesome/free-brands-svg-icons';
import {faGem, faCubes, faBrain, faMobile} from '@fortawesome/free-solid-svg-icons';

library.add(
    faGem, faCubes, faPython, faDiscord,
    faTwitter, faLinkedin, faGithub,
    faJava, faBrain, faMobile, faFacebookF
);

export default {
  data() {
    return {
      menuChoice: 'home'
    };
  },

  watch: {
    menuChoice: function (value) {
      this.$router.push({name: value});
    }
  },

  methods: {
    getFab(iconName) {
      return {prefix: 'fab', iconName: iconName};
    },
    getFas(iconName) {
      return {prefix: 'fas', iconName: iconName};
    }
  }
};
</script>

<style scoped>
.el-footer {
  padding: 0 0 0 0;
}

.el-divider {
  margin: 10px 0 10px 0;
}

.padding-on-top {
  padding: 25px 0 0 0;
}

.footer-content {
  background-color: whitesmoke;
  padding: 10px 10px 10px 10px;
}

a:hover {
  color: #5cd85a;
}
</style>