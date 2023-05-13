import React from 'react'
import MenCollections from './MenCollections'
import WomenCollection from './WomenCollection'
import SportsCollection from './SportsCollection'



const Collections = ({ btnActive}) => {

   
  return (
    <section className='w-full  m-auto p-4 max-w-[1350px]'>

        {btnActive === 'men' &&

          <MenCollections />
        }

        {btnActive === 'women' &&

          <WomenCollection />

        }

        {btnActive === 'sports' && 

          <SportsCollection />

        }

    
    </section>
  )
}

export default Collections