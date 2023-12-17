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
export const getFilteredBooks = async (filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getFilteredSortedBooks = async (form, sorting, filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?formIds=${form}&${sorting}${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
  
export const getDiscountedBooksList = async (sorting,filter,setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/All-Books?isOnSale=true&${sorting}${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }