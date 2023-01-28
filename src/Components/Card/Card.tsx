import React from "react";
import {Link} from "react-router-dom"

import style from "./style.module.css"

function Card () {
    return(
        <div className={style.card}>
            <h5>Title</h5>
            <img src="https://picsum.photos/200" alt="" />
        </div>
    )
}

export default Card