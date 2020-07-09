<template>
  <nav class="bg-secondary sidebar text-center">
    <button class="flex-auto">
      <font-awesome-icon class="text-white text-right" :icon="icon" />
    </button>
    <div class="grid grid-flow-col grid-rows-5">
      <div class="row-start-1 row-span-1 flex justify-center mt-5">
        <img class="rounded-full w-1/2" src="../assets/img/me.jpg" alt="Liz Wang photo" />
      </div>
      <div class="row-start-2 row-span-1 text-white mt-5">
        <p class="text-white font-display text-2xl">{{ msg }}</p>
      </div>
      <Navs />
      <div class="row-start-6 row-span-1">
        <p class="text-sm text-white mb-4">
          Design by Liz Wang.
          <br />All rights reserved.
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
import Navs from './Navs.vue'

export default {
  name: "SideBar",
  props: {
    msg: String
  },
  computed: {
    icon() {
      return ["fas", "times"];
    }
  },
  components: {
    Navs,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
