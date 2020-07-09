<template>
  <div class="blog-content row-span-1 col-span-4">
    <BlogContent />
  </div>
</template>

<script>
import BlogContent from "../components/BlogContent.vue";

export default {
  name: "Blog",
  components: {
    BlogContent,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
