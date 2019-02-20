import React from "react"
import { Flex, Box } from "rebass"
import { Sans } from "../components/Typography"
import { posts } from "../data"

export const News = () => {
  return (
    <Box>
      {posts.map((post, index) => {
        return (
          <Box key={index}>
            <Flex mb={4}>
              <Box width="40%" pr={6}>
                <Sans size="6" weight="light">
                  {post.title}
                </Sans>
                <Sans color="black30">{post.date}</Sans>
              </Box>
              <Box width="60%">{post.content}</Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
