import React from "react"
import { Flex, Box } from "rebass"
import { Sans } from "../components/Typography"

const posts = [
  {
    title: 'New Music from Carl Stone, "Baroo"',
    date: "02/13/2019",
    content: `We are happy to introduce a digital release of new music from Carl Stone arriving March 1, 2019.  Track 1 from the album, "Okajouki," is now streaming. Despite non-stop activity (live concerts, festivals, collaborative records, and his well loved Electronic Music from... 70s-80s and 80s-90s compilations) and non-stop new music creation, this is somehow the first release of new Carl Stone solo music since 2007's Al-Noor.  A second full-length album of new material is in the works for September, and Carl will be appearing for some US dates (outside of his Tokyo home-base) this March, including Big Ears festival.`,
  },
  {
    title: `Sam Ashley & Werner Durand release new collaborative LP, "I'd Rather Be Lucky Than Good"`,
    date: "01/29/2019",
    content: `Does music mean anything? Can you say what it is? If not, do you ask it? If it doesn’t reply, do you call again? Has music ever asked a question of you? Can music speak meaning without words? Can music speak no meaning with words? Does music keep you company, or do you keep company with it? Does music improve your life or does it improve the life around you? How much music can fit into your life? How much meaning can fit into a piece of music? If it sounds good, is music true? If words sound good, are they true?`,
  },
  {
    title: `The Expanding Universe and Unseen Worlds returning January 2019`,
    date: "12/05/2018",
    content: `When we first began our work reissuing Laurie Spiegel's The Expanding Universe in 2008, you could still purchase sealed copies of the original pressing on Joel Chadabe's Electronic Music Foundation (EMF) webstore.  A lot can change in a short time.  Between that time and 2012 when the release finally made it out, EMF no longer had that webstore.  Between 2012 and 2017, when it began time to start repressing the album, it was clear that we should bring more of the tracks from the 2CD collection into the vinyl format.  We've managed to fit onto three LPs most of the tracks that on the 2CD collection, except for "Music for Dance" and "Dirge" which remain exclusive to the digital editions, and have all been newly cut for vinyl by Rashad Becker.`,
  },
]

export const News = () => {
  return (
    <Box>
      {posts.map((post, index) => {
        return (
          <Box key={index}>
            <Flex mb={4}>
              <Box width="30%" pr={4}>
                <Sans>{post.title}</Sans>
                <Sans>{post.date}</Sans>
              </Box>
              <Box width="70%">{post.content}</Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
