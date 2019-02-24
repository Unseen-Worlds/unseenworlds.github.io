import React from "react"
import { Box, Flex, Image } from "rebass"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { take } from "lodash"
import { releases } from "../data"
import { Spacer } from "../components/Spacer"
import { SubscribeForm } from "../components/SubscribeForm"
import { Sans } from "../components/Typography"
import { BorderBox } from "../components/BorderBox"
import blogRelease1 from "../assets/releases/large_UW26.jpg"

const RELEASE_CAP = 9

export const Home = () => {
  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {take(releases, RELEASE_CAP).map((release, key) => {
          return (
            <Box width={["100%", "30%"]} mb={[4, "4%"]} key={key}>
              <Image width="100%" src={release.images[0]} />
            </Box>
          )
        })}
      </Flex>

      <Box mt={8}>
        <Flex flexDirection={["column", "row"]}>
          <Box width={["100%", "70%"]} pr={[0, 10]}>
            <Box>
              <Box>
                <Sans size={5} weight="bold">
                  New Music from Carl Stone, "Baroo"
                </Sans>
                <Sans fontWeight="100" fontSize={1}>
                  02/13/2019
                </Sans>
              </Box>
              <Box mt={3}>
                <Image src={blogRelease1} />
                <p>
                  We are happy to introduce a digital release of new music from
                  Carl Stone arriving March 1, 2019. Track 1 from the album,
                  "Okajouki," is now streaming.
                </p>
                <p>
                  Despite non-stop activity (live concerts, festivals,
                  collaborative records, and his well loved Electronic Music
                  from... 70s-80s and 80s-90s compilations) and non-stop new
                  music creation, this is somehow the first release of new Carl
                  Stone solo music since 2007s Al-Noor. A second full-length
                  album of new material is in the works for September, and Carl
                  will be appearing for some US dates (outside of his Tokyo
                  home-base) this March, including Big Ears festival.
                </p>

                <p>
                  <i>Upcoming Live Dates:</i>
                </p>

                <strong>2019 March</strong>
                <ul>
                  <li>
                    March 16 - Brooklyn NY - Murmrr Ballroom w/ Eli Keszler
                    (save $5 w/ advance tickets)
                  </li>
                  <li>March 17 - Washington DC - Rhizome DC</li>
                  <li>March 21-24 - Knoxville TN - Big Ears Festival 2019</li>
                </ul>

                <strong>2019 June</strong>
                <ul>
                  <li>June 26 - Berlin, Germany - Kiezsalon</li>
                </ul>
              </Box>
            </Box>
          </Box>
          <Box width={["100%", "30%"]} my={[4, 0]}>
            <BorderBox borderColor="white">
              <SubscribeForm />
            </BorderBox>

            <Spacer my={5} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Unseen_Worlds"
              options={{
                height: 500,
              }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
