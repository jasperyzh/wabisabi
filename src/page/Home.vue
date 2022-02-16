<template>
  <main>
    <section id="welcome">
      <div class="container">
        <div class="row row-cols-md-3">
          <div
            class="card"
            v-for="(post, index) in posts"
            :key="`post-${index}`"
          >
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{ post.subtitle }}
              </h6>
              <p class="card-text" v-html="post.content"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          date: "220217",
          title: "Getting Started: Ⅴ",
          subtitle: "Learning everything from Zero",
          content:
            "Organized myself and study my bread and butter from the basic. Pray it goes well.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&family=Tinos:wght@400;700&display=swap");
body {
  font-family: "Tinos", serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Space Mono", monospace;
}
.card-subtitle {
  font-family: "Tinos", serif;
}
</style>
<style lang="scss" scoped>
// @use "@/scss/abstracts" as *;

// main {
//   background-color: #ececec;
//   min-height: 100vh;
// }
</style>