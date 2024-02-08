import axiosClient from "./axiosClient"

export const getFooterColumns = async(setData) => {
    try{
        const response = await axiosClient.get('/FooterColumns')
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
      }catch(err){
        console.log(err)
    }  
  }
export const getFooterLinks = async(id,setData) => {
  try{
      const response = await axiosClient.get(`/FooterLinks/Column/${id}`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    }catch(err){
      console.log(err)
  }  
}