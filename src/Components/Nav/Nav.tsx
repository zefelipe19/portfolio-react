import React from "react";
import {  Link  } from "react-router-dom"

import Icon from "../../assets/JF.svg"
import style from "./style.module.css"


function NavBar () {
    return(
        <header>
            <nav className={style.navbar}>
                <Link to={"/"}><img src={Icon} alt="J.F icon" /></Link>
                <ul className={style.navitens}>
                    <li><Link to={"/"} rel="noopener noreferrer">Home</Link></li>
                    <li><Link to={"projects/"} rel="noopener noreferrer">Projects</Link></li>
                    <li><Link to={"#"} rel="noopener noreferrer">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar