import React from "react"
import { Box, Image, Flex, Button } from "rebass"

import { allReleasesData } from "../data"
import { Sans } from "../components/Typography"

export const AllReleases = () => {
  return (
    <Box>
      {allReleasesData.map((imageSrc, key) => {
        return (
          <Box mb={4} key={key}>
            <Flex>
              <Box width="40%" pr={4}>
                <Image height="auto" src={imageSrc} />
              </Box>
              <Box width="60%">
                <Sans>SAM ASHLEY & WERNER DURAND</Sans>
                <Sans>I'd Rather Be Lucky Than Good</Sans>
                <Sans>UW23 | March 8, 2019</Sans>
                <p>
                  I’d Rather Be Lucky Than Good is a new recording collaboration
                  of Sam Ashley and Werner Durand. Sam Ashley’s mystic parables
                  imbued with benevolent humor are drawn from a lifelong pursuit
                  of a present-day shamanism. Werner Durand’s wind work on
                  invented and traditional instruments stems from the minimalist
                  tradition, routed through his own unique studies of obscure
                  world musics.
                </p>

                <Flex flexDirection="row">
                  <Button>More info</Button>
                  <Button>CD - $11.00</Button>
                  <Button>DIGITAL - $7.00</Button>
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
