import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import { useDispatch, useSelector } from 'react-redux'
import { setPayment } from '../../store/checkoutSlice'

function PaymentMethods({submitting,checkoutErrors, setCheckoutErrors}) {
    const dispatch = useDispatch()
    const {payment} = useSelector((state) => state.checkout)
    const [paymentMethods, setPaymentMethods] = useState([])
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
    const getPaymentMethods = async () => {
        try {
          const response = await axiosClient.get(`/PaymentMethod`)
          setPaymentMethods(response.data)
        } catch (err) {
          console.error(err)
        }
    }
    const handlePaymentChange = (e) => {
        setSelectedPaymentMethod(e.target.value)
    }
    useEffect(() => {
        if(selectedPaymentMethod){
            let result = paymentMethods.find(({ id }) => id === Number(selectedPaymentMethod));
            if(result){
                dispatch(setPayment({id: result.id, name:result.name}))
            }
        }
    },[selectedPaymentMethod])
    useEffect(() => {
        getPaymentMethods()
        if(!selectedPaymentMethod){
            setCheckoutErrors({ ...checkoutErrors, payment: 'Wybierz metodę płatności' });
        }
    },[])
    useEffect(() => {
        if (payment) {
            setSelectedPaymentMethod(payment.id);
          }
    },[payment])
    useEffect(() => {
        if (selectedPaymentMethod === null) {
            setCheckoutErrors({ ...checkoutErrors, payment: 'Wybierz metodę płatności' });
        } else {
            setCheckoutErrors((prevErrors) => {
                const { payment, ...newErrors } = prevErrors;
                return newErrors;
            });
        }
      }, [selectedPaymentMethod, submitting]);
  return (
    <>
    <div className='flex flex-col divide-border-top py-2 my-2'>
        <div className='flex items-center mt-2'>
            <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>3</span>
            <p className='text-xl font-semibold text-gray-600 mx-2'>Płatność</p>
        </div>
    </div>
    <div className='flex flex-col px-10'>
        <h2 className='font-semibold text-lg my-2'>Wybierz formę płatności</h2>
        <div className='grid grid-cols-2 gap-5'>
            {paymentMethods.map((item,index) => {
            return (
                <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                    </label>
                    <input type="radio" checked={selectedPaymentMethod === item.id} id={item.id} name="payment" value={item.id} onChange={handlePaymentChange} />
                </div>
            )
            })}
        </div>
        {submitting && checkoutErrors.payment && <p className='error-text'>{checkoutErrors.payment}</p>}
    </div>
    </>
  )
}

export default PaymentMethods
