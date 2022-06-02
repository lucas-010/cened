import React from 'react'

export default function Card(props) {
  return (
    <div className='bg-white border-2 border-black text-black lg:mr-10 ml-0 mt-10 rounded-xl h-80 flex flex-col items-center p-6 w-4/5 lg:w-1/4'>
      <h2 className='uppercase text-center font-bold text-xl'>{props.title}</h2>
      {props.children}
      <p className='w-full text-center text-lg'>{props.text}</p>
    </div>
  )
}
