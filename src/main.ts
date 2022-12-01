import { createApp } from "vue";
import App from "./App.vue";
// components
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import "./assets/main.css";
import router from "./router";
import 'flowbite'

const app = createApp(App);

app .component('Navbar', Navbar)
    .component('Footer', Footer)

app.use(router);
app.mount("#app");
