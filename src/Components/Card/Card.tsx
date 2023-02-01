import React from "react";
import {Link} from "react-router-dom"

import style from "./style.module.css"

type CardProps = {
    title: string
    description: string
    link: string
    github: string
    image: string
}


function Card ({title, description, link, github, image}:CardProps) {
    return(
        <div className={style.card}>
            <h5>{title}</h5>
            <div className={style.description}>
                <img src={image} alt="" />
                <p>{description}</p>
            </div>
            <div className={style.links}>
                <a href={link} target="_blank" rel="noopener noreferrer">See</a>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
}

export default Card