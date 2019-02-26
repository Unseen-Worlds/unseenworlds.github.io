import React from "react"
import { Box, Flex, Image } from "rebass"
import { Link } from "@reach/router"
import styled from "styled-components"
import { useGlobal } from "reactn"
import { color, breakpoints } from "../theme"
import { Serif, Sans } from "./Typography"
import { ReactComponent as NavToggle } from "../assets/NavToggle.svg"
import { Mobile, Desktop, RenderIf } from "./Responsive"
import { useSpring, animated } from "react-spring"

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
      <LinkItem to="/mystery">Mystery</LinkItem>
    </Flex>
  )
}

const SocialItems = () => {
  return (
    <Flex
      flexWrap={["wrap", ""]}
      flexDirection={["column", "row"]}
      justifyContent={["flex-start", "flex-end"]}
      width="100%"
    >
      <SocialLink
        label="Bandcamp"
        url="https://unseenworlds.bandcamp.com/"
        image={require("../assets/social/rounded-bandcamp.png")}
      />
      <SocialLink
        label="Spotify"
        url="https://open.spotify.com/user/unseenworlds"
        image={require("../assets/social/rounded-spotify.png")}
      />
      <SocialLink
        label="Apple Music"
        url="https://itunes.apple.com/profile/unseenworlds"
        image={require("../assets/social/rounded-apple-music.png")}
      />
      <SocialLink
        label="Twitter"
        url="https://twitter.com/Unseen_Worlds"
        image={require("../assets/social/rounded-twitter.png")}
      />
      <SocialLink
        label="Instagram"
        url="https://www.instagram.com/unseen_worlds"
        image={require("../assets/social/rounded-instagram.png")}
      />
      <SocialLink
        label="Facebook"
        url="https://www.facebook.com/unseenworlds"
        image={require("../assets/social/rounded-facebook.png")}
      />
    </Flex>
  )
}

const SocialLink = props => {
  const size = [30, 20]

  return (
    <>
      <Desktop>
        <Box width={size} height={size} mt={1} pt={1} m={[1, "5px"]}>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Image src={props.image} />
          </a>
        </Box>
      </Desktop>
      <Mobile>
        <Sans size="2">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Box width={size} height={size} mt={1} ml={2} mb={1}>
              <Image src={props.image} /> {props.label}
            </Box>
          </a>
        </Sans>
      </Mobile>
    </>
  )
}

export const Navigation = () => {
  return (
    <>
      <Mobile>
        <MobileNavigation />
      </Mobile>
      <Desktop>
        <DesktopNavigation />
      </Desktop>
    </>
  )
}

const DesktopNavigation = () => {
  return (
    <Container my={5} alignItems="center" flexDirection="row">
      <NavItems />
      <RenderIf greaterThan={breakpoints.lg}>
        <SocialItems />
      </RenderIf>
    </Container>
  )
}

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useGlobal("mobileNavOpen")

  const animateStyles = {
    position: "relative",
    left: isOpen ? 0 : -200,
  }
  const expandNavAnimation = useSpring({
    ...animateStyles,
    from: animateStyles,
  })

  return (
    <MobileContainer onClick={() => toggleOpen(!isOpen)}>
      <NavToggle
        style={{
          position: "absolute",
          opacity: 0.3,
        }}
      />
      <animated.div style={expandNavAnimation}>
        <Container my={5} alignItems="flex-start" width="100%">
          <NavItems />
          {/* <SocialItems /> */}
        </Container>
      </animated.div>
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
  z-index: 1;
`
