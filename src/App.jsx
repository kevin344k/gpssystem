import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainContent from "./components/MainContent.jsx"
import Footer from './components/Footer.jsx'
function App() {


  return (
    <>
  <Navbar></Navbar>
  <Hero></Hero>
 <MainContent/>
 <Footer></Footer>
    </>
  )
}

export default App
