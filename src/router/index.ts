import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import FasilitasSekolahView from "../views/FasilitasSekolahView.vue";
import ExtracurricularView from "../views/ExtracurricularView.vue";

const routes = [
    {path: "/", name: "main", component: MainView},
    {path: "/fasilitas", name: "fasilitas-sekolah", component: FasilitasSekolahView},
    {path: "/kesiswaan/ekstrakulikuler", name: "ekstrakulikuler", component: ExtracurricularView}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
