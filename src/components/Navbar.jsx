import React from 'react'

import {BiUser} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import Link from 'next/link'

const Navbar = () => {

  const listLinks = [
    
    'Men',
    'Women',
    'Sports',
    'Explore'
  ]


  return (
    <header className='w-full flex justify-center items-center min-h-[8vh] z-[200] bg-gray-50 fixed bg-opacity-95'>

      <nav className='w-[95%] max-w-[1350px] flex justify-between px-4'>
        
        <Link href={'/'} className='text-2xl'>LOGO</Link>

        <ul className='flex gap-6 items-center'>

           {listLinks.map((link)=>(

            <Link key={link} href={`/catalogue`}>
             <li  className='font-semibold text-base'>{link}</li>
            </Link>
           ))} 

         
        </ul>

        <div className='flex gap-4 items-center'>

        <div className='relative flex items-center'>
            
            <label htmlFor='cart ' className='absolute top-[-10px] right-[-10px] bg-teal-500 text-[13px] font-semibold text-white rounded-full max-h-[16px] px-1 flex items-center'>0 </label>
            <AiOutlineHeart name='cart' className='text-[25px]' />
            
          </div>
          
          <BiUser  className='text-[25px]'/>

          <div className='relative flex items-center'>
            
            <label htmlFor='cart ' className='absolute top-[-10px] right-[-10px] bg-teal-500 text-[13px] font-semibold text-white rounded-full max-h-[16px] px-1 flex items-center'>0 </label>
            <AiOutlineShoppingCart name='cart' className='text-[25px]' />
            
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar