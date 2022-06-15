import React from 'react'
import {BsCart4} from 'react-icons/bs'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function CoursesSelect({courses, totalPrice, setCoursesSelected,setOpenCart, openCart}) {
  return (
    <div className={`${!courses.length && !openCart > 0 ? 'invisible' : false} bg-[#D1D5DB] lg:fixed lg:right-20 lg:mt-0 md:mt-20 h-fit p-4 rounded-xl md:w-1/2 w-full lg:w-1/4 md`}>
        <h2 className='text-3xl text-center flex items-center justify-center font-bold'><BsCart4 size={40}/>Carrinho:</h2>
        {courses.length > 3 ? <div className='lg:hidden flex justify-end self-end md:p-0 p-1'><BsFillArrowUpCircleFill onClick={()=>{document.getElementById('cart').scrollBy(0, -150);}} size='2rem'/></div>:''}
        <ul className='max-h-80 md:max-h-24 lg:max-h-80 w-full overflow-y-auto list-inside list-decimal' id='cart'>
            {courses.map((c, key)=>{
              return (
                <li key={key} className='text-base font-semibold rounded-lg border-2 border-black p-1 mb-5'>
                  {c.title}
                  <h2 className='text-lg font-normal'>R${c.price},00</h2>
                </li>
              )
            })}
        </ul>
        {courses.length > 3 ? <div className='lg:hidden flex justify-end self-end md:p-0 p-1'><BsFillArrowDownCircleFill size='2rem' onClick={()=>{document.getElementById('cart').scrollBy(0, 150);}}/></div>: ''}
        {courses.length ? <span className='text-2xl font-semibold'>Total: R${totalPrice},00</span>:''}
        <div className='mt-5 flex flex-col md:flex-row justify-around'>
          <button onClick={()=> {setCoursesSelected([]);setOpenCart(false)}} className='bg-red-600 text-white lg:text-lg font-semibold rounded-lg p-2 md:p-1 lg:p-2'>Limpar Carrinho</button>
          <button onClick={()=> {setOpenCart(false)}} className='lg:hidden text-white bg-green-400 lg:text-lg md:ml-5 mt-3 md:mt-0 font-semibold rounded-lg p-2 md:p-1 lg:p-2'>Continuar comprando</button>
          <button className='bg-yellow-400 lg:text-lg md:ml-5 mt-3 md:mt-0 font-semibold rounded-lg p-2 md:p-1 lg:p-2'>Finalizar Compra</button>
        </div>
    </div>
  )
}
