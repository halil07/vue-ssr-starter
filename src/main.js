import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; // Add this
import router from "./router"; // Add this

Vue.use(VueRouter); // Add this
window.vue = new Vue({
  el: "#app",
  router, // Add this
  render: h => h(App)
});
