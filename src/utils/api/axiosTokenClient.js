import axios from "axios"
import {getValidToken} from '../functions/getValidToken'
const token = getValidToken()
console.log(token);
const axiosTokenClient = axios.create({
    baseURL: `https://localhost:7247/api`,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
  })
  export default axiosTokenClient