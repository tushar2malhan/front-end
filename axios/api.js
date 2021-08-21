import axios from 'axios'

const secureaxios = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

secureaxios.interceptors.request.use( config => {
    config.headers['Aut'] ="Bearer Token"
        return config
})
secureaxios.interceptors.response.use( res => {
    console.log('getting success')
    return res 
}, err => {
    console.log('getting error')
    console.warn('do something')
    return Promise.reject(err)
})

export default secureaxios


