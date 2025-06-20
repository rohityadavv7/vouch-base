import React from 'react'
import BillCards from './BillCards'

function Pricing() {
  return (
    <div className='h-fit lg:h-screen flex flex-col items-center p-6 absolute w-screen bg-black text-white'>
        <div className='text-[7rem] sm:text-9xl md:text-[11rem] lg:text-[14rem] w-full flex items-center justify-center mx-auto'>
            Pricing
        </div>

        <div className=' flex flex-col space-y-6 md:space-y-0 lg:flex-row gap-8 -mt-17 md:-mt-17 lg:-mt-23 items-center justify-center'>
          <BillCards
            plan={"Free"}
            subscription={"Free"}

            planBenefits={["3 customisable templates","upto 2 analysis metrics","customer support"]}
          />

          <BillCards
            plan={"Free"}
            subscription={"$9/m"}

            planBenefits={["3 customisable templates","upto 2 analysis metrics","customer support"]}
          />

          <BillCards
            plan={"Free"}
            subscription={"$19/m"}

            planBenefits={["3 customisable templates","upto 2 analysis metrics","customer support"]}
          />
        </div>
    </div>
  )
}

export default Pricing