import React from 'react'

export default function CoursesSelect({courses}) {
  return (
    <div className='bg-[#D1D5DB] p-2 w-1/2'>
        <h2 className='text-3xl text-center'>Cursos Selecionados</h2>
        <div>
            {courses.map((c, key)=>{
              return <h1 key={key}>{c.title}</h1>
            })}
        </div>
    </div>
  )
}
