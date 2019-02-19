import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"

import { Layout } from "./Layout"
import { Home } from "./Home"
import { AllReleases } from "./AllReleases"
import { About } from "./About"
import { News } from "./News"
import { Ephemera } from "./Ephemera"

const App = () => {
  return (
    <Router>
      <Layout path="/">
        <Home path="/" />
        <AllReleases path="/all-releases" />
        <About path="/about" />
        <News path="/news" />
        <Ephemera path="/ephemera" />
      </Layout>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
