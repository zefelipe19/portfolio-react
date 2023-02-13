import React from "react";
import {  Link  } from "react-router-dom"

import Icon from "../../assets/JF.svg"
import style from "./style.module.css"


export function NavBar () {
    return(
        <header>
            <nav className={style.navbar}>
                <Link to={"/"}><img src={Icon} alt="J.F icon" /></Link>
                <ul className={style.navitens}>
                    <li><Link to={"/"} rel="noopener noreferrer">Home</Link></li>
                    <li><Link to={"projects/"} rel="noopener noreferrer">Projetos</Link></li>
                    <li><Link to={"contact/"} rel="noopener noreferrer">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}