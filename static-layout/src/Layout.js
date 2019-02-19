import React from "react"
import { Logo } from "./components/Logo"
import { Navigation } from "./components/Navigation"

export const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Navigation />
      </div>

      <div>{children}</div>
    </div>
  )
}
