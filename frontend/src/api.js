import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    //baseURL: 'https://saqqi.com/api/',
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': "Token f2e310a052f8cdae248c2eaba5670e6a34744f47"
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
