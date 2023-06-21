import React,{ useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';



function App() {
  

  return (
  
   <div>
 <Router>

    <Routes>
    <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<Signup />} /> 
       {/* <Route path='/home' element={<Home />} /> */}

    </Routes>
 </Router>

   
     </div>
  );
}

export default App