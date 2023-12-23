import React, { useState } from 'react'
import vg from "../assets/vg.png"
import "../stylesheets/Contact.css"
import toast from "react-hot-toast"
import {motion} from "framer-motion"
import {addDoc, collection} from "firebase/firestore"
import {db} from "../firebase"

const Contect = () => {

const animations = {
    form:{
      initial:{
        x:"-100%",
        opacity:0
    },
    whileInView:{
        x:0,
        opacity:1
    }
    },
    button:{
        initial:{
            y:"-100%",
            opacity:0
        },
        whileInView:{
            y:0,
            opacity:1
        },
        transition:{
            delay:0.5,
        }
    }
}

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [massage , setMassage] = useState("")
    const [diseble, setdiseble] = useState(false)

const handalSubmite = async (e) => {
    e.preventDefault(),
   
    setdiseble(true)
    try {
        await addDoc(collection(db,"contacts"),{
        name,
        email,
        massage,
    })
    toast.success("massage Sent")
    setEmail(""),
    setMassage(""),
    setName(""),
    setdiseble(false)
} catch (error) {
    toast.error("Error")
   }

}

  return (
    <div id='contact'>
        <section>
            <motion.form onSubmit={handalSubmite} {...animations.form}>
                <h2>Contact Me!</h2>
                <input type="text" placeholder='Your Name' required onChange={e => setName(e.target.value)} value={name}/>
                <input type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)} value={email}/>
                <input type="text" placeholder='Your Message' required onChange={e => setMassage(e.target.value)} value={massage}/>
                <motion.button className={diseble?"disableBtn":""} disabled={diseble} type='submit' {...animations.button}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="" />
        </aside>
    </div>
  )
}

export default Contect