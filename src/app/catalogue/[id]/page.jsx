import React from 'react'
import Id from './Id'
import { getProducts } from '@/lib/productsFetch'






const page = async () => {


  async function fetchData(){
    const {products} = await getProducts()
    return products
  }
  
  const data = await fetchData()

  const dataParsed = JSON.parse(JSON.stringify(data))

  return (
    <div>
      
      <Id data={dataParsed} />

    </div>
  )
}

export default page