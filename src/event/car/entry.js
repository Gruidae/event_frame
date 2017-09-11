import Vue from 'vue';
import Router from 'vue-router';
import { Button, Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
// import './views/Detail.scss';
import App from './view/detail';

Vue.use(Router);
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
