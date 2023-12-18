import axiosClient from "./axiosClient"

export const getCountries = async (setData) => {
    try {
      const response = await axiosClient.get('/Country')
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }