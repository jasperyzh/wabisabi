<template>
  <ul class="list-group">
    <li
      v-for="(item, index) in list"
      :key="`list-${index}`"
      class="list-group-item"
    >
      <a v-if="item.link" :href="item.link" target="_blank">
        {{ item.title }}</a
      >
      <span v-else>{{ item.title }}</span>
    </li>
  </ul>
  <ul></ul>
</template>
<script>
export default {
  props: {
    list: Object,
  },
};
</script>