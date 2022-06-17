import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from './ListItem';
import { AiFillHome } from 'react-icons/ai';
import {MdMessage, MdPowerSettingsNew} from 'react-icons/md'

export default function StudentAreaHeader(){
    return(
        <div className='fixed z-20 flex flex-col w-full bg-green-700 h-20 font-bold'>
            <div className='text-white flex-wrap justify-around lg:text-lg self-center flex lg:justify-between w-11/12 h-full items-center'>
              <ul>
                <Link to={'/'}>
                <li className='ease-in delay-70 transition-colors rounded-lg cursor-pointer p-1 hover:bg-blue-800'>ESCOLA CENED </li>
                </Link>
              </ul>
              <ul>
                <li>Área do Aluno</li>
              </ul>
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