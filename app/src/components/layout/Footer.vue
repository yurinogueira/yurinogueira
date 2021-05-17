<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <section class="border-bottom mt-3 pb-2 pt-3">
      <div class="container">
        <div class="row">
          <div class="collapse d-none d-lg-block col-sm">
            <span>Caso necessite de entrar em contato:</span>
          </div>

          <div class="col-sm">
            <a href="https://discordapp.com/users/228707634319065088" class="me-5 text-reset">
              <font-awesome-icon :icon="getFab('discord')"></font-awesome-icon>
            </a>
            <a href="https://facebook.com/yuri.resgatgames" class="me-5 text-reset">
              <font-awesome-icon :icon="getFab('facebook-f')"></font-awesome-icon>
            </a>
            <a href="https://twitter.com/yuri_nmds" class="me-5 text-reset">
              <font-awesome-icon :icon="getFab('twitter')"></font-awesome-icon>
            </a>
            <a href="https://www.linkedin.com/in/yuri-nogueira-moreira-da-silva-9132571bb/" class="me-5 text-reset">
              <font-awesome-icon :icon="getFab('linkedin')"></font-awesome-icon>
            </a>
            <a href="https://github.com/yurinogueira/" class="me-1 text-reset">
              <font-awesome-icon :icon="getFab('github')"></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container text-center text-md-start mt-2">
        <div class="row mt-3">
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <h6 class="text-uppercase fw-bold mb-4">
              <font-awesome-icon :icon="getFas('gem')"></font-awesome-icon>
              Yuri Nogueira
            </h6>
            <p>
              Olá, me chamo Yuri Nogueira Moreira da Silva. Sou estudante de Ciência
              da Computação e criei esse site para aprimorar meus conhecimentos e
              ajudar a quem conseguir :)
            </p>
          </div>

          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <h6 class="text-uppercase fw-bold mb-4">
              Projetos:
            </h6>
            <p>
              <a href="https://eterniaserver.com.br/" class="text-reset text-decoration-none">
                <font-awesome-icon :icon="getFas('cubes')"></font-awesome-icon>
                EterniaServer
              </a>
            </p>
            <p>
              <a href="" class="text-reset text-decoration-none">
                -
              </a>
            </p>
            <p>
              <a href="" class="text-reset text-decoration-none">
                -
              </a>
            </p>
          </div>

          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <h6 class="text-uppercase fw-bold mb-4">
              Interesses
            </h6>
            <p>
              <a href="https://linuxfoundation.org/" class="text-reset text-decoration-none">
                <font-awesome-icon :icon="getFab('linux')"></font-awesome-icon>
                Linux
              </a>
            </p>
            <p>
              <a href="https://openjdk.java.net/" class="text-reset text-decoration-none">
                <font-awesome-icon :icon="getFab('java')"></font-awesome-icon>
                Java
              </a>
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" class="text-reset text-decoration-none">
                <font-awesome-icon :icon="getFas('brain')"></font-awesome-icon>
                I.A.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center primary bg-dark p-3">
      <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">
        <img class="pb-2" alt="Licença Creative Commons" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"/>
      </a>
      <br/>
      Este obra de
      <a href="https://yurinogueira.dev.br"
         class="text-reset fw-bold text-decoration-none"
         property="cc:attributionName"
         rel="cc:attributionURL">Yuri Nogueira</a>
      está licenciado com uma Licença
      <a rel="license"
         class="text-reset fw-bold text-decoration-none"
         href="https://creativecommons.org/licenses/by-sa/4.0/">
        Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional</a>.
    </section>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinux, faJava, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGem, faCubes, faBrain } from '@fortawesome/free-solid-svg-icons';

library.add(
    faFacebookF, faTwitter, faLinkedin,
    faGithub, faGem, faCubes, faLinux,
    faJava, faBrain, faDiscord
);

export default {
  name: "Footer",

  methods: {
    getFab(iconName) {
      return { prefix: 'fab', iconName: iconName };
    },
    getFas(iconName) {
      return { prefix: 'fas', iconName: iconName };
    }
  },
}
</script>
