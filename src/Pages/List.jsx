import React, { useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import CourseBox from '../components/CourseBox'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'
import CoursesSelect from '../components/CoursesSelect'
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header'
import Footer from '../components/Footer'
import img23 from '../images/cursos/23.1.jpg'
import img27 from '../images/cursos/27.jpg'
import img40 from '../images/cursos/40.jpg'
import img41 from '../images/cursos/41.jpg'
import img45 from '../images/cursos/45.1.jpg'
import img47 from '../images/cursos/47.jpg'
import img51 from '../images/cursos/51.jpg'
import img53 from '../images/cursos/55.1.jpg'
import img55 from '../images/cursos/55.1.jpg'
import img56 from '../images/cursos/56.jpg'
import img58 from '../images/cursos/58.jpg'
import img59 from '../images/cursos/59.jpg'
import img66 from '../images/cursos/66.jpg'
import img82 from '../images/cursos/82.1.jpg'
import img83 from '../images/cursos/83.jpg'
import img84 from '../images/cursos/84.1.jpg'
import img88 from '../images/cursos/88.jpg'
import img91 from '../images/cursos/91.jpg'
import img93 from '../images/cursos/93.1.jpg'
import img94 from '../images/cursos/94.jpg'
import img95 from '../images/cursos/95.1.jpg'
import img96 from '../images/cursos/96.jpg'
import img102 from '../images/cursos/102.jpg'
import img103 from '../images/cursos/103.jpg'
import img110 from '../images/cursos/110.1.jpg'
import img114 from '../images/cursos/114.jpg'
import img115 from '../images/cursos/115.jpg'
import img116 from '../images/cursos/116.jpg'
import img118 from '../images/cursos/118.1.jpg'
import img122 from '../images/cursos/122.jpg'
import img142 from '../images/cursos/142.jpg'
import img143 from '../images/cursos/143.1.jpg'
import img145 from '../images/cursos/145.jpg'
import img150 from '../images/cursos/150.1.jpg'
import img151 from '../images/cursos/151.jpg'
import img154 from '../images/cursos/154.jpg'
import img155 from '../images/cursos/155.jpg'
import img156 from '../images/cursos/156.jpg'
import img157 from '../images/cursos/157.jpg'
import img158 from '../images/cursos/158.jpg'
import img159 from '../images/cursos/159.jpg'
import img160 from '../images/cursos/160.jpg'
import img161 from '../images/cursos/161.1.jpg'
import img167 from '../images/cursos/167.jpg'
import img168 from '../images/cursos/168.jpg'
import img169 from '../images/cursos/169.jpg'
import img177 from '../images/cursos/177.jpg'
import img178 from '../images/cursos/178.jpg'
import img179 from '../images/cursos/179.jpg'
import img180 from '../images/cursos/180.jpg'
import img181 from '../images/cursos/181.jpg'
import img187 from '../images/cursos/187.jpg'
import img211 from '../images/cursos/211.jpg'
import img212 from '../images/cursos/212.jpg'
import img221 from '../images/cursos/221.jpg'
import img222 from '../images/cursos/222.jpg'
import img223 from '../images/cursos/223.jpg'
import img224 from '../images/cursos/224.jpg'
import img300 from '../images/cursos/300.jpg'
import img301 from '../images/cursos/301.jpg'
import img302 from '../images/cursos/302.jpg'
import img303 from '../images/cursos/303.jpg'
import img304 from '../images/cursos/304.jpg'
import img305 from '../images/cursos/305.jpg'
import img306 from '../images/cursos/306.jpg'
import img307 from '../images/cursos/307.jpg'
import img308 from '../images/cursos/308.jpg'
import img309 from '../images/cursos/309.jpg'
import img316 from '../images/cursos/316.1.jpg'
import img319 from '../images/cursos/319.jpg'
import img320 from '../images/cursos/320.jpg'
import img321 from '../images/cursos/321.jpg'
import img323 from '../images/cursos/323.1.jpg'
import img324 from '../images/cursos/324.1.jpg'
import img325 from '../images/cursos/325.jpg'
import img326 from '../images/cursos/326.jpg'
import img327 from '../images/cursos/327.jpg'
import img328 from '../images/cursos/328.jpg'
import img329 from '../images/cursos/329.jpg'
import img330 from '../images/cursos/330.jpg'
import img331 from '../images/cursos/331.jpg'
import img334 from '../images/cursos/334.jpg'
import img335 from '../images/cursos/335.jpg'
import img336 from '../images/cursos/336.jpg'
import img337 from '../images/cursos/337.jpg'
import img338 from '../images/cursos/338.jpg'
import axios from 'axios'
import { TextField } from '@mui/material'
import Pagination from '../components/Pagination'
const HtmlToReactParser = require('html-to-react').Parser
const parse = require('html-react-parser')
export default function List() {
  const abbres = [
    {
      text: 'Acre',
      abbre: 'ac'
    },

    {
      text: 'Alagoas',
      abbre: 'al'
    },

    {
      text: 'Amazonas',
      abbre: 'am'
    },

    {
      text: 'Amapá',
      abbre: 'ap'
    },

    {
      text: 'Bahia',
      abbre: 'ba'
    },

    {
      text: 'Ceará',
      abbre: 'ce'
    },

    {
      text: 'Distrito Federal',
      abbre: 'df'
    },

    {
      text: 'Espírito Santo',
      abbre: 'es'
    },

    {
      text: 'Goiás',
      abbre: 'go'
    },

    {
      text: 'Maranhão',
      abbre: 'ma'
    },

    {
      text: 'Mato Grosso do Sul',
      abbre: 'ms'
    },
    
    {
      text: 'Mato Grosso',
      abbre: 'mt'
    },

    {
      text: 'Minas Gerais',
      abbre: 'mg'
    },

    {
      text: 'Pará',
      abbre: 'pa'
    },

    {
      text: 'Paraíba',
      abbre: 'pb'
    },

    {
      text: 'Paraná',
      abbre: 'pr'
    },
    {
      text: 'Pernambuco',
      abbre: 'pe'
    },

    {
      text: 'Piauí',
      abbre: 'pi'
    },

    {
      text: 'Rio de Janeiro',
      abbre: 'rj'
    },

    {
      text: 'Rio Grande do Norte',
      abbre: 'rn'
    },

    {
      text: 'Rondônia',
      abbre: 'ro'
    },

    {
      text: 'Roraima',
      abbre: 'rr'
    },

    {
      text: 'Rio Grande do Sul',
      abbre: 'rs'
    },

    {
      text: 'Santa Catarina',
      abbre: 'sc'
    },

    {
      text: 'Sergipe',
      abbre: 'se'
    },

    {
      text: 'São Paulo',
      abbre: 'sp'
    },

    {
      text: 'Tocantins',
      abbre: 'to'
    },

  ]
  const imagesCode = {
      "23.1": img23,
      "27": img27,
      "40": img40,
      "41": img41,
      "45.1": img45,
      "47": img47,
      "51": img51,
      "53": img53,
      "55.1": img55,
      "56": img56,
      "58": img58,
      "59": img59,
      "66": img66,
      "82.1": img82,
      "83": img83,
      "84.1": img84,
      "88": img88,
      "91": img91,
      "93.1": img93,
      "94": img94,
      "95.1": img95,
      "96": img96,
      "103": img103,
      "110.1": img110,
      "118.1": img118,
      "143.1": img143,
      "150.1": img150,
      "161.1": img161,
      "178.1": img178,
      "316.1": img316,
      "323.1": img323,
      "324.1": img324,
      "115": img115,
      "116": img116,
      "118": img118,
      "122": img122,
      "151": img151,
      "154": img154,
      "155": img155,
      "156": img156,
      "157": img157,
      "158": img158,
      "159": img159,
      "160": img160,
      "167": img167,
      "168": img168,
      "177": img177,
      "179": img179,
      "180": img180,
      "181": img181,
      "187": img187,
      "212": img212,
      "222": img222,
      "223": img223,
      "224": img224,
      "300": img300,
      "301": img301,
      "302": img302,
      "303": img303,
      "304": img304,
      "305": img305,
      "306": img306,
      "307": img307,
      "308": img308,
      "309": img309,
      "320": img320,
      "321": img321,
      "325": img325,
      "326": img326,
      "327": img327,
      "328": img328,
      "329": img329,
      "330": img330,
      "331": img331,
      "334": img335,
      "335": img335,
      "336": img336,
      "337": img337,
      "338": img338,
    }
    const [coursesSelected, setCoursesSelected] = useState([])
    const [courses, setCourses] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    let filteredData = courses
    const [allCourses, setAllCourses] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(()=>{
      let page1 = allCourses.slice(0, 10)
      let page2 = allCourses.slice(10, 20)
      let page3 = allCourses.slice(20, 30)
      let page4 = allCourses.slice(30, 40)
      let page5 = allCourses.slice(40, 50)
      let page6 = allCourses.slice(50, 60)
      let page7 = allCourses.slice(60, 70)
      let page8 = allCourses.slice(70, 77) 
      let dataPagesAll = [page1, page2, page3, page4, page5, page6, page7, page8]
      setCourses(dataPagesAll[currentPage])
      setInputText('')
      console.log(courses)
    }, [currentPage])

    const addCourseList = (id, image ,title, time, price, code)=>{
      let newCourse = [...coursesSelected, {id, image, title, time, price, code}]
    setCoursesSelected(newCourse)
  }
  const removeCourseList = (id)=>{
    let newCoursesList = []

    coursesSelected.map((c)=>{
      if(c.id !== id){
        newCoursesList.push(c)
      }
    })
    setCoursesSelected(newCoursesList)
  }
  const calcTotalPrice = ()=>{
    let prices = []
    coursesSelected.map((course)=>{
      prices.push(course.price)
    })
    setTotalPrice(eval(prices.join('+')))
  }

  const htmlConveterToReact = (html)=>{
    const htmlInput = html
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(htmlInput);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    let padding = '0px'
    return parse(reactHtml.replaceAll('span', 'p').replaceAll('<p','<li').replaceAll('</p>','</li>').replaceAll('30px', padding).replaceAll('justify', 'start').replaceAll('<html>', '<div>').replaceAll('</html>', '</div>'))
  }

    useEffect(()=>{
      calcTotalPrice()
    }, [coursesSelected])

    let {idState} = useParams()
    const [state, setState] = useState('')
    useEffect(()=>{
      abbres.forEach((a)=>{
        if(a.abbre === idState){
          setState(a.text)
        }else{
          return false
        }
        
      })
      axios.get('https://api-cenedqualificando.azurewebsites.net/api/v1/cursos?limit=200').then(response=>{
        let coursesActives = []
        response.data.data.map((course)=>{
        let code = course.codigo.toString()
        let image = imagesCode[code]
        if(image){
          coursesActives.push(course)
        }
        })
        setAllCourses(coursesActives)
        setCourses(coursesActives.slice(0, 10))
      })
    }, [])
    let [openCart, setOpenCart] = useState(false);
    let [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    if(inputText !== ''){
      filteredData = allCourses.filter((el) => {
        if (inputText === '') {
            return el;
        }
        if(el.nome.toLowerCase().includes(inputText)) {
            return el;
        }
        if(el.codigo.includes(inputText)){
          return el;
        }
    })
    }else{
      filteredData = courses
    }
  return (
    <div>
      <Header/>
    <div className='absolute mt-10 w-screen'>
      <div className='min-h-screen'>
        <Title text={`CURSOS SUGERIDOS PARA O ESTADO: ${state}` }>
          <p className='lg:text-2xl text-sm text-center justify-center flex flex-wrap items-center font-bold'>
          Selecione o(s) curso(s) <MdCheckBox color='#F6B112' size={25}/> e, ao final, clique na imagem do carrinho de compras<BsArrowRightShort size={25}/><BsCart4 size={25}/>
          </p>
        </Title>
        <div className="mt-10 lg:mt-0 flex h-full w-full items-center flex-col" >
          <div className="lg:w-1/3 w-2/3">
            <TextField
              value={inputText}
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              placeholder='Insira o código ou nome do curso'
              label="Buscar curso"
            />
          </div>
          <div className="hidden">
          </div>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <div className={`${openCart ? 'fixed flex bg-black bg-opacity-40': 'hidden'} lg:hidden top-0 p-6 justify-center items-center w-full h-screen`}>
          <CoursesSelect openCart={openCart} setOpenCart={setOpenCart} setCoursesSelected={setCoursesSelected} totalPrice={totalPrice} courses={coursesSelected}/>
        </div>
        {filteredData.length ?
        <div className='w-full flex-col items-center lg:items-start lg:flex-row flex lg:justify-start justify-center'>
          <div className='flex mb-2 flex-col lg:items-start lg:ml-10 items-center'>
            {
            filteredData.map((course, key)=>{
              let code = course.codigo.toString()
              let image = imagesCode[code]
              let content = htmlConveterToReact(course.conteudo)
                if(image){
                  return(
                    <CourseBox inputText={inputText} filteredData={filteredData} currentPage={currentPage} content={content} coursesPerPage={courses} coursesSelected={coursesSelected} key={key} addCourseList={addCourseList} removeCourseList={removeCourseList} image={image} id={course.id} code={course.codigo} title={course.nome} price={course.valor} time={course.cargaHoraria} />
                  )
                }
              }
            )
            }
          </div>
          <div className='w-fit h-screen items-center lg:flex hidden top-24 absolute'>
          <CoursesSelect setCoursesSelected={setCoursesSelected} totalPrice={totalPrice} courses={coursesSelected}/>
          </div>
        </div>
        : !courses.length ? <div className='w-full flex justify-center'><CircularProgress size='8rem' /></div>
        :<div className='w-full flex lg:justify-center mt-10'><p className='text-3xl'>Não encontramos cursos disponíveis!</p><div className='w-fit h-screen items-center lg:flex hidden top-24 absolute'><CoursesSelect setCoursesSelected={setCoursesSelected} totalPrice={totalPrice} courses={coursesSelected}/></div></div>}
        <div onClick={()=>{openCart ? setOpenCart(false) :setOpenCart(true)}} className='bg-yellow-400 block lg:hidden p-3 rounded-full fixed bottom-2 right-5'>
            <BsCart4 size={45}/>
        </div>
        </div>
      <Footer/>
    </div>
    </div>
  )
}
