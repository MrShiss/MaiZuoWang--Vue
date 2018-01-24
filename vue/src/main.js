// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
Vue.use(VueRouter)
// 默认在点击和 click事件触发之间有300ms的延迟
// fastclick 可以避免移动端浏览器点击延迟
import FastClick from 'fastclick'
import './assets/base.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import axios from 'axios';
Vue.prototype.http = axios;
// 设置作用范围
FastClick.attach(document.body)

import {Actionsheet,AlertPlugin} from 'vux'
// 插件 使用弹窗
Vue.use(AlertPlugin)
// 注册为全局组件
Vue.component('Actionsheet',Actionsheet)





import Home from './components/Home'
import Films from './components/Films/Films'
import Cinema from './components/Cinema/Cinema'
import Shopping from './components/Shopping/Shopping'
import Citys from './components/Citys/Citys'
import Reg from './components/Reg'
import Login from './components/Login'
const routes = [   
  { path: '/', component: Home },
  { path: '/Films', component: Films },
  { path: '/Cinema', component: Cinema },
  { path: '/Shopping', component: Shopping },
  { path: '/Citys', component: Citys },
  { path: '/Reg', component: Reg },
  { path: '/Login', component: Login }
]

const router = new VueRouter({
  routes
})
router.push('/')


// 创建vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

var html = document.documentElement;
html.style.backgroundColor = '#ffffff';
var calcRem = function(){
  var w = html.clientWidth; 
  if (w <= 320) {
    html.style.fontSize = '10px';
  }else if (w <= 640) {
    html.style.fontSize = w/32 + 'px';
  }else{
    html.style.fontSize = '20px';
  }
  console.log('w='+w+' fontsize='+html.style.fontSize);
}
calcRem();
window.onresize = function(){
  calcRem();
}
