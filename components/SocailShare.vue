<template>
  <ul>
    <li class="facebook">
      <a
        href="http://www.facebook.com/sharer.php?u="
        rel="nofollow"
        title="Deel op Facebook"
        target="_blank"
      >Facebook</a>
    </li>

    <li class="twitter">
      <a
        href="https://twitter.com/intent/tweet?text=De+vakanties+komen+eraan%3A+profiteer+van+vroegboekkorting%21&amp;url=https%3A%2F%2Fwww.deals.be%2Fartikel%2Fvroegboek-korting-vakantie&amp;via=acties_nl"
        rel="nofollow"
        title="Deel op Twitter"
        target="_blank"
      >Twitter</a>
    </li>

    <li class="google-plus">
      <a
        href="https://plus.google.com/share?url=https%3A%2F%2Fwww.deals.be%2Fartikel%2Fvroegboek-korting-vakantie"
        rel="nofollow"
        title="Deel op Google+"
        target="_blank"
      >Google+</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
