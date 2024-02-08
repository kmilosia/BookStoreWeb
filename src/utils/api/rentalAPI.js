import { getValidToken } from "../functions/getValidToken";
import axiosClient from "./axiosClient";

export const getPurchasedBooks = async (setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get('/Rental', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    } catch (error) {
        console.log(error);
    }
    setLoading(false)
}
export const getRentedBooks = async (setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get('/Rental?rentalStatusId=1', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    } catch (error) {
        console.log(error);
    }
    setLoading(false)
}
export const getFilteredRentedBooks = async (filter,setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/Rental?${filter}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    } catch (error) {
        console.log(error);
    }
    setLoading(false)
}