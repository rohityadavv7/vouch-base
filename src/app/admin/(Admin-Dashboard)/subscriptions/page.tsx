import BillCards from '@/app/Components/BillCards'
import Check from '@/app/Icons/Check'
import React from 'react'

function page() {
  return (
    <div className='w-11/12 mx-auto bg-pearl mt-5 outline-1 outline-neutral-200 rounded-xl p-4 text-black'>
        {/* QUICK-TOGGLES */}
        <div>
            <div className='text-2xl font-semibold'>
                Subscription Stats
            </div>

            <div className='mt-4'>
                <div className='text-xl'>
                    Your Offerings:
                </div>

                <div className='flex justify-around mt-4'>

                    <div className='outline-1 outline-neutral-300 rounded-2xl'>
                        <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl
                             outline-amber-50/10 outline-1 p-2 sm:p-4 lg:p-6 flex flex-col space-y-2 md:space-y-3'>
                                <div>
                                    Free
                                </div>
                                
                                <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-3 border-amber-50/20 font-semibold border-b-1 tracking-wider'>
                                    $9/m
                                </div>

                                <div className='flex flex-col py-2 space-y-3 md:py-4 md:space-y-5 text-xs'>
                                    
                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-400'>

                                            </div>
                                        </div>
                                 
                                </div>

                                <div className='py-1 lg:py-2 '>
                                    <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-amber-50/80 text-black w-full'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                    </div>

                   <div className='outline-1 outline-neutral-300 rounded-2xl'>
                        <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl
                             outline-amber-50/10 outline-1 p-2 sm:p-4 lg:p-6 flex flex-col space-y-2 md:space-y-3'>
                                <div>
                                    Free
                                </div>
                                
                                <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-3 border-amber-50/20 font-semibold border-b-1 tracking-wider'>
                                    $9/m
                                </div>

                                <div className='flex flex-col py-2 space-y-3 md:py-4 md:space-y-5 text-xs'>
                                    
                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-400'>

                                            </div>
                                        </div>
                                 
                                </div>

                                <div className='py-1 lg:py-2 '>
                                    <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-amber-50/80 text-black w-full'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                    </div>

                    <div className='outline-1 outline-neutral-300 rounded-2xl'>
                        <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl
                             outline-amber-50/10 outline-1 p-2 sm:p-4 lg:p-6 flex flex-col space-y-2 md:space-y-3'>
                                <div>
                                    Free
                                </div>
                                
                                <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-3 border-amber-50/20 font-semibold border-b-1 tracking-wider'>
                                    $9/m
                                </div>

                                <div className='flex flex-col py-2 space-y-3 md:py-4 md:space-y-5 text-xs'>
                                    
                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-400'>

                                            </div>
                                        </div>
                                 
                                </div>

                                <div className='py-1 lg:py-2 '>
                                    <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-amber-50/80 text-black w-full'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page