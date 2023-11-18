export const getValidToken = () => {
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/dostep/logowanie'
    }else{
        return token
    }
}