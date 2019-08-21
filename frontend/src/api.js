import axios from 'axios';


const instance = axios.create({
    baseURL: "http://api.saqqi.com:8000/",
    //baseURL: 'http://api.saqqi.com/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token a589d98ca79f10f93864a742620222545bdc5649" // teste
        //'Authorization': "Token a589d98ca79f10f93864a742620222545bdc5649"
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});

/*
// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  NProgress.done()
  return response
}) */

export default instance
