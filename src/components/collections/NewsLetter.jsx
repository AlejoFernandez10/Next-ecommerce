import React from 'react'
import Image from 'next/image'
import newsLetterImg from '../../../public/newsletter.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'

const NewsLetter = () => {
  return (
    <section className='min-h-[50vh] bg-white w-full flex justify-center mt-28 pb-20'>

      <div className='newsLetterContainer  max-w-[75%] rounded-3xl  h-[600px] flex justify-between p-20'>

        <div className='flex flex-col justify-center'> 
          <h6 className='text-5xl font-semibold mb-5'>Dont miss out on special offers</h6>
          <p className='text-gray-500 mb-8 text-lg'>Register to receive news about the latest, savings combos, discount codes...</p>

          <section className='flex flex-col gap-2 mb-10'>            

            <div className='flex gap-3'>

              <span className='rounded-3xl bg-violet-100 text-[13px] px-2 flex items-center text-violet-600 '>01</span>
              <p className='font-semibold text-lg text-gray-800'>Savings combos</p>
            </div>

            <div className='flex gap-3'>

              <span className='rounded-3xl bg-blue-100 text-[13px] px-2 flex items-center text-blue-600'>02</span>
              <p className='font-semibold text-lg text-gray-800'> Freeship</p>
            </div>

            <div className='flex gap-3'>

              <span className='rounded-3xl bg-red-100 text-[13px] px-2 flex items-center text-red-600'>03</span>
              <p className='font-semibold text-lg text-gray-800'>Premium magazines</p>
            </div>
            
          </section>

          <div className='w-full max-w-[350px] relative'>
            
           <input type="text" name="" id="" placeholder='Enter your email' className='font-semibold pl-4 rounded-full w-full max-w-[350px] min-h-[45px] border' />

            <button className='absolute right-2 bg-black h-[35px] w-[35px] justify-center flex rounded-full items-center  bottom-1  hover:opacity-90'><AiOutlineArrowRight className='text-white text-lg'/> </button>
          </div>
        </div>

        
        <Image width={500} height={500} alt='Newsletter image' src={newsLetterImg} className=' h-[150%] top-[-140px]  right-[-10%] w-auto relative' />

      </div>

    </section>
  )
}

export default NewsLetter