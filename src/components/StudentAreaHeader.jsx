import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from './ListItem';
import { AiFillHome } from 'react-icons/ai';
import {MdMessage, MdPowerSettingsNew} from 'react-icons/md'
import imagemBackground from '../images/barraVictor.jpg'
import logo from '../images/logoCened.png'

export default function StudentAreaHeader(){
    return(
        <div className='fixed z-20 flex flex-col h-20 w-full font-bold' style={{backgroundImage: `url(${imagemBackground})`, backgroundSize:'cover'}}>
      <div className='text-white flex-wrap justify-around lg:text-lg self-center flex lg:justify-between w-11/12 h-full items-center'>
                <Link to={'/'}>
              <ul className='flex items-center'>
                <img src={logo} className='w-1/12'/>
                <li className='ease-in delay-70 transition-colors rounded-lg cursor-pointer p-1 hover:bg-blue-800'>ESCOLA CENED </li>
              </ul>
                </Link>
              <ul className='flex justify-between gap-10'>
                <Link to={'/'}>
                <li className='flex items-center gap-1 ease-in delay-70 transition-colors rounded-lg cursor-pointer p-1 hover:bg-blue-800'><AiFillHome/>Voltar ao Site</li>
                </Link>
                <Link to={'/'}>
                <li className='flex items-center gap-1 ease-in delay-70 transition-colors rounded-lg cursor-pointer p-1 hover:bg-blue-800'><MdPowerSettingsNew/>SAIR</li>
                </Link>
              </ul>
            </div>
        </div>
    )
}