<template>
  <section class="optin">
    <article>
      <form>
        <div class="optin-container" v-if="intro">
          <div class="optin-logo">
            <img :src="logo" class="optin-logo-img logo-img">
            <img src="https://media.tagcity.be/2019/04/optin-1.svg?auto=compress" class="envloppe">
            <div class="badge badge-right badge-absolute">1</div>
          </div>
        </div>
        <div class="optin-text padding-xl">
          <h2 class="optin-title">{{ title }}</h2>
          <p class="optin-subtitle">{{ subtitle }}</p>
          <input
            type="email"
            class="form-control email-input"
            value
            placeholder="jouw@emailadres.be"
          >
          <input type="submit" value="inschrijving" class="btn btn-primary uppercase">
        </div>
      </form>
    </article>
  </section>
</template>

<script>
import Btn from "~/components/Btn.vue";

export default {
  props: {
    logo: {
      type: String,
      default: ""
    },
    webshop: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    intro: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.optin {
  line-height: 1.2;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
  background-color: #fff;

  h2 {
    padding-bottom: 10px;
    font-size: 18px;
  }

  .btn {
    margin-top: 10px;
  }

  .form-control {
    background: #dcf4ff;
    border: none;
    font-size: 16px;
    margin-top: 15px;
    text-align: center;
    padding: 15px;
  }

  .optin-container {
    background: #3f4c6b;
    background-position: bottom center;
    background-size: cover;
  }

  .optin-logo {
    position: relative;
    display: inline-block;
    top: 20px;

    .optin-logo-img {
      width: 58px;
      left: 21px;
      position: absolute;
    }

    .envloppe {
      width: 100px;
    }
  }
}
</style>
