import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({text, link}) {
  return (
    <Link to={`/${link}`}>
			<li className='p-2 m-1 text-base font-bold h-auto transition-colors ease-in delay-70 flex justify-center items-center hover:bg-blue-800 hover:text-white cursor-pointer rounded-xl'>
			{text}
      </li>
		</Link>
  )
}
