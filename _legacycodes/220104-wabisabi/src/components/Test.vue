<template>
  <pre>{{ calculateStuff }}</pre>
  <pre>{{ modelValue }}</pre>
  <pre>{{ modelValue }}</pre>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />

  <input v-model="testval" />

  <hr />

  <header>
    <slot name="header"> </slot>
  </header>
  <main>
    <!-- <slot>
      <h2>This is a fallback main-text if no items declared.</h2>
    </slot> -->
    <ul>
      <li v-for="(item, index) in items" :key="`test-${index}`">
        <slot :item="item"></slot>
      </li>
    </ul>
  </main>
  <footer>
    <slot name="footer"> </slot>
  </footer>
  <pre>todolength - {{ todoLength.value }}</pre>
  <pre>
todoData - 
    {{ todoData.value }}</pre
  >
  <button @click="todoData.value.push('nice')">add nice</button>
</template>
<script>
import { defineComponent, ref, computed } from "vue";

// import axios from "axios";

export default defineComponent({
  inject: ["todoLength", "todoData"],
  created() {
    console.log(`Injected property: ${this.todoLength.value}`); // > Injected property: 5
    console.log(this.todoData.value);
  },
  data() {
    return {
      items: ["ello world", "howdy partner"],
      getTodo: null,
    };
  },
  props: {
    stuff: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: String,
    },
    get_url: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    /* let repositories = ref([]);
    // const calculateStuff = ref(props.stuff);

    const getRepositories = async () => {
      repositories.value = await axios.get(props.get_url);
    };

    onMounted(getRepositories);

    watch(user, getUserRepositories);

    return {
      //   calculateStuff,
      repositories,
      getRepositories,
    }; */
  },
  /* data() {
    return {
      stuff: 5000,
    };
  }, */
  /* computed: {
    calculateStuff: {
      // getter
      get() {
        return this.stuff * 2;
      },
      // setter
      set(newValue) {
        this.stuff = newValue;
      },
    },
  }, */
  computed: {
    testval: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    calculateStuff() {
      return (this.stuff * 3) / 0.4;
    },
  },
  /*  mounted() {
    this.getRepositories();
  }, */
});
</script>