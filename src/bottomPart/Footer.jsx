import React from 'react'
import Container from '../component/Container'

const Footer = () => {
  return (
    <>
    <div className='w-full h-auto bg-[#2B384C] pt-[160px] mt-[-160px] relative z-10 mb-[50px]'>
        <Container>
            <div className='flex justify-between items-center text-white py-[40px]'>
                <div>logo</div>
                <div>list</div>
                <div>copyRight</div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Footer