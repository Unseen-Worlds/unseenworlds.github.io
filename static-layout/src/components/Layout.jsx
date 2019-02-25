import React from "react"
import styled from "styled-components"
import { setGlobal, useGlobal } from "reactn"
import { Box } from "rebass"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { useSpring, animated } from "react-spring"
import { Desktop, Mobile } from "./Responsive"
import { Footer } from "./Footer"

setGlobal({
  mobileNavOpen: false,
})

export const Layout = ({ children }) => {
  const [state] = useGlobal()

  const expandNavAnimation = useSpring({
    position: "relative",
    left: state.mobileNavOpen ? 200 : 0,
  })

  return (
    <>
      <Container p={[1, 4]}>
        <Desktop>
          <Logo />
          <Navigation />
          <Box mt={8}>{children}</Box>
          <Footer />
        </Desktop>

        <Mobile>
          <Navigation />
          <animated.div style={expandNavAnimation}>
            <Logo />
            <Box mt={3}>{children}</Box>
          </animated.div>
        </Mobile>
      </Container>
    </>
  )
}

const Container = styled(Box)`
  max-width: 1200px;
  min-height: 94vh;
  height: 100%;
  margin: 0 auto;
`
