<template>
  <div class="ColumnList">
    <div v-for="(item, index) in related.raw.content" :key="index" :id="index">
      <h3 class="firstletter uppercase text-center">
        <WebshopLogo v-if="sub.term.logo" :logo="sub.term.logo"></WebshopLogo>
        {{index}}
      </h3>
      <ul class="collist">
        <li v-for="sub in item.shops" :key="sub.id">
          <a :href="sub.link">
            <span class="shopname">{{sub.name}}</span>
          </a>
        </li>
      </ul>
      <a v-if="item.more" :href="item.term.link" class="padding dib w100 text-center">
        <strong>{{ item.more }} »</strong>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
