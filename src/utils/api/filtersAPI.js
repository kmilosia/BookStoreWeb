import axiosClient from "./axiosClient";

export const getForms = async (setData) => {
    try {
      const response = await axiosClient.get(`/Form`);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }
export const getAvailabilities = async (setData) => {
    try {
      const response = await axiosClient.get(`/Availability`)
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }
export const getPublishers = async (setData) => {
    try {
      const response = await axiosClient.get(`/Publisher`);
      setData(response.data);
    } catch (err) {
      console.error(err)
    }
  }
export const getLanguages = async (setData) => {
    try {
      const response = await axiosClient.get(`/Language`)
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }
export const getCategories = async (setData) => {
    try {
      const response = await axiosClient.get(`/Category`)
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }
export const getAuthors = async (setData) => {
    try {
      const response = await axiosClient.get(`/Author`)
      setData(response.data)
    } catch (err) {
      console.error(err)
    }
  }