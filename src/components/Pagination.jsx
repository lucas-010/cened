import React from 'react'

export default function Pagination({currentPage, setCurrentPage}) {
  return (
    <div className='w-screen p-4'>
      <ul className='flex text-lg justify-center font-bold'>
        <li onClick={()=> setCurrentPage(0)} className={`${currentPage === 0 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>1</li>

        <li onClick={()=> setCurrentPage(1)} className={`${currentPage === 1 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>2</li>

        <li onClick={()=> setCurrentPage(2)} className={`${currentPage === 2 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>3</li>

        <li onClick={()=> setCurrentPage(3)} className={`${currentPage === 3 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>4</li>

        <li onClick={()=> setCurrentPage(4)} className={`${currentPage === 4 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>5</li>

        <li onClick={()=> setCurrentPage(5)} className={`${currentPage === 5 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>6</li>

        <li onClick={()=> setCurrentPage(6)} className={`${currentPage === 6 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>7</li>

        <li onClick={()=> setCurrentPage(7)} className={`${currentPage === 7 ? 'bg-[#0000FF] text-white' : 'bg-[#F8C54D] text-black'} cursor-pointer mr-5 rounded-full p-4`}>8</li>
      </ul>
    </div>
  )
}
