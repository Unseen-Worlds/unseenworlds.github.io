import React from "react"
import { Box, Flex } from "rebass"
import { Sans } from "../components/Typography"
import { artists } from "../data"
import { sortBy } from "lodash"
import { Link } from "@reach/router"
import styled from "styled-components"

export const Artists = () => {
  return (
    <Container>
      <Flex flexWrap="wrap" flexDirection="column" style={{ height: 300 }}>
        {sortBy(artists, "name").map((artist, index) => {
          return (
            <Box key={index} mr={4} mb={2}>
              <Sans size="6" weight="light" color="teal">
                <Link to="/artist">{artist.name}</Link>
              </Sans>
            </Box>
          )
        })}
      </Flex>
    </Container>
  )
}

const Container = styled(Box)`
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
