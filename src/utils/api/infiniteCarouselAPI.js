import axiosClient from "./axiosClient"

export const getBooksCarousel = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('/BookItems/Carousel/1')
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
 export const getEbooksCarousel = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('/BookItems/Carousel/2')
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
