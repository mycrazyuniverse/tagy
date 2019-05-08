<template>
  <ul class="tag-properties">
    <li v-for="(item, index) in content" :key="index" :class="propertyclass(item)">
      <span v-if="item.slug == 'timed'">Limited offer</span>
      <span v-else-if="item.slug == 'status'">{{ status_data.name }}</span>
      <span v-else-if="item.slug == 'toegevoed-op'">{{ item.name }} {{ starts.readable }}</span>
      <span v-else-if="item.slug == 'verloopt'">{{ item.name }} {{ ends.readable }}</span>
      <span v-else-if="item.slug == 'eindigt-in'">
        {{ item.name }}
        <Timer :ends="ends.timestamp"></Timer>
      </span>
      <span v-else-if="item.slug == 'toon-type'">{{ type.name }}</span>
      <span v-else>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
import Timer from "~/components/Timer.vue";
import LogoProp from "~/components/LogoProp.vue";

export default {
  components: {
    LogoProp,
    Timer
  },
  props: {
    content: {
      type: Object
    }
  },
  methods: {
    propertyclass($property) {
      var classes = [];

      classes.push("tag-property");
      classes.push("tag-property-" + $property.slug);
      classes.push("property-" + $property.slug);

      return classes.join(" ");
    }
  }
};
</script>

<style>
</style>