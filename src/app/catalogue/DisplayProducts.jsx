import ProductCard from '@/components/ProductCard'
import React from 'react'

const DisplayProducts = ({data}) => {


  console.log(data)

  return (
    <div className='w-full flex flex-col  items-center '>      

      <div className=' mt-12 w-full   gap-7 gap-y-10 max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'  >

     {data.map((item)=>(

      <div key={item._id} className=''>

        <ProductCard
          key={item._id}
          img={item.img}
          name={item.name}
          desc={item.desc}
          price={item.price}
          reviews={item.reviews}
          stars={item.stars}
        />
      </div>
      
     ))}

      </div>
       <button className=' mt-16 mb-10 bg-gray-900 text-white max-w-[200px] text-lg py-3.5  rounded-2xl font-semibold  flex items-center gap-3 px-7 justify-center transition-all duration-200 hover:opacity-90'>Show all  </button> 
    </div>
  )
}

export default DisplayProducts