import React from 'react'
import BoxContact from '../Components/BoxContact'
import Instructions from '../Components/Instructions'
import Title from '../Components/Title'

export default function WorkWithUs() {
  return (
    <div className='absolute w-screen'>
			<Title text={'TRABALHE CONOSCO!'}/>
			<Instructions/>
			<BoxContact/>
    </div>
  )
}
