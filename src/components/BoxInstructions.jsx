import React from 'react';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

export default function BoxInstructions(){
    let [visible, setVisible] = useState(false);
    return(
        <div className='flex flex-col'>
                <button onClick={() => {visible ? setVisible(false) : setVisible(true)}} className='lg:fixed flex flex-col font-bold bg-[#EBECF0] p-2 pl-6 pr-6 rounded-xl max-w-xs border-black border-2 self-center lg:max-w-none lg:text-xl lg:ml-10 lg:self-start lg:w-fit '>
                    <p className='flex items-center text-xl'>INSTRUÇÕES &nbsp;<MdOutlineArrowDropDownCircle/></p>
                    <Collapse isOpened={visible}>
                        <div className={`${!visible ? 'w-0' : ''}`}>
                            <ul style={{listStyleType:'square'}} className='list-outside text-left'>
                                <li>Se já for cadastrado, digite o seu LOGIN e SENHA.</li>
                                <li>Se ainda não for cadastrado, clique em PRIMEIRO ACESSO.</li>
                            </ul>
                        </div>
                    </Collapse>
            </button>
        </div>
    )
}