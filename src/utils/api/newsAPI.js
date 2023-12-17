import axiosClient from "./axiosClient"

export const getNewsInfo = async (id,setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/News/${id}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getNews = async (number, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/News/Get-Number-Of-News?numberOfElements=${number}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getAllNews = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('/News')
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }