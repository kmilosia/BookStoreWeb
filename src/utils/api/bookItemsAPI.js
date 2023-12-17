import axiosClient from "./axiosClient"

export const getSearchResults = async (search,sorting,setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?searchPhrase=${search}&${sorting}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }