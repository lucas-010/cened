import React from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className='absolute w-screen flex flex-col mt-52'>
      <BoxInstructions/>
      <BoxLogin/>
      <Footer/>
    </div>
  )
}
