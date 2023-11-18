export const isAuthorised = () => {
    const auth = localStorage.getItem('isAuth')
    if(auth === 'true'){
        return true
    }else{
        return false
    }
}