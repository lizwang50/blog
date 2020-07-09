import Vue from "vue";
import Router from "vue-router";
import Blog from "../views/Blog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "blog",
      component: Blog
    },
    {
      path: "/about",
      name: "about",
      component: () =>
      import("../views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
      import("../views/Contact.vue")
    },
  ]
})
