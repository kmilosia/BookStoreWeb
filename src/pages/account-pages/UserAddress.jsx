import React, { useEffect, useState } from 'react'
import { fetchUserAddress } from '../../utils/api/userAPI'
import NewAddress from './NewAddress'
import AddNewAddressButton from '../../components/buttons/AddNewAddressButton'
import PageLoader from '../../components/elements/PageLoader'
import AddressForm from '../../components/forms/AddressForm'

function UserAddress() {
    const [address, setAddress] = useState([])
    const [error, setError] = useState({})
    const [isAdding, setIsAdding] = useState(false)
    const [loading, setLoading] = useState(true)
    const handleAfterAddedNewAddress = () => {
        fetchUserAddress(setAddress, setError, setLoading)
        setIsAdding(false)
      }
    useEffect(() => {
        fetchUserAddress(setAddress, setError, setLoading)
        console.log(address);
    },[])
  return (
    loading ? <PageLoader /> :
    <div className='flex flex-col px-10 py-10 bg-white rounded-md dark:bg-midnight-900'>
      <div className='flex flex-col w-full 2xl:w-3/4'>
      {address && address.length > 0 ?
      <div className='flex flex-col'>
        {address.map((item, index) => {
          return (
            <AddressForm key={index} item={item} />
          )
        })}
      </div>
      :
      <>{isAdding ? <NewAddress handleAfterAddedNewAddress={handleAfterAddedNewAddress}/> : <AddNewAddressButton onClick={() => setIsAdding(true)} />}</>
      }
      </div>
    </div>
  )
}

export default UserAddress
