import React from "react"

import style from "./style.module.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"

import { Card } from "../../Components/Card/Card"
import db from "../../assets/database.json"

export function Home() {


    return(
        <>
            <main>
                <div className={style.presentation} id="home">
                    <h1>José Felipe</h1>
                    <h5>Web Developer JavaScript | Python</h5>
                    <div className={style.presentationLinks}>
                    <a href={"https://www.linkedin.com/in/jose-felipe-paula"} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/> Linkedin
                    </a>
                    <a href={"https://github.com/zefelipe19"} target="_blank" rel="noopener noreferrer">
                        <FaGithub/> GitHub
                    </a>
                    </div>
                </div>
                <div className={style.about}>
                    <h3>Olá, Eu me chamo José Felipe!</h3>
                    <p>
                        <strong>Graduando em Analise e Desenvolvimento de Sistemas</strong>, comecei no inicio de Fevereiro de 2023, mas, estudo de forma autodidata desde o fim de 2021, com o objetivo de me tornar um <strong>Desenvolvedor Full Stack Web</strong> possuo experiência com Django e Django Rest Framework que utilizam <strong>Python</strong>, React.js com <strong>TypeScript</strong> que utilizam <strong>JavaScript</strong> além de <strong>HTML</strong> e <strong>CSS</strong>.
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
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
        
    )
}
