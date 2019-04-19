import axios from 'axios'

//可在单文件中对axios实例化做复杂配置
const sss=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

// sss.defaults.headers.common['Authorization']='token'//往请求头添加token
//调用方法，在需要的文件下 import axios from “此文件路径”