import React from 'react' 
import AboutSchool from '../components/AboutSchool'
import HowItWorks from '../components/HowItWorks'
import MostInfo from '../components/MostInfo'
import Slide from '../components/Slide'
import Tutoring from '../components/Tutoring'


export default function Home() {
  return (
    <div className='absolute w-screen bg-white'>
      <Slide/>
      <AboutSchool/>
      <Tutoring/>
      <HowItWorks/>
      <MostInfo/>
    </div>
  )
}
