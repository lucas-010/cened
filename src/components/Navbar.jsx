/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import ListItem from './ListItem'
import {AiOutlineUser} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Navbar({translateNavbar}) {
  const listText = [
    {text: 'Início', link: ''},
    {text: 'Instituição', link: 'instituicao'},
    {text: 'Cursos', link: 'cursos'},
    {text: 'Como Funciona', link: 'comofunciona'},
    {text: 'Programa Educacional', link: 'programaeducacional'},
    {text: 'Contato', link: 'contato'},
    {text: 'Trabalhe Conosco', link: 'trabalheconosco'}
  ]
  return (
    <div className={`absolute ${translateNavbar ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 h-screen overflow-y-auto right-0 transition-transform lg:flex lg:items-center lg:relative px-4 justify-between bg-blue-600 lg:p-0 lg:right-0 text-white md:p-4 lg:h-16`}>
        <div className="navbar-links lg:items-center lg:h-full">
          <ul className='flex flex-col lg:flex-row h-full'>
            {listText.map((item, key)=>{
              return <ListItem text={item.text} link={item.link} key={key}/>
            })}
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center p-2">
            <Link to="/login" className='transition mt-3 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-center duration-300 lg:mr-6 lg:mt-0 flex items-center bg-zinc-800 p-2 rounded-xl'>
              <AiOutlineUser size={30}/> <span>ÁREA DO ALUNO</span>
            </Link>
            
            <a href='https://cenedpenitenciario.azurewebsites.net/Home/LoginAgentePenitenciario' target='_blank' className="transition text-center mt-3 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:mr-6 lg:mt-0 flex items-center bg-zinc-800 p-2 rounded-xl">
              <FiUsers size={30}/> <span>PENITENCIÁRIA</span>
            </a>

            <Link to='/cursos' className='hover:bg-white text-center mt-3 lg:mt-0 lg:mr-6 transition-colors hover:text-zinc-800 border-2 p-2 rounded-xl'>
              MATRICULE-SE
            </Link>
        </div>
    </div>
  )
}
