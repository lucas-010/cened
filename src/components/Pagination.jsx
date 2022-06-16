import React from 'react'

export default function Pagination({inputText, currentPage, setCurrentPage}) {
  return (
    <div className='w-full p-4'>
      <ul className='flex text-xl justify-center font-bold'>
        <li onClick={()=> setCurrentPage(0)} className={`${currentPage === 0 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>1</li>

        <li onClick={()=> setCurrentPage(1)} className={`${currentPage === 1 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>2</li>

        <li onClick={()=> setCurrentPage(2)} className={`${currentPage === 2 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>3</li>

        <li onClick={()=> setCurrentPage(3)} className={`${currentPage === 3 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>4</li>

        <li onClick={()=> setCurrentPage(4)} className={`${currentPage === 4 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>5</li>

        <li onClick={()=> setCurrentPage(5)} className={`${currentPage === 5 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>6</li>

        <li onClick={()=> setCurrentPage(6)} className={`${currentPage === 6 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>7</li>

        <li onClick={()=> setCurrentPage(7)} className={`${currentPage === 7 ? 'bg-[#0000FF] text-white' : 'bg-blue-200 text-black'} cursor-pointer lg:mr-5 lg:mt-0 mt-4 mr-2 p-1 rounded-xl pr-3 pl-3`}>8</li>
      </ul>
    </div>
  )
}
