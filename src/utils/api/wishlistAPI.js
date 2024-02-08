import { getValidToken } from "../functions/getValidToken"
import axiosClient from "./axiosClient"

export const deleteWishlistItem = async (id) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.post(`/Wishlist/Item?bookItemId=${id}&isWishlisted=true`, null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
  }
  export const getWishlist = async (data, setData, setLoading) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.get(`/Wishlist/${data}`, {
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
    setLoading(false)
  }
  export const getWishlistGuid = async (setData, setLoading) => {
    try {
        setLoading(true)
        const token = getValidToken()
        const response = await axiosClient.get('/Wishlist', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    } catch (error) {
        console.log( error);
    }
  }
 export const addToWishlist = async (id) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.post(`/Wishlist/Item?bookItemId=${id}&isWishlisted=false`, null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
  }