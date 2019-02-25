import React from "react"
import styled from "styled-components"
import { setGlobal, useGlobal } from "reactn"
import { Box } from "rebass"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"

setGlobal({
  mobileNavOpen: false,
})

export const Layout = ({ children }) => {
  const [state] = useGlobal()

  return (
    <>
      <Container p={[1, 4]}>
        {state.mobileNavOpen ? (
          <Navigation />
        ) : (
          <>
            <Logo />
            <Navigation />
            <Box mt={[3, 8]}>{children}</Box>
          </>
        )}
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
`
