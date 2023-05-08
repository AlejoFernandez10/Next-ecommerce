'use client'

import React from 'react'

//SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import {FiSearch} from 'react-icons/fi'
import Hero1 from '../../public/hero1.webp'
import Hero2 from '../../public/hero2.webp'




const Hero = () => {
  return (

    <section className='min-h-[90vh]  bg-[#E3FFE6] w-full flex items-start justify-center'>

    <Swiper className=' mt-[12vh] lg:mt-[10vh]  m-auto   min-h-[85vh] '
    modules={[Navigation, Pagination, Scrollbar]}
    loop={true}
    autoplay={true}
    slidesPerView={1}
    centeredSlides={true}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >

      <SwiperSlide className='   flex m-0 justify-center'>

        <div className='w-[90%] flex flex-col justify-between    items-center lg:flex-row lg:ml-10'>

          <div className='ml-16  flex flex-col gap-4'>
            <span className='text-lg font-semibold '>In this season, find the best 🔥</span>
            <h1 className='text-[44px] md:text-6xl lg:text-7xl  pb-4  w-[90%]  font-semibold'>Exclusive collection for everyone</h1>

            <Link href={'/'} className=' bg-gray-900 text-white max-w-[200px] text-lg py-3.5  rounded-3xl font-semibold  flex items-center gap-3 px-3 justify-center'>Explore now  <FiSearch className='text-xl ' /> </Link>
          </div>
          <Image width={600} height={600} alt='Hero-1' src={Hero2} className='h-auto w-auto min-h-[500px] min-w-[500px] self-end' />
        </div>
      
      </SwiperSlide>


      <SwiperSlide className='   flex m-0 justify-center'>

        <div className='w-[90%] flex flex-col justify-between   items-center lg:flex-row lg:ml-10'>

          <div className='ml-16'>
            <span>In this season, find the best 🔥</span>
            <h1 className='text-[44px] md:text-6xl lg:text-7xl  pb-4  font-semibold'>Exclusive collection for everyone</h1>
            <Link href={'/'} className=' bg-gray-900 text-white max-w-[200px] text-lg py-3.5  rounded-3xl font-semibold  flex items-center gap-3 px-3 justify-center'>Explore now  <FiSearch className='text-xl ' /> </Link> 
          </div>
          <Image width={600} height={600} alt='Hero-1' src={Hero1} className='h-auto w-auto ' />
        </div>
      
      </SwiperSlide>

      <SwiperSlide className='   flex m-0 justify-center'>

        <div className='w-[90%] flex flex-col justify-between    items-center lg:flex-row lg:ml-10'>

          <div className='ml-16  flex flex-col gap-4'>
            <span className='text-lg font-semibold '>In this season, find the best 🔥</span>
            <h1 className='text-[44px] md:text-6xl lg:text-7xl  pb-4  w-[90%]  font-semibold'>Exclusive collection for everyone</h1>

            <Link href={'/'} className=' bg-gray-900 text-white max-w-[200px] text-lg py-3.5  rounded-3xl font-semibold  flex items-center gap-3 px-3 justify-center'>Explore now  <FiSearch className='text-xl ' /> </Link>
          </div>
          <Image width={600} height={600} alt='Hero-1' src={Hero2} className='h-auto w-auto min-h-[500px] min-w-[500px] self-end' />
        </div>

        </SwiperSlide>
    
    </Swiper>
    </section>
  )
}

export default Hero