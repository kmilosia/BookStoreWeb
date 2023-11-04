import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from './import'


export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
