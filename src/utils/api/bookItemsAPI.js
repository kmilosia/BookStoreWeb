import { getValidToken } from "../functions/getValidToken"
import axiosClient from "./axiosClient"

export const getSearchResults = async (search,sorting,setData,setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?SearchPhrase=${search}&${sorting}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.error(err)
    }
    setLoading(false)
  }
export const getFilteredBooks = async (filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?${filter}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
export const getFilteredSortedFormBooks = async (form,sorting, filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?FormIds=${form}&${sorting}${filter}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
  export const getFilteredSortedBooks = async (sorting, filter, setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?${sorting}${filter}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  } 
export const getDiscountedBooksList = async (sorting,filter,setData, setLoading) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?IsOnSale=true&${sorting}${filter}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
  }
export const getBookDetails = async (id, setData, setLoading) => {
    try{
        const token = getValidToken();
        const response = await axiosClient.get(`/BookItems/Store/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
    setLoading(false)
}
export const getBooksByBookId = async (id, setData) => {
    try{
        const response = await axiosClient.get(`/BookItems/Store?BookId=${id}`)
        if(response.status === 200 || response.status === 204){
        setData(response.data)
        }
    }catch(err){
        console.log(err)
    }
}