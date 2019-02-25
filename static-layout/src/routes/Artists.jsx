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
              mb={[2, 8]}
              width={["100%", "48%", "48%", "30%"]}
              onClick={() => props.navigate("/artist")}
            >
              <Box>
                <ArtistImage
                  src={artist.images[0]}
                  width={"100%"}
                  height={300}
                />

                <Spacer my={[2, 3]} />

                <Flex flexDirection={["column", "row"]}>
                  <Box pr={2}>
                    <Sans size="6" weight="light" color="teal">
                      <Link to="/artist" style={{ whitespace: "nowrap" }}>
                        {artist.name}
                      </Link>
                    </Sans>
                  </Box>
                  <AlbumList>
                    {artist.releases.map((release, index) => {
                      return (
                        <li key={index}>
                          <Sans size={["4", "3"]} weight="regular">
                            <Link
                              to="/release"
                              onClick={event => event.stopPropagation()}
                            >
                              {release.album}
                            </Link>
                          </Sans>
                        </li>
                      )
                    })}
                  </AlbumList>
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

const AlbumList = styled.ul`
  position: relative;
  padding-left: 10px;
  list-style-type: none;
  top: -8px;
  margin-left: 10px;

  li {
    /* margin-bottom: 2px; */
    &:before {
      content: "◮";
      position: absolute;
      left: -5px;
    }
  }
`
