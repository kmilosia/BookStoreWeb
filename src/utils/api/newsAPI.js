import axiosClient from "./axiosClient"

export const getNewsInfo = async (id,setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/News/${id}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
export const getNews = async (number, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/News/Elements?numberOfElements=${number}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
export const getAllNews = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('/News')
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }