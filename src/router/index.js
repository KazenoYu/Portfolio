import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Project from "../views/Project.vue";
import Note from "../views/Note.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/note",
    name: "note",
    component: Note,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
