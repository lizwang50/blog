<template>
  <div class="row-start-3 row-span-1 text-white">
    <div class="grid grid-cols-1 text-left ml-32">
      <div class="dropdown">
        <button @click="itemIsOpen = !itemIsOpen" href="#" rel="noopener">+ Blog</button>
        <div
          :class="itemIsOpen ? 'block' : 'hidden'"
          class="dropdown-menu grid grid-cols-1 ml-5"
        >
          <a href="#" class="block mt-3" rel="noopener">工作心法</a>
          <a href="#" class="block mt-3" rel="noopener">技術文章</a>
        </div>
      </div>
      <!-- <router-link to="/about" v-slot="{ href, route, navigate, isActive }">
        <NavLink :active="isActive" :href="href" @click="navigate">{{ route.fullPath }}</NavLink>
      </router-link> -->
      <router-link class="mt-3" :href="href">About</router-link>
      <router-link class="mt-3" :href="href" @click="navigate">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'Navs',
  data() {
    return {
      itemIsOpen: false
    };
  },
}
</script>