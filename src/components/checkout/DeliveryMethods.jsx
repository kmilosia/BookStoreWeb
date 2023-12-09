import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'
import { setDelivery } from '../../store/checkoutSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeliveryAddress from './DeliveryAddress'

function DeliveryMethods({submitting,checkoutErrors, setCheckoutErrors}) {
    const dispatch = useDispatch()
    const [deliveryMethods, setDeliveryMethods] = useState([])
    const {delivery} = useSelector((state) => state.checkout)
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null)
    const [sameAddress, setSameAddress] = useState(true)
    const getDeliveryMethods = async () => {
        try {
            const response = await axiosClient.get(`/DeliveryMethod`)
            setDeliveryMethods(response.data)
        } catch (err) {
        console.error(err)
        }
    }
    const handleDeliveryChange = (e) => {
        setSelectedDeliveryMethod(e.target.value)
    }
    const handleCheckboxChange = () => {
        setSameAddress(!sameAddress)
      }
    useEffect(() => {
        if(selectedDeliveryMethod){
            let result = deliveryMethods.find(({ id }) => id === Number(selectedDeliveryMethod));
            if(result){
                dispatch(setDelivery({id: result.id, name:result.name, price:result.price}))
            }
        }
    },[selectedDeliveryMethod])
    useEffect(() => {
        if (delivery) {
            setSelectedDeliveryMethod(delivery.id);
          }
    },[delivery])
    useEffect(() => {
        getDeliveryMethods()
        if(!selectedDeliveryMethod){
            setCheckoutErrors({ ...checkoutErrors, delivery: 'Wybierz metodę dostawy' });
        }
    },[])
    useEffect(() => {
        if (selectedDeliveryMethod === null) {
            setCheckoutErrors({ ...checkoutErrors, delivery: 'Wybierz metodę dostawy' });
        } else {
            setCheckoutErrors((prevErrors) => {
                const { delivery, ...newErrors } = prevErrors;
                return newErrors;
            });
        }
      }, [selectedDeliveryMethod, submitting]);
  return (
    <>
    <div className='flex flex-col my-2'>
        <div className='flex items-center'>
            <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>2</span>
            <p className='text-xl font-semibold text-gray-600 mx-2'>Dostawa</p>
        </div>
    </div>
    <div className='flex flex-col px-10'>
        <h2 className='font-semibold text-lg my-2'>Wybierz formę dostawy</h2>
        <div className='grid grid-cols-2 gap-5'>
        {deliveryMethods.map((item,index) => {
            return (
                <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                      <span className='font-semibold'>{item.price}zł</span>
                    </label>
                <input type="radio" checked={selectedDeliveryMethod === item.id} id={item.id} name="delivery" value={item.id} onChange={handleDeliveryChange} />
                </div>
            )
        })}
        </div>
        {submitting && checkoutErrors.delivery && <p className='error-text'>{checkoutErrors.delivery}</p>}
        {delivery && (delivery.name.includes('Dostawa') || delivery.name.includes('Kurier'))  &&
        <div className='flex flex-col'>
            <div className="filter-element-wrapper my-4">
                <input name="sameAddress" type="checkbox" checked={sameAddress} onChange={handleCheckboxChange} className="filter-checkbox"/>
                <label htmlFor="sameAddress" className="filter-element-label">Adres dostawy taki sam jak adres faktury</label>
            </div>
            {!sameAddress &&
                <DeliveryAddress submitting={submitting} checkoutErrors={checkoutErrors} setCheckoutErrors={setCheckoutErrors}/>
            }
        </div>
        }
    </div> 
    </>
  )
}

export default DeliveryMethods
