import release1 from "./assets/releases/medium_UW23.jpg"
import release2 from "./assets/releases/medium_UW09.jpg"
import release3 from "./assets/releases/medium_UW12.jpg"
import release4 from "./assets/releases/medium_UW14.png"
import release5 from "./assets/releases/medium_UW15.jpg"
import release6 from "./assets/releases/medium_UW17.jpg"
import release7 from "./assets/releases/medium_UW20LP.jpg"
import release8 from "./assets/releases/medium_UW21.jpg"
import release9 from "./assets/releases/medium_UW22.jpg"
import merch1 from "./assets/releases/merch_IMG_0026.JPG"
import merch2 from "./assets/releases/merch_IMG_0552.jpg"
import merch3 from "./assets/releases/merc_girma-poster.png"

import samAshley1 from "./assets/large_Sam_Ashley.jpg"
import samAshley2 from "./assets/sam-ashley-2.jpg"
import samAshleyVideo from "./assets/sam-ashley-video.png"

import badgeAppleMusic from "./assets/badgeAppleMusic.svg"
import badgeSpotify from "./assets/badgeSpotify.png"

export const badges = {
  apple: badgeAppleMusic,
  spotify: badgeSpotify,
}

export const allReleasesData = [
  release1,
  release2,
  release3,
  release4,
  release5,
  release6,
  release7,
  release8,
  release9,
]

export const posts = [
  {
    title: 'New Music from Carl Stone, "Baroo"',
    date: "02/13/2019",
    content: `We are happy to introduce a digital release of new music from Carl Stone arriving March 1, 2019.  Track 1 from the album, "Okajouki," is now streaming. Despite non-stop activity (live concerts, festivals, collaborative records, and his well loved Electronic Music from... 70s-80s and 80s-90s compilations) and non-stop new music creation, this is somehow the first release of new Carl Stone solo music since 2007's Al-Noor.  A second full-length album of new material is in the works for September, and Carl will be appearing for some US dates (outside of his Tokyo home-base) this March, including Big Ears festival.`,
  },
  {
    title: `Sam Ashley & Werner Durand release new collaborative LP, "I'd Rather Be Lucky Than Good"`,
    date: "01/29/2019",
    content: `Does music mean anything? Can you say what it is? If not, do you ask it? If it doesn’t reply, do you call again? Has music ever asked a question of you? Can music speak meaning without words? Can music speak no meaning with words? Does music keep you company, or do you keep company with it? Does music improve your life or does it improve the life around you? How much music can fit into your life? How much meaning can fit into a piece of music? If it sounds good, is music true? If words sound good, are they true?`,
  },
  {
    title: `The Expanding Universe and Unseen Worlds returning January 2019`,
    date: "12/05/2018",
    content: `When we first began our work reissuing Laurie Spiegel's The Expanding Universe in 2008, you could still purchase sealed copies of the original pressing on Joel Chadabe's Electronic Music Foundation (EMF) webstore.  A lot can change in a short time.  Between that time and 2012 when the release finally made it out, EMF no longer had that webstore.  Between 2012 and 2017, when it began time to start repressing the album, it was clear that we should bring more of the tracks from the 2CD collection into the vinyl format.  We've managed to fit onto three LPs most of the tracks that on the 2CD collection, except for "Music for Dance" and "Dirge" which remain exclusive to the digital editions, and have all been newly cut for vinyl by Rashad Becker.`,
  },
]

export const merch = [
  {
    image: merch1,
    content: `Heather green canvas tote with pale pink ink. 18”w x 14.5”h, 3” gusset, 25” handle`,
    button: "TOTE | $20.00",
  },
  {
    image: merch2,
    content: `Natural canvas tote with blue ink. 18”w x 14.5”h, 3” gusset, 25” handle`,
    button: "TOTE | $20.00",
  },
  {
    image: merch3,
    content: `Silkscreen. 11"x17". Limited edition of 30. Signed by Girma Yifrashewa.`,
    button: "TOTE | $20.00",
  },
]

export const artists = [
  {
    name: "Sam Ashley",
    bio: `SAM ASHLEY'S invention of an experimental trance-mysticism has been a lifelong endeavor, and his art always reflects or incorporates, in some way, this unique mysticism. He has created and performed many original music, performance art and other, more abstract compositions that express this contemporary "shamanism", several of which--including the early pieces Seeing Things (1981) and How To Make Things Go Away (1979)--have had many performances around the US and abroad. Two current works-in-progress, Everyone Laughed When I Sat Down At The Piano and Happy As Can Be (expected)!, feature genuine spirit possession as performance. The essence of his life, then, is the artistic application of an innovative approach to mysticism.`,
    images: [samAshley1, samAshley2],
    releases: [
      {
        title: `I'd Rather Be Lucky Than Good`,
        id: "UW23",
        description:
          "I’d Rather Be Lucky Than Good is a new recording collaboration of Sam Ashley and Werner Durand. Sam Ashley’s mystic parables imbued with benevolent humor are drawn from a lifelong pursuit of a present-day shamanism. Werner Durand’s wind work on invented and traditional instruments stems from the minimalist tradition, routed through his own unique studies of obscure world musics.",
      },
    ],
    videos: [samAshleyVideo],
  },
  {
    name: "Carl Stone",
  },
  {
    name: "Werner Durand",
  },
  {
    name: "Laurie Speigel",
  },
  {
    name: "Philip Corner",
  },
  {
    name: "Maria Monti",
  },
  {
    name: "Robert Haigh",
  },
  {
    name: "Jacqueline Humbert",
  },
  {
    name: "David Rosenboom",
  },
  {
    name: "C-Shulz",
  },
  {
    name: "Girma Yifrashewa",
  },
  {
    name: "Lubomyr Melnyk",
  },
  {
    name: `"Blue" Gene Tyranny`,
  },
  {
    name: "Dickie Landry",
  },
  {
    name: "Elodie Lauten",
  },
]
