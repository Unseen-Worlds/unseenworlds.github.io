import { createGlobalStyle } from "styled-components"
import backgroundImage from "./assets/background-gradient.png"

export const theme = {
  colors: {
    black100: "#000",
    black80: "#333",
    black60: "#666",
    black30: "#C2C2C2",
    black10: "#E5E5E5",
    black5: "#F8F8F8",

    purpleDark: "#ce6fc4",
    purpleLight: "#deb6da",
  },

  /**
   * See https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space
   * for all of the different proops this maps to.
   *
   * Each of the below values maps to pixels, and is base 10 for conciseness.
   */
  space: {
    ".3": 3,
    ".5": 5,
    "1": 10,
    "2": 20,
    "3": 30,
    "4": 40,
    "5": 50,
    "6": 60,
    "8": 80,
    "10": 100,
  },
}

// Helpers
export const color = colorKey => theme.colors[colorKey]
export const space = spaceKey => theme.space[spaceKey]

// Globals
export const GlobalStyle = createGlobalStyle`
  body, html {
    background: url(${backgroundImage});
    font-family: 'Libre Franklin', sans-serif;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
