import React from 'react'
import { Link } from 'react-router'

const Navber = () => {
  return (
   <>
   <div className='flex justify-between bg-white py-[20px]'>
    <div className='w-[20%] flex items-center justify-center'>MJI</div>
    <div className='w-[80%] flex justify-end'>
      <ul className='flex items-center gap-[24px] '> 
        <li className='px-[24px] py-[12px] bg-transparent'> <Link to={"/"}>Home</Link></li>
        <li className='px-[24px] py-[12px] bg-transparent'><Link to={"/About"}>About</Link></li>
        <li className='px-[24px] py-[12px] bg-transparent'>Process</li>
        <li className='px-[24px] py-[12px] bg-transparent'>Portfolio</li>
        <li className='px-[24px] py-[12px] bg-transparent'>Blog</li>
        <li className='px-[24px] py-[12px] bg-transparent'>Services</li>
        <button className='px-[24px] py-[12px] bg-[#A53DFF] rounded-1'>Contact</button>
      
      </ul>
    </div>
   </div>
   </>
  )
}

export default Navber