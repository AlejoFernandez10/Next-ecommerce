'use client'
import ProductDetails from '@/components/ProductDetails'
import React, { useState } from 'react'
import Image from 'next/image'
const Id = ({img, desc, price, name, stars, reviews, category}) => {

  const [sizeColor, setColorActive] = useState('Black')

  const [sizeActive, setSizeActive] = useState('XS')



  const sizes = [
    'XS',
    'S',
    'L',
    'M',
    'XL'
  ]

  return (
    <section className='pt-20'>
  <div className="relative mx-auto max-w-screen-xl px-4 py-8">
    <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <Image
          alt="Les Paul"
          width={1920}
          height={1080}
          src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="aspect-square h-auto w-auto rounded-xl object-cover bg-gray-100"
        />

        
      </div>

      <div className="sticky top-0">
        <strong
          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong>

        <div className="mt-8 flex justify-between">
          <div className="max-w-[50ch] space-y-2 flex-col">
            <h1 className="text-xl font-bold sm:text-2xl">
              Fun Product That Does Something Cool
            </h1>

            

            <div  className='flex  p-3 px-2 cursor-pointer'>
              <span className='text-green-500 rounded-lg  border-[2px] border-green-500 px-3 py-0.5 mr-7 font-semibold text-lg'>$120 </span>


              <div className='flex items-center gap-1 border-l-[2px] pl-5'>

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

                <div className='flex  items-center gap-3'>

                <span className='font-semibold'>4.6 </span>
                  
                <p className='text-xs underline'>(71 reviews)  </p>
                </div>
              </div>

      </div>
          </div>

          
        </div>

        

        <form className="mt-8 w-full">
          <fieldset>
            <legend className="mb-3 text-base font-medium text-gray-600 ">Color: <span className='font-bold text-black '>{sizeColor}</span>  </legend>

            <div className="flex flex-wrap gap-1 w-full">
              <label htmlFor="color_tt" className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_tt"
                  className="peer sr-only"
                  onClick={()=> setColorActive('Black')}
                />

                <span
                  className={`group inline-block rounded-xl border px-5 py-1 text-[17px] font-medium ${ sizeColor === 'Black' ? 'bg-[#0b94b6] text-white' : ''}`}
                >
                  Black
                </span>
              </label>

              <label htmlFor="color_fr" className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_fr"
                  className="peer sr-only"
                  onClick={()=> setColorActive('Green')}
                />

                <span
                  className={`group inline-block rounded-xl border px-5 py-1 text-[17px] font-medium ${ sizeColor === 'Green' ? 'peer-checked:bg-[#0b94b6] peer-checked:text-white' : ''}`}
                >
                  Green
                </span>
              </label>

              <label htmlFor="color_cb" className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_cb"
                  className="peer sr-only"
                  onClick={()=> setColorActive('Blue')}
                />

                <span
                  className={`group inline-block rounded-xl border px-5 py-1 text-[17px] font-medium ${ sizeColor === 'Blue' ? 'peer-checked:bg-[#0b94b6] peer-checked:text-white' : ''}`}
                >
                  Blue
                </span>
              </label>
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="mb-4 text-base font-mediumtext-gray-600 ">Size: <span className='font-bold text-black '>{sizeActive}</span> </legend>

            {/* -----  SIZES ---- */}

            <div className="flex flex-wrap gap-1">

              {sizes.map((size)=>(

              <label key={size} htmlFor={size} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id={size}
                  className="peer sr-only"
                  onClick={()=> setSizeActive(size)}
                />

                <span
                  className={`group inline-flex h-12 w-12 items-center justify-center rounded-lg border text-base font-medium ${ sizeActive === size ? 'bg-[#0b94b6] text-white' : ''}`}
                >
                  {size}
                </span>
              </label>
              ))}

              
            </div>
          </fieldset>

          <div className="mt-8 flex gap-4">

            <div className='bg-gray-100 w-full max-w-[140px] h-[60px] flex rounded-full px-4 items-center justify-between'>

                <button onClick={((e) => e.preventDefault())} className='text-xl font-semibold bg-white text-gray-500 px-3 pb-1 flex items-center justify-center rounded-full  text-center border-[1px] border-gray-500 '>-</button>  

              <label htmlFor="quantity" className="sr-only">Qty</label>

              <input
                type="number"
                id="quantity"
                min="1"
                value="1"
                className="w-12 rounded bg-transparent border-none  py-3 text-center text-lg [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />

              <button onClick={((e) => e.preventDefault())} className='text-xl font-semibold bg-white text-gray-500 px-2 pb-0.5 flex items-center justify-center rounded-full text-center border-[1px] border-gray-500 '>+</button> 

            </div>

            <button
              
              className="block rounded-full bg-black w-[50%] px-5 py-3 text-base sm:text-lg font-medium text-white hover:opacity-90"
            >
              Add to Cart
            </button>
          </div>
        </form>

        <ProductDetails />
      </div>
    </div>
  </div>
</section>
  )
}

export default Id