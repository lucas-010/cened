import React from 'react'

export default function BoxInfo(props) {
  return (
    <div className='flex justify-center mt-10'>
			<div className='p-2 text-center bg-blue-600 w-3/4 rounded-xl'>
				<h2 className='text-white text-2xl font-bold'>{props.title}</h2>
				{props.text ? <p className='text-white text-lg mt-2'>{props.text}</p> : props.children}
			</div>
    </div>
  )
}
