"use client"
import React, { useState } from 'react'
import Menu from '../Icons/Menu'
import MenuClose from '../Icons/MenuClose'
import { useRouter } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Dashboard from '../Icons/Dashboard'
import Clients from '../Icons/Clients'
import Ogranisation from '../Icons/Ogranisation'
import Component from '../Icons/Component'
import Subscription from '../Icons/Subscription'
import Settings from '../Icons/Settings'

interface navProps{
    role:string
}

function Navbar(props:navProps) {

    const basePath = props.role === "ADMIN"?"admin":"client"
    
 
    const router = useRouter()
    const[menu, setMenu] = useState(false)
    const [selected, setSelected] = useState(false)
  return (

    <div className='flex w-11/12 justify-between  mx-auto mt-8 relative'>

            <div className={`${menu ? "flex h-screen w-[110vw] bg-black/40 z-1000 absolute -mt-8 sm:-mt-8 md:-mt-8 xl:-mt-8 -ml-7 sm:-ml-13 md:-ml-14 xl:-ml-15":"hidden"}`}>
                <div className='h-screen w-[40%] sm:w-[30%] md:w-[26%]  lg:w-[25%] flex flex-col space-y-4 rounded-r-xl sm:ml-5 md:ml-3 lg:ml-0 text-white bg-black p-6'>
                    <div className='flex cursor-pointer p-3 items-center sm:p-2 md:p-3 lg:p-4 justify-between rounded-xl sm:rounded-xl md:rounded-2xl
                      bg-zinc-800'>
                        <div className='text-xs sm:text-sm md:text-lg lg:text-xl'>
                            <div onClick={() => router.push("/")}>VouchBase.</div>
                        </div>
                        <div onClick={() => setMenu(false)}
                        className={`cursor-pointer`}>
                            <MenuClose/>
                        </div>
                    </div>

                    <div className='bg-zinc-800 text-xs p-3 rounded-xl sm:p-2 md:p-3 lg:p-4 sm:text-sm md:text-lg lg:text-xl sm:rounded-xl md:rounded-2xl'>
                        Profile
                    </div>

                    {/* MENUBAR-OPTION */}
                    <div className='p-4 flex cursor-pointer flex-col text-sm sm:text-md md:text-lg tracking-wide space-y-2'>
                        
                        <div onClick={() => router.push(`/${basePath}/dashboard`)}
                        className='rounded-2xl bg-black hover:bg-zinc-900 p-4 transition-all flex gap-4 items-center duration-200'>
                            <Dashboard/> Dashboard
                        </div>

                        <div className='rounded-2xl bg-black hover:bg-zinc-900 p-4 transition-all duration-200' 
                        onClick={() => router.push(`/${props.role === "ADMIN"?  `${basePath}/clients`:`${basePath}/organisations`}`)}>
                            {
                                props.role === "ADMIN"?
                                (<div className='flex items-center gap-4'><Clients/> Clients</div>)
                                :
                                (<div className='flex items-center gap-4'><Ogranisation/> Organisations</div>)
                            }
                        </div>

                        <div className='flex gap-4 items-center rounded-2xl bg-black hover:bg-zinc-900 p-4 transition-all duration-200' 
                        onClick={() => router.push(`/${basePath}/components`)}>
                             <div>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide size-7 lucide-component-icon lucide-component"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"/><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"/><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/></svg> 
                             </div>
                             Components
                        </div>

                        <div className=' flex items-center gap-4 rounded-2xl bg-black hover:bg-zinc-900 p-4 transition-all duration-200' 
                        onClick={() => router.push(`/${basePath}/subscriptions`)}>
                            <Subscription/> Subscription
                        </div>

                        <div className=' flex items-center gap-4 rounded-2xl bg-black hover:bg-zinc-900 p-4 transition-all duration-200' 
                        onClick={() => router.push(`/${basePath}/settings`)}>
                            <Settings/> Settings
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-1'>
                <div className='outline-1 rounded-full px-3 py-1 '>Menu</div>
                <div onClick={() => setMenu((prev) => !prev)}
                className='outline-1 rounded-full px-3 py-1 cursor-pointer'><Menu/></div>
            </div>

            <div className='hidden sm:flex text-2xl'>
                VouchBase
            </div>
            
            <div className='flex gap-2'>
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