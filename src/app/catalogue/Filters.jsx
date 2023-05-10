'use client'

import React from 'react'
import {BiCategoryAlt} from 'react-icons/bi'
import {IoIosResize} from 'react-icons/io'
import {BiColorFill} from 'react-icons/bi'
import {BiSortAlt2 } from 'react-icons/bi'
import Dropdown from './Dropdown'
import DisplayProducts from './DisplayProducts'

const Filters = ({data}) => {

 const categories = {
  title:'Categories',
  cat1:''
 }
 const color = {
  title:'Colors'
 }

 const sizes={
  title:'Sizes'
 }

  return (

    <section className='flex w-full flex-col  justify-center items-center'>
    
    <div className='max-w-[1300px] w-full flex justify-between pt-14 px-4'>

      <div className='flex gap-5'>

       <div className='relative flex items-center '>

          <BiCategoryAlt className='absolute z-30 left-2 ' />
          <Dropdown title={categories.title}  />

       </div>


       <div className='relative flex items-center '>

          <BiColorFill className='absolute z-30 left-2 ' />
          <Dropdown title={color.title}  />

        </div>



        <div className='relative flex items-center '>

          <IoIosResize className='absolute z-30 left-2 ' />
          <Dropdown title={sizes.title}  />

        </div>

        

      </div>

      <div className='relative flex items-center'>
          <BiSortAlt2 className='absolute z-30 left-2 '/>
          <Dropdown title={'Sort'} />
      </div>
      
    </div>

    <div>
      <DisplayProducts data={data} />
    </div>


    </section>
  )
}

export default Filters