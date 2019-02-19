import React from "react"
import styled from "styled-components"

import { Logo } from "./Logo"
import { Navigation } from "./Navigation"

export const Layout = ({ children }) => {
  return (
    <Container>
      <div>
        <Logo />
      </div>
      <div>
        <Navigation />
      </div>

      <div>{children}</div>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`
