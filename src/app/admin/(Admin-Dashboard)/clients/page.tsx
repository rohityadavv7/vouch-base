import ClientCard from '@/app/Components/ClientCard'
import Filter from '@/app/Icons/Filter'
import React from 'react'

function page() {

    const totalClients:number = null;
    const subsriptionsCount:number = null;
    const revenue: number = null;
  return (
    <div className='text-black bg-pearl outline-1 outline-neutral-200 w-11/12 mx-auto mt-5 rounded-xl p-4'>
        
        {/* QUICK-TOGGLES */}
        <div className='border-b-[0.5px] flex flex-col space-y-3 pb-6 border-neutral-200'>
            
            <div className='justify-between flex '>
                <div className='text-xl font-semibold'>
                     Client Details
                </div>

                <div>
                    <div className='flex gap-2 items-center'>
                        <Filter/>
                        Filter
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                <div className='outline-1  outline-zinc-300 rounded-lg p-2 md:p-8'>

                    <div className='flex flex-col space-y-8'>
                        <div className=' text-sm md:text-2xl text-black'>Total clients:</div>
                        <div>
                            {
                                totalClients?
                                (totalClients)
                                :
                                (<div className='text-xl md:text-4xl text-orange font-semibold'> 20 </div>)
                            }
                        </div>
                    </div>

                </div>

                <div className='outline-1 outline-zinc-300 rounded-lg p-2 md:p-8'>

                    <div className='flex flex-col space-y-8'>
                        <div className='text-sm md:text-2xl text-black'>Active Subscriptions:</div>
                        <div>
                            {
                                subsriptionsCount?
                                (subsriptionsCount)
                                :
                                (<div className='text-xl md:text-4xl text-orange font-semibold'> 7 </div>)
                            }
                        </div>
                    </div>

                </div>

                <div className='outline-1 bg- outline-zinc-300 rounded-lg p-2 md:p-8'>

                    <div className='flex flex-col space-y-8'>
                        <div className='text-sm md:text-2xl text-black'>Total Revenue:</div>
                        <div>
                            {
                                revenue?
                                (revenue)
                                :
                                (<div className='text-xl md:text-4xl text-orange font-semibold'> $580 </div>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* CLIENTS-DATA */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 p-4'>
            <div>
                <ClientCard/>
            </div>

            <div>
                <ClientCard/>
            </div>
                        <div>
                <ClientCard/>
            </div>
                        <div>
                <ClientCard/>
            </div>            
        </div>
    </div>
  )
}

export default page