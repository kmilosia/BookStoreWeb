import axiosClient from "./axiosClient"

export const getCategoryElement = async (id, setData, setLoading) => {
    try {
      const response = await axiosClient.get(`/CategoryElements/${id}`)
      setData(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

export const getCategoryElements = async (setData, setLoading) => {
    try {
      const response = await axiosClient.get('/CategoryElements')
      setData(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }