import axiosClient from "./axiosClient"

export const getCities = async (setData) => {
    try {
      const response = await axiosClient.get('/City')
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  export const getCountries = async (setData) => {
    try {
      const response = await axiosClient.get('/Country')
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  export const getForms = async (setData) => {
    try {
      const response = await axiosClient.get(`/Form`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
export const getAvailabilities = async (setData) => {
    try {
      const response = await axiosClient.get(`/Availability`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
export const getPublishers = async (setData) => {
    try {
      const response = await axiosClient.get(`/Publisher`)
      if(response.status === 200 || response.status === 204){
      setData(response.data);
      }
    } catch (err) {
      console.log(err)
    }
  }
export const getLanguages = async (setData) => {
    try {
      const response = await axiosClient.get(`/Language`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
export const getCategories = async (setData) => {
    try {
      const response = await axiosClient.get(`/Category`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
export const getAuthors = async (setData) => {
    try {
      const response = await axiosClient.get(`/Author`)
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  export const getPaymentMethods = async (setData, setLoading) => {
    try {
      const response = await axiosClient.get('/PaymentMethod')
      if(response.status === 200 || response.status === 204){
      setData(response.data)
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
}
export const getRentalTypes = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('/RentalType')
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)  
}
export const getRentalStatuses = async (setData) => {
  try {
    const response = await axiosClient.get(`/RentalStatus`)
    if(response.status === 200 || response.status === 204){
    setData(response.data);
    }
  } catch (err) {
    console.log(err);
  }
}
export const getOrderStatuses = async (setData) => {
  try {
    const response = await axiosClient.get(`/OrderStatus`)
    if(response.status === 200 || response.status === 204){
    setData(response.data)
    }
  } catch (err) {
    console.log(err);
  }
}