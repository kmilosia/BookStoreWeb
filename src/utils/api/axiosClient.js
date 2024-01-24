import axios from "axios"

const axiosClient = axios.create({
    baseURL: `http://192.168.0.107:7247/api`,
    headers: {
      'Content-Type': 'application/json',
    },
  })   
  export default axiosClient