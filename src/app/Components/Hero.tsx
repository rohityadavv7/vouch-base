"use client"
import React from 'react'
import Menu from '../Icons/Menu'
import TestimonialsCard from './TestimonialsCard'
import {motion,useMotionValueEvent, useScroll, useTransform} from "motion/react"
import X from '../Icons/X'
import Youtube from '../Icons/Youtube'
import Instagram from '../Icons/Instagram'
import ArrowDown from '../Icons/ArrowDown'

function Hero() {

    const {scrollYProgress} = useScroll()

    useMotionValueEvent(scrollYProgress,"change",(val)=> {
        console.log(val)
    })

    const mov1 = useTransform(scrollYProgress,[0,1],[1,-800])
  return (
    <div className='bg-pearl font-["Satoshi_Variable"] max-h-screen w-screen '>
        
        
        <div className='flex flex-col items-center justify-center  text-6xl '>
            
            
            <div className='h-[70vh] w-screen pb-00 mt-50  sticky top-60 z-100'>
                <div className='mx-auto flex flex-col items-center justify-center'>
                    <div className='select-none md:text-[5rem] lg:text-8xl'>
                        Make Trust Tangible.
                    </div>

                    <div className='text-lg sm:text-lg px-6 md:px-1 mt-6 text-zinc-500 w-full md:w-180 text-center'>
                        Add social proof to your landing page with just one click. Testimo helps you track, manage, and embed testimonials that matter.
                    </div>
                </div>

                <div className='mt-20 sm:mt-50 text-lg flex flex-col sm:flex-row justify-between items-center w-full px-10'>
                    <div className='select-none text-sm sm:text-sm md:text-lg text-center pb-10'>
                        Authenticity you can share.
                    </div>

                    <div>
                        <div className='sm:h-20 md:h-30 sm:w-20 p-4 md:p-0 md:w-30 flex items-center justify-center  border rounded-full'>
                            <div className='animate-bounce'>
                                <ArrowDown/>
                            </div>
                        </div>
                    </div>

                    <div className='select-none mt-4 sm:mt-0 pb-10'>
                        <div className='flex gap-2 justify-around'>
                            <X/>
                            <Youtube/>
                            <Instagram/>
                        </div>

                        <div className='text-sm md:text-lg sm:text-sm'>
                            Best startup of 2025
                        </div>
                    </div>
                </div>
            </div>

            <div className='min-h-[200vh] relative'>
                
                <div className='h-[100vh] w-screen sticky top-0 flex items-center justify-center'>
                    <TestimonialsCard bgColor='bg-black'/>
                </div>

                <div className='h-[100vh] w-screen sticky top-0 flex items-center justify-center '>
                    <TestimonialsCard bgColor='bg-black'/>
                </div>

                <div className='h-[100vh] w-screen sticky top-0 flex items-center justify-center '>
                    <TestimonialsCard bgColor='bg-black'/>
                </div>

                <div className='h-[100vh]'></div>

                {/* MARQUEE */}
               

               
            </div>

            

            
        </div>

    </div>
  )
}

export default Hero