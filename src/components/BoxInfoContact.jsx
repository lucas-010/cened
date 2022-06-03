import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {AiFillClockCircle} from 'react-icons/ai'
export default function BoxInfoContact() {
  return (
    <div className='bg-gray-400 lg:ml-5 lg:w-2/6 rounded-lg mt-5 p-2'>
        <h2 className='text-white text-center text-3xl font-bold'>Contatos</h2>
        <div className='text-white text-center p-2'>
            <h3 className='flex justify-center text-2xl font-bold items-center'><AiFillPhone size={35}/>Telefones: </h3>
            <p className='text-xl'>(61) 3369-6366</p>
            <p className='text-xl'>(61) 9951-8961</p>
        </div>
        <div className='text-white text-center p-2 mt-2'>
            <h3 className='flex justify-center text-2xl font-bold items-center'><MdEmail size={35}/>E-mail: </h3>
            <p className='text-xl'>cenedqualificando@gmail.com</p>
        </div>
        <div className='text-white p-2 mt-2'>
            <h3 className='flex justify-center text-2xl font-bold items-center'><AiFillClockCircle size={35}/>Atendimento: </h3>
            <p className='text-lg text-center'>Segunda a sexta, das 8h às 18h.</p>
            <p className='text-lg text-center'>Sábados, das 8h às 12h.</p>
        </div>
    </div>
  )
}
