import React, {useEffect} from 'react'
import AboutSchool from '../components/AboutSchool'
import Footer from '../components/Footer'
import Title from '../components/Title'

export default function Institution() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='absolute lg:mt-5 w-screen min-h-screen bg-white'>
			<Title text={'INSTITUIÇÃO CENED'}/>
			<div className='-mt-14'>
        <AboutSchool/>
      </div>
      <Footer/>
    </div>
  )
}
