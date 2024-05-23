import React from 'react';
import { NavBar } from './Component/NavBar';
import { HomePage } from './Page/HomePage';
import { Footer } from './Component/Footer';
import { Login } from './Page/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './Page/Register';



function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
       </Routes>
    </BrowserRouter>
    <Footer/>
    </>
);
 
}

export default App;
