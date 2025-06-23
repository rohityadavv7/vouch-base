
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
    
  return (
    <div className='h-screen w-11/12 mx-auto  mt-3 py-2  bg-pearl text-black'>
        
        {/* DASHBAORD CONTET */}
        <div className='bg-newBlue rounded-2xl p-4'>
            
            {/* GREETING */}
            <div className='flex justify-between px-4'>
                <div className='text-2xl'>
                    Hello, <span className='text-2xl font-semibold'>{session?.user?.name}.</span>
                </div>

                {/* QUICK-ACTIONS     */}
                <div className='flex gap-4  items-center'>
                    <Alert/>
                    <Query/>
                </div>
            </div>

            {/* ANALYTICS-METRICS */}
            <div>
                <div className='grid grid-cols-4 w-full gap-6 mt-10'>
                    <div className='bg-iceBlue flex flex-col justify-around gap-4 rounded-xl p-6'>
                        <div>
                            <Ogranisation/>
                        </div>

                        <div className='text-2xl p-2  flex flex-col space-y-2'>
                            <div className='text-3xl font-semibold'>
                                50+
                            </div>

                            <div className='text-lg text-neutral-700'>
                                Total Organisations Registered.
                            </div>
                        </div>
                    </div>

                    <div className='bg-iceBlue flex flex-col rounded-xl p-6 gap-4'>
                        <div>
                            <Data/>
                        </div>

                        <div className='text-2xl p-2  flex flex-col space-y-2'>
                            <div className='text-3xl font-semibold'>
                                100+
                            </div>
                            <div className='text-lg text-neutral-700'>
                                Testimonials collected.
                            </div>
                        </div>
                    </div>

                    <div className='bg-iceBlue flex flex-col rounded-xl p-6 gap-4'>
                        <div>
                            <VouchScore/>
                        </div>

                        <div className='text-2xl p-2  flex flex-col space-y-2'>
                            <div className='text-3xl flex gap-4'>
                                <div className='font-semibold'>
                                    6.5
                                </div>
                                <div className='flex gap-1 rounded-full items-center text-xs px-2 bg-orange/80 text-white'>
                                    keep it above 7 <Smile/>
                                </div>
                            </div>
                            <div className='text-lg text-neutral-700'>
                                Your Vouch Score.
                            </div>
                        </div>
                    </div>

                    <div className='bg-iceBlue flex flex-col rounded-xl p-6 gap-4'>
                        <div>
                            <Component/>
                        </div>

                        <div className='text-2xl p-2  flex flex-col space-y-2'>
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
                        <div className='text-2xl'>
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
  )
}

export default page