import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:80/",
    headers: {
    },
    
    withCredentials: true,
});

export default Api;
