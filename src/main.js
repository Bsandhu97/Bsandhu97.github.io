import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import 'core-js';

createApp(App).use(router).use(router).mount("#app");
