import React from 'react'

import {BiUser} from 'react-icons/bi'

import {AiOutlineHeart} from 'react-icons/ai'
import Link from 'next/link'

import Cart from './Cart'
import OpenFavsMenu from './OpenFavsMenu'

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

           <OpenFavsMenu /> 
          
          <BiUser  className='text-[25px]'/>

          <Cart />
        </div>

      </nav>
    </header>
  )
}

export default Navbar