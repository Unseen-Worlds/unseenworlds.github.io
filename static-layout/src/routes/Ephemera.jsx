import React from "react"
import { merch } from "../data"
import { Box, Flex, Image } from "rebass"
import { Button } from "../components/Button"

export const Ephemera = () => {
  return (
    <Flex justifyContent="space-between">
      {merch.map((item, index) => {
        return (
          <Box key={index} width="30%">
            <Box>
              <Image src={item.image} />
            </Box>
            <Box>{item.content}</Box>
            <Box my={2}>
              <Button>{item.button}</Button>
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}
