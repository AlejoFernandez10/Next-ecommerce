'use client'

import React, { useState } from 'react'
import {BsGenderMale} from 'react-icons/bs'
import {BsGenderFemale} from 'react-icons/bs'

import {CgGym} from 'react-icons/cg'
import Collections from './collections/Collections'


const StartExploring = () => {

   const [btnActive, setBtnActive] = useState('men')

  return (
    <div className='w-full min-h-[50vh] bg-gray-100 rounded-[50px] flex flex-col items-center justify-center pb-20 ' >
      <h4 className='text-5xl pt-20 text-center font-semibold'>Start Exploring.</h4>

      {/* SUBCATEGORY FILTER BUTTONS */}

      <div className='w-full h-[6vh] mt-16 max-w-[700px] bg-white rounded-full flex items-center justify-around shadow-lg'>

        <button  onClick={()=> setBtnActive('men')} className={`flex cursor-pointer items-center gap-2 h-[6vh] justify-center w-full rounded-full ${btnActive === 'men' ? 'bg-black text-white' : 'bg-white text-black'}`}><BsGenderMale />   Men</button>
        
        <button  onClick={()=> setBtnActive('women')} className={`flex cursor-pointer items-center gap-2 h-[6vh] justify-center w-full rounded-full ${btnActive === 'women' ? 'bg-black text-white' : 'bg-white text-black'}`}><BsGenderFemale />   Women</button>

        <button  onClick={()=> setBtnActive('sports')} className={`flex cursor-pointer items-center gap-2 h-[6vh] justify-center w-full rounded-full ${btnActive === 'sports' ? 'bg-black text-white' : 'bg-white text-black'}`}><CgGym />   Sports</button>
      </div>



      <Collections btnActive={btnActive} />
     
    </div>
  )
}

export default StartExploring