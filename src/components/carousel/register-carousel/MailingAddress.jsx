import React from 'react'

function MailingAddress() {
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
  )
}

export default MailingAddress
