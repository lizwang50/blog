import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebookSquare, faInstagram,faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

import BlogTopPage from './components/BlogTopPage.vue'
import About from './components/About.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: BlogTopPage },
    { path: '/about', component: About },
  ]
})


new Vue({
  render: h => h(App),
}).$mount('#app')
