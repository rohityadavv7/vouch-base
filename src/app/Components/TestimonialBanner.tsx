import React from 'react'
import avatar from "../../../public/avatar.png"

interface propsData{
    name?:string,
    content?:string,
    rating?:number
}

function TestimonialBanner(props:propsData) {


  return (
    <div className='w-full md:px-4 lg:px-8 flex items-center justify-between bg-black text-white p-2 rounded-3xl'>
        <div className='flex gap-3 items-center'>
            <img src={avatar.src}/>
            <div className='text-xs'>
                {
                    props.name?
                    (<span>
                        {props.name}
                    </span>)
                    :
                    (<span>
                        Hannah Morgan
                    </span>)
                }
            </div>
        </div>

        <div className='text-xs'>
            {
                props.content?
                (<div>{props.content}</div>)
                :
                (<div>This testimonial content is for testing only.</div>)
            }
        </div>

        <div className='text-xs'>
            {
               props.rating?
                (<div>{props.rating}</div>)
                :
                (<div>5</div>) 
            }
        </div>
    </div>
  )
}

export default TestimonialBanner