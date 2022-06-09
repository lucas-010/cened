import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Education from './Pages/Education';
import Home from './Pages/Home';
import Institution from './Pages/Institution';
import List from './Pages/List';
import Login from './Pages/Login';
import StepByStep from './Pages/StepByStep';
import WorkWithUs from './Pages/WorkWithUs';
import Register from './Pages/Register';
import axios from 'axios'

function App() {
  const [translateNavbar, setTranslateNavbar] = useState(false)
  const [visible, setVisible] = useState(false)
  let [id, setId] = useState()
  return (
    <div className="App w-screen flex flex-col h-screen overflow-x-hidden">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Header id={id} setId={setId} setVisible={setVisible} visible={visible} translateNavbar={translateNavbar} setTranslateNavbar={setTranslateNavbar}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/instituicao' element={<Institution/>}/>
          <Route path='/cursos' element={<Courses/>}/>
          <Route path='/passoapasso' element={<StepByStep/>}/>
          <Route path='/programaeducacional' element={<Education/>}/>
          <Route path='/contato' element={<Contact/>}/>
          <Route path='/trabalheconosco' element={<WorkWithUs/>}/>
          <Route path='/lista/:id' element={<List/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
