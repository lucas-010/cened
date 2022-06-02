import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Education from './Pages/Education';
import Home from './Pages/Home';
import HowWork from './Pages/HowWork';
import Institution from './Pages/Institution';
import Login from './Pages/Login';
import WorkWithUs from './Pages/WorkWithUs';

function App() {
  const [translateNavbar, setTranslateNavbar] = useState(false)
  return (
    <div className="App w-screen flex flex-col h-screen overflow-x-hidden">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Header translateNavbar={translateNavbar} setTranslateNavbar={setTranslateNavbar}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/instituicao' element={<Institution/>}/>
          <Route path='/cursos' element={<Courses/>}/>
          <Route path='/comofunciona' element={<HowWork/>}/>
          <Route path='/programaeducacional' element={<Education/>}/>
          <Route path='/contato' element={<Contact/>}/>
          <Route path='/trabalheconosco' element={<WorkWithUs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
