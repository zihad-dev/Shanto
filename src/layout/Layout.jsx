
import Navber from './Navber'
import BottomPart from './BottomPart'
import { Outlet } from 'react-router-dom'

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