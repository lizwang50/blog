<template>
  <div id="app">
    <div class="grid grid-rows-1 grid-flow-col gap-4">
      <div class="row-span-1 flex-grow">
        <Sidebar msg="Liz Wang" />
      </div>
      <div class="row-span-1 col-span-4">
        <BlogTopPage />
      </div>
    </div>
  </div>
</template>

<script>
import BlogTopPage from './components/BlogTopPage.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    BlogTopPage,
    Sidebar,
  }
}
</script>

<style>
@import "./assets/css/tailwind.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
