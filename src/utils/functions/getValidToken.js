export const getValidToken = () => {
    const token = localStorage.getItem('token')
    if(token){
        return token
    }
}