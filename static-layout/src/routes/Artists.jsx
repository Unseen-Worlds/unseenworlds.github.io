import React from "react"
import { Box, Flex, Image } from "rebass"
import { Sans } from "../components/Typography"
import { artists } from "../data"
import { sortBy } from "lodash"
import { Link } from "@reach/router"
import { Spacer } from "../components/Spacer"
import styled from "styled-components"

export const Artists = props => {
  return (
    <Container>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {sortBy(artists, "name").map((artist, index) => {
          return (
            <Artist
              key={index}
              mb={8}
              width="30%"
              onClick={() => props.navigate("/artist")}
            >
              <Box>
                <ArtistImage
                  src={artist.images[0]}
                  width={"100%"}
                  height={300}
                />

                <Spacer my={3} />

                <Flex>
                  <Box pr={2}>
                    <Sans size="6" weight="light" color="teal">
                      <Link to="/artist" style={{ whitespace: "nowrap" }}>
                        {artist.name}
                      </Link>
                    </Sans>
                  </Box>
                  <Box mt="8px">
                    {artist.releases.map((release, index) => {
                      return (
                        <Box mb="5px" key={index}>
                          <Sans size="3" weight="regular">
                            <Link
                              to="/release"
                              onClick={event => event.stopPropagation()}
                            >
                              {release.album}
                            </Link>
                          </Sans>
                        </Box>
                      )
                    })}
                  </Box>
                </Flex>
              </Box>
            </Artist>
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

const Artist = styled(Box)`
  cursor: pointer;
`

const ArtistImage = styled(Image)`
  object-fit: cover;
`
