<template>
  <section id="js-playground">
    <section id="9_2-js-svg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto">
            <h3>onclick SVG</h3>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                fill="#008800"
                class="bi bi-cash"
                viewBox="0 0 16 16"
              >
                <path
                  id="bi-cash__path1"
                  fill="#008800"
                  d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  @click="switchSvgFill($event)"
                />
                <path
                  d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"
                />
              </svg>
              <figcaption class="text-center">
                - Click on the cash! -
              </figcaption>
            </figure>
          </div>
          <hr />
        </div>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {},
  setup() {
    const switchSvgFill = (event: Event) => {
      //https://stackoverflow.com/questions/63165896/what-is-the-type-of-the-svg-element-in-typescript
      // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
      const target = event.target as HTMLButtonElement;
      let target_color = target.getAttribute("fill");
      target.style.transformOrigin = "center";
      target.style.transition = "all 0.3s ease";
      if (target_color == "#008800") {
        target.setAttribute("fill", "#ff0000");
        target.style.transform = "scale(2)";
      } else {
        target.setAttribute("fill", "#008800");
        target.style.transform = "scale(1)";
      }
    };
    return { switchSvgFill };
  },
});
</script>
