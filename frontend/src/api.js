import axios from 'axios';


const instance = axios.create({
    //baseURL: "http://api.saqqi.com:8000/",
    baseURL: 'https://api.saqqi.com/',
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': "Token a589d98ca79f10f93864a742620222545bdc5649" // teste
        'Authorization': "Token ed2c723a3166f36b187225561fe8075c928fdba5"
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    //withCredentials: true
});


export default instance
