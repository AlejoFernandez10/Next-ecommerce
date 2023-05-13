'use client'

import React, {useContext} from 'react'
import { FavContext } from '@/context/CartContext'
import FavsCard from './FavsCard'

const FavsContainer = () => {

  const [favs, setFavs] = useContext(FavContext)

  console.log(favs)

  return (
    <div className='w-full max-w-[1300px] flex flex-col  '>

      <ul className=' flex flex-col gap-10'>
        
      {favs.map((fav)=>(
        <li key={fav.id}>

          <FavsCard

            id={fav.id}
            name={fav.name}
            img={fav.img}
            desc={fav.desc}
            price={fav.price}
          />
        </li>
      ))}
      </ul>

    </div>
  )
}

export default FavsContainer