import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Add from '@/app/Icons/Add'
async function page() {
    const session = await getServerSession(authOptions)

  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-4 md:gap-2 mt-3 py-2 outline-1 outline-neutral-200 rounded-2xl bg-pearl relative text-black'>
       <div>
            <div className='text-2xl p-4 flex justify-between font-semibold  rounded-2xl w-full'>
                <div>
                    Settings 
                    <div className='text-sm mt-1 text-neutral-500 font-normal'>Settings and options for your application</div>
                </div>

                <div className='flex gap-2 cursor-pointer text-black px-4  outline-1 outline-neutral-200 rounded-2xl text-sm font-normal items-center'>
                    <Add/> Add Admin </div>
            </div>


            <div className='p-6'>
                {
                    session?.user?.roleType === "ADMIN" ?

                    // ADMIN-ONLY-ACTION
                    (<div>
                        <div className='outline-1 p-4 outline-neutral-200 rounded-2xl w-full bg-white/50 flex gap-4'>
                            <div className='text-2xl font-semibold p-2 w-[20%] border-r-[0.5px] border-neutral-300'>
                                    Super Admin Action
                                    <div className='text-orange text-sm font-normal'>handle with caution</div>
                            </div>
                            <div>
                                    <div className='text-neutral-500 lg:p-4'>
                                        You will lose all your data if you click on this button.
                                        and your application may stop working and will not be available to your clients
                                    </div>

                                    <div>
                                        <button className='px-6 py-2 rounded-2xl bg-orange hover:scale-101 transition-all duration-200 ease-in-out
                                        text-white mt-3 lg:mt-5 cursor-pointer'>
                                            DELETE APPLICATION DATA
                                        </button>
                                    </div>
                            </div>
                        </div>

                        <div className='mt-4 p-4 outline-1 outline-neutral-200 rounded-2xl'>
                            <div className='text-neutral-600 text-lg '>
                                Application Settings
                            </div>

                            <div className=' mt-8'>
                                <div className='text-neutral-900 flex flex-col space-y-4 md:space-y-0 md:flex-row  gap-6'>
                                    <div className='w-[100%] md:w-[40%]'>
                                        Announcements:
                                        <div className='text-sm text-neutral-400'>
                                            you can create accouncements from here
                                        </div>
                                    </div>

                                    <div className='w-[100%] sm:w-[90%] flex flex-col sm:gap-6 md:gap-0 sm:flex-row md:flex-col md:w-[50%]'>
                                        <input type="text" placeholder='write here...' className='w-full mt-2 p-4 outline-1 outline-neutral-200 rounded-xl'/>
                                        <button className='px-6 py-2 md:w-[70%] rounded-2xl mt-3 cursor-pointer bg-black text-white'>
                                            Create Announcement
                                        </button>
                                    </div>
                                </div>


                            </div>

                            <div className='mt-15 flex flex-col md:flex-row gap-6'>
                                <div className='w-[100%] md:w-[40%]'>
                                    Suspend/Ban
                                    <div className='text-sm text-neutral-400'>control your clients on your platform</div>
                                </div>

                                <div className='w-[100%] sm:w-[90%] md:w-[50%] sm:gap-6 md:gap-0 flex flex-col sm:flex-row md:flex-col'>
                                    <input type='text' placeholder='enter the client you want to suspend...' className='w-full mt-2 p-4 outline-1 outline-neutral-200 rounded-xl'/>

                                    <button className='px-6 py-2 md:w-[70%] rounded-2xl mt-3 cursor-pointer bg-black text-white'>
                                        Suspend Client
                                    </button>
                                </div>

                            </div>

                            <div className='mt-15 flex flex-col md:flex-row  gap-6'>
                                <div className='w-[100%] md:w-[40%]'>
                                    Set Testimonials
                                    <div className='text-sm text-neutral-400'>set max testimonials allowed for free tier</div>
                                </div>

                                <div className='w-[100%] sm:w-[90%] md:w-[50%] sm:gap-6 md:gap-0 flex flex-col sm:flex-row md:flex-col'>
                                    <input type='number' placeholder='set max testimonials...' className='w-full mt-2 p-4 outline-1 outline-neutral-200 rounded-xl'/>

                                    <button className='px-6 py-2 md:w-[70%] rounded-2xl mt-3 cursor-pointer bg-black text-white'>
                                        Set Testimonial
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>)
                    :

                    // CLIENT-ONLY-ACTION
                    (<div>

                    </div>)
                }
            </div>

       </div>

    </div>
  )
}

export default page