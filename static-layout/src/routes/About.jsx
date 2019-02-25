import React from "react"
import { Flex, Box } from "rebass"
import { Sans } from "../components/Typography"
import { Spacer } from "../components/Spacer"
import { BorderBox } from "../components/BorderBox"

export const About = () => {
  return (
    <Flex flexDirection={["column", "row"]}>
      <Box width={["100%", "60%"]} pr={[0, 3]}>
        <Sans size={["5", "6"]}>
          Unseen Worlds is a record label releasing quality editions of
          unheralded and revolutionary, yet accessible, avant garde music. We
          are interested in media that capture a timeless ecstasy of creativity,
          that seem out of space, alien, yet are deeply resonant and
          approachable. They are both primary and mysterious. They contain
          multitudes, engaging the listener through their historical context and
          sheer musicality. Our releases are surprisingly disparate and
          reliable.
        </Sans>

        <Spacer my={4} />

        <Sans size="4">
          <p>
            You may get in touch with us at{" "}
            <a href="#f">unseenworlds@unseenworlds.com</a> <br />
            You can also connect with us on Facebook, Twitter, and Instagram
          </p>

          <Spacer my={3} />

          <p>
            Unseen Worlds <br />
            PO Box 250558 <br />
            New York, NY 10025
          </p>
        </Sans>
      </Box>
      <BorderBox width={["100%", "40%"]} my={[2, 0]}>
        Our titles see distribution worldwide via Secretly Distribution
        <p>
          Direct Retail Sales: <br />
          <a href="#f">domestic@secretlydistribution.com</a>
        </p>
        <p>
          International Sales: <br />
          <a href="#f">international@secretlydistribution.com</a>
        </p>
      </BorderBox>
    </Flex>
  )
}
