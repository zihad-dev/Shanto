import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router'
import BottomPart from './BottomPart'

const Layout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <BottomPart/>
    </>
  )
}

export default Layout