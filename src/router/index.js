import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const About = () => import("../pages/About.vue");
const MovieDetail = () => import("../pages/MovieDetail.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "movieDetail",
    path: "/movie/:id",
    component: MovieDetail,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
