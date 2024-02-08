import axiosClient from "./axiosClient"

export const getCategoryElement = async (id, setData, setLoading) => {
    try {
      const response = await axiosClient.get(`/CategoryElements/${id}`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

export const getCategoryElements = async (setData, setLoading) => {
    try {
      const response = await axiosClient.get('/CategoryElements')
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }