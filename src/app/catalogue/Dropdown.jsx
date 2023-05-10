'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {AiFillCloseCircle} from 'react-icons/ai'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




 const Dropdown = ({title ,categories}) => {

  const [filterActiveName, setFilterActiveName] = useState(title)

  const [filterActive , setFilterActive] = useState(false)
  
  return (

    <Menu as="div" className="relative inline-block text-left z-20 ">
      <div className=''>
        <Menu.Button className={`flex  w-full justify-between gap-x-1.5 rounded-md ${filterActive ? 'bg-blue-50 ring-blue-300 text-[#0EA5E9]' :'bg-white ring-gray-300'} px-5 py-2 pl-8 pr-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  hover:bg-gray-50`}>
          {filterActiveName}

          {filterActive ? <AiFillCloseCircle onClick={()=> setFilterActive(false) & setFilterActiveName(title)} className='  h-5 w-5 ml-4 text-[#0EA5E9]' /> :  <ChevronDownIcon className={' h-5 w-5 ml-4  text-gray-400'} aria-hidden="true" />}
         
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute   mt-2 w-56 origin-top-right divide-y  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">

          {categories && categories.map((cat)=>(

            <Menu.Item key={cat.name} onClick={()=> setFilterActive(true)}>
              {({ active }) => (

                <div className='w-full flex justify-start items-start '>
                <button
                  
                  onClick={(()=>setFilterActiveName(cat.name))}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    ' px-4 py-2 text-base w-full font-semibold text-left '
                  )}
                >
                  {cat.name}
                </button>
                </div>
              )}
            </Menu.Item>
          ))}

            

           
          </div>
          
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default Dropdown