// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import router from './router';
import { Button, Header } from 'mint-ui';
// import './views/Detail.scss';
import Detail from './event/car/view/detail';
import 'mint-ui/lib/style.css';

Vue.use(Router);
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
