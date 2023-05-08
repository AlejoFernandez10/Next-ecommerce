import React from 'react'
import CollectionCard from './CollectionCard'
import shortsImg from '../../../public/shorts.webp'
import sportshoesImg from '../../../public/sportshoes.webp'
import fitnescloths from '../../../public/fitnescloths.webp'

const SportsCollection = () => {


  const collections =[
    {
      title:'Outfits',      
      img:fitnescloths,
      prodsQty:'67'
    },
    {
      title:'Shorts',
      
      img:shortsImg,
      prodsQty:'48'
    },
    {
      title:'Shoes',
      
      img:sportshoesImg,
      prodsQty:'122'
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

export default SportsCollection