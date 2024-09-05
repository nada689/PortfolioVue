import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App).use(router).use(vuetify).mount("#app");
