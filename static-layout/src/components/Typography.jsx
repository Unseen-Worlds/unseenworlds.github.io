import React from "react"
import styled from "styled-components"
import { Text as TextBase } from "rebass"
import { theme } from "../theme"

/**
 * Typography helpers can be used like so:
 *
 * <Sans size='3' weight='bold'>Hello</Sans>
 *
 * Or responsive:
 *
 * <Sans size={['3', '4']}>How are you</Sans>
 *
 */
export const Sans = props => buildType({ fontFamily: "sans", ...props })
export const Serif = props => buildType({ fontFamily: "serif", ...props })

function buildType({
  fontFamily = "sans",
  size = "3",
  weight = "regular",
  children,
}) {
  const { fontSize, lineHeight } = determineFontSizes(size)
  const fontWeight = theme.typography.weights[weight]
  const textProps = {
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
  }

  return <Text {...textProps}>{children}</Text>
}

const Text = styled(TextBase)`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight}px;
`

/**
 * Determines which font sizes/line heights to use for typography, and checks to
 * see if the values being passed in are responsive.
 *
 * See: https://jxnblk.com/styled-system/#responsive-styles
 */
function determineFontSizes(size) {
  if (!Array.isArray(size)) {
    const { fontSize, lineHeight } = theme.typography.sizes[size]

    return {
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
    }
  }

  return size
    .map(s => theme.typography.sizes[s])
    .reduce(
      (accumulator, current) => {
        return {
          fontSize: [...accumulator.fontSize, `${current.fontSize}px`],
          lineHeight: [...accumulator.lineHeight, `${current.lineHeight}px`],
        }
      },
      { fontSize: [], lineHeight: [] }
    )
}
