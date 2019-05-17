<template>
  <div class="footer dib w100 lh-lg">
    <div class="container">
      <div class="pull-left">
        <ul class="footer-items">
          <li v-for="(navitem, key) of items" :key="key" class="float-left">
            <a :href="navitem.url">{{ navitem.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style lang="scss">
.footer {
  background-color: #0391d8;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #13315b;
  margin-top: 30px;

  a {
    color: #fff;
  }

  li {
    padding-left: 10px;
  }
}
</style>
