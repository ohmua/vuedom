<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required />
        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkboxes">
        <label>vue.js</label>
          <input type="checkbox" value="vue.js" v-model="blog.categories">
          <label>node.js</label>
          <input type="checkbox" value="node.js" v-model="blog.categories">
          <label>react.js</label>
          <input type="checkbox" value="react.js" v-model="blog.categories">
          <label>angular4</label>
          <input type="checkbox" value="angular4" v-model="blog.categories">
        </div>
        <label>作者：</label>
        <select v-model="blog.author">
          <option v-for="author in authors">
            {{author}}
          </option>
        </select>
        <input type="button" @click="post" value="添加博客" class="button">
    </form>
    
    <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div>
    
    <div id="preveiw">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类：</p>
        <ul>
            <li v-for="categroy in blog.categories">
                {{categroy}}
            </li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
          title:"",
          content:"",
          categories:[],
          author:""
      },
      authors:["bobb","aoaa","cocc"],
      submmited:false
    }
  },
  methods:{
    post:function(){
      // this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        //axios替换vue.resouce,此时的then要用es6语法
        var _this=this;
        axios.post("posts",{
        title:this.blog.title,
        author:this.blog.author,
        body:this.blog.content,
        userId:1
      }).then((data)=>{//post请求成功之后执行
        // console.log(data);
        _this.submmited=true;//用axios时this指向拥有这个函数的对象，所以要对this做处理
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-blog *{
  box-sizing: border-box;
  /* text-align: center; */
}
.add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  background: #eaeaea;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline-block;
  margin-top: 0;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
.button{
  display: block;
  margin: 20px 0;
  background:crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px ;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
