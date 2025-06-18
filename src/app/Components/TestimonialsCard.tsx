import React from 'react'

interface cardProps{
    bgColor:string
}

function TestimonialsCard(props:cardProps) {

  return (
    <div className={`${props.bgColor} items-center select-none flex justify-center
    w-100 h-70 outline-1 rounded-3xl`}>
        Hey there
    </div>
  )
}

export default TestimonialsCard