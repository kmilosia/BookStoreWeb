import { getValidToken } from "../functions/getValidToken";
import axiosClient from "./axiosClient";

export const getLibraryItems = async (id, setData, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/Library?libraryStatusId=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        setData(response.data)
        setLoading(false)
    } catch (error) {
        console.error(error);
        setLoading(false)
    }
}
export const downloadBookFile = async (id, setLoading) => {
    try {
        const token = getValidToken();
        const response = await axiosClient.get(`/Library/download/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            responseType: 'arraybuffer',
        })
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'book.pdf'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}