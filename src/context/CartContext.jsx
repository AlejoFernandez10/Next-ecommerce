'use client'


import React, {useState, useEffect, } from 'react'
import { createContext } from 'react'


export const Context = createContext(null)

export const FavContext = createContext(null)

const CartContext = ({children}) => {

  const [cart, setCart] = useState(()=>{
    let localCart ;

    if(typeof window !== 'undefined'){
      localCart = localStorage.getItem('cart')
    }
    try{  
      return localCart ? JSON.parse(localCart) : []
    }catch(e){
      console.error(e)
      return []
    }
    
  })

  useEffect(()=>{

    localStorage.setItem('Cart', JSON.stringify(cart))
  })



  const [favs, setFavs] = useState(() => {

    let savedFavs;
    
    if (typeof window !== 'undefined') {
      savedFavs = localStorage.getItem('favs');
    }
    try {
      return savedFavs ? JSON.parse(savedFavs) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  return (
    <Context.Provider value={[cart, setCart]}>
     <FavContext.Provider value={[favs, setFavs]}>

      {children}
      
      </FavContext.Provider> 
    </Context.Provider>
  )
}

export default CartContext