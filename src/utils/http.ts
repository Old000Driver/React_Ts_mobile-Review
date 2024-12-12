import axios from 'axios'

// 公共配置
const httpInstance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 如果有token，则在请求头中进行携带,方便进行用户鉴权
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    // 2xx 范围的状态码都会触发该函数。
    const { data } = response
    // 直接返回服务端的真实数据
    return data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default httpInstance