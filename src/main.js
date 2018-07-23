// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import App from './App';
// import router from './router';

// Vue.config.productionTip = false;

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
// });

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.component("toDoList", {
  render(createElement) {
    const component = require("https://github.com/kpeng2016/testProject/blob/master/test.vue");
    const ele = createElement("div", component.default);
    return ele;
  }
});
new Vue({
  el: "#app",
  data: {
    todos: [
      { text: "Learn JavaScript", done: false },
      { text: "Learn Vue", done: false },
      { text: "Play around in JSFiddle", done: true },
      { text: "Build something awesome", done: true }
    ]
  },
  methods: {
    toggle: function(todo) {
      todo.done = !todo.done;
    }
  }
});

