import React from "react"
import { Box } from "rebass"
import styled, { createGlobalStyle } from "styled-components"

const MysteryGlobalStyle = createGlobalStyle`
  html, body {
    background: #1D1E1F;
  }
`

export const Mystery = props => {
  return (
    <Container>
      <MysteryGlobalStyle />
      {props.children}
    </Container>
  )
}

const Container = styled(Box)`
  margin: 0 auto;
`
