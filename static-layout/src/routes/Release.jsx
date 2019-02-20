import React from "react"
import { Box, Image, Button, Flex } from "rebass"
import { Sans, Serif } from "../components/Typography"

export const Release = () => {
  return (
    <Box>
      <Flex>
        <Box>
          <Flex>
            <Box>
              <Image src="cover" />
            </Box>
            <Box>
              <Sans size="5">SAM ASHLEY & WERNER DURAND</Sans>
              <Sans size="3">I'd Rather Be Lucky Than Good</Sans>
              <Sans size="2">UW23 | March 8, 2019</Sans>
              <Sans size="1">All items include instant download</Sans>

              <Button>CD - $11.00</Button>
              <Button>DIGITAL - $7.00</Button>
              <Button>LP - $18.00</Button>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Box>
            <Image src="sam-ashley" />
          </Box>
          <Box>
            <Serif>You May Also Like</Serif>
            <Flex>
              <Image src="1" />
              <Image src="1" />
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Flex>
        <Box width="70%">
          <Serif>Release Info</Serif>

          <p>
            I’d Rather Be Lucky Than Good is a new recording collaboration of
            Sam Ashley and Werner Durand. Sam Ashley’s mystic parables imbued
            with benevolent humor are drawn from a lifelong pursuit of a
            present-day shamanism. Werner Durand’s wind work on invented and
            traditional instruments stems from the minimalist tradition, routed
            through his own unique studies of obscure world musics.{" "}
          </p>
          <p>
            The two artists first met in Berlin in 1984 while Sam was touring
            Atalanta with Robert Ashley’s opera company, with whom he was a
            principle vocalist for many years. Sam Ashley’s work has appeared on
            other Unseen Worlds releases (J. Jasmine: My New Music) and in solo
            and collaborative performances alongside “Blue” Gene Tyranny and
            other artists across the world.{" "}
          </p>

          <p>
            Werner Durand, also active since the late Seventies, performs music
            for saxophones, Iranian ney, and self-made wind instruments. He is a
            linchpin figure in the experimental music scene in Germany and
            abroad following formative studies with Ariel Kalma and Gilbert
            Artman in Paris, Indian Classical Music with Kamalesh Maitra, and
            Iranian Ney with Ali Reza Asgharia. He has worked notably with David
            Behrman (Music With Memory), Arnold Dreyblatt (Animal Magnetism),
            Muslimgauze, Henning Christiansen, Catherine Christer Hennix (Born
            of Six), David Toop, and Amelia Cuni (Ashtayama, Diasporagas). He
            also was a longtime employee of Ursula Block’s gelbe MUSIK (Broken
            Music).
          </p>

          <Serif>Product Info</Serif>

          <p>
            Produced by Werner Durand <br />
            Mixed by Werner Durand and Taylor Deupree <br />
            Mastered by Taylor Deurpree
          </p>

          <strong>LP</strong>

          <p>
            Includes download card <br />
            Original artwork by Sam Lubicz <br />
            Soft touch jacket
          </p>

          <strong>CD</strong>

          <p>Soft-touch gatefold wallet</p>

          <Serif>Press</Serif>

          <p>
            <a href="#f">Fifteen Questions Interview with Werner Durand</a>

            <p>
              “There are times when I wish I could just stay inside the music,
              not because I reject so-called reality, but because I experience
              it as a kind of ideal one. Setting up situations where this can
              happen for both performers and audiences should be a goal. The
              Dream House concept by La Monte Young is a very good example. Just
              let the dream come true.”
            </p>
          </p>

          <p>
            <a href="#f">Sam Ashley on the Meaning of Trance</a>

            <p>
              Lucrecia Dalt dives into the world of trance and hypnagagogic
              states with experimental composer and performance artist Sam
              Ashley
            </p>
          </p>

          <Serif>Press</Serif>

          <Image src="vimeo image" />
        </Box>
        <Box width="30%">
          <Serif>Track list</Serif>
          <p>
            Side A <br />
            1. I’d Rather Be Lucky Than Good [17:51] <br />
            <br />
            Side B <br />
            2. Love Among The Immortals [21:08]
          </p>

          <Serif>Links</Serif>
          <a href="#f">Sam Ashley on Lovely Music</a>
          <a href="#f">Werner Durand homepage</a>
        </Box>
      </Flex>
    </Box>
  )
}
