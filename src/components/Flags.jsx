import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AC from '../images/flags/AC.png'
import AL from '../images/flags/AL.png'
import AM from '../images/flags/AM.png'
import AP from '../images/flags/AP.png'
import BA from '../images/flags/BA.png'
import CE from '../images/flags/CE.png'
import DF from '../images/flags/DF.png'
import ES from '../images/flags/ES.png'
import GO from '../images/flags/GO.png'
import MA from '../images/flags/MA.png'
import MG from '../images/flags/MG.png'
import MS from '../images/flags/MS.png'
import MT from '../images/flags/MT.png'
import PA from '../images/flags/PA.png'
import PB from '../images/flags/PB.png'
import PI from '../images/flags/PI.png'
import PE from '../images/flags/PE.png'
import PR from '../images/flags/PR.png'
import RJ from '../images/flags/RJ.png'
import RN from '../images/flags/RN.png'
import RO from '../images/flags/RO.png'
import RR from '../images/flags/RR.png'
import RS from '../images/flags/RS.png'
import SC from '../images/flags/SC.png'
import SE from '../images/flags/SE.png'
import SP from '../images/flags/SP.png'
import TO from '../images/flags/TO.png'

export default function Flags() {
  const flags = [
    {
      img: AC,
      text: 'Acre'
    },

    {
      img: AL,
      text: 'Alagoas'
    },

    {
      img: AM,
      text: 'Amazonas'
    },

    {
      img: AP,
      text: 'Amapá'
    },

    {
      img: BA,
      text: 'Bahia'
    },

    {
      img: CE,
      text: 'Ceará'
    },

    {
      img: DF,
      text: 'Distrito Federal'
    },

    {
      img: ES,
      text: 'Espírito Santo'
    },

    {
      img: GO,
      text: 'Goiás'
    },

    {
      img: MA,
      text: 'Maranhão'
    },

    {
      img: MS,
      text: 'Mato Grosso do Sul'
    },
    
    {
      img: MT,
      text: 'Mato Grosso'
    },

    {
      img: MG,
      text: 'Minas Gerais'
    },

    {
      img: PA,
      text: 'Pará'
    },

    {
      img: PB,
      text: 'Paraíba'
    },

    {
      img: PR,
      text: 'Paraná'
    },
    {
      img: PE,
      text: 'Pernambuco'
    },

    {
      img: PI,
      text: 'Piauí'
    },

    {
      img: RJ,
      text: 'Rio de Janeiro'
    },

    {
      img: RN,
      text: 'Rio Grande do Norte'
    },

    {
      img: RO,
      text: 'Rondônia'
    },

    {
      img: RR,
      text: 'Roraima'
    },

    {
      img: RS,
      text: 'Rio Grande do Sul'
    },

    {
      img: SC,
      text: 'Santa Catarina'
    },

    {
      img: SE,
      text: 'Sergipe'
    },

    {
      img: SP,
      text: 'São Paulo'
    },

    {
      img: TO,
      text: 'Tocantins'
    },

  ]
  return (
    <div  className='flex p-4 mt-10 lg:mt-0 w-11/12 justify-center flex-wrap m-auto'>
			{flags.map((flag, key)=>{
        return(
          <div className='w-48 p-2 transition-colors flex flex-col justify-between items-center h-36 m-5 text-center' key={key}>
            <a href="/cursos/lista"><img className='hover:transition-all hover:w-44 hover:h-32 w-40 h-28' src={flag.img} alt="" /></a>
            <span className='text-black font-bold'>{flag.text}</span>
          </div>
        )
      })}
      <div className='flex bg-[#0D9F16] rounded-xl flex-col mr-5 mt-7 p-6 h-28 justify-center border-2'>
        <h3 className='text-white text-center text-xl'>Cursos cadastrados no MEC/SISTEC</h3>
        <a target={'_blank'} className='text-center font-extrabold text-white' href="https://www.cenedqualificando.com.br/Arquivos/relacao-cursos-cadastrados-mec-sistec.pdf" rel="noreferrer">CLIQUE AQUI! LISTA DE CURSOS!</a>
      </div>
    </div>
  )
}
