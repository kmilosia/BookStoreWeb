import { getValidToken } from "../functions/getValidToken";
import axiosClient from "./axiosClient";

export const fetchUserAddress = async (setData,setErrors, setLoading) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.get('User/Address',{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        setData(response.data)
        setLoading(false)
    } catch (error) {
        if (error.response) {
            setErrors(error.response.data)
        }
    }
  }
export const addUserAddress = async (data,setErrors, setLoading) => {
        try{
        const token = getValidToken()
        const response = await axiosClient.post('/User/Address', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
        setLoading(false)
        return response.data
        }catch (error) {
            if (error.response) {
                setErrors(error.response.data)
            }
        }
}