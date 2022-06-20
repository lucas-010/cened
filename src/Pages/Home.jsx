import React, { useEffect } from 'react';
import Intro from '../components/Introduction';
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
    <Header/>
    <div className='absolute w-screen bg-white' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(82,82,253,1) 100%)'}}>
      <div className='lg:h-28 h-20'></div>
      <Intro/>
      <Footer/>
    </div>
    </div>
  )
}
