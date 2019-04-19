// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'//发包用
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
Vue.config.productionTip = false
Vue.use(VueResource)//使用引入的插件
Vue.use(VueRouter)

//自定义指令,也可写到局部文件里当作属性directive:{}
Vue.directive("rainbow",{
  bind(el,binding,vnode){
    //钩子函数，el是元素，binding是传的参数
    el.style.color="#"+Math.random().toString(16).slice(2,8);//随机颜色
  }
})
Vue.directive("theme",{
    bind(el,binding,vnode){
      if(binding.value=="wide"){
        el.style.maxWidth="1260px";
      }else if (binding.value=="narrow"){
        el.style.maxWidth="560px";
      }
      if(binding.arg=="column"){
        el.style.background="#6677cc";
        el.style.padding="20px";
      }
    }
})
//自定义过滤器
//第一参数为过滤器名，从组件传值过来
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})
Vue.filter("sinppet",function(value){
  return value.slice(0,500)+"...";
})
//创建路由
const router=new VueRouter({
  routes:Routes,
  mode:"history"
})

//
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
