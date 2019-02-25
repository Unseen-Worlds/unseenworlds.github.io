import React from "react"
import { merch } from "../data"
import { Box, Flex, Image } from "rebass"
import { Button } from "../components/Button"

export const Ephemera = () => {
  return (
    <Flex flexDirection={["column", "row"]} justifyContent="space-between">
      {merch.map((item, index) => {
        return (
          <Box key={index} width={["100%", "30%"]} mb={[4, 0]}>
            <Box width={["100%"]}>
              <Image width={["100%"]} src={item.image} />
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
