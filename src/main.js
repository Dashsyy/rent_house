import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./services/router";
import ComponentsInit from "@/components/shared/index.js"

const app = createApp(App);

app.use(ComponentsInit);
app.use(router);
app.mount("#app");
