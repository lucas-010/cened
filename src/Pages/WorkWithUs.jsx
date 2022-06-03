import React from 'react'
import BoxContact from '../components/BoxContact'
import Instructions from '../components/Instructions'
import Title from '../components/Title'

export default function WorkWithUs() {
  return (
    <div className='absolute w-screen'>
			<Title text={'TRABALHE CONOSCO!'}/>
			<Instructions/>
			<BoxContact/>
    </div>
  )
}
