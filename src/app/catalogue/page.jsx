import React from 'react'
import Filters from '../../components/Filters'
import { getProducts } from "@/lib/productsFetch"

const index = async () => {

  const fetchData = async ()=>{
    const {products} = await getProducts()
    return products
  }

  const data = await fetchData()

  const parseData = JSON.parse(JSON.stringify(data))
  
  
  return (
    <section className='min-h-[100vh] w-full flex flex-col items-center  '>
        
        <div className='pt-32 pl-10 w-full max-w-[1350px] flex flex-col items-start border-b pb-20'>
          <h1 className='font-bold text-4xl mb-2'>Collections</h1>
          <p className='w-[70%] text-lg font-semibold text-gray-500 '>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
          
        </div>

        <Filters data={parseData} />


    </section>
  )
}

export default index