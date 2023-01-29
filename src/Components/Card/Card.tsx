import React from "react";
import {Link} from "react-router-dom"

import style from "./style.module.css"

type CardProps = {
    title: string,
    description: string,
    link: string
}


function Card ({title, description, link}:CardProps) {
    return(
        <div className={style.card}>
            <h5>{title}</h5>
            <div className={style.description}>
                <img src="https://picsum.photos/200" alt="" />
                <p>{description}</p>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">See</a>
        </div>
    )
}

export default Card