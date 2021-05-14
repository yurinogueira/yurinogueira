<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-none d-lg-block">
        <span>Caso necessite de entrar em contato, segue meus canais:</span>
      </div>

      <div>
        <a href="https://facebook.com/yuri.resgatgames" class="me-5 text-reset">
          <font-awesome-icon :icon="getFab('facebook-f')"></font-awesome-icon>
        </a>
        <a href="https://twitter.com/yuri_nmds" class="me-5 text-reset">
          <font-awesome-icon :icon="getFab('twitter')"></font-awesome-icon>
        </a>
        <a href="https://www.linkedin.com/in/yuri-nogueira-moreira-da-silva-9132571bb/" class="me-5 text-reset">
          <font-awesome-icon :icon="getFab('linkedin')"></font-awesome-icon>
        </a>
        <a href="https://github.com/yurinogueira/" class="me-4 text-reset">
          <font-awesome-icon :icon="getFab('github')"></font-awesome-icon>
        </a>
      </div>
    </section>

    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <font-awesome-icon :icon="getFas('gem')"></font-awesome-icon>
              Yuri Nogueira
            </h6>
            <p>
              Olá me chamo Yuri Nogueira Moreira da Silva, sou estudante de Ciência
              da Computação e criei esse site para aprimorar meus conhecimentos. e
              ajudar a quem conseguir :)
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
            <p>
              <a href="" class="text-reset text-decoration-none">
                -
              </a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Interesses
            </h6>
            <p>
              <a href="https://en.wikipedia.org/wiki/Back_end" class="text-reset text-decoration-none">
                <font-awesome-icon :icon="getFas('server')"></font-awesome-icon>
                Backend
              </a>
            </p>
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

    <section class="text-center primary bg-dark p-4">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://yurinogueira.dev.br/">yurinogueira.dev.br</a>
    </section>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faLinkedin, faGithub, faLinux, faJava } from '@fortawesome/free-brands-svg-icons'
import { faGem, faCubes, faServer, faBrain } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faTwitter, faLinkedin, faGithub, faGem, faCubes, faServer, faLinux, faJava, faBrain)

export default {
  name: "Footer",

  methods: {
    getFab(iconName) {
      return { prefix: 'fab', iconName: iconName }
    },
    getFas(iconName) {
      return { prefix: 'fas', iconName: iconName }
    }
  },
}
</script>
