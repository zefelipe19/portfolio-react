import React from "react"
import { BrowserRouter } from "react-router-dom"

import NavBar from "./Components/Nav/Nav"
import Router from "./Routes/index"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
