import { getValidToken } from "../functions/getValidToken"
import axiosClient from "./axiosClient"

export const getReviews = async (id,setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItemReview?bookItemId=${id}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
}
export const getReviewsAmount = async (id, setData, number) => {
    try{
        const response = await axiosClient.get(`/BookItemReview?bookItemId=${id}&numberOfElements=${number}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
}
export const addReview = async (data,setLoading,setSuccess) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.post(`/BookItemReview/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
            setSuccess(true)
        }else{
            setSuccess(false)
        }
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}