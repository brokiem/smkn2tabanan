import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import FasilitasSekolahView from "../views/FasilitasSekolahView.vue";
import SejarahSekolahView from "../views/SejarahSekolahView.vue";
import VisiMisiView from "../views/VisiMisiView.vue";
import ExtracurricularView from "../views/ExtracurricularView.vue";

const routes = [
    {path: "/", name: "main", component: MainView},
    {path: "/fasilitas", name: "fasilitas-sekolah", component: FasilitasSekolahView},
    {path: "/sejarah", name: "sejarah-sekolah", component: SejarahSekolahView},
    {path: "/visi-misi", name: "visi-misi", component: VisiMisiView},
    {path: "/kesiswaan/ekstrakulikuler", name: "ekstrakulikuler", component: ExtracurricularView}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
