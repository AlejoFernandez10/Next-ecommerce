import React from 'react'



import Link from 'next/link'

import Cart from './Cart'
import OpenFavsMenu from './OpenFavsMenu'

import UserDropdown from './UserDropdown'


const Navbar = () => {

  const listLinks = [
    
    'Men',
    'Women',
    'Sports',
    'Explore'
  ]


  return (
    <header className='w-full fixed flex justify-center items-center min-h-[8vh] z-[150] bg-gray-50  bg-opacity-95'>

      <nav className='w-[95%] max-w-[1300px] flex justify-between pr-1 '>
        
        <Link href={'/'} className='text-2xl'>LOGO</Link>

        <ul className='flex gap-6 items-center'>

           {listLinks.map((link)=>(

            <Link key={link} href={`/catalogue`}>
             <li  className='font-semibold text-base'>{link}</li>
            </Link>
           ))} 

         
        </ul>

        <div className='flex gap-6 items-center relative'>


          


           <OpenFavsMenu  />
           
           <Cart />
        
           <UserDropdown />
           
        </div>

      </nav>
    </header>
  )
}

export default Navbar



