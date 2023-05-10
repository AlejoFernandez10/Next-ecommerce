'use client'


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import NewArrivals from './NewArrivals';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'


const DiscoverMore = ({data} ) => {

  

  const sliderItems = [
    {
      title:"Shop the latest from top brands",
      img:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.fa5c86b4.png&w=384&q=75",
      span:"Explore new arrivals",
      bgColor:"bg-yellow-100",
    },
    {
      title:"Give the gift of choice",
      img:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.fcd9d1db.png&w=384&q=75",
      span:"Digital gift cards",
      bgColor:"bg-red-100",
    },
    {
      title:"Up to 80% off retail",
      img:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.0ee67265.png&w=384&q=75",
      span:"Sale collection",
      bgColor:"bg-blue-100",
    },
    {
      title:"Up to 70% off retail",
      img:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.8cfc0955.png&w=384&q=75",
      span:"Sale collection",
      bgColor:"bg-green-100",
    }
  ] 

  return (

    <section className='min-h-[50vh] w-full  flex flex-col pb-20 z-0 justify-center items-center overflow-hidden' >

      <div className='m-auto w-full  max-w-[1300px]'>

        <h2 className='text-4xl  font-semibold pt-28 pb-16'>Discover More. <span className='text-gray-400'>Good things are waiting for you</span> </h2>

      </div>

    <div className='m-auto w-full z-0 relative max-w-[1300px] '>

    <Swiper className='  flex z-50 relative  '
      modules={[Navigation, Scrollbar]}          
      slidesPerView={2}    
      navigation={{clickable:true, prevEl:'.swiper-button-prev', nextEl:'.swiper-button-next'}}
      scrollbar={{ draggable: true }}
      >

        {sliderItems.map((item)=>(

          <SwiperSlide key={item.title} className={`flex flex-row p-8 min-w-[499px] mr-7 rounded-xl   max-w-[500px] min-h-[279px]  max-h-[285px] transition-all duration-200 hover:opacity-90   ${item.bgColor} cursor-pointer  shadow-inner-[100%]`}>
            
            <Link href={'/'} className='flex justify-between'>
              <div className='w-[45%]'>

                <span className=' text-gray-500'>{item.span}</span>
                <h3 className='font-semibold text-2xl mb-20 '>{item.title}</h3>
                <button className='bg-gray-50 text-gray-700 rounded-3xl shadow-lg hover:shadow-xl text-sm font-semibold py-3 px-7'>Show me all</button>
              </div>

            <Image width={200} height={200} src={item.img} alt={item.title} className='h-auto w-auto max-h-[240px] object-cover' />
            </Link>

 
          </SwiperSlide>
        ))}

            <div className='slider-controler '>

            <div className=''>

                  <AiOutlineArrowLeft  className='slider-arrow swiper-button-prev p-1.5 z-40' />
            </div>

            <div className=' mr-5'>
                  <AiOutlineArrowRight className='slider-arrow swiper-button-next  p-1.5  z-40' />

            </div>

            <div className='swiper-pagination'>

            </div>

            </div> 
    </Swiper>
    </div>

      
      <NewArrivals newArrivals={data} />
    </section>
  )
}

export default DiscoverMore