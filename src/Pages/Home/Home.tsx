import React from "react"

import style from "./style.module.css"
import { FaLinkedin, FaGithub, FaInstagram, FaPython, FaJava } from "react-icons/fa"

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
                    <h3>Olá, Eu me chamo José Felipe!</h3>
                    <p>
                        Sou <strong>Desenvolvedor Web Full Stack</strong>, tenho dominio em <strong>Python</strong> com Django, Django Rest Framework e  <strong>JavaScript</strong> com React.js além é claro de <strong>HTML</strong> e <strong>CSS</strong>. Sou autodidata e estou sempre em busca de uma melhoria constante com o objetivo de construir uma carreira sólida com cada app melhor que o anterior.
                    </p>
                </div>
                <div className={style.projects}>
                    <h4>Dê uma olhada nos meus projetos.</h4>
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
