<template>
  <nav class="bg-secondary rounded-r-lg">
    <div class="grid grid-flow-col grid-rows-6">
      <div class="row-start-1 row-span-1 flex justify-center">
        <img class="rounded-full" src="http://unsplash.it/74/74?gravity=center" alt="myPhoto" />
      </div>
      <div class="row-start-2 row-span-1 text-white">
        <p class="text-white">{{ msg }}</p>
      </div>
      <div class="row-start-3 row-span-1 text-white">
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">Blog</a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Project</a>
          </li>
          <li>
            <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Who's Liz?</a>
          </li>
          <li>
            <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Contact Liz</a>
          </li>
        </ul>
      </div>
      <div class="row-start-4 row-span-1">
        <p class="text-white">copy right</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
