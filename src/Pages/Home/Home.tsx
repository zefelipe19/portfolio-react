import React from "react"

import style from "./style.module.css"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

import { Card } from "../../Components/Card/Card"
import db from "../../assets/database.json"

export function Home() {


    return(
        <>
            <main>
                <div className={style.presentation}>
                    <h1>José Felipe</h1>
                    <h5>Web Developer JavaScript | Python</h5>
                    <div className={style.presentationLinks}>
                    <a href={"https://www.linkedin.com/in/jose-felipe-paula"} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/> Linkedin
                    </a>
                    <a href={"https://www.instagram.com/ze_felipe1903/"} target="_blank" rel="noopener noreferrer">
                        <FaInstagram/> Instagram
                    </a>
                    <a href={"https://github.com/zefelipe19"} target="_blank" rel="noopener noreferrer">
                        <FaGithub/> GitHub
                    </a>
                    </div>
                </div>
                <div className={style.about}>
                    <h4>Hi, I'm Felipe, I'm from Brazil.</h4>
                    <p>
                        Since i was a kid i'm fascinated for technology and i get start my studies in 2022 when i finally got a laptop.
                        I started with Python and your beautiful write and after i start to learn HTML, CSS and JavaScript for Web Development.
                        Now i have the knowlogy necessary to get start my carrear and continue to improve my skills to build every aplication better then other.
                    </p>
                </div>
                <div className={style.projects}>
                    <h4>Take a look on my projects.</h4>
                    <div className={style.projectsItens}>
                        {
                            db.Projects.map((project) => {
                                return(
                                    <Card
                                    key={project.id}
                                    title={project.name} 
                                    description={project.description} 
                                    link={project.link}
                                    github={project.github}
                                    image={project.image}/>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
        
    )
}
