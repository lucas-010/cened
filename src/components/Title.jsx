import React from 'react'

export default function Title(props) {
  return (
    <div className='mt-24 w-full h-28 flex flex-col justify-center items-center p-2 lg:mt-36'>
			<h2 className='text-2xl lg:text-4xl font-bold text-center'>{props.text}</h2>
			<p className='text-center text-lg font-bold'>{props.children}</p>
		</div>
  )
}
