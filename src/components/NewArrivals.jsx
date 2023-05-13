'use client'


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Scrollbar } from 'swiper';
import { ToastContainer} from 'react-toastify'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';
import 'react-toastify/dist/ReactToastify.css';

const NewArrivals = ({newArrivals}) => {

  
  
  return (
    <div className='pt-32  '>

      <h3 className='text-4xl font-semibold '>New Arrivals. <span className='text-gray-500'>Backpacks & bags</span></h3>

      <Swiper className=' mt-8  z-50 h-[500px] max-w-[1300px]'
      modules={[Navigation, Scrollbar, ]}
      slidesPerView={4}         
      scrollbar={{ draggable: true }}
      >

      
     {newArrivals.slice(0,5).map((item)=>(

      <SwiperSlide key={item._id} className=''>

        <ProductCard
          key={item._id}
          id={item._id}
          img={item.img}
          name={item.name}
          desc={item.desc}
          price={item.price}
          reviews={item.reviews}
          stars={item.stars}
        />
      </SwiperSlide>
      
     ))}

      </Swiper>

      <ToastContainer 
          position="bottom-right"
          autoClose={1400}                  
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}

export default NewArrivals


