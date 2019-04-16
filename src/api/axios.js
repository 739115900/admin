import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// http请求拦截器
axios.interceptors.request.use(config => {
 //Loading方法
 console.log('loading')
 return config
}, error => {
 return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(response => {
    console.log(response.status)
    return response
}, err => {

        if (err && err.response) {
           
            switch (err.response.status) {
                case 400: err = '请求错误(400)'; break;
                case 401: return history.push('/login'); break;
                case 403: err = '拒绝访问(403)'; break;
                case 404: err = '请求出错(404)'; break;
                case 408: err = '请求超时(408)'; break;
                case 500: err = '服务器错误(500)'; break;
                case 501: err = '服务未实现(501)'; break;
                case 502: err = '网络错误(502)'; break;
                case 503: err = '服务不可用(503)'; break;
                case 504: err = '网络超时(504)'; break;
                case 505: err = 'HTTP版本不受支持(505)'; break;
                default: err = `连接出错(${err.response.status})!`;
            }
        } else {
            err = '连接服务器失败!'
        }
       alert(err)
        return Promise.reject(err);
})

export default axios