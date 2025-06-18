import React from 'react'
import X from '../Icons/X'
import Youtube from '../Icons/Youtube'
import Instagram from 'next-auth/providers/instagram'
import ArrowDown from '../Icons/ArrowDown'

function Socials() {
  return (
        <div className='mt-70 text-lg flex justify-between items-center w-full px-10'>
            <div className='select-none text-center pb-10'>
                Authenticity you can share.
            </div>

            <div>
                <div className='h-30 flex items-center justify-center w-30 border rounded-full'>
                    <div className='animate-bounce'>
                        <ArrowDown/>
                    </div>
                </div>
            </div>

            <div className='select-none pb-10'>
                <div className='flex gap-2 justify-around'>
                    <X/>
                    <Youtube/>
                    <Instagram/>
                </div>

                <div>
                    Best startup of 2025
                </div>
            </div>
        </div>
  )
}

export default Socials