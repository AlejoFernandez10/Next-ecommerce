import React from 'react'
import CollectionCard from './CollectionCard'
import shortsImg from '../../../public/shorts.webp'
import bagsImg from '../../../public/bags.webp'
import shoesImg from '../../../public/shoes.webp'


const WomenCollection = () => {
  const collections =[
    {
      title:'Shoes',
      
      img:shoesImg,
      prodsQty:'122'
    },
    {
      title:'Shorts ',
      
      img:shortsImg,
      prodsQty:'46'
    },
    {
      title:'Bags',
      
      img:bagsImg,
      prodsQty:'71'
    }
  ]
  
  return (
    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-auto'>
      
      {collections.map((col) =>(

        <CollectionCard
          key={col.title}
          title={col.title}
          prodsQty={col.prodsQty}
          img={col.img}
        />
      ))}
    </div>
  )
}

export default WomenCollection