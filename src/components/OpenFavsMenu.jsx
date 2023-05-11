'use client'

import React, { useState } from 'react'
import FavsMenu from './FavsMenu'
import {AiOutlineHeart} from 'react-icons/ai'
const OpenFavsMenu = () => {

  const [open, setOpen] = useState(true)

    const openNotisMenu = ()=>{
      if(open === false){
        setOpen(true)
      }
      setTimeout(()=>{
        setOpen(false)
      },100)
    }


  return (
    <div>

    <button className='relative flex items-center' onClick={()=> openNotisMenu()}>
            
            <label htmlFor='fav ' className='absolute top-[-10px] right-[-10px] bg-teal-500 text-[13px] font-semibold text-white rounded-full max-h-[16px] px-1 flex items-center'>0 </label>
            <AiOutlineHeart name='fav' className='text-[25px]' />
            
    </button>

    <FavsMenu state={open} />
    </div>
  )
}

export default OpenFavsMenu