import React, { useRef } from "react";
import "../stylesheets/Home.css";
import Typewriter from "typewriter-effect";
import { animate, motion } from "framer-motion";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import logo from "../assets/logo.png";

const Home = () => {

    const clientCounter = useRef(null)
    const projectCounter = useRef(null)

    const animationClientCount = ()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=> (clientCounter.current.textContent = v.toFixed())
        })
    }
    const animationProjectCount = ()=>{
        animate(0,25,{
            duration:1,
            onUpdate:(v)=> (projectCounter.current.textContent = v.toFixed())
        })
    }

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br />
            Akshay Makwana
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:makwanaakshay99@gmail.com">Hire Me</a>
            <a href="#work">
              Project <BsArrowUpRight />
            </a>
          </div>
          <article>
          <p>
            +<motion.span ref={clientCounter} whileInView={animationClientCount}></motion.span>
          </p>
          <span>Client worldwide</span>
        </article>
        <aside>
          <article>
            <p>
              +<motion.span ref={projectCounter} whileInView={animationProjectCount} ></motion.span>
            </p>
            <span>Project Done</span>
          </article>
          <article className="data-spacial">
            <p>Contact</p>
            <span>makwanaakshay99@gmail.com</span>
          </article>
        </aside>
        </div>
      </section>
      <section>
        <img src={logo} alt="Akshay" />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
