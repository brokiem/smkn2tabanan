import {createRouter, createWebHashHistory} from "vue-router";
import NProgress from 'nprogress';
import {lazyLoad, preloadImages} from "@/router/functions";

NProgress.trickle = function() {
    return NProgress.inc(0.2);
};

const routes = [
    {
        path: "/",
        name: "main",
        component: lazyLoad('MainView')
    },
    {
        path: "/profil/fasilitas",
        name: "fasilitas-sekolah",
        component: lazyLoad('FasilitasSekolahView')
    },
    {
        path: "/profil/sejarah",
        name: "sejarah-sekolah",
        component: lazyLoad('SejarahSekolahView')
    },
    {
        path: "/profil/visi-misi",
        name: "visi-misi",
        component: lazyLoad('VisiMisiView')
    },
    {
        path: "/profil/logo",
        name: "logo",
        component: lazyLoad('LogoSekolahView')
    },
    {
        path: "/profil/struktur-organisasi",
        name: "struktur-organisasi",
        component: lazyLoad('StrukturOrganisasiView')
    },
    {
        path: "/kompetensi-keahlian",
        name: "kompetensi-keahlian",
        component: lazyLoad('KompetensiKeahlianView')
    },
    {
        path: "/jurusan",
        redirect: '/kompetensi-keahlian'
    },
    {
        path: "/kesiswaan/ekstrakulikuler",
        name: "ekstrakulikuler",
        component: lazyLoad('EkstrakulikulerView')
    },
    {
        path: "/kesiswaan/tatatertib",
        name: "tata-tertib",
        component: lazyLoad('TataTertibView')
    },
    {
        path: "/kesiswaan/tata-tertib",
        redirect: '/kesiswaan/tatatertib'
    },
    {
        path: "/artikel/berita/:titleId",
        name: "berita",
        component: lazyLoad('BeritaView')
    },
    {
        path: "/artikel/pengumuman/:titleId",
        name: "pengumuman",
        component: lazyLoad('PengumumanView')
    },
    {
        path: "/artikel/berita",
        name: "berita-list",
        component: lazyLoad('DaftarBeritaView')
    },
    {
        path: "/artikel/pengumuman",
        name: "pengumuman-list",
        component: lazyLoad('DaftarPengumumanView')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: lazyLoad('PageNotFoundView')
    },
];

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {top: 0}
    },
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routes
});

router.beforeEach((to, from, next) => {
    // Start the route progress bar.
    NProgress.start()

    let promises: any[] = [];

    switch (to.name) {
        case "main":
            promises = preloadImages(['https://cdn-smkn2tabanan.netlify.app/images/atas-blur-min.webp'])
            break;
        case "logo":
            promises = preloadImages(['https://cdn-smkn2tabanan.netlify.app/images/logo-smk2.png'])
            break;
        case "struktur-organisasi":
            promises = preloadImages(['https://cdn-smkn2tabanan.netlify.app/images/struktur-organisasi.png'])
            break;
        case "kompetensi-keahlian":
            promises = preloadImages([
                'https://cdn-smkn2tabanan.netlify.app/images/coding-rpl.jpg',
                'https://cdn-smkn2tabanan.netlify.app/images/camera-mm.jpg',
                'https://cdn-smkn2tabanan.netlify.app/images/food-boga.jpg',
                'https://cdn-smkn2tabanan.netlify.app/images/calc-akl.jpg'
            ])
            break;
        case "tata-tertib":
            promises = preloadImages(['https://cdn-smkn2tabanan.netlify.app/images/depan-smk.jpg'])
            break;
    }

    // Load images first then go to the next route
    Promise.all(promises).then(function () {
        // Process route
        next();
    });
});

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
});

export default router;
