import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({text, link}) {
  return (
    <Link to={`/${link}`}>
			<li className='p-3 text-xs font-bold h-full transition-colors ease-in delay-70 flex justify-center items-center hover:bg-zinc-800 cursor-pointer'>
			{text}
      </li>
		</Link>
  )
}
