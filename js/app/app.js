import Field from "../common/Field.js"
import HomeFrame from "./home-frame.js";
import PolicyEdit from "./policy-edit.js"
import Home from "./home.js";
import Policies from "./policies.js";
import policyEdit from "./policy-edit.js";
window.CurrentUser = "";
window.CurrentUserID = -1;
window.CurrentRole = "";

Vue.filter("toCurrency", function (value) {
  return "R " + parseFloat(value).toFixed(2);
});
Vue.filter("shortDate", function (value) {
  return moment(value).format("DD-MMM-YYYY");
});

const routes = [
  {
    path: "/",
    component: HomeFrame,
    name: "HomeFrame",
  },
  {
    path: "/home",
    component: Home,
    name: "Home",
  },
  {
    path: "/policies",
    component: Policies,
    name: "Policies",
  },
  {
    path: "/policies/:id",
    component: PolicyEdit,
    name: "PolicyEdit",
  }
];

//Custom componets go here
Vue.component('form-field',Field)

//Router
const router = new VueRouter({
  routes: routes, // short for `routes: routes`
});

new Vue({
  router: router,
  el: "#app",
  render: function (h) {
    return h(HomeFrame);
  },
});
