import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp} from "react-icons/ai"
import "../stylesheets/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="https://avatars.githubusercontent.com/u/131264986?v=4" alt="Founder" />
        <h2>Akshay Makwana</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <aside>
    <h2>Social Media</h2>
    <article>
      <a href="https://github.com/AKKIZALA" target={"blank"}><AiFillGithub/></a>
      <a href="https://www.linkedin.com/in/akshay-makwana-74b046284/" target={"blank"}><AiFillLinkedin/></a>
      <a href="https://www.instagram.com/__akkizala__/" target={"blank"}><AiFillInstagram/></a>
    </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer