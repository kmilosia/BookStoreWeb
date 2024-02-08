import axiosClient from "./axiosClient"

export const getBanners = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('Banner')
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
export const getDiscountBanner = async (setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/DiscountsBanner/1`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }