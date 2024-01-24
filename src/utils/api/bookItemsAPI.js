import axiosClient from "./axiosClient"

export const getSearchResults = async (search,sorting,setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?SearchPhrase=${search}&${sorting}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getFilteredBooks = async (filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getFilteredSortedFormBooks = async (form,sorting, filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?FormIds=${form}&${sorting}${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
  export const getFilteredSortedBooks = async (sorting, filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?${sorting}${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  } 
export const getDiscountedBooksList = async (sorting,filter,setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?IsOnSale=true&${sorting}${filter}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
  }
export const getBookDetails = async (id, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store/${id}`)
        setData(response.data)
        setLoading(false)
    }catch(err){
        console.error(err)
    }
}
export const getBooksByBookId = async (id, setData) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?BookId=${id}`)
        setData(response.data)
    }catch(err){
        console.error(err)
    }
}