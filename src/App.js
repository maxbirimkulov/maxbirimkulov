import React,{useContext} from 'react'
import Header from "./components/Header/Header";
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Courses from "./components/Courses/Courses";
import {ThemeContext} from "./providers/ThemeProvider";

function App() {
    const {type} = useContext(ThemeContext);

  return (
    <div className={`app ${type ? 'light' : ''}`}>
        <Header/>
        <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/courses' element={<Courses/>}/>
        </Routes>
        </main>
       <Footer/>
    </div>
  );
}

export default App;
