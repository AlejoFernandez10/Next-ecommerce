'use client'
import Image from 'next/image'
import React, {Fragment,useContext, useEffect, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { FavContext } from '@/context/CartContext'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Link from 'next/link'
const FavsMenu = ({state}) => {

  const [favs, setFavs] = useContext(FavContext)


  const [open, setOpen] = useState(false)


  useEffect(()=>{
    const checkState = ()=>{
      if(state === true){
        setOpen(state)
      } 
    }
  
    checkState()

  },[state])



    return (     
  
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[500] " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed left-0 inset-0 overflow-hidden ">
          <div className="absolute left-0 inset-0 overflow-hidden ">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full  ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 "
                enterFrom="translate-x-[-500px]"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 "
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-500px]"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-hidden bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-100"> <h3 className='text-black text-[25px]'>Favs</h3> </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            name='close notifications'
                            className="-m-2 p-2 text-gray-700 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-16">
                        <div className="flow-root">
                          <ul role="list" className="flex flex-col gap-y-5">

                            {favs.map((fav)=>(
                              <li key={fav.id} >
                                <Link href={`/catalogue/${fav.id}` } className="flex items-center gap-4" onClick={()=>setOpen(false)}>

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
                            
                                    <div className="flex flex-1 items-center justify-end gap-2">
                                      
                            
                                      <button className="text-gray-600 transition hover:text-red-600">
                                        <span className="sr-only">Remove item</span>
                            
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="h-4 w-4"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                </Link>

                            </li>
                            ))}

                            
                            

                          </ul>
                        </div>
                      </div>
                    </div>  
                    
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    )
  
}

export default FavsMenu