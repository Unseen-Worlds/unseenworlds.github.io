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
