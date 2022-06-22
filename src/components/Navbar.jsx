/* eslint-disable react/jsx-no-target-blank */
import {React, useState} from 'react'
import ListItem from './ListItem'
import {AiOutlineUser} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { TextField, MenuItem, Collapse } from '@mui/material'

export default function Navbar({translateNavbar}) {
  let [open, setOpen] = useState(false);
  let [openId, setOpenId] = useState(0);
  return (
    <div className='fixed'>
    <div className={`absolute ${translateNavbar ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 h-screen overflow-y-auto right-0 transition-transform lg:flex lg:justify-between lg:relative px-4 bg-[#F6B112] lg:p-0 lg:right-0 text-black md:p-4 lg:h-14 lg:overflow-y-visible lg:w-screen`}>
        <div className="navbar-links lg:items-center lg:h-full">
          <ul className='flex flex-col lg:flex-row h-full xl:text-sm text-xs'>
            <ListItem text={'Início'} link='/'/>
            <ListItem text={'Instituição'} link='/instituicao'/>
            <ListItem text={'Cursos'} link='/cursos'/>
            <div onMouseEnter={()=>{setOpen(true);setOpenId(1)}} onMouseLeave={()=>{setOpen(false)}}>
              <p className='w-fit lg:text-center p-2 m-2 lg:mb-0 font-bold h-auto transition-colors ease-in delay-70 lg:justify-center items-center hover:bg-blue-800 hover:text-white rounded-xl'>Como Funciona</p>
            <Collapse className='lg:ml-2 lg:-mr-2 p-1 bg-gray-300 rounded-lg' in={openId===1?open:false}>
                <ul>
                <a href='passoapasso'><h1 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Passo a passo</h1></a>
                <a href='programaeducacional'><h2 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Programa educacional</h2></a>
                </ul>
            </Collapse>
            </div>
            <ListItem text={'Contato'} link='/contato'/>
            <ListItem text={'Trabalhe Conosco'} link='/trabalheconosco'/>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row p-2 font-bold lg:justify-end xl:text-sm right-0 text-xs">
            <Link to="/login" className='transition mt-3 ease-in-out hover:scale-110 hover:text-white hover:bg-blue-800 duration-150 lg:mr-6 lg:mt-0 flex p-2 h-fit rounded-xl'>
              <AiOutlineUser size={15}/> <span>ÁREA DO ALUNO</span>
            </Link>
            <a target='_blank' href={'https://lucas-010.github.io/cened-penitenciaria/'} className="h-fit transition mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex p-2 rounded-xl">
              <FiUsers size={15}/> <span>PENITENCIÁRIA</span>
            </a>
            <Link to='/cursos' className='h-fit transition mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex p-2 rounded-xl'>
              ADMINISTRAÇÃO PENITENCIÁRIA
            </Link>
            <div onMouseEnter={()=>{setOpen(true);setOpenId(2)}} onMouseLeave={()=>{setOpen(false)}} className='xl:text-base text-sm'>
              <p className='w-max lg:text-center p-2 mr-5 font-bold h-auto transition ease-in delay-70 lg:justify-center items-center bg-green-700 hover:scale-110 duration-300 hover:bg-blue-800 text-white rounded-xl'>MATRICULE-SE</p>
            <Collapse className='rounded-lg p-1 mr-4 bg-gray-300' in={openId===2?open:false}>
                <ul>
                <a href='login'><h1 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Já sou aluno</h1></a>
                <a href='register'><h2 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Não sou aluno</h2></a>
                </ul>
            </Collapse>
            </div>
        </div>
    </div>
    </div>
  )
}
