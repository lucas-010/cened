import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuDropdown({collapse, visible}) {
  return (
    <div className={`bg-[#F6B112] top-52 left-44 text-center ${visible ? 'lg:block md:block block' : 'hidden'} md:hover:block lg:hover:block fixed ${collapse ? 'lg:top-12' : 'lg:top-40'} md:top-56 rounded-b-lg mt-1 p-4 md:left-48 lg:left-72`}>
        <ul className=''>
            <Link to='passoapasso'>
              <li className='p-2 text-base font-bold h-auto transition-colors ease-in delay-70 flex justify-center items-center hover:bg-blue-800 hover:text-white rounded-xl'>Passo a Passo</li>
            </Link>
            <Link to={'programaeducacional'}>
              <li className='p-2 mt-5 text-base font-bold h-auto transition-colors ease-in delay-70 flex justify-center items-center hover:bg-blue-800 hover:text-white rounded-xl'>Programa Educacional</li>
            </Link>
        </ul>
    </div>
  )
}
