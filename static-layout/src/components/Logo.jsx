import React from "react"
import { Box, Flex } from "rebass"
import { ReactComponent as LogoDesktop } from "../assets/LogoDesktop.svg"

export const Logo = () => {
  return (
    <Flex justifyContent="center">
      <Box width={370} height={90}>
        <LogoDesktop />
      </Box>
    </Flex>
  )
}
