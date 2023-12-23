import React, { useState } from 'react'
import "../stylesheets/Header.css"
import {AiOutlineMenu} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"

const Header = () => {

  const [toggle, settoggle] = useState(false)

    const NavContent = () => (
        <>
        <h2>Akshay.</h2>
        <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        </div>
        <a href="mailto:makwanaakshay99@gmail.com">
            <button >Email</button>
        </a>
        <div className={toggle ? "drag" : ""} style={toggle ? {display:"flex"}:{display:"none"}} onClick={()=> settoggle(false)}>
        <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        </div>
        </div>
        </>
    )


  return (
    <nav>
        <NavContent/>
        <button onClick={() => settoggle(!toggle) } className='manu'>{toggle?<RxCross2/>:<AiOutlineMenu/>}</button>
    </nav>
  )
}


export default Header