import React from 'react'
import { BiSolidLockOpen } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { RiKey2Fill } from 'react-icons/ri'

function AccessIconElement({icon}) {
  return (
    <div className='rounded-3xl p-1 bg-purple-500/50'>
        <div className='rounded-3xl bg-purple-500/90 text-white text-2xl lg:text-xl p-2 '>
            {icon === 'key' ? <RiKey2Fill />
            : icon === 'mail' ? <MdMail />
            : icon === 'lock' ? <BiSolidLockOpen />
            : <BsCheck2Circle />
            }
        </div>
    </div>
  )
}

export default AccessIconElement
