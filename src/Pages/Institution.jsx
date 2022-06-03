import React from 'react'
import AboutSchool from '../components/AboutSchool'
import Title from '../components/Title'

export default function Institution() {
  return (
    <div className='absolute pb-4 w-screen bg-white'>
			<Title text={'INSTITUIÇÃO CENED'}/>
			<div className='-mt-14'>
        <AboutSchool/>
      </div>
    </div>
  )
}
