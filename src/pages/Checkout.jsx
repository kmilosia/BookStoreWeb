import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartSummary from '../components/page-elements/CartSummary'

function Order() {
  const navigate = useNavigate()
  const {cart} = useSelector((state) => state.cart)
  const {isAuth} = useSelector((state) => state.user)
  useEffect(() => {
    if(cart.length <= 0){
      navigate('/koszyk')
    }
  },[cart])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <div className='grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-5 2xl:gap-20'>

          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h1>Jestem już klientem sklepu</h1>
              <p>Zaloguj się do swojego konta aby kontynuować zakupy</p>
              <Link to='/dostep/logowanie' className='purple-button'>Zaloguj się</Link>
            </div>
            <h1>Nowy klient</h1>
            <p>Kontynuuj jako gość lub zarejestruj się w naszym sklepie</p>
            <Link to='/dostep/rejestracja' className='purple-button'>Zarejestruj się</Link>
            <button className='purple-button'>Kontynuuj jako gość</button>
          </div>
          <CartSummary/>

        </div>
      </div>
    </div>
  )
}

export default Order
