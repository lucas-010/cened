import React from 'react' 
import AboutSchool from '../Components/AboutSchool'
import HowItWorks from '../Components/HowItWorks'
import MostInfo from '../Components/MostInfo'
import Slide from '../Components/Slide'
import Tutoring from '../Components/Tutoring'


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
