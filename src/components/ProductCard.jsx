import React, { useState, useContext } from 'react'
import Image from 'next/image'

import {AiOutlineHeart} from 'react-icons/ai'
import {AiTwotoneHeart} from 'react-icons/ai'
import Link from 'next/link'
import { Context, FavContext } from '@/context/CartContext'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({id,img, price, name, desc, reviews, stars, category, quantity}) => {


  const [liked, setLiked] = useState(false)

  const [cart, setCart] = useContext(Context)
  const [favs, setFavs] = useContext(FavContext)

  const [color, setColor] = useState('')

  const [activeSize, setActiveSize] = useState('')

  const [count , setCount ] = useState(()=>{
    return quantity > 0 ? quantity : 1
  });

  const talles = [
    'Xs',
    'S',
    'L',
    'M',
    'Xl'
  ]


  const addToCart = ()=>{

    setCart((currentItems) => {
      const isItem = currentItems.find((item) => item.id === id);
  
      if (isItem) {

        return currentItems.map((item) => {

          if (item.id === id) {
            return {
              ...item,
              qty: item.qty + count,
              size: activeSize
            };
          }
          return item; 
        });
      } else {
        return [
          {
            id,
            img,
            price,
            name,
            desc,
            reviews,
            stars,
            qty: count,
            category,
            size: activeSize
          },
          ...currentItems,
        ];
      }
    });

    toast.success('Added to cart!', {
      position: "bottom-right",
      autoClose: 1400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }

  const addToFav = ()=>{

    setFavs((currentItems)=>{

      const isItem = currentItems.find((item)=> item.id === id)

      if(isItem){
        
          currentItems.map((item)=>{
            if(item.id === id){
              return{
                ...item,
                
              }
            }
            
          })
        }else{
          return[
            {id,img, price, name, desc, reviews, stars,category},
            ...currentItems
          ]
        }
    })

    toast.success('Check your favs!', {
      position: "bottom-right",
      autoClose: 1400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }


  const removeFav = (id)=>{
    const newFavs = favs.filter((fav)=> fav.id !== id )

    setFavs(newFavs)

    toast.error('Item removed from favs!', {
      position: "bottom-right",
      autoClose: 1400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
  }

  

  return (
    <div  className='w-full   h-auto flex-col items-center max-w-[300px] max-h-[490px] '>

      {/* CARD IMAGE */}

      <div className='bg-gray-100 h-full w-full rounded-3xl relative'>
        
        <Link href={`/catalogue/${id}`} id='cardImages' className=' h-auto w-auto'  >

          <div>

          <Image width={400} height={400} alt={desc} src={img} className='h-auto  m-auto min-h-[319px] max-h-[320px] object-cover z-10 scale-100 transition-all duration-200 hover:scale-110' />
          </div>
          
          <div className='talles absolute bottom-5  gap-2 justify-center w-[250px] right-5 items-center z-0 ' >

            {talles.map((talle)=>(

              <button key={talle} onClick={((e )=> e.preventDefault()  & setActiveSize(talle) & addToCart())} className={`h-[40px] w-[80px]  shadow-lg rounded-xl flex items-center justify-center transition-all duration-200  hover:bg-gray-900 hover:text-white ${activeSize === talle ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <p className='text-base font-semibold '>{talle}</p>
              </button>

            ))}
          </div>
        </Link>

         <AiOutlineHeart className={`text-2xl z-[10] absolute top-4 right-4 cursor-pointer ${liked ? 'hidden' : 'inline'} bg-white rounded-full `} onClick={()=> setLiked(true) & addToFav()}/>
         <AiTwotoneHeart className={`text-2xl z-[10] absolute top-4 right-4 cursor-pointer text-red-600 ${liked ? 'inline' : 'hidden'}  bg-white rounded-full`} onClick={()=> setLiked(false) & removeFav(id)}/> 
      </div>


      {/*  PRODUCT COLOR PICKER */}

      <div className='p-2 z-10 px-2 mt-4 flex gap-1'>
         <div className={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${color === 'black' && 'border-black'} `} onClick={()=> setColor('black')}>
          <div className='absolute inset-0.5 rounded-full z-0 bg-black'></div>
         </div>

         <div className={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${color === 'green' && 'border-green-500' } `} onClick={()=> setColor('green')}>
          <div className='absolute inset-0.5 rounded-full z-0 bg-green-400'></div>
         </div>

         <div className={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${color === 'blue' && 'border-blue-500'} `} onClick={()=> setColor('blue')}>
          <div className='absolute inset-0.5 rounded-full z-0 bg-blue-400'></div>
         </div>
         

      </div>



      {/* INFO */}

      <Link href={'/'} className='flex flex-col  p-3 px-2 '>
        <h4 className='text-[17px] font-semibold'>{name} </h4>
        <p className='text-sm text-gray-500'>{desc} </p>
      </Link>


      {/* PRICE AND REVIEWS */}
      <Link href={'/'} className='flex w-full justify-between p-3 px-2 cursor-pointer'>
        <span className='text-green-600 rounded-lg bg-green-50 border border-green-600 px-2 p-1'>${price} </span>


        <div className='flex items-center gap-1'>

          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          {stars}
          <p className='text-xs'>({reviews} reviews)  </p>
        </div>

      </Link>

      
    </div>
  )
}

export default ProductCard