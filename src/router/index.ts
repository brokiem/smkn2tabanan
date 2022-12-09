import {createRouter, createWebHashHistory} from "vue-router";
import NProgress from 'nprogress';

// Route progress bar
NProgress.configure({
    showSpinner: false,
    template: '<div class="bar" role="bar">'
});

NProgress.trickle = function() {
    return NProgress.inc(0.2);
};

function lazyLoad(view: string) {
    return () => import(`@/views/${view}.vue`);
}

function preloadImage(url: string) {
    const img = new Image();
    img.src = url;

    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

function preloadImages(urls: Array<string>) {
    let promises: any[] = [];

    urls.forEach(url => {
        promises.push(preloadImage(url));
    });

    return promises;
}

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

    let promises = [];

    switch (to.name) {
        case "main":
            promises = preloadImages([new URL('@images/atas-blur-min.webp', import.meta.url).href])
            break;
        case "logo":
            promises = preloadImages([new URL('@images/logo-smk2.png', import.meta.url).href])
            break;
        case "struktur-organisasi":
            promises = preloadImages([new URL('@images/struktur-organisasi.png', import.meta.url).href])
            break;
        case "kompetensi-keahlian":
            promises = preloadImages([
                new URL('@images/coding-rpl.jpg', import.meta.url).href,
                new URL('@images/camera-mm.jpg', import.meta.url).href,
                new URL('@images/food-boga.jpg', import.meta.url).href,
                new URL('@images/calc-akl.jpg', import.meta.url).href
            ])
            break;
        case "tata-tertib":
            promises = preloadImages([new URL('@images/depan-smk.jpg', import.meta.url).href])
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
