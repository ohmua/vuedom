import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'//先引入文件
import SingleBlog from './components/SingleBlog.vue'
export default[
    {path:"/",component:ShowBlog},//建立路径
    {path:"/add",component:AddBlog},
    {path:"/blog/:id",component:SingleBlog}//配置路由参数
]