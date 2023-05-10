import React from 'react'
import CollectionCard from './CollectionCard'
import jacketsImg from '../../../public/jackets.webp'
import bagsImg from '../../../public/bags.webp'
import shoesImg from '../../../public/shoes.webp'


const MenCollections = () => {

  const collections =[
    {
      title:'Jackets',
      
      img:jacketsImg,
      prodsQty:'58'
    },
    {
      title:'Bags',
      
      img:bagsImg,
      prodsQty:'43'
    },
    {
      title:'Shoes',
      
      img:shoesImg,
      prodsQty:'122 '
    }
  ]
   

  return (
    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 m-auto'>
      
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

export default MenCollections