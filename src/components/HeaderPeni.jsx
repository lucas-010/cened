import React from 'react'
import imgBackground from '../images/barraVictor.jpg'

export default function HeaderPeni() {
  return (
    <div className='w-screen p-10' style={{backgroundImage: `url(${imgBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <span className='text-3xl flex justify-end text-red-500 font-bold'>Acesso restrito ás Penitenciárias e aos Parceiros</span>
    </div>
  )
}
