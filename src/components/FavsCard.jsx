import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'

const FavsCard = ({id, img, name, category, price, desc}) => {


  return (
    <div  className="flex items-center h-full justify-between gap-4  " >

    
          <div className='flex  gap-6 ' >

            <div className='bg-gray-100 rounded-2xl'>

              <Image
              width={1920}
              height={1080}
              src={img}
              alt={desc}
              className="h-full min-h-[250px] max-h-[255px] w-auto max-w-[256px] rounded object-cover   scale-100 transition-all duration-200 hover:scale-110"
              />
            </div>


              <div className='pt-5 flex flex-col justify-between'>

                <div>

                  <h3 className="text-base font-semibold text-gray-900 md:text-2xl pb-6">{name}</h3>
                  <p className='font-semibold text-gray-500 md:text-[17px'>{desc}</p>
                </div>
              
                <Link href={`/catalogue/${id}`} className='text-[#0EA5E9]  font-semibold md:text-lg'>See Product</Link>
              </div>

          </div>

    
            <div className="flex flex-col min-h-[200px] items-end py-4  justify-between  gap-5">
              
    
              <button className="text-gray-600  transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                
                <AiTwotoneHeart className={`text-base z-[10] cursor-pointer text-red-600  md:text-2xl bg-white rounded-full`}/> 
                
              </button>

              <span className='font-semibold text-xs sm:text-lg'> $ {price}.00 </span>
            </div>
        </div>
  )
}

export default FavsCard