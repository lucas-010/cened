import React from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Login(register) {
  return (
    <div>
      <Header/>
    <div className='absolute w-screen flex flex-col lg:mt-44 mt-20'>
      <BoxInstructions/>
      <BoxLogin/>
      <Footer/>
    </div>
    </div>
  )
}
