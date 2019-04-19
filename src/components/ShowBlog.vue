<template>
<!-- wide是传给自定义指令的值，是字符串或对象，数组,column是参数：binding.arg -->
<div v-theme:column="'wide'" id="show-blog">
  <!-- <div v-theme="'wide'" id="show-blog"> -->
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <!-- 不执行过滤器的时候是要遍历原数组blogs的，现在遍历过滤器return的值可实现筛选，没有筛选时会把数组blogs的值全写完 -->
      <div v-for="blog in filteredBlogs" class="single-blog">
        <!-- 绑定路由参数，并传给url -->
        <router-link v-bind:to="'/blog/'+ blog.id">
        <h2 v-rainbow>{{blog.title}}</h2>
        </router-link>
          <!-- to-uppercase是传值给main.js做处理 -->
          <!-- <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>这个过滤器是转换为大写 -->
          <article>
              {{blog.body | sinppet}}
          </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'show-blog',
  data(){
      return {
        blogs:[],
        search:""
      }
  },
  created (){
      //请求数据
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(data){
          this.blogs=data.body.slice(0,10)
        //   console.log(this.blogs)
      })
    //   this.$http.get("./../static/文件名") .then(function(){}),本地json文件要放到static里面
  },
  computed:{
      //对元素进行计算时写在computed
      filteredBlogs:function(){
          return this.blogs.filter((blog) =>{//箭头函数将原函数的“function”关键字和函数名都删掉，并使用“=>”连接参数列表和函数体。
              return blog.title.match(this.search);//返回一个布尔值，这里是搜索框的值，用es6函数match匹配，true为匹配成功
          })
      }
  },
//   filters:{
//       toUppercase(value){
//           return value.toUpperCase();
//       }
//   }局部方法，写到main.js是全局方法
}
</script>

<style>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blog a{
  color: #444;
  text-decoration: none;
}
input[type="text"]{
  padding: 8px;
  width:100%;
  box-sizing: border-box;
}
</style>
