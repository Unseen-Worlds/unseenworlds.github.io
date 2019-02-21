import React from "react"
import { Box, Flex, Image } from "rebass"
import { artists } from "../data"
import { Sans, Serif } from "../components/Typography"

export const Artist = () => {
  const [artist] = artists

  return (
    <Box>
      <Flex>
        <Box width="70%" pr={8}>
          <Box>
            <Sans size="7" weight="light" color="teal">
              {artist.name}
            </Sans>
          </Box>
          <Box mt={2} mb={4}>
            {artist.bio}
          </Box>

          <Box mb={1}>
            <Serif>Releases</Serif>
          </Box>
          <Box>
            {artist.releases.map(release => {
              return (
                <Flex alignItems="center">
                  <Box>
                    <Box>
                      <Sans size="5" weight="semibold">
                        {release.title}
                      </Sans>
                      <Sans color="black60">{release.id}</Sans>
                    </Box>
                  </Box>
                </Flex>
              )
            })}
          </Box>

          <Box my={4}>
            <Image src={artist.videos[0]} />
          </Box>
        </Box>
        <Box width="30%">
          <Image src={artist.images[1]} />
        </Box>
      </Flex>
    </Box>
  )
}
