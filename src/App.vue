<template>
  <div id="app">
    <div class="grid grid-rows-2 grid-flow-col gap-4">
      <div class="row-span-3 flex-grow">
        <Sidebar msg="Liz Wang" />
      </div>
      <div class="row-span-3 col-span-2">
        <BlogTopPage msg="Welcome to Your Vue.js App"/>
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
    Sidebar
  }
}
</script>

<style>
@import "./assets/css/tailwind.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
