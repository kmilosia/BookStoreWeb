import { getValidToken } from "../functions/getValidToken";
import axiosClient from "./axiosClient";

export const getFilteredOrderedBooks = async (filter,setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/User/Order?${filter}`, {
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
export const getUserOrder = async (id,setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/Order/${id}`, {
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
export const getOrderInvoice = async (id, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/Order/Invoice?orderId=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer',
        })
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'invoice.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
}
export const makeOrder = async (data, setLoading, setSuccess) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.post(`/User/Order`,data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
            setSuccess(true)
        }else{
            setSuccess(false)
        }
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}