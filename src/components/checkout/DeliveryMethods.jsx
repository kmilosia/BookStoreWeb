import React, { useEffect, useState } from 'react'
import axiosClient from '../../utils/api/axiosClient'

function DeliveryMethods() {
    const [deliveryMethods, setDeliveryMethods] = useState([])
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null)
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
        console.log(e.target.value);
    }
    useEffect(() => {
        getDeliveryMethods()
    },[])
  return (
    <>
    <div className='flex flex-col my-2'>
        <div className='flex items-center'>
            <span className='rounded-full bg-white h-10 w-10 items-center flex justify-center border border-gray-300 text-lg font-semibold text-gray-600'>2</span>
            <p className='text-xl font-semibold text-gray-600 mx-2'>Dostawa</p>
        </div>
    </div>
    <div className='flex flex-col'>
        <h2 className='font-semibold text-lg my-2'>Wybierz formę dostawy</h2>
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
    </>
  )
}

export default DeliveryMethods
