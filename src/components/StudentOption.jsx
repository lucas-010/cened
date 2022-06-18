import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import {MdMessage, MdPowerSettingsNew} from 'react-icons/md'
import {HiOutlineDocumentSearch} from 'react-icons/hi';
import {IoDocuments} from 'react-icons/io5'
import {GrFormAdd,GrCertificate} from 'react-icons/gr'
import {FiEdit} from 'react-icons/fi'
import {BiBarcodeReader} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'


export default function StudentOption({id ,text, selected, setSelected}) {
  let ConditionalLink = ({ children, to, condition }) => (!!condition && to)
  ? <Link to={to}>{children}</Link>
  : <>{children}</>;
  return (
      <ConditionalLink to='/' condition={id===10}>
			<button onClick={()=>setSelected(id)} className={`${selected ===id ? 'bg-[rgb(151,150,150)]' : ''} font-bold flex gap-5 items-end bg-[rgb(206,222,220)] border-2 border-white  hover:bg-[rgb(150,150,150)] transition-colors p-4 rounded-lg w-full`}>
        {id===1 ? <AiFillHome size={25}/>
        :id===2 ? <HiOutlineDocumentSearch size={25}/>
        :id===3 ? <IoDocuments size={25}/>
        :id===4 ? <GrFormAdd size={25}/>
        :id===5 ? <GrCertificate size={25}/>
        :id===6 ? <BiBarcodeReader size={25}/>
        :id===7 ? <MdMessage size={25}/>
        :id===8 ? <RiLockPasswordFill size={25}/>
        :id===9 ? <FiEdit size={25}/>
        :<MdPowerSettingsNew size={25}/>
      }
			{text}
      </button>
      </ConditionalLink>
  )
}
