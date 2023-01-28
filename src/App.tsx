import React from "react"
import { BrowserRouter } from "react-router-dom"

import NavBar from "./Components/Nav/Nav"
import Router from "./Routes/index"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
