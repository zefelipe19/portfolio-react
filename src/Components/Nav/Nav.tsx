import React from "react";
import {  Link  } from "react-router-dom"

import {AiFillHome, AiFillProject } from "react-icons/ai"

import Icon from "../../assets/JF.svg"
import style from "./style.module.css"


export function NavBar () {
    return(
        <header id="header">
            <nav className={style.navbar}>
                <Link to={"/"}><img src={Icon} alt="J.F icon" /></Link>
                <ul className={style.navitens}>
                    <li><Link to={"/"} rel="noopener noreferrer"><AiFillHome/> Home</Link></li>
                    <li><Link to={"projects/"} rel="noopener noreferrer"><AiFillProject/> Projetos</Link></li>
                    <li><a href="#footer" rel="noopener noreferrer">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}