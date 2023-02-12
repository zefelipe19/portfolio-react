import React from "react"
import { useState, FormEvent } from "react"
import emailjs from "@emailjs/browser"

import style from "./style.module.css"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import {AiOutlineCopyrightCircle} from "react-icons/ai"

export function Footer () {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    

    function handleForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        if(email === "" || name === "" || message === "") {
            alert("Profavor preencha todos os espaços!")
            return
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send('service_ibbch5l', 'template_l6acnum', templateParams, 'PljicUbcxAqtYGntf')
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
        <footer>
            <div className={style.contact}>
                <h4>Vamos trabalhar juntos? <br /> Me mande uma menssagem!</h4>
                <form onSubmit={handleForm}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                    placeholder="Seu Nome." onChange={(event) => setName(event.target.value)}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Seu Melhor E-mail." onChange={(event) => setEmail(event.target.value)}/>

                    <label htmlFor="content">Idea</label>
                    <textarea name="content" id="content" cols={30} rows={10}
                    placeholder="Sua Ideia..." onChange={(event) => setMessage(event.target.value)}></textarea>

                    <input type="submit" value="Pronto" className={style.submit}/>
                </form>
                
                <div className={style.copy}>
                    <p><AiOutlineCopyrightCircle/> Todos os direitos reservados a José Felipe</p>
                </div>

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
