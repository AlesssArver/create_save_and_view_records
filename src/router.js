import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/requests",
      name: "requests",
      component: () => import("@/views/Requests")
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/errors/NotFound"),
      props: true
    },
    {
      path: "/network-issue",
      name: "network-issue",
      component: () => import("@/views/errors/NetworkIssue")
    },
    {
      path: "*",
      redirect: { name: "404", params: { resource: "page" } }
    }
  ]
});

router.beforeEach((routerTo, routerFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => NProgress.done());

export default router;
