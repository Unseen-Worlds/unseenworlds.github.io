import React from "react"
import { Box, Flex, Image } from "rebass"
import { artists } from "../data"
import { Sans, Serif } from "../components/Typography"

export const Artist = () => {
  const [artist] = artists

  return (
    <Box>
      <Flex flexDirection={["column", "row"]}>
        <Box width={["100%", "70%"]} pr={[0, 8]}>
          <Box>
            <Sans size="7" weight="light" color="teal">
              {artist.name}
            </Sans>
          </Box>
          <Box mt={3} mb={1}>
            <Serif>Releases</Serif>
          </Box>
          <Box>
            {artist.releases.map((release, index) => {
              return (
                <Flex alignItems="center" key={index}>
                  <Box>
                    <Box>
                      <Sans>◮ {release.album}</Sans>
                    </Box>
                  </Box>
                </Flex>
              )
            })}
          </Box>
          <Box mt={2} mb={4}>
            {artist.bio}
          </Box>

          <Box my={4}>
            <Image src={artist.videos[0]} />
          </Box>
        </Box>
        <Box width={["100%", "30%"]}>
          <Image src={artist.images[1]} />
        </Box>
      </Flex>
    </Box>
  )
}
