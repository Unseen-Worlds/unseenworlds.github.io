import React from "react"
import { Box, Image, Flex } from "rebass"

import { allReleasesData } from "../data"
import { Sans } from "../components/Typography"
import { Button } from "../components/Button"
import { Spacer } from "../components/Spacer"

export const AllReleases = () => {
  return (
    <Box>
      {allReleasesData.map((imageSrc, key) => {
        return (
          <Box mb={4} key={key}>
            <Flex>
              <Box width="40%" pr={6}>
                <Image height="auto" src={imageSrc} />
              </Box>
              <Box width="60%">
                <Sans size="5" weight="black" color="black80">
                  SAM ASHLEY & WERNER DURAND
                </Sans>
                <Sans size="5">I'd Rather Be Lucky Than Good</Sans>

                <Box my={2}>
                  <Sans>UW23 | March 8, 2019</Sans>
                </Box>
                <p>
                  I’d Rather Be Lucky Than Good is a new recording collaboration
                  of Sam Ashley and Werner Durand. Sam Ashley’s mystic parables
                  imbued with benevolent humor are drawn from a lifelong pursuit
                  of a present-day shamanism. Werner Durand’s wind work on
                  invented and traditional instruments stems from the minimalist
                  tradition, routed through his own unique studies of obscure
                  world musics.
                </p>

                <Box my={2}>
                  <Sans size="3" weight="semibold">
                    More Info
                  </Sans>
                </Box>

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
