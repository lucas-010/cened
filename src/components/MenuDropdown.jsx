import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuDropdown({collapse, visible}) {
  return (
    <div className={`bg-[#d4d4d4] top-60 left-48 ml-2 rounded-t-lg ${visible ? 'lg:block md:block block' : 'hidden'} md:hover:block lg:hover:block fixed ${collapse ? 'lg:top-14 mt-0' : 'lg:top-40 mt-3'} rounded-b-lg lg:rounded-t-none mt-1 p-2 md:left-48 lg:left-64 lg:ml-5`}>
        <ul className=''>
            <Link to='passoapasso'>
              <li className='p-2 text-base font-bold transition-colors ease-in delay-70 hover:bg-blue-800 hover:text-white rounded-xl'>Passo a Passo</li>
            </Link>
            <Link to={'programaeducacional'}>
              <li className='p-2 mt-1 text-base font-bold transition-colors ease-in delay-70 hover:bg-blue-800 hover:text-white rounded-xl'>Programa Educacional</li>
            </Link>
        </ul>
    </div>
  )
}
