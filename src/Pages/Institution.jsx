import React, {useEffect} from 'react'
import AboutSchool from '../components/AboutSchool'
import Title from '../components/Title'

export default function Institution() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='absolute pb-4 mt-10 w-screen bg-white'>
			<Title text={'INSTITUIÇÃO CENED'}/>
			<div className='-mt-14'>
        <AboutSchool/>
      </div>
    </div>
  )
}
