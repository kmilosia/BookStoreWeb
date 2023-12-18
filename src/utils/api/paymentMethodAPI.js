import axiosClient from "./axiosClient"

export const getPaymentMethods = async (setData, setLoading) => {
    try {
      const response = await axiosClient.get('/PaymentMethod')
      setData(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
}