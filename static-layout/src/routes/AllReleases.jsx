import React from "react"
import { Box, Image, Flex } from "rebass"

import { releases } from "../data"
import { Sans } from "../components/Typography"
import { Button } from "../components/Button"
import { Spacer } from "../components/Spacer"

export const AllReleases = () => {
  return (
    <Box>
      {releases.reverse().map((release, key) => {
        return (
          <Box mb={4} key={key}>
            <Flex>
              <Box width="40%" pr={6}>
                <Image height="auto" src={release.images[0]} />
              </Box>
              <Box width="60%">
                <Sans size="5" weight="black" color="black80">
                  {release.artist}
                </Sans>

                <Sans size="5">{release.album}</Sans>

                <Box my={2}>
                  <Sans>
                    {release.id} | {release.releaseDate}
                  </Sans>
                </Box>

                <p>{release.description}</p>

                <Spacer my={2} />

                <Sans size="3" weight="semibold">
                  More Info
                </Sans>

                <Flex flexDirection="row" width="100%">
                  <Button>CD - $11.00</Button>
                  <Spacer mr={1} />
                  <Button>DIGITAL - $7.00</Button>
                  <Spacer mr={1} />
                  <Button>LP - $18.00</Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
