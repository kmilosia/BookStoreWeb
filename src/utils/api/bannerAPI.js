import axiosClient from "./axiosClient"

export const getBanners = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('Banner')
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getDiscountBanner = async (setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/DiscountsBanner/1`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }