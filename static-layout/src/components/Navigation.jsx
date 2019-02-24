import React from "react"
import { Box, Flex, Image } from "rebass"
import { Link } from "@reach/router"
import Media from "react-media"
import styled from "styled-components"
import { useGlobal } from "reactn"
import { color } from "../theme"
import { Serif } from "./Typography"
import { Spacer } from "./Spacer"
import { breakpoints } from "../theme"
import { ReactComponent as NavToggle } from "../assets/NavToggle.svg"

const LinkItem = props => {
  return (
    <Box mr={3}>
      <Serif color="black60" size={["6", "4"]}>
        <Link
          to={props.to}
          getProps={({ isCurrent }) =>
            isCurrent ? { className: "active" } : null
          }
          style={{
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {props.children}
        </Link>
      </Serif>
    </Box>
  )
}

const SocialLink = props => {
  const size = [40, 20]

  return (
    <Box width={size} height={size} mt={1} m={[1, "3px"]}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <Image src={props.image} />
      </a>
    </Box>
  )
}

const NavItems = () => {
  return (
    <Flex flexDirection={["column", "row"]}>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/all-releases">All Releases</LinkItem>
      <LinkItem to="/release">Release</LinkItem>
      <LinkItem to="/artists">Artists</LinkItem>
      <LinkItem to="/artist">Artist</LinkItem>
      <LinkItem to="/about">About</LinkItem>
      <LinkItem to="/news">News</LinkItem>
      <LinkItem to="/ephemera">Ephemera</LinkItem>
    </Flex>
  )
}

const SocialItems = () => {
  return (
    <Flex
      flexWrap={["wrap", ""]}
      px={[2, 0]}
      justifyContent="flex-end"
      width="100%"
    >
      <SocialLink
        url="https://unseenworlds.bandcamp.com/"
        image={require("../assets/social/rounded-bandcamp.png")}
      />
      <SocialLink
        url="https://open.spotify.com/user/unseenworlds"
        image={require("../assets/social/rounded-spotify.png")}
      />
      <SocialLink
        url="https://itunes.apple.com/profile/unseenworlds"
        image={require("../assets/social/rounded-apple-music.png")}
      />
      <SocialLink
        url="https://twitter.com/Unseen_Worlds"
        image={require("../assets/social/rounded-twitter.png")}
      />
      <SocialLink
        url="https://www.instagram.com/unseen_worlds"
        image={require("../assets/social/rounded-instagram.png")}
      />
      <SocialLink
        url="https://www.facebook.com/unseenworlds"
        image={require("../assets/social/rounded-facebook.png")}
      />
    </Flex>
  )
}

export const Navigation = () => {
  return (
    <Media query={{ maxWidth: breakpoints.sm }}>
      {mobile => {
        if (mobile) {
          return <MobileNavigation />
        } else {
          return <DesktopNavigation />
        }
      }}
    </Media>
  )
}

const DesktopNavigation = () => {
  return (
    <Container my={5} alignItems="center" flexDirection="row">
      <NavItems />
      <SocialItems />
    </Container>
  )
}

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useGlobal("mobileNavOpen")

  return (
    <MobileContainer onClick={() => toggleOpen(!isOpen)}>
      <NavToggle
        style={{
          position: "absolute",
          opacity: 0.3,
        }}
      />
      {isOpen && (
        <Container
          my={5}
          alignItems="flex-start"
          flexDirection="row"
          width="100%"
        >
          <NavItems />
          <Spacer my={2} />
          <SocialItems />
        </Container>
      )}
    </MobileContainer>
  )
}

const Container = styled(Flex)`
  font-family: "Playfair Display", serif;

  a {
    text-decoration: none;
    &:hover {
      color: ${color("purpleDark")};
    }
  }

  .active {
    color: ${color("purpleDark")};
  }
`

const MobileContainer = styled(Box)`
  cursor: pointer;
  position: absolute;
  top: 20px;
`
