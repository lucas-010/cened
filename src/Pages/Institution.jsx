import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Header from '../components/Header'
import SchoolCened from '../components/SchoolCened'


export default function Institution() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='p-4'>
      <Header/>
			<Title text={'INSTITUIÇÃO CENED'}/>
      <SchoolCened/>
      <Footer/>
    </div>
  )
}
