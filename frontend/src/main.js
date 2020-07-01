import Vue from "vue";
import App from "./App.vue";
import router from "./router";

window.$ = require("jquery");
window.JQuery = require("jquery");

import "bootstrap/dist/js/bootstrap.bundle";

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
