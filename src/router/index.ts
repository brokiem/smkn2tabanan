import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ExtracurricularView from "../views/ExtracurricularView.vue";

const routes = [
    {path: "/", name: "main", component: MainView},
    {path: "/kesiswaan/ekstrakulikuler", name: "ekstrakulikuler", component: ExtracurricularView}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
