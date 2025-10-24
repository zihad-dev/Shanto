import React from 'react'
import Container from '../../component/Container'

const Better = () => {
  return (
   <>
   <div>
    <Container>
        <div className='flex items-center gap-[40px] my-20'>
            <div className='w-[60%]'>
             <div>
             <h1 className='text-4xl font-bold my-5'>Better way to <span className='text-red-500 cursor-pointer'>Grow</span> your website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis?</p>
             </div>
             <div>
            <h1 className='text-4xl font-bold my-5'>Better way to <span className='text-red-500 cursor-pointer'>Grow</span> your website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis?</p>
             </div>
            </div>
                 <div className='w-[40%] h-[400px] bg-red-500 rounded-[10px]'>img</div>
        </div>
    </Container>
   </div>
   </>
  )
}

export default Better