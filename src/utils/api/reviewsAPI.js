import { getValidToken } from "../functions/getValidToken"
import axiosClient from "./axiosClient"

export const getReviews = async (id,setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItemReview?bookItemId=${id}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
}
export const getReviewsAmount = async (id, setData, number) => {
    try{
        const response = await axiosClient.get(`/BookItemReview?bookItemId=${id}&numberOfElements=${number}`)
        setData(response.data)
    }catch(err){
        console.error(err)
    }
}
export const addReview = async (data, setLoading) => {
    try {
        const token = getValidToken()
        const response = await axiosClient.post('BookItemReview', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
        })
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
  }