import axiosClient from "./axiosClient"

export const getRentalTypes = async (setData, setLoading) => {
    try{
        const response = await axiosClient.get('/RentalType')
        setData(response.data)
        setLoading(false)  
    }catch(err){
        console.error(err)
    }
}