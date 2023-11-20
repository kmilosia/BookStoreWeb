import React from 'react'

function Address() {
  return (
    <div className='w-full flex flex-col justify-center lg:items-center px-5 lg:px-0'>
    <h2 className='col-span-2 text-white text-xl font-light mb-3'>Adres zamieszkania</h2>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 w-full lg:w-[40rem]'>
      <div className="relative col-span-2">
        <input type="text" id='street' name='street' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='street' className="floating-form-label">Ulica</label>
      </div>
      <div className="relative">
        <input type="text" id='street' name='street number' className="floating-form-input peer" placeholder=" " />
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
  )
}

export default Address
