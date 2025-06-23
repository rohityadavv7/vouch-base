import React from 'react'
import avatar from "../../../public/avatar.png"

interface propsData{
    name?:string,
    content?:string,
    rating?:number
}

function TestimonialBanner(props:propsData) {
  return (
    <div className='w-full flex outline-1 outline-zinc-500/40 p-2 rounded-2xl'>
        <div>
            <img src={avatar as unknown as string}/>
        </div>

        <div>
            {
                props.content?
                (<div>{props.content}</div>)
                :
                (<div>Testing</div>)
            }
        </div>

        <div>
            {
               props.rating?
                (<div>{props.content}</div>)
                :
                (<div>5</div>) 
            }
        </div>
    </div>
  )
}

export default TestimonialBanner