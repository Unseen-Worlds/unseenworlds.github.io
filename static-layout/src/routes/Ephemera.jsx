import React from "react"
import { merch } from "../data"
import { Box, Flex, Image, Button } from "rebass"

export const Ephemera = () => {
  return (
    <Flex>
      {merch.map(item => {
        return (
          <Box>
            <Box>
              <Image src={item.image} />
            </Box>
            <Box>{item.content}</Box>
            <Box>
              <Button>{item.button}</Button>
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}
