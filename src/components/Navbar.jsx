/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import ListItem from './ListItem'
import {AiOutlineUser} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { TextField, MenuItem } from '@mui/material'

export default function Navbar({translateNavbar}) {
  return (
    <div className='fixed'>
    <div className={`absolute ${translateNavbar ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 h-screen overflow-y-auto right-0 transition-transform lg:flex lg:items-center lg:relative px-4 bg-[#F6B112] lg:p-0 lg:right-0 text-black md:p-4 lg:h-auto lg:w-screen`}>
        <div className="lg:w-1/2 navbar-links lg:items-center lg:h-full">
          <ul className='flex flex-col lg:flex-row h-full lg:items-center md:text-start lg:text-center'>
            <ListItem text={'Início'} link='/'/>
            <ListItem text={'Instituição'} link='/instituicao'/>
            <ListItem text={'Cursos'} link='/cursos'/>
            <div className='lg:w-1/5 pl-2 pr-2 lg:pt-1 m-2'>
            <TextField size='small' select variant='standard' defaultValue={1} className='w-full'>
              <MenuItem value={1} disabled><b>Como Funciona</b></MenuItem>
              <a href='passoapasso'><MenuItem>Passo a passo</MenuItem></a>
              <a href='programaeducacional'><MenuItem>Programa educacional</MenuItem></a>
            </TextField>
            </div>
            <ListItem text={'Contato'} link='/contato'/>
            <ListItem text={'Trabalhe Conosco'} link='/trabalheconosco'/>
          </ul>
        </div>
        <div className="lg:w-1/2 flex flex-col lg:flex-row lg:items-center p-2 font-bold lg:justify-end lg:text-center">
            <Link to="/login" className='text-sm transition mt-3 ease-in-out hover:scale-110 hover:text-white hover:bg-blue-800 duration-150 lg:mr-6 lg:mt-0 flex items-center p-2 rounded-xl'>
              <AiOutlineUser size={15}/> <span>ÁREA DO ALUNO</span>
            </Link>
            <a target='_blank' href={'https://lucas-010.github.io/cened-penitenciaria/'} className="text-sm transition mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex items-center p-2 rounded-xl">
              <FiUsers size={15}/> <span>PENITENCIÁRIA</span>
            </a>
            <Link to='/cursos' className='text-sm transition mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex items-center p-2 rounded-xl'>
              ADMINISTRAÇÃO PENITENCIÁRIA
            </Link>
            <div className='lg:w-1/5 pl-2 pr-2 pt-1 lg:mr-6 rounded-xl bg-green-400'>
            <TextField size='small' select variant='standard' defaultValue={1} className='w-full'>
              <MenuItem value={1} disabled><b>MATRICULE-SE</b></MenuItem>
              <a href='login'><MenuItem>Já sou aluno</MenuItem></a>
              <a href='register'><MenuItem>Não sou aluno</MenuItem></a>
            </TextField>
            </div>
        </div>
    </div>
    </div>
  )
}
