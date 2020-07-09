<template>
  <nav class="bg-secondary sidebar text-center">
    <button class="flex-auto">
      <font-awesome-icon class="text-white text-right" :icon="icon" />
    </button>
    <div class="grid grid-flow-col grid-rows-5">
      <div class="row-start-1 row-span-1 flex justify-center mt-5">
        <img
          class="rounded-full w-1/2"
          src="../assets/img/me.jpg"
          alt="Liz Wang photo"
        />
      </div>
      <div class="row-start-2 row-span-1 text-white mt-5">
        <router-link to="/" class="text-white font-display text-2xl"
          >Liz Wang</router-link
        >
      </div>
      <div class="row-start-3 row-span-1 text-white">
        <NavsItems class="grid grid-cols-1 text-left ml-32" />
      </div>
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
import NavsItems from "../components/NavsItems.vue";

export default {
  name: "SideBar",
  props: {
    msg: String,
  },
  computed: {
    icon() {
      return ["fas", "times"];
    },
  },
  components: {
    NavsItems,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
