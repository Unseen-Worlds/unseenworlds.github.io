import React from "react"
import { Button as ButtonBase, Flex, Text, Box } from "rebass"
import styled from "styled-components"
import { space } from "../theme"
import { Spacer } from "./Spacer"

export const SubscribeForm = () => {
  return (
    <Flex flexDirection="column">
      <Text>Stay informed about news from Unseen Worlds</Text>
      <Spacer mb={1} />
      <Input type="text" placeholder="Email address" />

      <Box mt={1}>
        <Button bg="teal">Subscribe</Button>
      </Box>
    </Flex>
  )
}

const Input = styled.input`
  font-family: ${props => props.theme.typography.family.sans};
  height: ${space(2)};
  width: 100%;
`

const Button = styled(ButtonBase)`
  border-radius: 0;
  padding: ${space(".3")} ${space("1")};
  font-size: 12px;
  font-weight: 200;
`
