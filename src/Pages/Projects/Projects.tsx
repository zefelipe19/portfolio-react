import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";

import {FaGithub} from "react-icons/fa"
import styles from "./style.module.css"

type ProjectCardProps = {
    name: string
    url: string
}

function ProjectCard ({name, url}:ProjectCardProps) {
    return(
        <div className={styles.card}>
            <h4>{name}</h4>
            <a href={url} target="_blank" rel="nooper noorefere">See</a>
        </div>
    )
}

export function Projects () {
    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        const getAllProjects = async() => {
            await axios.get("https://api.github.com/users/zefelipe19/repos")
            .then(res => {
                setAllProjects(res.data)
            })
        }

        getAllProjects()
    }, [])

    type ProjectProps = {
        id: number,
        name: string,
        html_url: string,
    }

    return(
        <main className={styles.projects}>
            <h2>Veja aqui todos os meus projetos do GitHub. <FaGithub/></h2>
            <div className={styles.allProjects}>
                {
                    allProjects.map((project: ProjectProps) => {
                        return(
                            <ProjectCard key={project.id} name={project.name} url={project.html_url}/>
                        )
                    })
                }
            </div>
        </main>
    )
}