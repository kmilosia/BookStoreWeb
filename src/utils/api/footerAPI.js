import axiosClient from "./axiosClient"

export const getFooterColumns = async(setData) => {
    try{
        const response = await axiosClient.get('/FooterColumns')
        setData(response.data)
      }catch(err){
        console.error(err)
    }  
  }
export const getFooterLinks = async(id,setData) => {
  try{
      const response = await axiosClient.get(`/FooterLinks/Column/${id}`)
      setData(response.data)
    }catch(err){
      console.error(err)
  }  
}