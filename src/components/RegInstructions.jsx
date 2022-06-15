import React from 'react'
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

export default function RegInstructions(){
    let [visible, setVisible] = useState(false);
    return(
        <div className='flex flex-col'>
                <button onClick={() => {visible ? setVisible(false) : setVisible(true)}} className='mt-5 flex flex-col font-bold bg-[#EBECF0] p-2 pl-6 pr-6 rounded-xl max-w-xs border-gray-400 hover:border-black border-2 self-center lg:max-w-none lg:text-xl lg:ml-10 lg:self-start lg:w-fit '>
                    <p className='flex items-center text-xl'>INSTRUÇÕES &nbsp;<MdOutlineArrowDropDownCircle/></p>
                    <Collapse isOpened={visible}>
                        <div className={`${!visible ? 'hidden' : ''}`}>
                            <ul style={{listStyleType:'square'}} className='list-outside text-left'>
                                <li>Faça a matrícula do Reeducando, se ainda não for cadastrado.</li>
                                <li>Após, você será encaminhado para a lista de cursos.</li>
                                <li>Ao final, você será encaminhado para a área de pagamento.</li>
                            </ul>
                        </div>
                    </Collapse>
            </button>
        </div>
    )
}