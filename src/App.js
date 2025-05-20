import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>

    </Router>
    
  );
}

export default App;

// JSX - syntax extension that combines js and HTML

