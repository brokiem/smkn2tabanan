import {createRouter, createWebHashHistory} from "vue-router";
import NProgress from 'nprogress';

// Route progress bar
NProgress.configure({
    showSpinner: false,
    template: '<div class="bar" role="bar">'
});

function lazyLoad(view: string) {
    return () => import(`@/views/${view}.vue`);
}

const routes = [
    {path: "/", name: "main", component: lazyLoad('MainView')},
    {path: "/profil/fasilitas", name: "fasilitas-sekolah", component: lazyLoad('FasilitasSekolahView')},
    {path: "/profil/sejarah", name: "sejarah-sekolah", component: lazyLoad('SejarahSekolahView')},
    {path: "/profil/visi-misi", name: "visi-misi", component: lazyLoad('VisiMisiView')},
    {path: "/profil/logo", name: "logo", component: lazyLoad('LogoSekolahView')},
    {path: "/profil/struktur-organisasi", name: "struktur-organisasi", component: lazyLoad('StrukturOrganisasiView')},
    {path: "/kompetensi-keahlian", name: "kompetensi-keahlian", component: lazyLoad('KompetensiKeahlianView')},
    {path: "/jurusan", redirect: '/kompetensi-keahlian'},
    {path: "/kesiswaan/ekstrakulikuler", name: "ekstrakulikuler", component: lazyLoad('EkstrakulikulerView')}
];

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {top: 0}
    },
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routes
});

router.beforeEach(() => {
    // Start the route progress bar.
    NProgress.start()
});

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
});

export default router;
