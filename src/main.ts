import { createApp } from "vue";
import App from "./App.vue";
// components
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import BackToTopButton from "./components/BackToTopButton.vue";

import "./assets/main.css";
import router from "./router";
import 'flowbite';
import VueCookies from 'vue-cookies';

const app = createApp(App);

app .component('Navbar', Navbar)
    .component('Footer', Footer)
    .component('BackToTopButton', BackToTopButton)

app.use(router);
app.use(VueCookies, { expires: '23h', path: '/smkn2tabanan', secure: true, sameSite: "Strict"});
app.mount("#app");
