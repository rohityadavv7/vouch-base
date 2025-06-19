import React from 'react'
import Check from '../Icons/Check'

interface billProps{
    plan:string,
    subscription:string,
    planBenefits:string[],
}

function BillCards(props:billProps) {
  return (
    <div className='rounded-xl min-w-xs bg-white/10 outline-1 p-8 flex flex-col space-y-4'>
        <div>{props.plan}</div>
        
        <div className='text-5xl tracking-wider'>{props.subscription}</div>

        <div className='flex flex-col py-6 space-y-8 text-xs'>
            {props.planBenefits.map((benefit,idx) => (
                <div key={idx} className='flex items-center gap-3'>
                    <div><Check/></div>
                    <div className='text-zinc-400'>{benefit}</div>
                </div>
            ))}
        </div>

        <div className='py-4 '>
            <button className='px-8 py-2 rounded-2xl bg-black text-white w-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default BillCards