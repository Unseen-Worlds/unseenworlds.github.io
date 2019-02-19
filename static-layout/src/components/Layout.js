import React from "react"
import styled from "styled-components"

import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { Box } from "rebass"
import { space } from "../theme"

export const Layout = ({ children }) => {
  return (
    <Container>
      <Logo />
      <Navigation />

      <Box>{children}</Box>
    </Container>
  )
}

const Container = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${space("4")}px;
`
