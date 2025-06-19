"use client"
import React, { useState } from 'react'
import Menu from '../Icons/Menu'
import MenuClose from '../Icons/MenuClose'

function Navbar() {

    const[menu, setMenu] = useState(false)
    const [selected, setSelected] = useState(false)
  return (

    <div className='flex w-11/12 justify-between  mx-auto mt-8 relative'>

            <div className={`${menu ? "flex h-screen w-screen bg-black/40 z-1000 absolute -mt-8 -ml-15 ":"hidden"}`}>
                <div className='h-screen w-[25%] flex flex-col space-y-4 rounded-r-xl text-white bg-black p-6'>
                    <div className='flex  p-4 justify-between rounded-2xl
                      bg-zinc-800'>
                        <div className='text-xl'>
                            <div>VouchBase.</div>
                        </div>
                        <div onClick={() => setMenu(false)}
                        className={`cursor-pointer`}>
                            <MenuClose/>
                        </div>
                    </div>

                    <div className='bg-zinc-800 p-4 rounded-2xl'>
                        Profile
                    </div>

                    {/* MENUBAR-OPTION */}
                    <div className='p-4 flex flex-col text-lg tracking-wide space-y-5'>
                        <div className='rounded-2xl'>
                            Testimonials
                        </div>

                        <div>
                            Organisations
                        </div>

                        <div>
                            Components
                        </div>

                        <div>
                            Subscription
                        </div>

                        <div>
                            Settings
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-1'>
                <div className='outline-1 rounded-full px-3 py-1 '>Menu</div>
                <div onClick={() => setMenu((prev) => !prev)}
                className='outline-1 rounded-full px-3 py-1 cursor-pointer'><Menu/></div>
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