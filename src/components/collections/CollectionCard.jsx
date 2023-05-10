
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

const CollectionCard = ({title, prodsQty, img}) => {



  
  return (
    <Link href={'/'} className='collectionCard  max-h-[440px] max-w-[440px] p-5 px-7 flex flex-col bg-white rounded-3xl transition-all duration-200  hover:shadow-xl'>


      <div className='flex  justify-between pb-14 pt-5 '>

        
        <p className='text-sm text-gray-600 font-semibold'>{prodsQty} products </p>
      </div>

      <div className='mb-10  flex flex-col items-center gap-5 md:gap-0 md:mb-20 md:flex-row justify-between '>

        <div className=''>

          <span className='text-sm text-gray-500'>Manufacturer</span>
          <h5 className='text-3xl font-semibold '>{title}  </h5>
        </div>

        <div className='bg-[#F3F4F6]    rounded-3xl'>
          <Image width={500} height={500} alt={title} src={img} priority className='w-auto h-auto max-h-[150px]'/>
        </div>

      </div>

      <span className='collectionCard-link flex gap-2 items-end font-semibold'>See collection <AiOutlineArrowRight className='text-[20px]' /> </span>

    </Link>
  )
}

export default CollectionCard


