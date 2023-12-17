import { getValidToken } from "../functions/getValidToken"
import axiosClient from "./axiosClient"

export const deleteWishlistItem = async (id) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.post(`/Wishlist/Edit-Wishlist-Item?bookItemId=${id}&isWishlisted=true`, null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        return response.data
    } catch (error) {
        console.error(error)
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
        setData(response.data)
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
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
        setData(response.data)
    } catch (error) {
        console.error('Error:', error);
        throw error
    }
  }