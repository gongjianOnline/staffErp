// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios'
Vue.prototype.$axios = axios

import VueSession from 'vue-session'
Vue.use(VueSession)

//本地化服务依赖
import VueResource from 'vue-resource'
Vue.use(VueResource)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//封装模拟弹窗
Vue.prototype.alterFun = function(state,title){
  this.$message({
    message: title,
    type: state 
  });
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
