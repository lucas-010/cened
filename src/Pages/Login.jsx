import React from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className='absolute w-screen flex flex-col lg:mt-52 mt-20'>
      <BoxInstructions/>
      <BoxLogin/>
      <Footer/>
    </div>
  )
}
