'use client'
import React, {useContext,useEffect,useState} from 'react'
import { FavContext } from '@/context/CartContext'
import Link from 'next/link'
import Image from 'next/image'
import {AiTwotoneHeart} from 'react-icons/ai'




const FavsModal = ({state}) => {

  const [favs, setFavs] = useContext(FavContext)
  
  const [open, setOpen] = useState(state)


  useEffect(()=>{
    const checkState = ()=>{
      if(state === true){
        setOpen(state)
      } 
    }
  
    checkState()

  },[state])

  const handleDelete = (id)=>{
    setTimeout(()=>{

      const newFavs = favs.filter((fav)=> fav.id !== id)
      setFavs(newFavs)
    }, 400)

  }

  if(favs.length === 0){
    return(
      <div className={`absolute  bg-white rounded-xl shadow-2xl  top-10 right-20 ${open ? 'inline' : 'hidden'}`}>

    <h4 className='px-4 mt-6 text-2xl pb-4 w-full flex justify-between font-semibold' >Favs     <button onClick={()=> setOpen(false)}>x</button>   </h4>
      
      <ul className='px-4 flex flex-col gap-3 overflow-y-auto min-h-[250px] justify-center items-center w-[350px] xl:h-[350px] xl:w-[400px]'>

        <li className='text-lg font-semibold mb-20'>No favs yet... </li>
      </ul>

      </div>
    )
  }else{

    return (
      <div className={`absolute  bg-white rounded-xl shadow-2xl  top-10 right-20 ${open ? 'inline' : 'hidden'}`}>
  
          <h4 className='px-4 mt-6 text-2xl pb-4 w-full flex justify-between font-semibold' >Favs     <button onClick={()=> setOpen(false)}>x</button>   </h4>
        <ul className='px-4 flex flex-col gap-3 overflow-y-auto min-h-[250px]    w-[350px] xl:h-[350px] xl:w-[400px]'>
  
        {favs.map((fav)=>(
          <li key={fav.id} >
          <div  className="flex items-center min-h-[80px] justify-between gap-4" >
  
      
            <Link href={`/catalogue/${fav.id}` } onClick={()=>setOpen(false)} className='flex gap-4' >
              
              <Image
              width={60}
              height={60}
              src={fav.img}
              alt={fav.desc}
              className="h-auto w-auto rounded object-cover bg-gray-100"
              />
  
  
                <div>
  
                <h3 className="text-base font-semibold text-gray-900">{fav.name}</h3>
      
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>
      
                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">Black</dd>
                  </div>
                </dl>
                </div>
            </Link>
  
      
              <div className="flex flex-col h-full items-end   gap-5">
                
      
                <button className="text-gray-600  transition hover:text-red-600" onClick={(()=> handleDelete(fav.id))}>
                  <span className="sr-only">Remove item</span>
  
                  
                  <AiTwotoneHeart className={`text-base z-[10] cursor-pointer text-red-600   bg-white rounded-full`} /> 
                  
                </button>
  
                <span className='font-semibold text-xs'> $ {fav.price}.00 </span>
              </div>
          </div>
  
      </li>
        ))}
        </ul>
  
        <div className='w-full flex justify-center border-t bg-white p-6 rounded-b-xl' onClick={(()=> setOpen(false))}>
          <Link  href={'/favs'} className=' px-4 py-2  bg-black rounded-lg text-white font-semibold'>View favs</Link>
        </div>
      </div>
    )
  }

}

export default FavsModal