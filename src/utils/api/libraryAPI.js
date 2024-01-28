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