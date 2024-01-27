import axios from 'axios'

const serviceAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
    //   Authorization: 'Bearer your_token'
  }
})

export default serviceAxios

// // 創建請求攔截 request : 統一加入token 與 content-type
// serviceAxios.interceptors.request.use(
//   (config) => {
//     // 創建 Store 實例
//     const userStore = useAuthStore()
//     //取得 token
//     const loginToken = userStore.getUserToken()
//     config.headers['Authorization'] = `Bearer ${loginToken}`
//     config.headers['content-type'] = 'application/json'
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
