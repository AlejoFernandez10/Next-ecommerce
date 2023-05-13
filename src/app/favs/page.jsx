import React from 'react'
import FavsContainer from '../../components/FavsContainer'

const page = () => {


  return (
    <div className='min-h-[100vh] w-full flex flex-col items-center '>

      <div className='pt-32 pl-10 w-full max-w-[1350px] flex flex-col items-start border-b pb-20 mb-10'>

          <h1 className='font-bold text-4xl mb-2'>Favs</h1>
          <p className='w-[70%] text-lg font-semibold  '>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
          
        </div>

      <FavsContainer />

    </div>
  )
}

export default page