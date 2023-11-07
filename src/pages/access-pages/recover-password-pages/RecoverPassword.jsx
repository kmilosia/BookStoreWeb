import React from 'react'
import ReturnButton from '../../../components/buttons/ReturnButton'
import { Outlet } from 'react-router-dom'

function RecoverPassword() {
  return (
    <>
      <ReturnButton />
      <Outlet />   
    </>
  )
}

export default RecoverPassword
