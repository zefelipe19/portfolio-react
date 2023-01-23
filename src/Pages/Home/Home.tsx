import React from "react"
import {  Link  } from "react-router-dom"

import style from "./style.module.css"

export default function Home() {
    return(
        <>
            <main>
                <div className={style.presentation}>
                    <h1>José Felipe</h1>
                    <h5>Web Developer JavaScript | Python</h5>
                </div>
                <div className={style.about}>
                    <h4>Hi, I'm Felipe, I'm from Brazil.</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni quo aliquid accusamus odio, expedita voluptatum harum nisi doloremque facilis id maxime placeat iusto dolores, commodi, non distinctio animi officiis.
                    </p>
                </div>
                <div className={style.projects}>
                    <h4>Take a look on my projects.</h4>
                </div>
            </main>
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
        </>
        
    )
}

