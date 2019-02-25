import React from "react"
import { Box, Image, Flex } from "rebass"
import { releases } from "../data"
import { Sans } from "../components/Typography"
import { BuyButton } from "../components/Button"
import { Spacer } from "../components/Spacer"

export const AllReleases = () => {
  return (
    <Box>
      {releases.reverse().map((release, key) => {
        return (
          <Box mb={[8, 4]} key={key}>
            <Flex flexDirection={["column", "row"]}>
              <Box width={["100%", "40%"]} pr={[0, 6]} mb={[3, 0]}>
                <Image width="100%" height="auto" src={release.images[0]} />
              </Box>
              <Box width={["100%", "60%"]}>
                <Sans size="5" weight="black" color="black80">
                  {release.artist.name}
                </Sans>

                <Sans size="5">{release.album}</Sans>

                <Box my={2}>
                  <Sans>
                    {release.id} | {release.releaseDate}
                  </Sans>
                </Box>

                <p>{release.description}</p>

                <Spacer my={2} />

                <Sans size="2" weight="black">
                  ◮ More Info
                </Sans>

                <Flex flexDirection={"column"} mt={2}>
                  <BuyButton>CD - $11.00</BuyButton>
                  <BuyButton>DIGITAL - $7.00</BuyButton>
                  <BuyButton>LP - $18.00</BuyButton>
                </Flex>
              </Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
