import React from "react"
import { Box, Flex, Text } from "rebass"
import { Link } from "@reach/router"
import styled from "styled-components"
import { color } from "../theme"

const LinkItem = props => {
  return (
    <Box mr={3} mt={3}>
      <Text color="black60" fontSize={[2]}>
        <Link
          to={props.to}
          getProps={({ isCurrent }) =>
            isCurrent ? { className: "active" } : null
          }
        >
          {props.children}
        </Link>
      </Text>
    </Box>
  )
}

export const Navigation = () => {
  return (
    <Container my={2}>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/all-releases">All Releases</LinkItem>
      <LinkItem to="/about">About</LinkItem>
      <LinkItem to="/news">News</LinkItem>
      <LinkItem to="/ephemera">Ephemera</LinkItem>
    </Container>
  )
}

const Container = styled(Flex)`
  font-family: "Playfair Display", serif;

  a:hover {
    color: ${color("purpleLight")};
  }

  .active {
    color: ${color("purpleDark")};
  }
`
