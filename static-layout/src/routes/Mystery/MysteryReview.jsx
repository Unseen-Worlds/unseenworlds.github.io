import React from "react"
import { Box, Image } from "rebass"
import { Link } from "@reach/router"

export const MysteryReview = props => {
  return (
    <Box>
      <Link to="/mystery">
        <Image src={require("../../assets/mystery/review.png")} />
      </Link>
    </Box>
  )
}
