import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import axios from "axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import ImageKit from "imagekitio-vue";
import GAuth from "vue3-google-oauth2";

axios.defaults.baseURL = "http://localhost:3000";
const app = createApp(App);
const gAuthOptions = {
  clientId:
    "1003015490724-jtnhf84cfvm16jod7etlacrj62l9rh9n.apps.googleusercontent.com",
};
app.use(GAuth, gAuthOptions);

app.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/sbyfol4sixc",
  publicKey: "public_kMaZ/rZ7WGzmAHXWqCoT39XchAg=",
  authenticationEndpoint: "https://www.your-server.com/auth",
});
app.use(createPinia());
app.use(router);
app.use(VueToast);

app.mount("#app");
