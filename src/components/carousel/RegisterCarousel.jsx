import React, { useState } from 'react';
import SkipStepButton from '../buttons/SkipStepButton';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  return (
    <div className='w-full flex-col flex justify-center lg:items-center px-5 lg:px-0'>
    <h2 className='col-span-2 text-white text-xl font-light mb-3'>Dane osobowe</h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full lg:w-[40rem]'>
      <div className="relative">
        <input type="text" id='name' name='name' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='name' className="floating-form-label">Imię</label>
      </div>
      <div className="relative">
        <input type="text" id='surname' name='surname' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='surname' className="floating-form-label">Nazwisko</label>
      </div>
      <div className="relative">
        <select id='gender' name='gender' className="floating-form-input peer" placeholder=" ">
          <option>Kobieta</option>
          <option>Mężczyzna</option>
          <option>Nieokreślono</option>
        </select>
        <label htmlFor='gender' className="floating-form-label">Płeć</label>
      </div>
      <div className="relative">
        <input type="date" id='birthday' name='birthday' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='birthday' className="floating-form-label">Data urodzenia</label>
      </div>
      </div>
    </div>
  );
}
const Address = () => {
  return (
    <div className='w-full flex flex-col justify-center lg:items-center px-5 lg:px-0'>
      <h2 className='col-span-2 text-white text-xl font-light mb-3'>Adres zamieszkania</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 w-full lg:w-[40rem]'>
        <div className="relative col-span-2">
          <input type="text" id='street-input' name='street' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='street-input' className="floating-form-label">Ulica</label>
        </div>
        <div className="relative">
          <input type="text" id='street-number-input' name='street number' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='street-number-input' className="floating-form-label">Numer ulicy</label>
        </div>
        <div className="relative">
          <input type="text" id='house-number-input' name='house number' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='house-number-input' className="floating-form-label">Numer domu</label>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-3 w-full lg:w-[40rem]'>
        <div className="relative">
          <input type="text" id='postcode-input' name='postcode' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='postcode-input' className="floating-form-label">Kod pocztowy</label>
        </div>
        <div className="relative">
          <select id='city-input' name='city' className="floating-form-input peer" placeholder=" ">
            <option>Warszawa</option>
            <option>Poznań</option>
            <option>Katowice</option>
          </select>
          <label htmlFor='city-input' className="floating-form-label">Miasto</label>
        </div>
        <div className="relative">
          <select id='country-input' name='country' className="floating-form-input peer" placeholder=" ">
            <option>Polska</option>
            <option>Hiszpania</option>
            <option>Holandia</option>
          </select>
          <label htmlFor='country-input' className="floating-form-label">Kraj</label>
        </div>
      </div>
    </div>
  );
}
const CorespondenceAddress = () => {
  return (
    <div className='w-full flex flex-col justify-center lg:items-center px-5 lg:px-0'>
    <h2 className='col-span-2 text-white text-xl font-light mb-3'>Adres korespondencyjny</h2>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 w-full lg:w-[40rem]'>
        <div className="relative col-span-2">
          <input type="text" id='corespondence-street' name='street' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='corespondence-street' className="floating-form-label">Ulica</label>
        </div>
        <div className="relative">
          <input type="text" id='corespondence-street-number' name='street number' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='corespondence-street-number' className="floating-form-label">Numer ulicy</label>
        </div>
        <div className="relative">
          <input type="text" id='corespondence-house-number' name='house number' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='corespondence-house-number' className="floating-form-label">Numer domu</label>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-3 w-full lg:w-[40rem]'>
        <div className="relative">
          <input type="text" id='corespondence-postcode' name='postcode' className="floating-form-input peer" placeholder=" " />
          <label htmlFor='corespondence-postcode' className="floating-form-label">Kod pocztowy</label>
        </div>
        <div className="relative">
          <select id='corespondence-city-input' name='city' className="floating-form-input peer" placeholder=" ">
            <option>Warszawa</option>
            <option>Poznań</option>
            <option>Katowice</option>
          </select>
          <label htmlFor='corespondence-city-input' className="floating-form-label">Miasto</label>
        </div>
        <div className="relative">
          <select id='corespondence-country-input' name='country' className="floating-form-input peer" placeholder=" ">
            <option>Polska</option>
            <option>Hiszpania</option>
            <option>Holandia</option>
          </select>
          <label htmlFor='corespondence-country-input' className="floating-form-label">Kraj</label>
        </div>
      </div>
    </div>
  );
}

function RegisterCarousel() {
  const navigate = useNavigate()
  const [activeSlide, setActiveSlide] = useState(0)

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
  return (
    <>
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
    <div className="carousel-container" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
      <div className="carousel-slide">
        <PersonalInfo />
      </div>
      <div className="carousel-slide">
        <Address />
      </div>
      <div className="carousel-slide">
        <CorespondenceAddress />
      </div>
    </div>
    <div className='flex flex-col justify-center items-center lg:my-2'>
    <button type="submit" className={`purple-button w-[20rem] text-base ${activeSlide === 2 ? 'block' : 'hidden'}`}>
      <span>Wyślij</span>
    </button>
    <button type="button" onClick={handleNextSlide} className={`purple-button w-[20rem] text-base ${activeSlide === 2 ? 'hidden' : 'block'}`}>
      <span>Dalej</span>
    </button>
    <button type="button" onClick={handlePrevSlide} className={`text-button-link w-max text-base my-1 ${activeSlide === 0 ? 'hidden' : 'block'}`}>
      <span>Wstecz</span>
    </button>
  </div>
  </div>
  <SkipStepButton onClick={handleSkip}/>
  </>
  );
}

export default RegisterCarousel;
