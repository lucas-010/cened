import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {AiFillClockCircle} from 'react-icons/ai'

export default function BoxContact() {
  return (
    <div className='mt-5 text-black p-4 flex lg:flex-row flex-col items-center justify-between'>
      <div className='bg-[#F6B112] lg:mt-0 mt-5 rounded-xl p-4 flex flex-col items-center w-4/5 lg:w-1/4'>
        <BsFillTelephoneFill size={50}/>
        <div className='text-xl'>
          <p>(61) 3369-6366</p>
          <p>(61) 99672-9488</p>
          <p>(61) 99951-8961</p>
        </div>
      </div>

      <div className='bg-[#F6B112] lg:mt-0 mt-5 rounded-xl p-4 flex flex-col items-center w-4/5 lg:w-1/4'>
        <HiMail size={50}/>
        <div className='text-center text-xl'>
          <p>cenedqualificando@gmail.com</p>
          <p>com cópia para: admcened@gmail.com</p>
        </div>
      </div>

      <div className='bg-[#F6B112] lg:mt-0 mt-5 rounded-xl p-4 flex flex-col items-center w-4/5 lg:w-1/4'>
        <AiFillClockCircle size={50}/>
        <div className='text-center text-xl'>
          <p>Segunda a sexta, das 8h às 18h.</p>
          <p>Sábados, das 8h às 12h.</p>
        </div>
      </div>
    </div>
  )
}
