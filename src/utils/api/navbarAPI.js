import axiosClient from "./axiosClient";

export const getLinks = async (setLinks) => {
    try{
        const response = await axiosClient.get(`/NavBarMenuLinks`)
        if(response.status === 200 || response.status === 204){
        setLinks(response.data)
        }
    }catch(err){
        console.log(err)
    }
  }