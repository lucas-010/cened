import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import {MdOutlineExpandMore} from 'react-icons/md'

export default function BoxInfo(props) {
  return (
    <Accordion className='p-4 mt-2 m-auto w-11/12' >
				<AccordionSummary expandIcon={<MdOutlineExpandMore/>} className='text-2xl font-bold'>{props.title}</AccordionSummary>
				{props.text ? <AccordionDetails className='text-lg mt-2'>{props.text}</AccordionDetails> : props.children}
    </Accordion>
  )
}
