<template>
  <div class="about">
    <Navbar></Navbar>
    <article class="container">
      <section class="mt-5 mb-5">
        <div class="row">
          <div class="col-sm">
            <img alt="IEEE754" height="200" width="200" src="../../assets/ieee754.png">
          </div>

          <div class="col-sm mt-auto mb-auto p-4">
            Não utilize essa ferramenta com o objetivo de conseguir
            um <strong class="text-success">resultado</strong>, mas
            sim com o objetivo de compreender esse
            <strong class="text-success">resultado</strong>.
          </div>
        </div>
      </section>

      <hr>

      <section class="mt-5 mb-5">
        <div class="row">
          <div class="col-sm">
            Insira abaixo o valor em <strong class="text-success">decimal</strong>:
          </div>
        </div>
        <div class="row">
          <input class="me-auto ms-auto mb-2 w-50" v-model="number" type="text">
        </div>
        <div class="row">
          <button type="button" class="btn btn-outline-success me-auto ms-auto mb-2 w-50" @click="confirm()">
            Confirmar
          </button>
        </div>

        <div v-show="is_confirmed">
          <div class="w-75 container">
            <hr>
            A primeira coisa que devemos fazer é separar a parte fracional da parte decimal do número
            para facilitarmos o nosso trabalho.
            <br>
            Decimal: <strong class="text-success">{{sign}}{{decimal}}</strong>
            <br>
            Fracional: <strong class="text-success">0,{{fractional}}</strong>

            <hr>
            Agora vamos converter para binário, como vocês estão com dúvidas em Ponto Flutuante
            acredito que já saibam como realizar essa conversão, então irei simplesmente converter
            direto.
            <br>
            <strong class="text-success">{{sign}}{{decimal}}</strong><strong>(10)</strong>
            ==
            <strong class="text-success">{{bin_decimal}}</strong><strong>(2)</strong>
            <br>
            <strong class="text-success">{{sign}}0,{{fractional}}</strong><strong>(10)</strong>
            ==
            <strong class="text-success">0,{{bin_fractional}}</strong><strong>(2)</strong>
            <br>
            Alguns números não são perfeitamente convertiveis para binário, por isso eu converti
            a nossa mantissa até chegar em <strong>23</strong> casas (a parte fracionária).
            <br>
            O resultado final foi: <strong class="text-success">{{sign}}{{bin_decimal}},{{bin_fractional}}</strong>.

            <hr>
            Agora vamos passar isso para notação cientifica em base 2. Para isso só precisamos
            mover a vírgula. Assim o resultado foi:
            <br>
            <strong class="text-success">
              {{sign}}{{cientificNotation.decimal}},{{cientificNotation.fractional}} x 2^{{cientificNotation.exponent}}
            </strong>

            <hr>
            Caso você chegou até aqui compreendendo tudo sem problemas, parabéns! Agora é só finalizarmos.
            <br>
            O bit de sinal é simples, se o número é positivo o bit é <strong>0</strong>, se é negativo o
            bit é <strong>1</strong>.
            <br>
            O nosso fica: <strong class="text-success">{{ieee754.sign}}</strong>
            <br>
            O expoente é calculado no padrão <strong>Excesso de 127</strong>, logo é só somar 127 e converter
            para binário.
            <br>
            O nosso fica: <strong class="text-success">{{ieee754.exponent}}</strong>
            <br>
            E a mantissa é a parte fracionária do número.
            <br>
            O nosso fica: <strong class="text-success">{{ieee754.mantissa}}</strong>

            <hr>
            Agora só precisamos juntar esses 3 resultados e nós possuimos nosso número convertido para
            <strong>Ponto Flutuante</strong>.
            <br>
            <strong class="text-success">{{ieee754.sign}} {{ieee754.exponent}} {{ieee754.mantissa}}</strong>
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
  name: 'IEEE754',

  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      sign: '',
      number: '',
      decimal: 0,
      bin_decimal: '',
      fractional: 0,
      bin_fractional: '',
      cientificNotation: {
        decimal: '',
        fractional: '',
        exponent: '0'
      },
      ieee754: {
        sign: '',
        exponent: '',
        mantissa: ''
      },
      ready: false
    }
  },

  computed: {
    is_confirmed() {
      return this.ready;
    }
  },

  methods: {
    confirm() {
      const splited = this.number.includes(',') ? this.number.split(",") : this.number.split(".");
      this.sign = splited[0].charAt(0) === '+' || splited[0].charAt(0) === '-' ? splited[0].charAt(0) : '';
      this.decimal = this.sign === '' ? splited[0] : splited[0].substring(1);
      this.bin_decimal = (this.decimal >>> 0).toString(2);
      this.fractional = splited[1];
      this.fractionalPart();
      this.ready = true;
    },

    fractionalPart() {
      let temp = parseFloat("0." + this.fractional);
      this.bin_fractional = '';
      for (let i = 0; i < 23; i++) {
        temp *= 2;
        const bin_char = parseInt(temp);
        this.bin_fractional = this.bin_fractional + bin_char.toString();
        temp -= bin_char;
      }
      this.cientificPart();
    },

    cientificPart() {
      if (this.bin_decimal.length > 1) {
        this.cientificPartNotZero();
      }
      else if (this.bin_decimal.toString().charAt(0) === '1') {
        this.cientificNotation.decimal = this.bin_decimal.toString();
        this.cientificNotation.fractional = this.bin_fractional.toString();
        this.cientificNotation.exponent = '0';
      }
      else {
        this.cientificPartZero();
      }
      this.calculateIEEE754();
    },

    calculateIEEE754() {
      this.ieee754.sign = this.sign === '-' ? '1' : '0';
      this.ieee754.exponent = ((127 + parseInt(this.cientificNotation.exponent)) >>> 0).toString(2);
      const lenght = 8 - this.ieee754.exponent.length;
      let increase_zero = '';
      for (let i = 0; i < lenght; i++) {
        increase_zero += '0';
      }
      this.ieee754.exponent = increase_zero.toString() + this.ieee754.exponent.toString();
      this.ieee754.mantissa = this.cientificNotation.fractional;
    },

    cientificPartNotZero() {
      this.cientificNotation.decimal = this.bin_decimal.toString().charAt(0);

      this.cientificNotation.fractional = this.bin_decimal.substring(1);
      for (let i = 0; i < (23 - (this.bin_decimal.length - 1)); i++) {
        this.cientificNotation.fractional += this.bin_fractional.toString().charAt(i);
      }
      const length = 23 - this.cientificNotation.fractional.toString().length;
      for (let i = 0; i < length; i++) {
        this.cientificNotation.fractional += '0';
      }

      this.cientificNotation.exponent = (this.bin_decimal.length - 1).toString();
    },

    cientificPartZero() {
      let boolTry = true;
      this.cientificNotation.fractional = '';
      for (let i = 0; i < 23; i++) {
        if (boolTry && this.bin_fractional.toString().charAt(i) !== '0') {
          this.cientificNotation.decimal = '1';
          this.cientificNotation.exponent = '-' + (i + 1).toString();
          boolTry = false;
        } else if (!boolTry) {
          this.cientificNotation.fractional += this.bin_fractional.toString().charAt(i);
        }
      }
      const length = 23 - this.cientificNotation.fractional.toString().length;
      for (let i = 0; i < length; i++) {
        this.cientificNotation.fractional += '0';
      }
    }
  }
}
</script>

