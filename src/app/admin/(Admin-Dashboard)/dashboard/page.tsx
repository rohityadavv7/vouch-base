
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Skeleton from '@/app/Components/Skeleton'
import TestimonialBanner from '@/app/Components/TestimonialBanner'
import Alert from '@/app/Icons/Alert'
import Component from '@/app/Icons/Component'
import Data from '@/app/Icons/Data'
import Ogranisation from '@/app/Icons/Ogranisation'
import Query from '@/app/Icons/Query'
import Smile from '@/app/Icons/Smile'
import VouchScore from '@/app/Icons/VouchScore'
import { getServerSession } from 'next-auth'
import React from 'react'

async function page() {
    
    const session = await getServerSession(authOptions)

    const recentTestimonials:string[] = [];
    const org:string = ""; 
    
  return (
    <div className='  w-11/12 h-fit lg:h-fit  mx-auto flex gap-4 md:gap-2 mt-3 py-2  bg-pearl text-black'>

        <div className='flex flex-col gap-4 bg-newBlue rounded-2xl p-2 md:p-4'>
            {/* GREETING */}
            <div className='flex justify-between px-4 mt-4'>
                <div className='text-2xl'>
                    Hello, <span className='text-2xl font-semibold'>{session?.user?.name}.</span>
                </div>

                {/* QUICK-ACTIONS     */}
                <div className='flex gap-4  items-center'>
                    <Alert/>
                    <Query/>
                </div>
            </div>
            
            <div className='flex gap-4 md:gap-2'>
                <div className='lg:w-[75%] sm:w-[60%] md:w-[65%] w-[50%]'>
                    {/* DASHBAORD CONTET */}
                    <div className='bg-newBlue rounded-2xl p-2 sm:p-1 lg:p-2'>

                        {/* ANALYTICS-METRICS */}
                        <div>
                            <div className='grid lg:grid-cols-4 md:grid-cols-2 w-full gap-6 lg:gap-4 mt-5'>
                                <div className='bg-iceBlue flex flex-col  gap-4 rounded-xl p-6 lg:p-4 lg:gap-2'>
                                    <div>
                                        <Ogranisation/>
                                    </div>

                                    <div className='text-2xl lg:text-xl p-2  flex flex-col space-y-2'>
                                        <div className='text-3xl font-semibold'>
                                            50+
                                        </div>

                                        <div className='text-lg text-neutral-700'>
                                            Total Organisations Registered.
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-iceBlue flex flex-col rounded-xl p-6 lg:p-4 lg:gap-2 gap-4'>
                                    <div>
                                        <Data/>
                                    </div>

                                    <div className='text-2xl lg:text-xl p-2  flex flex-col space-y-2'>
                                        <div className='text-3xl font-semibold'>
                                            100+
                                        </div>
                                        <div className='text-lg text-neutral-700'>
                                            Testimonials collected.
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-iceBlue flex flex-col rounded-xl p-6 lg:p-4 gap-4 lg:gap-2'>
                                    <div>
                                        <VouchScore/>
                                    </div>

                                    <div className='text-2xl lg:text-xl p-2  flex flex-col space-y-2'>
                                        <div className='text-3xl flex  gap-2 flex-col lg:gap-4'>
                                            <div className='font-semibold'>
                                                6.5
                                            </div>
                                            <span className='flex gap-1 rounded-full items-center text-xs px-2  bg-orange/80 text-white'>
                                                keep it above 7 <Smile/>
                                            </span>
                                        </div>
                                        <div className='text-lg text-neutral-700'>
                                            Your Vouch Score.
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-iceBlue flex flex-col rounded-xl p-6 lg:p-4 gap-4 lg:gap-2'>
                                    <div>
                                        <Component/>
                                    </div>

                                    <div className='text-2xl lg:text-xl p-2  flex flex-col space-y-2'>
                                        <div className='text-3xl font-semibold'>
                                            5
                                        </div>
                                        <div className='text-lg text-neutral-700'>
                                            Custom Components used so far.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RECENTS */}

                        <div className='w-ful mt-10'>
                            {
                                recentTestimonials?
                                (<div className='bg-iceBlue p-4 rounded-2xl '>
                                    <div className='md:text-xl sm:text-md lg:text-2xl'>
                                        Recent Testimonials.
                                    </div>
                                    <div className='w-full flex flex-col space-y-4 mt-5'>
                                        <TestimonialBanner/>
                                        <TestimonialBanner/>
                                        <TestimonialBanner/>
                                        <TestimonialBanner/>

                                    </div>
                                </div>)
                                :
                                (<div>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
                
                <div className='w-[50%] lg:w-[25%] md:w-[35%] sm:w-[40%] p-2 sm:p-1 md:p-2'>

                    <div className='mt-5 bg-black flex flex-col space-y-3 text-white p-6 rounded-2xl'>

                        <div className='sm:text-xs md:text-lg'>
                            Recent form status.
                        </div>

                        <div className='text-xs md:text-md text-neutral-300'>
                            Organisation: <div className='text-lg text-white mt-2'>{org?`${org}`:"Tokyo Corporation."}</div>
                        </div>

                        <div className='text-orange'>
                            sent
                        </div>
                        
                        <div className='px-6 py-2 text-xs md:text-md rounded-xl text-center bg-pearl text-black'>
                            View Status
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default page