import { getValidToken } from "../functions/getValidToken";
import axiosClient from "./axiosClient";

export const getPurchasedBooks = async (setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get('/Rental/Purchased-Ebooks', {
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
        const response = await axiosClient.get('/Rental/Rented-Ebooks', {
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