import React from 'react' 
import AboutSchool from '../components/AboutSchool'
import HowItWorks from '../components/HowItWorks'
import MostInfo from '../components/MostInfo'
import Tutoring from '../components/Tutoring'
import Intro from '../components/Introduction'


export default function Home() {
  return (
    <div className='absolute w-screen bg-white' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(82,82,253,1) 100%)'}}>
      <div className='lg:h-28 h-20'></div>
      <Intro/>
    </div>
  )
}
