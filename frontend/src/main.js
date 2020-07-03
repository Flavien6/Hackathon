import Vue from "vue";
import App from "./App.vue";
import router from "./router";

window.$ = require("jquery");
window.JQuery = require("jquery");

import "bootstrap/dist/js/bootstrap.bundle";
import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;
Vue.use(VueSweetalert2)

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
