import React from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Login(register) {
  return (
    <div className='absolute'>
        <Header/>
        <div className='w-screen min-h-screen flex flex-col lg:mt-40 mt-20'>
          <BoxInstructions/>
          <BoxLogin/>
        </div>
        <Footer/>
    </div>
  )
}
