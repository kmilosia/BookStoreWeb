import axiosClient from "./axiosClient"

export const getCities = async (setData) => {
    try {
      const response = await axiosClient.get('/City')
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }