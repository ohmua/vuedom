<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"single-blog",
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        var _this=this;
        axios.get("posts/"+this.id).then(data=>{
            // console.log(data)
            _this.blog=data.data;
        })
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border:1px solid #aaa;
}
</style>
