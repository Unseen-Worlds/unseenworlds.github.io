import React from "react"
import { Flex, Box } from "rebass"
import { Sans } from "../components/Typography"
import { posts } from "../data"
import { Spacer } from "../components/Spacer"

export const News = () => {
  return (
    <Box>
      {posts.map((post, index) => {
        return (
          <Box key={index}>
            <Flex flexDirection={["column", "row"]} mb={4}>
              <Box width={["100%", "40%"]} pr={[0, 6]}>
                <Sans size="6" weight="light">
                  {post.title}
                </Sans>
                <Sans color="black30">{post.date}</Sans>
              </Box>
              <Spacer my={[1, 0]} />
              <Box width={["100%", "60%"]}>{post.content}</Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
