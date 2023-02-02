import React from "react"
import { useState } from "react"
import {  Link  } from "react-router-dom"

import style from "./style.module.css"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

function Footer () {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [message, setMessage] = useState()
    

    function handleForm(event) {
        event.preventDefault()
        
        if(email === "" || name === "" || message === "") {
            alert("Nop")
            return
        }
    }
    return(
        <footer>
            <div className={style.contact}>
                <h4>Let's work togheder.</h4>
                <form onSubmit={handleForm}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your email" onChange={(event) => setEmail(event.target.value)}/>

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                    placeholder="Your name" onChange={(event) => setName(event.target.value)}/>
                    
                    <label htmlFor="content">Idea</label>
                    <textarea name="content" id="content" cols={30} rows={10}
                    placeholder="Your Idea..." onChange={(event) => setMessage(event.target.value)}></textarea>

                    <input type="submit" value="Send" />
                </form>
                
                <ul className={style.social}>
                    <li>
                        <a href={"https://github.com/zefelipe19"} target="_blank" rel="noopener noreferrer">
                            <FaGithub/> GitHub
                        </a>
                        </li>
                    <li>
                        <a href={"https://www.linkedin.com/in/jose-felipe-paula"} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/> Linkedin
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.instagram.com/ze_felipe1903/"} target="_blank" rel="noopener noreferrer">
                            <FaInstagram/> Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer