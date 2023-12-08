import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartSummary from '../components/page-elements/CartSummary'
import axiosClient from '../utils/api/axiosClient'
import CheckoutSummary from '../components/page-elements/CheckoutSummary'

function Order() {
  const navigate = useNavigate()
  const [guest, setGuest] = useState(false)
  const [userChoice, setUserChoice] = useState(false)
  const {cart} = useSelector((state) => state.cart)
  const {isAuth} = useSelector((state) => state.user)
  const [deliveryMethods, setDeliveryMethods] = useState([])
  const [paymentMethods, setPaymentMethods] = useState([])
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
const getDeliveryMethods = async () => {
  try {
    const response = await axiosClient.get(`/DeliveryMethod`)
    setDeliveryMethods(response.data)
  } catch (err) {
    console.error(err)
  }
}
const getPaymentMethods = async () => {
  try {
    const response = await axiosClient.get(`/PaymentMethod`)
    setPaymentMethods(response.data)
  } catch (err) {
    console.error(err)
  }
}
const handleDeliveryChange = (e) => {
  setSelectedDeliveryMethod(e.target.value)
}
const handlePaymentChange = (e) => {
  setSelectedPaymentMethod(e.target.value)
}
useEffect(() => {
  getDeliveryMethods()
  getPaymentMethods()
}, [])
  useEffect(() => {
    if(cart.length <= 0){
      navigate('/koszyk')
    }
  },[cart])
  useEffect(()=>{
    if(isAuth || guest){
      setUserChoice(true)
    }
  },[guest, isAuth])
  return (
    <div className='default-page-wrapper'>
      <div className='default-page-container'>
        <div className='grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-5 2xl:gap-20'>
        <div className='flex flex-col'>
          { !userChoice &&
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-2 divide-border-bottom py-2'>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl font-semibold'>Jestem już klientem sklepu</h1>
                <p className='font-light text-center'>Zaloguj się do swojego konta aby kontynuować zakupy</p>
                <Link to='/dostep/logowanie' className='purple-button w-full'>Zaloguj się</Link>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl font-semibold'>Nowy klient</h1>
                <p className='font-light text-center'>Kontynuuj jako gość lub zarejestruj się w naszym sklepie</p>
                <Link to='/dostep/rejestracja' className='purple-button w-full'>Zarejestruj się</Link>
                <button onClick={()=>{setGuest(true)}} className='bordered-purple-button w-full'>Kontynuuj jako gość</button>
              </div>
            </div>
            }
            <div className='flex flex-col my-2'>
              <div className='flex items-center'>
                <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>2</span>
                <p className='text-xl font-semibold text-gray-600 mx-2'>Dostawa</p>
              </div>
            </div>

            <div className='flex flex-col divide-border-top py-2'>
              <h2 className='font-semibold text-xl my-2'>Wybierz formę dostawy</h2>
              <div className='grid grid-cols-2 gap-5'>
              {deliveryMethods.map((item,index) => {
                return (
                  <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                      <span className='font-semibold'>{item.price}zł</span>
                    </label>
                    <input type="radio" id={item.id} name="delivery" value={item.id} onChange={handleDeliveryChange} />
                  </div>
                )
              })}
              </div>
            </div>

            <div className='flex flex-col divide-border-top py-2 my-2'>
              <div className='flex items-center mt-2'>
                <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>3</span>
                <p className='text-xl font-semibold text-gray-600 mx-2'>Płatność</p>
              </div>
            </div>

            <div className='flex flex-col divide-border-top py-2'>
              <h2 className='font-semibold text-xl my-2'>Wybierz formę płatności</h2>
              <div className='grid grid-cols-2 gap-5'>
              {paymentMethods.map((item,index) => {
                return (
                  <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                    </label>
                    <input type="radio" id={item.id} name="payment" value={item.id} onChange={handlePaymentChange} />
                  </div>
                )
              })}
              </div>
            </div>

          </div>
          <CheckoutSummary selectedDeliveryMethod={selectedDeliveryMethod}/>
        </div>
      </div>
    </div>
  )
}

export default Order
