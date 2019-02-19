import React from "react"
import { Link } from "@reach/router"

export const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/all-releases">All Releases</Link>
      <Link to="/about">About</Link>
      <Link to="/news">News</Link>
      <Link to="/ephemera">Ephemera</Link>
    </div>
  )
}
