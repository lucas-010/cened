import React, {useEffect} from 'react'
import BoxContact from '../components/BoxContact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Title from '../components/Title'

export default function WorkWithUs() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header/>
    <div className='absolute w-screen min-h-screen'>
			<Title text={'TRABALHE CONOSCO!'}/>
			<Instructions/>
			<BoxContact/>
      <Footer/>
    </div>
    </div>
  )
}
