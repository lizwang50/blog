<template>
  <div class="home grid grid-rows-1 grid-flow-col gap-4">
    <div class="row-span-1 flex-grow">
      <Sidebar msg="Liz Wang" />
    </div>
    <div class="row-span-1 col-span-4">
      <Container />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Container from '../components/Container.vue'

export default {
  name: 'Home',
  components: {
    Container,
    Sidebar,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>