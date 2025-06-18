import React from 'react'
import Menu from '../Icons/Menu'

function Navbar() {
  return (
    <div className='flex w-11/12 justify-between  mx-auto mt-8'>
            <div className='flex gap-1'>
                <div className='outline-1 rounded-full px-3 py-1 '>Menu</div>
                <div className='outline-1 rounded-full px-3 py-1'><Menu/></div>
            </div>

            <div className=' text-2xl'>
                VouchBase
            </div>
            
            <div className='flex'>
                <div className='outline-1 px-3 py-1 rounded-full'>
                    Login
                </div>

                <div className='outline-1 px-3 py-1 bg-orange text-white rounded-full'>
                    Signup
                </div>
            </div>
        </div>
  )
}

export default Navbar