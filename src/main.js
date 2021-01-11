import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios=axios;

// 过滤器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

//定义全局scroller组件
import scroller from '@/components/scroller'
Vue.component('scroller',scroller);  

// 定义全局加载组件
import loading from '@/components/loading'
Vue.component('loading',loading);  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
