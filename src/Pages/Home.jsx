import React from 'react' 
import AboutSchool from '../components/AboutSchool'
import HowItWorks from '../components/HowItWorks'
import MostInfo from '../components/MostInfo'
import Tutoring from '../components/Tutoring'
import Intro from '../components/Introduction'


export default function Home() {
  return (
    <div className='w-screen bg-white'>
      <div className='lg:h-28 h-20'></div>
      <Intro/>
    </div>
  )
}
