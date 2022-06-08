import React, { useEffect } from 'react' 
import AboutSchool from '../components/AboutSchool'
import HowItWorks from '../components/HowItWorks'
import MostInfo from '../components/MostInfo'
import Tutoring from '../components/Tutoring'
import Intro from '../components/Introduction'

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='absolute w-screen bg-white' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,230,140,1) 100%)'}}>
      <div className='lg:h-28 h-20'></div>
      <Intro/>
    </div>
  )
}
