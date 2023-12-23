import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import "../stylesheets/Services.css";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>
            Web Development <br />
            (FrontEnd)
          </span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillIeCircle />
          <span>
            Web Development <br />
            (BackEnd . . .)
          </span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
