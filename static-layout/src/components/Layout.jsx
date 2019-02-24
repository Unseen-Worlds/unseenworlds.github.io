import React from "react"
import styled from "styled-components"

import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { Box } from "rebass"
import { space } from "../theme"
import { Footer } from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Logo />
        <Navigation />

        <Box mt={8}>{children}</Box>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled(Box)`
  max-width: 1200px;
  min-height: 94vh;
  height: 100%;
  margin: 0 auto;
  padding: ${space("4")};
`
