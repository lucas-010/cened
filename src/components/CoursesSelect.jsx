import React from 'react'

export default function CoursesSelect({courses}) {
  return (
    <div className={`${!courses.length > 0 ? 'hidden' : ''} bg-[#D1D5DB] p-2 w-1/2 lg:fixed lg:right-10 lg:w-1/4`}>
        <h2 className='text-3xl text-start'>Carrinho:</h2>
        <ul className='flex flex-col ml-5 list-outside list-decimal'>
            {courses.map((c, key)=>{
              return (
                <li className='items-center'>
                  <h1 className='text-sm' key={key}>{c.title}</h1>
                  <h2>R${c.price},00</h2>
                </li>
              )
            })}
        </ul>
    </div>
  )
}
