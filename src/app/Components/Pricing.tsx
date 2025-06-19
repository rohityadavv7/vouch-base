import React from 'react'
import BillCards from './BillCards'

function Pricing() {
  return (
    <div className='h-screen p-6 absolute w-screen bg-black text-white'>
        <div className='text-[14rem] w-full flex items-center justify-center mx-auto'>
            Pricing
        </div>

        <div className='flex gap-4  items-center justify-center'>
          <BillCards
            plan={"Free"}
            subscription={"Free"}

            planBenefits={["3 customisable templates","upto 2 analysis metrics","customer support"]}
          />

          <BillCards
            plan={"Free"}
            subscription={"Free"}

            planBenefits={["3 customisable templates","upto 2 analysis metrics","customer support"]}
          />

          <BillCards
            plan={"Free"}
            subscription={"Free"}

            planBenefits={["3 customisable templates","upto 2 analysis metrics","customer support"]}
          />
        </div>
    </div>
  )
}

export default Pricing