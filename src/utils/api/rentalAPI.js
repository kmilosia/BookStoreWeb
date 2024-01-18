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
        setData(response.data)
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
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
        setData(response.data)
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
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
        setData(response.data)
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
}