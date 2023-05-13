'use client'

import React, { useState, useContext, useEffect } from 'react'
import { FavContext } from '@/context/CartContext'
import {AiOutlineHeart} from 'react-icons/ai'
import FavsModal from './FavsModal'
const OpenFavsMenu = () => {

  const [favs, setfavs] = useContext(FavContext)
  const [open, setOpen] = useState(false)
  const [totalFavs, setTotalFavs] = useState(0)

    const openFavsMenu = ()=>{
      if(open === false){
        setOpen(true)
      }
      setTimeout(()=>{
        setOpen(false)
      },100)
    } 

    
     useEffect(()=>{

      if(favs){         
        
        setTotalFavs(favs.length)
      }
    }, [favs])



  return (
    <div>

    <button className='relative flex items-center' onClick={()=> openFavsMenu()}>
            
            <label htmlFor='fav ' className='absolute top-[-10px] right-[-10px] bg-teal-500 text-[13px] font-semibold text-white rounded-full max-h-[16px] px-1 flex items-center'> {totalFavs} </label>
            <AiOutlineHeart name='fav' className='text-[25px]' />
            
    </button>

    <FavsModal state={open} />
    </div>
  )
}

export default OpenFavsMenu