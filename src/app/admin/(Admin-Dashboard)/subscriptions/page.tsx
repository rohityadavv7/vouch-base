import BillCards from '@/app/Components/BillCards'
import Check from '@/app/Icons/Check'
import React from 'react'

function page() {
  return (
    <div className='w-11/12 mx-auto bg-pearl -z-30 mt-5 relative outline-1 outline-neutral-200 rounded-xl  text-black'>
        
        <div className='h-150 w-150 bg--300 blur-3xl -z-10 rounded-full left-1/2 top-1/2 absolute'></div>
        
        {/* QUICK-TOGGLES */}
        <div className='z-10 bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4'>
            <div className='text-2xl font-semibold bg-white'>
                Subscription Stats
            </div>

            {/* OFFERS */}
            <div className='mt-6'>
                <div className='text-xl'>
                    Your Offerings:
                </div>

                <div className='flex justify-around mt-4'>

                    <div className='outline-1 outline-neutral-300 rounded-2xl'>
                        <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl
                             outline-amber-50/10 outline-1 p-2 sm:p-4 lg:p-6 flex flex-col space-y-2 md:space-y-3'>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>
                                        Starter plan
                                    </div>
                                    <span className='bg-neutral-100 shadow-2xl items-center gap-2 w-fit px-2 rounded-full text-xs flex'>
                                        <div className='h-3 w-3 rounded-full bg-orange/50 flex items-center justify-center'>
                                            <div className='h-1 w-1 rounded-full bg-orange p-1'></div>
                                        </div>
                                        Free
                                    </span>
                                </div>
                                
                                <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-1 border-amber-50/20 font-semibold border-b-1 tracking-wider'>
                                    $9<span className='text-lg text-neutral-500'>/ month</span>
                                </div>

                                <div className='flex flex-col ml-5 py-2 space-y-3 md:py-3 md:space-y-5 text-xs'>
                                    
                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>
                                 
                                </div>

                                <div className='py-1 lg:py-2 '>
                                    <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-black text-white w-full'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                    </div>

                   <div className='outline-1 outline-neutral-300 rounded-2xl'>
                        <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl
                             outline-amber-50/10 outline-1 p-2 sm:p-4 lg:p-6 flex flex-col space-y-2 md:space-y-3'>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>
                                        Starter plan
                                    </div>
                                    <span className='bg-neutral-100 shadow-2xl items-center gap-2 w-fit px-2 rounded-full text-xs flex'>
                                        <div className='h-3 w-3 rounded-full bg-orange/50 flex items-center justify-center'>
                                            <div className='h-1 w-1 rounded-full bg-orange p-1'></div>
                                        </div>
                                        Free
                                    </span>
                                </div>
                                
                                <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-1 border-amber-50/20 font-semibold border-b-1 tracking-wider'>
                                    $9<span className='text-lg text-neutral-500'>/ month</span>
                                </div>

                                <div className='flex flex-col ml-5 py-2 space-y-3 md:py-3 md:space-y-5 text-xs'>
                                    
                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>
                                 
                                </div>

                                <div className='py-1 lg:py-2 '>
                                    <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-black text-white w-full'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                    </div>

                    <div className='outline-1 outline-neutral-300 rounded-2xl'>
                        <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl
                             outline-amber-50/10 outline-1 p-2 sm:p-4 lg:p-6 flex flex-col space-y-2 md:space-y-3'>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>
                                        Starter plan
                                    </div>
                                    <span className='bg-neutral-100 shadow-2xl items-center gap-2 w-fit px-2 rounded-full text-xs flex'>
                                        <div className='h-3 w-3 rounded-full bg-orange/50 flex items-center justify-center'>
                                            <div className='h-1 w-1 rounded-full bg-orange p-1'></div>
                                        </div>
                                        Free
                                    </span>
                                </div>
                                
                                <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-1 border-amber-50/20 font-semibold border-b-1 tracking-wider'>
                                    $9<span className='text-lg text-neutral-500'>/ month</span>
                                </div>

                                <div className='flex flex-col ml-5 py-2 space-y-3 md:py-3 md:space-y-5 text-xs'>
                                    
                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <div><Check/></div>
                                            <div className='text-zinc-700'>
                                                24/7 customer support
                                            </div>
                                        </div>
                                 
                                </div>

                                <div className='py-1 lg:py-2 '>
                                    <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-black text-white w-full'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* SUBSCRIBERS-DATA */}
            <div className='outline-1 outline-neutral-200 grid grid-cols-4
            rounded-2xl p-4 mt-10'>
                <div>
                    <div>
                        Client Name
                    </div>
                </div>

                <div>
                    <div>
                        Plan
                    </div>
                </div>

                <div>
                    <div>
                        Organisation registered
                    </div>
                </div>

                <div>
                    <div>
                        Plan Status
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page