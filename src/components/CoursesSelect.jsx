import React from 'react'
import {BsCart4} from 'react-icons/bs'

export default function CoursesSelect({courses, totalPrice, setCoursesSelected,setOpenCart, openCart}) {
  return (
    <div className={`${!courses.length && !openCart > 0 ? 'invisible' : false} bg-[#D1D5DB] lg:fixed lg:right-20 lg:mt-0 h-fit p-4 rounded-xl md:w-2/3 w-full lg:w-1/4`}>
        <h2 className='text-3xl text-center flex items-center justify-center font-bold'><BsCart4 size={40}/>Carrinho:</h2>
        <ul className='max-h-80 overflow-auto list-inside list-decimal'>
            {courses.map((c, key)=>{
              return (
                <li key={key} className='text-base font-semibold rounded-lg border-2 border-black p-1 mb-5'>
                  {c.title}
                  <h2 className='text-lg font-normal'>R${c.price},00</h2>
                </li>
              )
            })}
        </ul>
        {!openCart?<span className='text-2xl font-semibold'>Total: R${totalPrice},00</span>:''}
        <div className='mt-5 flex flex-col lg:flex-row justify-between'>
          <button onClick={()=> {setCoursesSelected([]);setOpenCart(false)}} className='bg-red-600 text-white text-2xl font-semibold rounded-lg p-2'>Limpar Carrinho</button>
          <button className='bg-yellow-400 text-2xl lg:ml-5 mt-5 lg:mt-0 font-semibold rounded-lg p-2'>Finalizar Compra</button>
        </div>
    </div>
  )
}
