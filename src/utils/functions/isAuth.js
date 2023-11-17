export const isAuth = () => {
    const auth = localStorage.getItem('isAuth')
    return auth !== null && auth === 'true';
}