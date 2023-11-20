import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SkipStepButton from '../../../components/buttons/SkipStepButton'
import PersonalInfo from '../../../components/carousel/register-carousel/PersonalInfo'
import Address from '../../../components/carousel/register-carousel/Address'
import MailingAddress from '../../../components/carousel/register-carousel/MailingAddress'
import { createCustomer, resetState } from '../../../store/userSlice'

function RegisterAccountInfo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const {loading,error,isAuth} = useSelector((state) => state.user)
  const [searchParams, setSearchParams] = useSearchParams()
  const userId = searchParams.get('userId')

  const [selectedGender, setSelectedGender] = useState('')   
  const [birthday, setBirthday] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [street, setStreet] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [postcode, setPostcode] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [mailingStreet, setMailingStreet] = useState('')
  const [mailingStreetNumber, setMailingStreetNumber] = useState('')
  const [mailingHouseNumber, setMailingHouseNumber] = useState('')
  const [mailingPostcode, setMailingPostcode] = useState('')
  const [mailingSelectedCity, setMailingSelectedCity] = useState('')
  const [mailingSelectedCountry, setMailingSelectedCountry] = useState('')


  const handleSkip = () => {
    if(activeSlide !== 2){
        handleNextSlide()
    }else{
        navigate('/')
    }
  }
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, 2))
  }
  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0))
  }
  // const handleChange = (e) => {
  //   setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(loginValidate(inputValues))
    setSubmitting(true)
  }
  const finishSubmit = () => {
    let data = {
      genderID: selectedGender,

    }
    dispatch(createCustomer(data,userId))
  }
  useEffect(() => {
    dispatch(resetState())
  }, [])
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && submitting) {
  //     finishSubmit();
  //   }
  // }, [errors])
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='login-header'>Uzupełnij swoje dane</h1>
    <form onSubmit={handleSubmit} className='w-full'>
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
    <div className="carousel-container" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
      <div className="carousel-slide">
        <PersonalInfo selectedGender={selectedGender} setSelectedGender={setSelectedGender} birthday={birthday} setBirthday={setBirthday} name={name} surname={surname} setName={setName} setSurname={setSurname}/>
      </div>
      <div className="carousel-slide">
        <Address street={street} setStreet={setStreet} streetNumber={streetNumber} setStreetNumber={setStreetNumber} houseNumber={houseNumber} setHouseNumber={setHouseNumber} postcode={postcode} setPostcode={setPostcode} selectedCity={selectedCity} setSelectedCity={setSelectedCity} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
      </div>
      <div className="carousel-slide">
      <MailingAddress mailingStreet={mailingStreet} setMailingStreet={setMailingStreet} mailingStreetNumber={mailingStreetNumber} setMailingStreetNumber={setMailingStreetNumber} mailingHouseNumber={mailingHouseNumber} setMailingHouseNumber={setMailingHouseNumber} mailingPostcode={mailingPostcode} setMailingPostcode={setMailingPostcode} mailingSelectedCity={mailingSelectedCity} setMailingSelectedCity={setMailingSelectedCity} mailingSelectedCountry={mailingSelectedCountry} setMailingSelectedCountry={setMailingSelectedCountry}/>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center lg:my-2'>
    <button type="submit" className={`purple-button w-[20rem] text-base ${activeSlide === 2 ? 'block' : 'hidden'}`}>
      <span>Wyślij</span>
    </button>
    <button type="button" onClick={handleNextSlide} className={`purple-button w-[20rem] text-base ${activeSlide === 2 ? 'hidden' : 'block'}`}>
      <span>Dalej</span>
    </button>
    <button type="button" onClick={handlePrevSlide} className={`text-button-link w-max text-base my-1 ${activeSlide === 0 ? 'opacity-0' : 'opacity-100'}`}>
      <span>Wstecz</span>
    </button>
  </div>
  </div>
  <SkipStepButton onClick={handleSkip}/>
  </form>
</div>
  )
}

export default RegisterAccountInfo
