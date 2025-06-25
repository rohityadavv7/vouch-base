import React from 'react'
import avatarImg from "../../../public/avatar.png"
import Mail from '../Icons/Mail'

interface clientProps{
    name?:string,
    profile?:string,
    email?:string,
    organisationsCount?:number
}

function ClientCard(props:clientProps) {
  return (
    <div className='outline-1 p-2 rounded-xl hover:scale-101 transition-all duration-300 hover:shadow-xl outline-neutral-200'>
        <div className='border-b-[0.5px] border-neutral-200 p-4'>
            <div className='flex gap-2 items-center'>
                <div>
                    {
                        props.profile?
                        (<img src={props.profile}/>)
                        :
                        (<img src={avatarImg.src} height={70} width={70}/>)
                    }
                </div>

                <div className='flex flex-col space-y-1'>
                    <div>
                        {
                            props.name?
                            (<div>{props.name}</div>)
                            :
                            (<div>James Brown</div>)
                        }
                    </div>
                    <div className='text-neutral-500'>
                        {
                            props.email?
                            (<div className='flex gap-2'>
                                <Mail/>
                                {props.email}
                            </div>)
                            :
                            (<div className='flex gap-2'>
                                <Mail/>
                                <div>
                                    james@gmail.com
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>

        <div className='text-lg text-sky-600 p-1 cursor-pointer flex justify-end'>
            see details
        </div>


    </div>
  )
}

export default ClientCard