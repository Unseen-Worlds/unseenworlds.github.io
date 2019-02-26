import React from "react"
import { Box, Image } from "rebass"
import { Link } from "@reach/router"

export const MysteryHome = props => {
  return (
    <Box>
      <Link to="/mystery/review">
        <Image src={require("../../assets/mystery/home.png")} />
      </Link>
    </Box>
  )
}
