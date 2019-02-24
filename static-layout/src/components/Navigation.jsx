import React from "react"
import { Box, Flex, Image } from "rebass"
import { Link } from "@reach/router"
import styled from "styled-components"
import { color } from "../theme"
import { Serif } from "./Typography"

const LinkItem = props => {
  return (
    <Box mr={3}>
      <Serif color="black60" size="4">
        <Link
          to={props.to}
          getProps={({ isCurrent }) =>
            isCurrent ? { className: "active" } : null
          }
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {props.children}
        </Link>
      </Serif>
    </Box>
  )
}

const SocialLink = props => {
  const size = 20

  return (
    <Box width={size} height={size} m="3px" mt={1}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <Image src={props.image} />
      </a>
    </Box>
  )
}

export const Navigation = () => {
  return (
    <Container my={5} alignItems="center">
      <Flex>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/all-releases">All Releases</LinkItem>
        <LinkItem to="/release">Release</LinkItem>
        <LinkItem to="/artists">Artists</LinkItem>
        <LinkItem to="/artist">Artist</LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <LinkItem to="/news">News</LinkItem>
        <LinkItem to="/ephemera">Ephemera</LinkItem>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end" width="100%">
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
    </Container>
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
