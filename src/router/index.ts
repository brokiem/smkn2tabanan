import {createRouter, createWebHashHistory} from "vue-router";
import MainView from "../views/MainView.vue";
import FasilitasSekolahView from "../views/FasilitasSekolahView.vue";
import SejarahSekolahView from "../views/SejarahSekolahView.vue";
import VisiMisiView from "../views/VisiMisiView.vue";
import KompetensiKeahlianView from "../views/KompetensiKeahlianView.vue";
import ExtracurricularView from "../views/ExtracurricularView.vue";

const routes = [
    {path: "/", name: "main", component: MainView},
    {path: "/profil/fasilitas", name: "fasilitas-sekolah", component: FasilitasSekolahView},
    {path: "/profil/sejarah", name: "sejarah-sekolah", component: SejarahSekolahView},
    {path: "/profil/visi-misi", name: "visi-misi", component: VisiMisiView},
    {path: "/kompetensi-keahlian", name: "kompetensi-keahlian", component: KompetensiKeahlianView},
    {path: "/jurusan", redirect: '/kompetensi-keahlian'},
    {path: "/kesiswaan/ekstrakulikuler", name: "ekstrakulikuler", component: ExtracurricularView}
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
