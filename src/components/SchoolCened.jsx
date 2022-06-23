import React from 'react'
import image from '../images/backgroundInstitution.jpeg'

export default function SchoolCened() {
  return (
    <div className='w-11/12 lg:w-1/2 flex lg:ml-5 ml-0 lg:mr-0 mr-5 flex-col items-center'>
        <h1 className='text-3xl font-bold text-center'>ESCOLA CENED</h1>
        <img src={image} className=' rounded-xl' alt="" />
    </div>
  )
}
