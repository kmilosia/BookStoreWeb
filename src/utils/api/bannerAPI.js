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