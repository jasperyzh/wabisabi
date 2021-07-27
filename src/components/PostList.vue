<template>
  <section id="post-list">
    <p>
      <button class="btn disabled">Ordered by: {{ order }}</button>
      <button class="btn btn-warning" @click="toggleOrder()">
        {{ orderby }}
      </button>
    </p>
    <transition-group name="post" tag="div" class="d-flex flex-wrap">
      <div
        class="card mb-3 col-md-6"
        v-for="post in orderedPosts"
        :key="`postid-${post.id}`"
      >
        <div class="card-header d-flex justify-content-between text-muted">
          <span>{{ post.date }}</span>
          <span>#{{ post.id }}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title h4">{{ post.title }}</h3>
          <p class="small">{{ post.excerpt }}</p>

          <p class="card-text" v-html="post.content"></p>
        </div>
      </div>
    </transition-group>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import Post from "@/type/Post";
import OrderTerm from "@/type/OrderTerm";
import OrderBy from "@/type/OrderBy";

export default defineComponent({
  props: {
    posts: {
      required: true,
      type: Array as PropType<Post[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const orderedPosts = computed(() => {
      return [...props.posts].sort((a: Post, b: Post) => {
        if (orderby.value == "asc") {
          return a[props.order] > b[props.order] ? 1 : -1;
        } else {
          return a[props.order] < b[props.order] ? 1 : -1;
        }
      });
    });

    const orderby = ref<OrderBy>("desc");
    const toggleOrder = () => {
      orderby.value = orderby.value == "asc" ? "desc" : "asc";
    };

    return { orderedPosts, orderby, toggleOrder };
  },
});
</script>
<style lang="scss" scoped>
.post-move {
  transition: all 0.3s ease;
}
</style>