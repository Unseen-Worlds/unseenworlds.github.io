import React from "react"
import { Box, Flex } from "rebass"
import { Link } from "@reach/router"
import { ReactComponent as LogoDesktop } from "../assets/LogoDesktop.svg"
import { ReactComponent as LogoMobile } from "../assets/LogoMobile.svg"
import { Mobile, Desktop } from "./Responsive"

export const Logo = () => {
  return (
    <Flex justifyContent="center">
      <Link to="/">
        <Mobile>
          <Box mt={1}>
            <LogoMobile width={100} />
          </Box>
        </Mobile>
        <Desktop>
          <Box width={370} height={90}>
            <LogoDesktop />
          </Box>
        </Desktop>
      </Link>
    </Flex>
  )
}
