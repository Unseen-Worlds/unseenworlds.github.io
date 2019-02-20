import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import { ThemeProvider } from "styled-components"

import { Layout } from "./components/Layout"
import { Home } from "./routes/Home"
import { AllReleases } from "./routes/AllReleases"
import { Release } from "./routes/Release"
import { About } from "./routes/About"
import { News } from "./routes/News"
import { Ephemera } from "./routes/Ephemera"

import { theme, GlobalStyle } from "./theme"
import { Transition } from "./components/Transition"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Transition>
        <GlobalStyle />

        <Router primary={false}>
          <Layout path="/">
            <Home path="/" />
            <AllReleases path="/all-releases" />
            <Release path="/release" />
            <About path="/about" />
            <News path="/news" />
            <Ephemera path="/ephemera" />
          </Layout>
        </Router>
      </Transition>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
