import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";

import styles from "./style.module.css"

type ProjectCardProps = {
    name: string
    url: string
}

function ProjectCard ({name, url}:ProjectCardProps) {
    return(
        <div className={styles.card}>
            <h5>{name}</h5>
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
        <main>
            <h1>All GitHub Projects</h1>
            <div>
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