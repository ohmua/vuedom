<template>
<div class="nav-box">
<nav>
    <ul>
        <li>
            <!-- 路由的跳转标签，相当于a标签 -->
            <router-link to="/" exact>博客</router-link>  
            <router-link to="/add" exact>写博客</router-link>
        </li>
    </ul>
    </nav>
</div>
    
</template>

<script>
export default {
    name:"blog-header"
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin:0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
nav{
    background: crimson;
    padding: 20px 0;
    margin-bottom: 40px;
    border-radius: 5px;
}

.router-link-active{
    background: rgba(255, 255, 255, 0.8);
    color: #444;
}
</style>
