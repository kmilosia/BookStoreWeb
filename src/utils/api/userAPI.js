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
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    } catch (error) {
      setErrors("Błąd podczas pobierana adresu użytkownika")
    }
    setLoading(false)
  }
  export const fetchUserAddressCheckout = async (setData) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.get('User/Address',{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        if(response.status === 200 || response.status === 204){
          setData(response.data)
        }
    } catch (error) {
        console.log(error);
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
          setErrors("Błąd podczas dodawania adresu użytkownika")
          setLoading(false)
        }
}