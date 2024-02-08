import axiosClient from "./axiosClient"

export const getBookFile = async (id, token, setLoading, setAccess, setPdfBlob) => {
    try {
        const response = await axiosClient.get(`/Library/download/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            responseType: 'arraybuffer',
        })
        const blob = new Blob([response.data], { type: 'application/pdf' })
        setPdfBlob(blob)
        setAccess(true)
    } catch (error) {
        console.log(error)
        setAccess(false)
    }
    setLoading(false)
}