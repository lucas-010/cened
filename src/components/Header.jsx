import React from 'react'
import logo from '../book.png'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Header({setTranslateNavbar, translateNavbar}) {
  return (
    <div className='z-20'>
      <div className="flex justify-center bg-[#0000FF] h-20 w-screen items-center">
        <Link to={'/'}>
          <img src={logo} alt="Icone de um livro" className='w-16 h-16'/>
        </Link>
        <AiOutlineMenu onClick={()=> setTranslateNavbar(!translateNavbar)} className='absolute right-5 md:right-8 lg:hidden cursor-pointer block' color='#fff' size={45}/>
        <div className='hidden p-5 text-white lg:block'>
          <h1 className='font-bold'>CENTRO DE EDUCAÇÃO PROFISSIONAL</h1>
          <span>Cadastrada no MEC / SISTEC Brasília - Distrito Federal</span>
        </div>
      </div>
    </div>
  )
}
