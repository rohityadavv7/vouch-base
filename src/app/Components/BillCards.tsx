import React from 'react'
import Check from '../Icons/Check'

interface billProps{
    plan?:string,
    subscription?:string,
    planBenefits?:string[],
}

function BillCards(props:billProps) {
  return (
    <div className='w-60 sm:w-70 md:min-w-xs bg-white-200 rounded-2xl bg-clip-padding 
    backdrop-filter backdrop-blur-sm bg-opacity-10 outline-amber-50/10 outline-1 p-4 sm:p-6 lg:p-8 flex flex-col space-y-2 md:space-y-4'>
        <div>{props.plan}</div>
        
        <div className='text-2xl md:text-4xl lg:text-5xl py-2 lg:py-6 border-amber-50/20 font-semibold border-b-1 tracking-wider'>{props.subscription}</div>

        <div className='flex flex-col py-2 space-y-3 md:py-6 md:space-y-8 text-xs'>
            {props.planBenefits?.map((benefit,idx) => (
                <div key={idx} className='flex items-center gap-3'>
                    <div><Check/></div>
                    <div className='text-zinc-400'>{benefit}</div>
                </div>
            ))}
        </div>

        <div className='py-1 lg:py-4 '>
            <button className='px-4 md:px-8 lg:py-2 rounded-2xl bg-amber-50/80 text-black w-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default BillCards