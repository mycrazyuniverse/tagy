<template>
  <section class="optin">
    <article class="tag tag-newsletter">
      <form>
        <div class="optin-container">
          <div class="optin-logo">
            <img :src="logo" class="optin-logo-img">
            <img
              src="http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/optin.png"
              class="envloppe"
            >
            <div class="badge">1</div>
          </div>
        </div>
        <div class="optin-text">
          <template v-if="webshop">
            <h2>Mis nooit meer een nieuwe kortingscode van Collishop</h2>
            <p>
              We sturen je enkel nieuwe kortingscodes en promoties van
              Collishop. Niet te missen dus!
            </p>
          </template>
          <template v-else>
            <h2>Mis nooit meer een nieuwe kortingscode</h2>
            <p>We sturen je enkel nieuwe kortingscodes en promoties. Niet te missen dus!</p>
          </template>
          <input
            type="email"
            class="form-control email-input"
            value
            placeholder="jouw@emailadres.be"
          >
          <input type="submit" value="inschrijving" class="btn uppercase">
        </div>
      </form>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: ""
    },
    webshop: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
