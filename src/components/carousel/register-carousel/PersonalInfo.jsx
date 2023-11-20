import React, { useEffect, useState } from 'react'
import axiosClient from '../../../utils/api/axiosClient'

function PersonalInfo({selectedGender,setSelectedGender,birthday,setBirthday,name,setName,surname,setSurname}) {
    const fetchGenders = async () => {
        try{
          const response = await axiosClient.get(`/Gender`)
          const genders = response.data.map(item => ({
            value: item.id,
            label: item.name
          }))
          setGenders(genders)
        }catch(err){
          console.error(err)
        }
    }
    const [genders,setGenders] = useState([])
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value)
    }
    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value)
    }
    useEffect(() => {
        fetchGenders()
    },[])
  return (
    <div className='w-full flex-col flex justify-center lg:items-center px-5 lg:px-0'>
    <h2 className='col-span-2 text-white text-xl font-light mb-3'>Dane osobowe</h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full lg:w-[40rem]'>
      <div className="relative">
        <input onChange={handleNameChange} value={name} type="text" id='name' name='name' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='name' className="floating-form-label">Imię</label>
      </div>
      <div className="relative">
        <input onChange={handleSurnameChange} value={surname} type="text" id='surname' name='surname' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='surname' className="floating-form-label">Nazwisko</label>
      </div>
      <div className="relative">
        <select value={selectedGender} onChange={handleGenderChange} id='gender' name='gender' className="floating-form-input peer" placeholder=" ">
        <option value=''>Wybierz płeć</option>
        {genders.map((gender) => (
            <option key={gender.value} value={gender.value}>
                {gender.label}
            </option>
        ))}
        </select>
        <label htmlFor='gender' className="floating-form-label">Płeć</label>
      </div>
      <div className="relative">
        <input onChange={handleBirthdayChange} value={birthday} type="date" id='birthday' name='birthday' className="floating-form-input peer" placeholder=" " />
        <label htmlFor='birthday' className="floating-form-label">Data urodzenia</label>
      </div>
      </div>
    </div>
  )

}

export default PersonalInfo
