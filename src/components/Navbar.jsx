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
    <div className={`absolute ${translateNavbar ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 h-screen overflow-y-auto right-0 transition-transform lg:flex lg:relative px-4 bg-[#F6B112] lg:p-0 lg:right-0 text-black md:p-4 lg:h-auto lg:w-screen`}>
        <div className="lg:w-1/2 navbar-links lg:items-center lg:h-full overflow-visible">
          <ul className='flex flex-col lg:flex-row h-full md:text-start'>
            <ListItem text={'Início'} link='/'/>
            <ListItem text={'Instituição'} link='/instituicao'/>
            <ListItem text={'Cursos'} link='/cursos'/>
            <div onMouseEnter={()=>{setOpen(true);setOpenId(1)}} onMouseLeave={()=>{setOpen(false)}}>
              <p className='w-fit lg:text-center p-2 m-2 mb-1 text-sm font-bold h-auto transition-colors ease-in delay-70 lg:justify-center items-center hover:bg-blue-800 hover:text-white cursor-pointer rounded-xl'>Como Funciona</p>
            <Collapse className='w-fit lg:-mr-10 ml-2 mb-1' in={openId===1?open:false}>
                <ul className='bg-gray-300 rounded-lg'>
                <a href='passoapasso'><h1 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Passo a passo</h1></a>
                <a href='programaeducacional'><h2 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Programa educacional</h2></a>
                </ul>
            </Collapse>
            </div>
            <ListItem text={'Contato'} link='/contato'/>
            {/*<div className='lg:w-1/5 pl-2 pr-2 lg:pt-1 m-2'>
            <TextField size='small' select variant='standard' defaultValue={1} className='w-full'>
              <MenuItem value={1} disabled><b>Como Funciona</b></MenuItem>
              <a href='passoapasso'><MenuItem>Passo a passo</MenuItem></a>
              <a href='programaeducacional'><MenuItem>Programa educacional</MenuItem></a>
            </TextField>
            </div>*/}
            <ListItem text={'Trabalhe Conosco'} link='/trabalheconosco'/>
          </ul>
        </div>
        <div className="lg:w-1/2 flex flex-col lg:flex-row p-2 font-bold lg:justify-end">
            <Link to="/login" className='text-sm transition mt-3 ease-in-out hover:scale-110 hover:text-white hover:bg-blue-800 duration-150 lg:mr-6 lg:mt-0 flex p-2 h-fit rounded-xl'>
              <AiOutlineUser size={15}/> <span>ÁREA DO ALUNO</span>
            </Link>
            <a target='_blank' href={'https://lucas-010.github.io/cened-penitenciaria/'} className="text-sm h-fit transition mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex p-2 rounded-xl">
              <FiUsers size={15}/> <span>PENITENCIÁRIA</span>
            </a>
            <Link to='/cursos' className='text-sm h-fit transition mt-3 ease-in-out hover:bg-blue-800 hover:scale-110 hover:text-white duration-300 lg:mr-6 lg:mt-0 flex p-2 rounded-xl'>
              ADMINISTRAÇÃO PENITENCIÁRIA
            </Link>
            <div onMouseEnter={()=>{setOpen(true);setOpenId(2)}} onMouseLeave={()=>{setOpen(false)}}>
              <p className='w-fit lg:text-center p-2 mr-5 text-sm font-bold h-auto transition-colors ease-in delay-70 lg:justify-center items-center hover:bg-blue-800 hover:text-white cursor-pointer rounded-xl'>MATRICULE-SE</p>
            <Collapse className='w-fit ml-1' in={openId===2?open:false}>
                <ul className='mt-1 bg-gray-300 rounded-lg'>
                <a href='login'><h1 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Já sou aluno</h1></a>
                <a href='register'><h2 className='hover:bg-blue-800 hover:text-white cursor-pointer rounded-lg p-1 font-normal transition-colors'>Não sou aluno</h2></a>
                </ul>
            </Collapse>
            </div>
            {/*<div className='lg:w-1/5 pl-2 pr-2 pt-1 lg:mr-6 rounded-xl bg-green-500'>
            <TextField size='small' select variant='standard' defaultValue={1} className='w-full'>
              <MenuItem value={1} disabled><b>MATRICULE-SE</b></MenuItem>
              <a href='login'><MenuItem>Já sou aluno</MenuItem></a>
              <a href='register'><MenuItem>Não sou aluno</MenuItem></a>
            </TextField>
          </div>*/}
        </div>
    </div>
    </div>
  )
}
