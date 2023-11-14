import React from 'react'
import ReturnButton from '../../../components/buttons/ReturnButton'
import SkipStepButton from '../../../components/buttons/SkipStepButton'
import { Link, useNavigate } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import { useState } from 'react';


function RegisterAddress() {
  const [isPhoneNumber,setIsPhoneNumber] = useState(true)
  const [isAddress,setIsAddress] = useState(true)
  const [isCorespondenceAddress,setIsCorespondenceAddress] = useState(false)
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/dostep/rejestracja/potwierdzenie')
    }
    const handleDropdownPhone = (e) => {
      e.preventDefault()
      setIsPhoneNumber(!isPhoneNumber)
    }
    const handleDropdownButtonAddress = (e) => {
      e.preventDefault()
      setIsAddress(!isAddress)
    }
    const handleDropdownButtonCorespondenceAddress = (e) => {
      e.preventDefault()
      setIsCorespondenceAddress(!isCorespondenceAddress)
    }
  return (
    <>
    <ReturnButton />
    <div className='flex flex-col items-center justify-center'>
        <h1 className='login-header'>Podaj swój adres</h1>
        <form className='w-[35rem]'>

        <div className='flex justify-between items-center py-3 mt-2'>
            <h2 className='col-span-2 text-white text-xl font-medium'>Numer telefonu</h2>
            <button onClick={handleDropdownPhone}><FiChevronDown className='text-xl text-white cursor-pointer'/></button>
          </div>
          <div className={`${isPhoneNumber ? 'flex' : 'hidden'} flex-col`}>
            <div className="relative col-span-2">
                <input type="text" id='phone-input' name='phone' className="floating-form-input peer" placeholder=" " />
                <label for='phone-input' className="floating-form-label">Numer telefonu</label>
            </div>
          </div>

          <div className='flex justify-between items-center py-3'>
            <h2 className='col-span-2 text-white text-xl font-medium'>Adres zamieszkania</h2>
            <button onClick={handleDropdownButtonAddress}><FiChevronDown className='text-xl text-white cursor-pointer'/></button>
          </div>
          <div className={`${isAddress ? 'flex' : 'hidden'} flex-col`}>
            <div className='grid grid-cols-4 gap-3'>
            <div className="relative col-span-2">
                <input type="text" id='street-input' name='street' className="floating-form-input peer" placeholder=" " />
                <label for='street-input' className="floating-form-label">Ulica</label>
            </div>
            <div className="relative">
                <input type="text" id='street-number-input' name='street number' className="floating-form-input peer" placeholder=" " />
                <label for='street-number-input' className="floating-form-label">Numer ulicy</label>
            </div>
            <div className="relative">
                <input type="text" id='house-number-input' name='house number' className="floating-form-input peer" placeholder=" " />
                <label for='house-number-input' className="floating-form-label">Numer domu</label>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-3 my-3'>
            <div className="relative">
                <input type="text" id='postcode-input' name='postcode' className="floating-form-input peer" placeholder=" " />
                <label for='postcode-input' className="floating-form-label">Kod pocztowy</label>
            </div>
            <div className="relative">
                <select id='city-input' name='city' className="floating-form-input peer" placeholder=" ">
                  <option>Warszawa</option>
                  <option>Poznań</option>
                  <option>Katowice</option>
                </select>
                <label for='city-input' className="floating-form-label">Miasto</label>
            </div>
            <div className="relative">
                <select id='country-input' name='country' className="floating-form-input peer" placeholder=" ">
                  <option>Polska</option>
                  <option>Hiszpania</option>
                  <option>Holandia</option>
                </select>
                <label for='country-input' className="floating-form-label">Kraj</label>
            </div>
            </div>
            </div>

            <div className='flex justify-between items-center py-3'>
            <h2 className='col-span-2 text-white text-xl font-medium'>Adres korespondencyjny</h2>
            <button onClick={handleDropdownButtonCorespondenceAddress}><FiChevronDown className='text-xl text-white cursor-pointer'/></button>
          </div>
          <div className={`${isCorespondenceAddress ? 'flex' : 'hidden'} flex-col`}>
            <div className='grid grid-cols-4 gap-3'>
            <div className="relative col-span-2">
                <input type="text" id='corespondence-street-input' name='street' className="floating-form-input peer" placeholder=" " />
                <label for='corespondence-street-input' className="floating-form-label">Ulica</label>
            </div>
            <div className="relative">
                <input type="text" id='corespondence-street-number-input' name='street number' className="floating-form-input peer" placeholder=" " />
                <label for='corespondence-street-number-input' className="floating-form-label">Numer ulicy</label>
            </div>
            <div className="relative">
                <input type="text" id='corespondence-house-number-input' name='house number' className="floating-form-input peer" placeholder=" " />
                <label for='corespondence-house-number-input' className="floating-form-label">Numer domu</label>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-3 my-3'>
            <div className="relative">
                <input type="text" id='corespondence-postcode-input' name='postcode' className="floating-form-input peer" placeholder=" " />
                <label for='corespondence-postcode-input' className="floating-form-label">Kod pocztowy</label>
            </div>
            <div className="relative">
                <select id='corespondence-city-input' name='city' className="floating-form-input peer" placeholder=" ">
                  <option>Warszawa</option>
                  <option>Poznań</option>
                  <option>Katowice</option>
                </select>
                <label for='corespondence-city-input' className="floating-form-label">Miasto</label>
            </div>
            <div className="relative">
                <select id='corespondence-country-input' name='country' className="floating-form-input peer" placeholder=" ">
                  <option>Polska</option>
                  <option>Hiszpania</option>
                  <option>Holandia</option>
                </select>
                <label for='corespondence-country-input' className="floating-form-label">Kraj</label>
            </div>
            </div>
            </div>
          
            <button onClick={handleSubmit} type='submit' className='purple-button w-full mb-1 mt-3'>Zarejestruj się</button>
        </form>
        <SkipStepButton path="potwierdzenie"/>
    </div>
  </>
  )
}

export default RegisterAddress
