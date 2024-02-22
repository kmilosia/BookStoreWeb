import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from "react-icons/io5";
import { closeRentalModal } from '../store/rentSlice';
import axiosClient from '../utils/api/axiosClient';
import { getValidToken } from '../utils/functions/getValidToken';
import { showMessage } from '../store/messageSlice';
import { getPaymentMethods,getRentalTypes } from '../utils/api/dictionaryAPI';
import Spinner from '../components/elements/Spinner';
import { useNavigate } from 'react-router-dom';

function RentalModal() {
    const {rentalModal,rentProduct} = useSelector((state) => state.rent)
    const [types, setTypes] = useState([])
    const [paymentMethods, setPaymentMethods] = useState([])
    const [paymentLoading, setPaymentLoading] = useState(true)
    const [typesLoading, setTypesLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
    const [selectedType, setSelectedType] = useState(null)  
    const [choosePayment, setChoosePayment] = useState(false)  
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleCloseModal = () => {
        dispatch(closeRentalModal())
        setSelectedType(null)
        setChoosePayment(false)
        setSelectedPaymentMethod(null)
    }
    const handleInputChange = (e) => {
        setSelectedType(e.target.value)
        if(error !== ''){
            setError('')
        }
    }
    const handlePaymentChange = (e) => {
        setSelectedPaymentMethod(e.target.value)
        if(error !== ''){
            setError('')
        }
    }
    const rentBook = async (data) => {
        try {
            setLoading(true)
            const token = getValidToken();
            const response = await axiosClient.post('/Rental', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            setLoading(false)
            if(response.status === 200 || response.status === 204){
                dispatch(showMessage({title: "Książka została wypożyczona!"}))
                handleCloseModal()
                navigate('/biblioteka')
            }else{
                dispatch(showMessage({title: "Błąd podczas wypożyczania książki!", type: 'warning'}))
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }
    const handleRentBook = () => {
        if(selectedPaymentMethod){
            const today = new Date();
            const formattedDate = today.toISOString();
            const item = {
                bookItemID: rentProduct.id,
                paymentMethodID: Number(selectedPaymentMethod),
                rentalTypeID: Number(selectedType),
                startDate: formattedDate,
            }
            rentBook(item)
        }else{
            setError("Wybierz metodę płatności!")
        }
       
    }
    const handleNextStep = () => {
        if(selectedType){
            setChoosePayment(true)
        }else{
            setError("Wybierz czas wypożyczenia!")
        }
    }
    useEffect(() => {
        getRentalTypes(setTypes, setTypesLoading)
        getPaymentMethods(setPaymentMethods, setPaymentLoading)
      },[])
  return (
    rentalModal && (
    <div className='fixed z-[100000] top-0 left-0 w-screen h-screen bg-black/80 dark:text-white flex justify-center items-center lg:items-center'>
      <div className='w-full h-full max-h-full max-w-full lg:w-5/6 lg:max-w-5/6 lg:max-h-5/6 lg:h-auto grid grid-rows-[max-content_auto_max-content] py-5 px-10 bg-white dark:bg-midnight-800'>

        <div className='flex justify-between mt-2 mb-4'>
            <h1 className='text-2xl font-semibold'>Wypożycz</h1>
            <button onClick={handleCloseModal} className='text-2xl'><IoClose/></button>
        </div>

        {Object.keys(rentProduct).length > 0 &&
        <div className='grid grid-cols-[max-content_auto] gap-5 items-center h-full'>
            <img src={rentProduct.imageURL} className='w-auto h-80 object-contain rounded-md' />
            <div className='flex flex-col h-80 w-auto'>
                <h1 className='text-3xl font-semibold'>{rentProduct.title}</h1>
                <h2 className='text-xl font-light my-1'>{rentProduct.authors.map((item,index)=>{return(<span key={index}>{item.name} {item.surname}</span>)})}</h2>
                <h3 className='tex-xl font-semibold'>{rentProduct.fileFormat}</h3>
                <div className={`flex-col mt-auto ${!choosePayment ? 'flex' : 'hidden'}`}>
                <p className='my-2'>Wybierz czas wypożyczenia:</p>
                <div className='grid grid-cols-3 gap-3'>
                    {typesLoading ? <div className='bg-gray-100 dark:bg-midnight-900 rounded-md animate-pulse w-full h-20 col-span-3'/> :
                     types?.map((type,index) => {
                        return (
                        <div key={index} className='flex items-center justify-between w-full bg-gray-100 dark:bg-midnight-900 py-5 px-5 rounded-md'>
                            <label className='flex flex-col text-sm mr-5'>
                                <span>{type.name}</span>
                                <span className='font-semibold mt-1'>{type.price}zł</span>
                            </label>
                            <input type="radio" name="rentType" value={type.id} id={`rentType${type.id}`} onChange={handleInputChange} defaultChecked={type.id === selectedType}/>
                        </div>
                        )
                    })}
                </div>
                </div>
                <div className={`flex-col mt-auto ${choosePayment ? 'flex' : 'hidden'}`}>
                <p className='my-2'>Wybierz metodę płatności:</p>
                <div className='grid grid-cols-3 gap-3'>
                {paymentLoading ? <div className='bg-gray-100 dark:bg-midnight-900 rounded-md animate-pulse w-full h-20 col-span-3'/> :
                    paymentMethods && paymentMethods.slice(1).map((item,index) => {
                        return (
                        <div key={index} className='flex items-center justify-between w-full bg-gray-100 dark:bg-midnight-900 py-5 px-5 rounded-md'>
                            <label className='flex flex-col text-sm mr-5'>
                                <span>{item.name}</span>
                            </label>
                            <input type="radio" name="paymentMethod" value={item.id} id={`paymentMethod${item.id}`} onChange={handlePaymentChange} defaultChecked={item.id === selectedPaymentMethod}/>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        }
        <div className='w-full flex items-center justify-between mt-5 h-auto'>
            <p className='error-text'>{error}</p>
            {!choosePayment ?
            <button onClick={handleNextStep} className='purple-button w-max'>Następny krok</button> :
            <div className='flex'>
            <button onClick={() => {setChoosePayment(false)}} className='purple-button w-max mr-2'>Wróć</button>
            <button onClick={handleRentBook} className='purple-button w-max'>{loading ? <Spinner /> : <span>Opłać i wypożycz książkę</span>}</button>
            </div>
            }
        </div>
      </div>
    </div>
    )
  )
}

export default RentalModal
