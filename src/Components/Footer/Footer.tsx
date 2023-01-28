import React from "react"
import {  Link  } from "react-router-dom"

import style from "./style.module.css"

function Footer () {
    return(
        <footer>
            <div className={style.contact}>
                <h4>Let's work togheder.</h4>
                <div>
                    <form>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Your E-mail"/>
                        <label htmlFor="content">Content</label>
                        <input type="text" name="content" id="content" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div>
                    <ul>
                        <li><Link to={"https://github.com/zefelipe19"} target="_blank" rel="noopener noreferrer">GitHub</Link></li>
                        <li><Link to={"https://www.linkedin.com/in/jose-felipe-paula"} target="_blank" rel="noopener noreferrer">Linkedin</Link></li>
                        <li><Link to={"https://www.instagram.com/ze_felipe1903/"} target="_blank" rel="noopener noreferrer"></Link>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer