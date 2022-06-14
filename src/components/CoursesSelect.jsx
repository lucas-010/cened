import React from 'react'
import {BsCart4} from 'react-icons/bs'

export default function CoursesSelect({courses, totalPrice, setCoursesSelected}) {
  let map = courses.map(item =>item);
  let filter = map.splice(0,4);
  return (
    <div className={`${!courses.length > 0 ? 'invisible' : false} bg-[#D1D5DB] lg:fixed lg:overflow-auto right-0 mt-5 lg:mt-0 p-4 rounded-xl md:w-2/3 w-11/12 lg:mr-20 lg:w-1/4`}>
        <h2 className='text-3xl text-center flex items-center justify-center font-bold'><BsCart4 size={40}/>Carrinho:</h2>
        <ul className='flex flex-col ml-5 list-outside list-decimal'>
            {filter.map((c, key)=>{
              return (
                <li key={key} className='items-center rounded-lg border-2 border-black text-lg p-1 mb-5'>
                  <h1 className='text-base font-semibold'>{c.title}</h1>
                  <h2>R${c.price},00</h2>
                </li>
              )
            })}
            {courses.length > 4 ?
            <li className='font-semibold'>...</li>  :''}
        </ul>
        <span className='text-2xl font-semibold'>Total: R${totalPrice},00</span>
        <div className='mt-5 flex flex-col lg:flex-row justify-between'>
          <button className='bg-yellow-400 text-2xl mr-5 font-semibold rounded-lg p-2'>Finalizar Compra</button>
          <button onClick={()=> setCoursesSelected([])} className='bg-red-600 text-white mt-5 lg:mt-0 text-2xl font-semibold rounded-lg p-2'>Limpar Carrinho</button>
        </div>
    </div>
  )
}
