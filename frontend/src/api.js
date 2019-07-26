import axios from 'axios';

export default axios.create({
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