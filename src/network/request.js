import axios from 'axios'
export function request(config) {
    // 1 创建axios实例 是个promise对象
    const instance = axios.create({
      baseURL: "http://152.136.185.210:7878/api/m5",
      timeout: 5000
    });
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // console.log(config);
      // config不符合服务器的要求 or 每次请求时需要某些行为 or 带token
      return config;
    }, err => {
      console.log(22);
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data;
    }, err => {
      console.log(err);
    })

    // 3 发送真正的网络请求
    return instance(config);

}

