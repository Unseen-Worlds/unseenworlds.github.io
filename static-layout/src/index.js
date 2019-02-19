import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import { ThemeProvider } from "styled-components"

import { Layout } from "./components/Layout"

import { Home } from "./routes/Home"
import { AllReleases } from "./routes/AllReleases"
import { About } from "./routes/About"
import { News } from "./routes/News"
import { Ephemera } from "./routes/Ephemera"

import { theme, GlobalStyle } from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <Layout path="/">
            <Home path="/" />
            <AllReleases path="/all-releases" />
            <About path="/about" />
            <News path="/news" />
            <Ephemera path="/ephemera" />
          </Layout>
        </Router>
      </>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
