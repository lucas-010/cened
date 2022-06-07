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
    /* {text: 'Programa Educacional', link: 'programaeducacional'}, */
    {text: 'Contato', link: 'contato'},
    {text: 'Trabalhe Conosco', link: 'trabalheconosco'}
  ]
  return (
    <div className='fixed'>
    <div className={`absolute ${translateNavbar ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 h-screen overflow-y-auto right-0 transition-transform lg:flex lg:items-center lg:relative px-4 justify-between bg-[#F6B112] lg:p-0 lg:right-0 text-black md:p-4 lg:h-auto lg:w-screen`}>
        <div className="navbar-links lg:items-center lg:h-full">
          <ul className='flex flex-col lg:flex-row h-full items-center xs:text-center'>
            {listText.map((item, key)=>{
              return <ListItem text={item.text.toUpperCase()} link={item.link} key={key}/>
            })}
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center p-2 font-bold">
            <Link to="/login" className='text-base transition mt-3 ease-in-out hover:scale-110 hover:text-white hover:bg-blue-800 text-center duration-150 lg:mr-6 lg:mt-0 flex items-center p-2 rounded-xl'>
              <AiOutlineUser size={15}/> <span>ÁREA DO ALUNO</span>
            </Link>
            
            <a href='https://cenedpenitenciario.azurewebsites.net/Home/LoginAgentePenitenciario' target='_blank' className="text-base transition text-center mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex items-center p-2 rounded-xl">
              <FiUsers size={15}/> <span>PENITENCIÁRIA</span>
            </a>

            <Link to='/cursos' className='text-base transition text-center mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex items-center p-2 rounded-xl'>
              ADMINISTRAÇÃO PENITENCIÁRIA
            </Link>
        </div>
    </div>
    </div>
  )
}
