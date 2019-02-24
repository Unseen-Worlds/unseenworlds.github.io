import React from "react"
import { Box, Flex } from "rebass"
import Media from "react-media"
import { Link } from "@reach/router"
import { ReactComponent as LogoDesktop } from "../assets/LogoDesktop.svg"
import { ReactComponent as LogoMobile } from "../assets/LogoMobile.svg"
import { breakpoints } from "../theme"

export const Logo = () => {
  return (
    <Flex justifyContent="center">
      <Link to="/">
        <Media query={{ maxWidth: breakpoints.sm }}>
          {mobile => {
            if (mobile) {
              return (
                <Box mt={4}>
                  <LogoMobile width={100} />
                </Box>
              )
            } else {
              return (
                <Box width={370} height={90}>
                  <LogoDesktop />
                </Box>
              )
            }
          }}
        </Media>
      </Link>
    </Flex>
  )
}
