import React from 'react'
import "./stylesheets/App.css"
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Contect from './components/Contect'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'
import TimeLine from './components/TimeLine.jsx'
import Work from './components/Work.jsx'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Work/>
     <TimeLine/>
     <Services/>
     <Contect/>
     <Footer/>
     <Toaster/>
    </div>
  )
}

export default App