
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Navbar/Header'
import HomePage from './components/pages/HomePage';
import AboutusPage from './components/pages/AboutusPage';
import Menu from './components/pages/Menu';
import Contactus from './components/pages/Contactus';
import Footer from './components/Footer/footer';


function App() {
 

  return (
    <>
   
     {/* <Header/> */}
    <BrowserRouter>
    <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/aboutus' element={<AboutusPage/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/contactus' element={<Contactus/>}/>

    </Routes>
    </BrowserRouter>
   <Footer/>
   </>
  )
}

export default App
