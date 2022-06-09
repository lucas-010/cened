import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuDropdown({collapse, visible, id}) {
  console.log(id);
  return (
    <div>
        <ul className={`bg-[#EBECF0] top-52 left-44 text-center ${!(id === 1) ? 'hidden' : visible ? 'block' : 'hidden'} md:hover:block lg:hover:block fixed ${collapse ? 'lg:top-12' : 'lg:top-40'} md:top-56 rounded-b-lg mt-1 p-4 md:left-48 lg:left-52`}>
            <Link to='passoapasso'>
              <li className='p-2 text-base font-bold transition-colors ease-in delay-70 hover:bg-blue-800 hover:text-white rounded-xl'>Passo a Passo</li>
            </Link>
            <Link to={'programaeducacional'}>
              <li className='p-2 mt-1 text-base font-bold transition-colors ease-in delay-70 hover:bg-blue-800 hover:text-white rounded-xl'>Programa Educacional</li>
            </Link>
        </ul>
        <ul className={`bg-[#EBECF0] bottom-32 left-44 text-center ${!(id === 2) ? 'hidden' : visible ? 'block' : 'hidden'} md:hover:block lg:hover:block fixed ${collapse ? 'lg:top-12' : 'lg:top-40'} rounded-b-lg mt-1 p-4 lg:right-5 lg:bottom-auto lg:left-auto`}>
            <Link to='login'>
              <li className='p-2 text-base font-bold h-auto transition-colors ease-in delay-70 flex justify-center items-center hover:bg-blue-800 hover:text-white rounded-xl'>Já sou aluno</li>
            </Link>
            <Link to='register'>
              <li className='p-2 mt-5 text-base font-bold h-auto transition-colors ease-in delay-70 flex justify-center items-center hover:bg-blue-800 hover:text-white rounded-xl'>Não sou aluno</li>
            </Link>
        </ul>
    </div>
  )
}
