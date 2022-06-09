import React from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'

export default function Login() {
  return (
    <div className='absolute w-screen h-screen flex flex-col justify-center lg:mt-16'>
      <BoxInstructions/>
      <BoxLogin/>
    </div>
  )
}
