import React, { useEffect, useState } from 'react'
import { setDeliveryMethod } from '../../store/checkoutSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveryMethods } from '../../utils/api/dictionaryAPI'

function DeliveryMethods({errors}) {
    const dispatch = useDispatch()
    const [deliveryMethods, setDeliveryMethods] = useState([])
    const {isElectronicPurchase} = useSelector((state) => state.checkout)
    const handleDeliveryChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const selectedDelivery = deliveryMethods.find(method => method.id === selectedId);
        if (selectedDelivery) {
            dispatch(setDeliveryMethod(selectedDelivery));
        }
    }
    useEffect(() => {
        if(isElectronicPurchase && deliveryMethods.length > 0){
            const selectedDelivery = deliveryMethods.find(method => method.id === 1);
            if (selectedDelivery) {
                dispatch(setDeliveryMethod(selectedDelivery));
            }
        }
    },[isElectronicPurchase, deliveryMethods])
    useEffect(() => {
        getDeliveryMethods(setDeliveryMethods)
    },[])

  return (
    <>
    <div className='flex flex-col'>
        <h2 className='font-semibold text-2xl my-4'>Wybierz metodę dostawy</h2>
        <div className='grid grid-cols-2 gap-5'>
        {isElectronicPurchase ?
                <div className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={deliveryMethods[0]?.id} className='flex flex-col'>
                      <span>{deliveryMethods[0]?.name}</span>
                      <span className='font-semibold'>{deliveryMethods[0]?.price}zł</span>
                    </label>
                <input type="radio" name="delivery" checked={true} onChange={handleDeliveryChange} />
                </div>
        :
        <>
        {deliveryMethods?.slice(1).map((item,index) => {
            return (
                <div key={index} className='flex items-center justify-between w-full bg-white dark:bg-midnight-800 py-5 px-5 rounded-md'>
                    <label htmlFor={item.id} className='flex flex-col'>
                      <span>{item.name}</span>
                      <span className='font-semibold'>{item.price}zł</span>
                    </label>
                <input type="radio" name="delivery" value={item.id} onChange={handleDeliveryChange} />
                </div>
            )
        })}
        </>}
        </div>
        {errors.delivery && <p className='error-text'>{errors.delivery}</p>}
    </div> 
    </>
  )
}

export default DeliveryMethods
