<template>
  <div class="dropdown">
    <a type="button" @click="itemIsOpen = !itemIsOpen" rel="noopener">+ Blog</a>
    <div
      :class="itemIsOpen ? 'block' : 'hidden'"
      class="dropdown-menu grid grid-cols-1 ml-5"
    >
      <router-link to="/" class="block mt-3" rel="noopener"
        >工作心法</router-link
      >
      <a href="#" class="block mt-3" rel="noopener">技術文章</a>
    </div>
    <router-link class="mt-3" to="/about">About</router-link>
    <router-link class="mt-3" to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: "Navs",
  data() {
    return {
      itemIsOpen: false,
    };
  },
};
</script>
