'use client'

import React from 'react'
import {BiCategoryAlt} from 'react-icons/bi'
import {IoIosResize} from 'react-icons/io'
import {BiColorFill} from 'react-icons/bi'
import {BiSortAlt2 } from 'react-icons/bi'
import Dropdown from './Dropdown'
import DisplayProducts from './DisplayProducts'



export default async function Filters ({data}){

 const categories = {
  title:'Categories',
  subcategories:[
    {name:'All Categories'},
    {name:'Bags'},
    {name:'Jackets'},
    {name:'Shorts'},
    {name:'Shoes'}
  ]
 }
 const color = {
  title:'Colors',
  colors:[
    {name:'All Colors'},
    {name:'Black'},
    {name:'Green'},
    {name:'Blue'}
  
  ]
 }

 const sizes={
  title:'Sizes',
  sizes:[
    {name:'All Sizes'},
    {name:'Xs'},
    {name:'S'},
    {name:'L'},
    {name:'M'},
    {name:'Xl'}
  ]
 }

  
/* async function fetchData(){
  
  const {products} = await getProducts()
  return products
}

const prods = await fetchData()

const dataParsed = JSON.parse(JSON.stringify(prods))  */
 
 return (

    <section className='flex w-full flex-col  justify-center items-center'>
    
    <div className='max-w-[1300px] w-full flex justify-between pt-14 px-4'>

      <div className='flex gap-5'>

       <div className='relative flex items-center text-gray-500'>

          <BiCategoryAlt className='absolute z-30 left-2 ' />
          <Dropdown title={categories.title} categories={categories.subcategories} />

       </div>


       <div className='relative flex items-center '>

          <BiColorFill className='absolute z-30 left-2 text-gray-500' />
          <Dropdown title={color.title} categories={color.colors} />

        </div>



        <div className='relative flex items-center '>

          <IoIosResize className='absolute z-30 left-2 text-gray-500' />
          <Dropdown title={sizes.title} categories={sizes.sizes} />

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
