import axios from 'axios'

const secureaxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

secureaxios.interceptors.request.use(config =>{
    config.headers['Auth'] ="Bearer Token"
    return config
})

secureaxios.interceptors.response.use(response => {
    console.warn('getting response ')
    return response 
},err => {
    console.warn('Got an error from server ')
    return Promise.reject(err)

})
export default secureaxios

