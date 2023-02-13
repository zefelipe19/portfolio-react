import React from "react"
import { Route, Routes } from "react-router-dom"


import { Home } from "../Pages/Home/Home"
import { Projects } from "../Pages/Projects/Projects"
import { Contact } from "../Pages/Contact/Contact"


export default function Router () {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects/" element={<Projects />} />
            <Route path="contact/" element={<Contact />} />
        </Routes>
    )
}