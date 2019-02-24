import React from "react"
import { Box, Flex, Image } from "rebass"
import { Sans, Serif } from "../components/Typography"
import { artists, releases } from "../data"
import { sample, sortBy } from "lodash"
import { Link } from "@reach/router"
import { Spacer } from "../components/Spacer"
import styled from "styled-components"

export const Artists = () => {
  return (
    <Container>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {sortBy(artists, "name").map((artist, index) => {
          return (
            <Box key={index} mb={8} width="30%">
              <Sans size="6" weight="light" color="teal">
                <Link to="/artist">{artist.name}</Link>
              </Sans>
              <Spacer my={3} />
              <Box>
                <ArtistImage
                  src={artist.images[0]}
                  width={"100%"}
                  height={300}
                />
                {/*
                <Box my={2}>
                  <Serif size="2">Releases</Serif>
                </Box>
                <Box>
                  <Image width={70} src={sample(releases).images[0]} />
                  <Spacer mx="5px" style={{ display: "inline-block" }} />
                  <Image width={70} src={sample(releases).images[0]} />
                </Box>
                */}
              </Box>
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

const ArtistImage = styled(Image)`
  object-fit: cover;
`
