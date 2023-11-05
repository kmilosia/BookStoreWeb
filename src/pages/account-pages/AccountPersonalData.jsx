import React from 'react'
import { useState } from 'react'

function AccountPersonalData() {
  const [deleteModule, setDeleteModule] = useState(false)
  const [isEdited, setIsEdited] = useState(false)
  const handleSaveClick = (e) => {

  }
  const handleEditClick = (e) => {
    e.preventDefault()
    setIsEdited(true)
  }
  const handleDeleteClick = (e) => {
    e.preventDefault()
    setDeleteModule(true)
  }
  return (
    <>
    <div className='flex flex-col px-5 py-5 bg-white rounded-md dark:bg-midnight-900'>
      <h1 className='text-xl mb-3 font-semibold text-center lg:text-start'>Konto użytkownika</h1>
      <form>
      <div className='w-full lg:w-3/4 lg:grid flex flex-col lg:grid-cols-2 gap-5'>
        <div className='flex flex-col'>
          <label htmlFor='name-input' className='label-input'>Imię</label>
          <input disabled={!isEdited} id='name-input' type='text' className='form-input' value='Janna'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='surname-input' className='label-input'>Nazwisko</label>
          <input disabled={!isEdited} id='surname-input' type='text' className='form-input ' value='Nowak'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='birthday-input' className='label-input'>Data urodzenia</label>
          {isEdited ? <input disabled={!isEdited} id='birthday-input' type='date' className='form-input' value='2023-05-23'/>
          : <input disabled={!isEdited} id='birthday-input' type='text' className='form-input' value='23-05-2023'/>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='gender-input' className='label-input'>Płeć</label>
          {isEdited ? <select disabled={!isEdited} id='gender-input' className='form-input'>
            <option defaultValue value='female'>Kobieta</option>
            <option value='male'>Mężczyzna</option>
            <option value='not specified'>Nie określono</option>
          </select>
          : <input disabled={!isEdited} id='gender-input' type='text' className='form-input' value='Kobieta'/>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email-input' className='label-input'>Email</label>
          <input disabled={!isEdited} id='email-input' type='text' className='form-input' value='nowaka@gmail.com'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='phone-input' className='label-input'>Numer telefonu</label>
          <input disabled={!isEdited} id='phone-input' type='text' className='form-input' value='+48736267667'/>
        </div>
        {isEdited ? 
        <div className='flex flex-col col-span-2'>
          <h1 className='mt-2 font-medium text-midnight-600 dark:text-midnight-400 border-t border-midnight-100 dark:border-midnight-800 py-3'>Adres zamieszkania</h1>
          <div className='flex flex-col lg:grid lg:grid-cols-3 gap-5'>
          <div className='flex flex-col'>
          <label htmlFor='street-input' className='label-input'>Ulica</label>
          <input id='street-input' type='text' className='form-input' value='Łychowa'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='streetnumber-input' className='label-input'>Numer ulicy</label>
          <input id='streetnumber-input' type='text' className='form-input' value='23'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='housenumber-input' className='label-input'>Numer domu</label>
          <input id='housenumber-input' type='text' className='form-input' value='5'/>
          </div><div className='flex flex-col'>
          <label htmlFor='postcode-input' className='label-input'>Kod pocztowy</label>
          <input id='postcode-input' type='text' className='form-input' value='09-990'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='city-input' className='label-input'>Miasto</label>
          <input id='city-input' type='text' className='form-input' value='Wyszków'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='country-input' className='label-input'>Kraj</label>
          <select id='country-input' className='form-input'>
            <option defaultValue value='Poland'>Polska</option>
            <option value='Spain'>Hiszpania</option>
          </select>
          </div>
          </div>
          <h1 className='mt-5 font-medium text-midnight-600 dark:text-midnight-400 border-t border-midnight-100 dark:border-midnight-800 py-3'>Adres korespondencyjny</h1>
          <div className='flex flex-col lg:grid lg:grid-cols-3 gap-5'>
          <div className='flex flex-col'>
          <label htmlFor='street-input' className='label-input'>Ulica</label>
          <input id='street-input' type='text' className='form-input' value='Łychowa'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='streetnumber-input' className='label-input'>Numer ulicy</label>
          <input id='streetnumber-input' type='text' className='form-input' value='23'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='housenumber-input' className='label-input'>Numer domu</label>
          <input id='housenumber-input' type='text' className='form-input' value='5'/>
          </div><div className='flex flex-col'>
          <label htmlFor='postcode-input' className='label-input'>Kod pocztowy</label>
          <input id='postcode-input' type='text' className='form-input' value='09-990'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='city-input' className='label-input'>Miasto</label>
          <input id='city-input' type='text' className='form-input' value='Wyszków'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='country-input' className='label-input'>Kraj</label>
          <select id='country-input' className='form-input'>
            <option defaultValue value='Poland'>Polska</option>
            <option value='Spain'>Hiszpania</option>
          </select>
          </div>
          </div>
        </div>
        :
        <div className='flex flex-col col-span-2'>
        <div className='flex flex-col'>
          <label htmlFor='address-input' className='label-input'>Adres zamieszkania</label>
          <input disabled={!isEdited} id='address-input' type='text' className='form-input' value='ul.Łychowa 25/3 09-990 Wyszków'/>
        </div>
        <div className='flex flex-col mt-5'>
          <label htmlFor='address-input' className='label-input'>Adres korespondencyjny</label>
          <input disabled={!isEdited} id='address-input' type='text' className='form-input' value='ul.Przybieska 13/3a 09-990 Wyszków'/>
        </div>
        </div>
        }
        {isEdited ? <button onClick={() => {setIsEdited(false)}} className='orange-button'>Zapisz</button>
        :  <button onClick={handleEditClick} className='orange-button'>Edytuj</button>
        }
        <button onClick={handleDeleteClick} className='delete-button'>Usuń konto</button>
      </div>
      </form>
    </div>
    {deleteModule &&
    <div className='fixed flex justify-center items-center top-0 right-0 w-full h-full z-100 bg-black/50'>
        <div className='bg-white px-10 py-10 rounded-md w-auto h-auto flex flex-col items-center justify-center dark:bg-midnight-800 mx-3 lg:mx-0'>
          <h1 className='text-xl font-semibold my-2 text-center lg:text-start'>Czy napewno chcesz usunąć konto?</h1>
          <p className='my-2 text-center w-full lg:w-3/4'>Konto zostanie dezaktywowane na 30 dni, a następnie zostanie permanentnie usunięte.</p>
          <div className='grid grid-cols-2 gap-3 my-2 w-full'>
            <button className='delete-button'>Usuń konto</button>
            <button onClick={() => setDeleteModule(false)} className='orange-button'>Anuluj</button>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default AccountPersonalData
