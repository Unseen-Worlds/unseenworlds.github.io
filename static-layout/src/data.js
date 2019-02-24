export const badges = {
  apple: require("./assets/badgeAppleMusic.svg"),
  spotify: require("./assets/badgeSpotify.png"),
}

function findArtist(artistName) {
  const artist = getArtistsData().find(artist => {
    const foundArtist = artist.name.toLowerCase() === artistName.toLowerCase()
    return foundArtist
  })
  return artist
}

function findReleases(artistName) {
  const artistReleases = getReleasesData().filter(release => {
    const foundReleases =
      release.artist.name.toLowerCase() === artistName.toLowerCase()
    return foundReleases
  })
  return artistReleases
}

function getReleasesData() {
  return [
    {
      id: "UW01",
      album: "Out of the Blue",
      artist: findArtist(`"BLUE" GENE TYRANNY`),
      description: `For the first time on CD, "Blue" Gene Tyranny's first album from 1978 (originally one of the first Lovely Music releases) is here - beautifully remastered, with new artwork and 24-page booklet. Composing for what is essentially a chamber rock ensemble, a cast of female vocalists, and himself on the Polymoog and RMI synthesizers, Blue has created a song-cycle that reflects his intensely melodic and free piano technique in a polished studio record. Out of the Blue elegantly combines adventurous New Music technique, the style and appeal of pop music, and the grace of classical music to form an unclassifiable and totally revelatory whole. Endearing, exciting, familiar yet unlike anything else - this is a very friendly record.`,
      releaseDate: "January 2007",
      images: [require("./assets/releases/UW01.jpg")],
    },
    {
      id: "UW02",
      album: "KMH: Piano Music In The Continuous Mode",
      artist: findArtist("LUBOMYR MELNYK"),
      description: `Lubomyr Melnyk's debut album from 1979, KMH, is an unheralded touchstone of minimalism. Performing solo on piano with a speed that suggests multiple pianos playing together in harmony, Melnyk nearly brings out the full sound of the instrument all at once. His music is lush and maximal yet it possesses the restrained, slowly evolving nature found in music by artists like Steve Reich and Terry Riley. Melnyk developed his unique approach to minimalism while working with dancer/choreographer Carolyn Carlson (who also worked with Igor Wakhevitch) in Paris during the 1970's. Carlson's influence led Melnyk to create music that is dramatic enough for the stage yet meditative enough for deep listening, a version of minimalism with the engimatic traces of Satie.`,
      releaseDate: "May 2007",
      images: [require("./assets/releases/UW02.jpg")],
    },
    {
      id: "UW03",
      album: "Woo Lae Oak",
      artist: findArtist("CARL STONE"),
      description: `First ever CD issue of Carl Stone's debut album work, originally issued on Joan La Barbara's Wizard Records in 1983. Woo Lae Oak is a 54 minute tape piece based around minimal samples of strings and wind which layer, deconstruct and reform into an expansive, shimmering whole. Remastered for CD, with original artwork and new accompanying notes by Phill Niblock.`,
      releaseDate: "February 2008",
      images: [require("./assets/releases/UW03.jpg")],
    },
    {
      id: "UW04",
      album: "The Death of Don Juan",
      artist: findArtist("ELODIE LAUTEN"),
      description: `CD debut of this 1985 post-minimal landmark by Elodie Lauten, featuring performances by Arthur Russell and Peter Zummo. Lauten has been active in the downtown New York classical and punk scenes since moving from France in the 1970s. The Death of Don Juan is a breakthrough for its bold, lyrical minimalism in concert with a dramatic sensibility that is deeply faithful to the modern existential emotional experience. Originally self-produced and released as a small LP edition on her own label, it has been touted ever since by Kyle Gann, who adds notes to this edition, and was recently included on one of Alan Licht's Minimal Top Ten lists.`,
      releaseDate: "July 2008",
      images: [require("./assets/releases/UW04.jpg")],
    },
    {
      id: "UW05",
      album: "Piano Works Revisited",
      artist: findArtist("ELODIE LAUTEN"),
      description: `A 2CD collection of piano works by postminimalist composer Elodie Lauten - most of which is available for the first time ever on CD. The albums Piano Works (1983) and Concerto for Piano and Orchestral Memory (1984), both reissued here in their entirety with remastered sound, incorporate found and prerecorded sounds into lyrical, minimalist piano works in a highly personal, even baroque, style. They are deeply meditative and expansive but do not require the epic lengths enjoyed by Glass, Reich, Riley. Contemporary luminaries Arthur Russell and Peter Zummo contribute to the Concerto. Also included in this set is Lauten's performance of her later masterpiece Variations on the Orange Cycle (1991) and other previously unreleased tracks.`,
      releaseDate: "March 2010",
      images: [require("./assets/releases/UW05.jpg")],
    },
    {
      id: "UW06",
      album: "Fifteen Saxophones",
      artist: findArtist("DICKIE LANDRY"),
      description: `First ever reissue of this little known classic from founding Philip Glass Ensemble member Richard “Dickie” Landry. Following two jazz LPs issued on the Chatham Square label (which he co-ran), Dickie Landry released Fifteen Saxophones, a set of 1974 recordings done with engineer Kurt Munkacsi, on the Northern Lights and Wergo labels in 1977. Fifteen Saxophones simultaneously demonstrates Landry’s boundary-pushing saxophone and his understanding of the minimalists’ long-form treatises on sound. Using intricate Revox tape delays, Landry’s strong personality as a player shines through a brilliant wall of sound. It is unsurprising Landry was a fixture in the same New York scene that spawned artists like Richard Serra – something equally monumental exists in the pieces found on this album.`,
      releaseDate: "April 2011",
      images: [require("./assets/releases/UW06.jpg")],
    },
    {
      id: "UW07",
      album: "Detours",
      artist: findArtist(`"BLUE" GENE TYRANNY`),
      description: `Detours is “Blue” Gene Tyranny’s first album of new piano works since 2003’s Take Your Time. A beautifully recorded collection of tracks composed between 2004 and 2010, Detours belongs to a rarefied class of supremely listenable and beautiful piano albums that are not encumbered by any new-age shabbiness. It possesses the sort of timeless and elegant romanticism so unpretentious and accomplished it seems to at once effortlessly canonize itself.`,
      releaseDate: "",
      images: [require("./assets/releases/UW07.jpg")],
    },
    {
      id: "UW11",
      album: "Three Solo Pieces",
      artist: findArtist("LUBOMYR MELNYK"),
      description: `Comprised of three balanced examples of his Continuous Music on solo piano, Three Solo Pieces serves as perhaps the best introduction the Ukrainian-Canadian composer Lubomyr Melnyk yet available. “Marginal Invitation” is a subdued work with a deeply rooted melodic sensibility that is rich in overtones, while “Corrosions on the Surface of Life” exhibits a dissonant fury of patterned note play. The final, side-length meditation “Cloud Passade No. 3” is a chordal work in free-time which functions equally well as furniture music and a meditative exploration of pure light.`,
      releaseDate: "November 2013",
      images: [require("./assets/releases/UW11.jpg")],
    },
    {
      id: "UW13",
      album: "Love and Peace",
      artist: findArtist("GIRMA YIFRASHEWA"),
      description: `Unseen Worlds presents new recordings of solo piano pieces by Ethiopian composer Girma Yifrashewa, the first release of Yifrashewa's music outside of Africa. Born in Addis Ababa in 1967, Girma Yifrashewa is a worthy new torchbearer of African pianism. His highly personalized approach to the piano likens him to Ethiopian composer Emahoy Tsege Mariam, while his use of Ethiopian pentatonic scale within the Western Art Music format places his compositions in conversation with more academically minded work. Traditionally Ethiopian in melody, cinematic in vision, and deep in beauty, his compositions occupy a lyrical middle ground between classical and jazz that is supremely listenable yet defies easy classification.`,
      releaseDate: "July 2014",
      images: [require("./assets/releases/UW13.jpg")],
    },
    {
      id: "UW14",
      album: "FRÜHE JAHRE",
      artist: findArtist("C-SCHULZ"),
      description: `FRÜHE JAHRE is the first time reissue of C-Schulz’s early work from late 1980s and early ‘90s. Schulz’s first LP, 10. HOSE HORN, was introduced alongside other debut LPs from Jim O'Rourke and Frank Dommert on Dommert's Entenpfuhl label in 1991. Combining the cathartic sounds of industrial, early techno, and innovative pop with inspiration from acousmatic, New Music, and Dada, Schulz’s music is a prime example of the Cologne experimental music scene of the time. Rhythmic delights, outlandish juxtapositions and a sustained, unresolved, aurally-fascinating tension evoke dramatic, film-like meditations. Liner notes written by Marcus Schmickler, who also co-produced many of the tracks. Remastering by Rashad Becker.`,
      releaseDate: "August 18, 2017",
      images: [require("./assets/releases/UW14.png")],
    },
    {
      id: "UW10",
      album: "Daytime Viewing",
      artist: findArtist("JACQUELINE HUMBERT & DAVID ROSENBOOM"),
      description: `Daytime Viewing (1979-80) is an extended narrative song, based on a casual analysis of daytime television drama and the audience phenomena such programming addresses. The piece explores the use of fantasy as a survival mechanism against loneliness, illustrating the human compulsion to inflate the mundane to mythological proportions. A central female character weaves tales, using threads of personal experience and the idea of TV as friend, as mantra, and as transformational window between imagined spectacle and the pedestrian plane.`,
      releaseDate: "June 2013",
      images: [require("./assets/releases/UW10.jpg")],
    },
    {
      id: "UW16",
      album: "J. Jasmine: My New Music",
      artist: findArtist("JACQUELINE HUMBERT & DAVID ROSENBOOM"),
      description: `Privately pressed to LP in 1978 under the name J. Jasmine and made especially for the Ann Arbor Film Festival, with artistic collaboration from the festival’s founder and Once Group artist, George Manupelli, My New Music is the debut album by Jacqueline Humbert and David Rosenboom. Featuring a cast of Mills College personalities like David Behrman and Sam Ashley on backup vocal duties, this song cycle is at every turn boundary-pushing and gender-busting, yet still hilarious, sweet, and genuine, all delivered in a post-genre, art-song, cabaret musical style that happens to boast some serious avant-garde chops, courtesy of Rosenboom. If it weren’t so spot on, you’d swear it was a guilty pleasure. As J. Jasmine writes, My New Music is a collection of personal stories and private desires, exposed, articulated, performed and dedicated to the hope that one person's fantasies can contribute to another person's freedom. Get lost in J. Jasmine’s world for a little long while, and be free.`,
      releaseDate: "February 23, 2018",
      images: [require("./assets/releases/UW16.jpg")],
    },
    {
      id: "UW17",
      album: "Creatures of the Deep",
      artist: findArtist("ROBERT HAIGH"),
      description: `A new album of piano driven ambient music from British composer Robert Haigh. Following in the path of his albums for the Japanese Siren label, Creatures of the Deep is an underground vantage of a meeting between the musical worlds of Harold Budd and Erik Satie. With a storied musical career that has ranged widely in style — from his industrial-avant-garde works on Nurse With Wound’s United Diaries label as SEMA to his legendary ambient drum and bass records as Omni Trio on Moving Shadow — Robert Haigh's work occupies a space between music and mystery. With Creatures of the Deep, Haigh is at the peak of his powers. Among noir, minimal, neo-classical landscapes are robust scatterings of bright reflection and a musical expression that is subtle and elusive yet uniquely Haigh’s in its voice and masterful execution. The closer we examine, the more is revealed, and the less is defined.`,
      releaseDate: "October 27, 2017",
      images: [require("./assets/releases/UW17.jpg")],
    },
    {
      id: "UWX",
      album: "Donnie & Laurie",
      artist: findArtist("LAURIE SPIEGEL"),
      description: `A limited-edition 12” and download featuring an unearthed, late-‘70s collaboration between Laurie Spiegel, ElectroComp 101 synthesizer, and Don Christensen (ImpLOG, The Contortions), drums, on the A-side and an alternate version of Spiegel’s classic The Expanding Universe track “Patchwork” on the B-side.`,
      releaseDate: "May 25, 2018",
      images: [require("./assets/releases/UWX.jpg")],
    },
    {
      id: "UW08",
      album: "Il Bestiario",
      artist: findArtist("MARIA MONTI"),
      description: `First time available since its original release on the Italian Ri-Fi label, Maria Monti's 1974 LP Il Bestario is a rare item even in its native country. Monti is an Italian singer and actress with a noteworthy career, performing as a cabaret singer in the 60s, an ambitious avant-garde folk artist in the 70s, and starring in films by directors such Sergio Leone (Fistful of Dynamite) and Bernardo Bertolucci (1900) all the while. In addition to lyrics by the infamous poet Aldo Braibanti, Il Bestiario features arrangements and synthesizer from legendary avant-garde composer Alvin Curran, as well as the soprano saxophone of jazz-great Steve Lacy. The music of Il Bestiario is a prime example of "the new art-song" of the 1970s, as Alvin Curran calls it - lush, dynamic and full of intelligence and beauty.`,
      releaseDate: "UW08 | June 2012",
      images: [require("./assets/releases/UW08.jpg")],
    },
    {
      id: "UW15",
      album: "Electronic Music from the Seventies and Eighties",
      artist: findArtist("CARL STONE"),
      description: `This 3LP set contains a selection of seven early works by American composer Carl Stone, all previously unpublished except for “Shing Kee,” which appeared on the 1992 New Albion CD release, Mom’s. Notorious, formerly elusive recordings like "Sukothai," "Shibucho," and "Dong Il Jang" exemplify how Stone masterfully guided his art through the transition period when New Music exited the loft scene of the 1970s for a stab at commercial presence in the 1980s, satisfying both impulses by fusing his compositional ambition with systems of live performance that were simultaneously pop savvy, commercial suicide, and technologically and aesthetically forward thinking. His live performance practice, documented here in a carefully restored archival recording of “Kuk Il Kwan” at The Kitchen in 1981, has merged seamlessly with today’s computer-driven methods. The earliest works of this collection, “LIM” and “Chao Praya,” realized on the Buchla 200, date to the early 1970s while Stone was a student of James Tenney and Morton Subotnick at CalArts, a rare glimpse of Stone working with purely electronic source material.`,
      releaseDate: "September 30, 2016",
      images: [require("./assets/releases/UW15.jpg")],
    },
    {
      id: "UW20",
      album: "Electronic Music from the Eighties and Nineties",
      artist: findArtist("CARL STONE"),
      description: `Electronic Music from the Eighties and Nineties presents the soothing, hallucinatory side of Stone’s slow-evolving, time-bending composition. While we can’t always identify the source, we can hear that his sounds come from somewhere, and that there is a “correct” or “complete” version of them in theory; and so we can hear when they are being changed. What drives Stone’s music is the flow that he draws out of those differences: the way an Indonesian gamelan morphs into a chorus built from one female vocalist over the course of “Mae Yao”’s twenty-three minutes, the surprise emergence of a Mozart chorus out of the synths and skip-glitches of “Sonali,” or the slow, ambient evolution of “Banteay Srey”. “Woo Lae Oak,” issued in a single side edit for the first time, is an exception. Its samples – a tremolo string and a bottle being blown across the top like a flute - are simple in the extreme. Yet the Stone hallmark is clearly present, he locates the inherent emotional properties of the sounds – the tingling anticipation of the string and the calm nobility of the wind – and takes them into unexpected expressive territory.`,
      releaseDate: "July 13, 2018",
      images: [require("./assets/releases/UW20.jpg")],
    },
    {
      id: "UW12",
      album: "Satie Slowly",
      artist: findArtist("PHILIP CORNER"),
      description: `American composer Philip Corner likes Satie too well not to object to how he is played. From the time of his participation in the first performance of Satie's "Vexations" he realized that here was, lurking under the travesties of the 1st Gymnopédie, one of the greats of this or any other century... a "secret genius" who masked with humility and seeming conformity a profoundly innovative thorough-going critique of the limitations and pretensions of our High Culture as it has come down to us. A 44 page booklet of commentary and and additional 16 page booklet of graphic analyses set out to demonstrate this - with implication for performance of the works. As the record title "Satie Slowly" shows, the indication "lent" is taken at its full value. An ample selection of piano pieces, spread across 2 CDs, come from his early period, music with great spiritual content.`,
      releaseDate: "September 2014",
      images: [require("./assets/releases/UW12.jpg")],
    },
    {
      id: "UW21",
      album:
        "EXTREEMIZMS: early & late, performed by Silvia Tarozzi , Deborah Walker, Rhodri Davies, Philip Corner",
      artist: findArtist("PHILIP CORNER"),
      description: `Extremes are extreme, extremely. For Philip Corner, a lifelong commitment to extremes - extreme expression, extreme beauty, extreme noise, extreme silence - developed a mastery of expression, any one extreme may result in all of the others. In gripping new recordings by the duo of Silvia Tarozzi, violin, and Deborah Walker, cello - with assistance from Rhodri Davies, harp, and Philip Corner, piano - Corner's early ensemble works from 1958 are paired with newer, late works from 2015-2016. The works from 1958, "Two-part monologue" and "FINALE,” were composed while Corner was teaching at City College and still finishing his Masters at Columbia University under Henry Cowell and Otto Luening. Extremes being extreme, they were too extreme for Columbia. Yet, Corner completed his degree and continued to stretch on, creating works somewhere between the supercomputer-refined micro-tunings of James Tenney and the ecstatic enactments of Malcolm Goldstein, his Tone Roads bandmates. Now, with the world (somewhat) caught up, we can appreciate Philip Corner’s EXTREEMIZMS, early and late, together.`,
      releaseDate: "October 12, 2018",
      images: [require("./assets/releases/UW21.jpg")],
    },
    {
      id: "UW19",
      album: "The Expanding Universe",
      artist: findArtist("LAURIE SPIEGEL"),
      description: `The Expanding Universe is the classic 1980 debut album by composer and computer music pioneer Laurie Spiegel. The album is reissued here for the first time in a massively expanded two-CD set, containing all four original album tracks plus an additional 15 tracks from the same period, nearly all previously unreleased. Some of the already well-know works included in this set are "Patchwork", the complete "Appalachian Grove" series, and "Kepler's Harmony of the Worlds", which was included on the golden record launched on board the Voyager spacecraft. The pieces comprising The Expanding Universe combine slowly evolving textures with the emotional richness of intricate counterpoint, harmony, and complex rhythms (John Fahey and J. S. Bach are both cited as major influences in the original cover's notes), all built of electronic sounds.`,
      releaseDate: "January 18, 2019",
      images: [require("./assets/releases/UW09.jpg")],
    },
    {
      id: "UW22",
      album: "Unseen Worlds",
      artist: findArtist("LAURIE SPIEGEL"),
      description: `Laurie Spiegel’s second full-length album, Unseen Worlds, arrived just over ten years after her debut album. Having realized the pieces found on The Expanding Universe (1980) on an instrument no longer available to her, the GROOVE System at Bell Laboratories, Spiegel moved on to composing and developing for the Alles Machine, alphaSyntauri, McLeyvier and various other instruments before creating an instrument entirely her own. Spiegel created “Music Mouse - An Intelligent Instrument” on a Macintosh 512k so that she could have an instrument that was not general purpose but a small, specialized, and well defined musical instrument for and by her that she did not have to compromise on or risk losing access to it. While it was a very personal instrument for Spiegel, demand among friends and colleagues nevertheless grew until “Music Mouse - An Intelligent Instrument” became a commercial product for the Macintosh, Amiga, and Atari personal computers with a devoted popular following that continues to this day, despite the obsoletion of those platforms. At the time of her Unseen Worlds album’s original release in 1991, the issuing record label turned out to be going out of business, dissolved and disappeared, sending the album immediately into obscurity.`,
      releaseDate: "January 18, 2019",
      images: [require("./assets/releases/UW22.jpg")],
    },
    {
      id: "UW23",
      album: "I'd Rather Be Lucky Than Good",
      artist: findArtist("SAM ASHLEY & WERNER DURAND"),
      description: `I’d Rather Be Lucky Than Good is a new recording collaboration of Sam Ashley and Werner Durand. Sam Ashley’s mystic parables imbued with benevolent humor are drawn from a lifelong pursuit of a present-day shamanism. Werner Durand’s wind work on invented and traditional instruments stems from the minimalist tradition, routed through his own unique studies of obscure world musics.`,
      releaseDate: "March 8, 2019",
      images: [require("./assets/releases/UW23.jpg")],
    },
    {
      id: "UW26",
      album: "Baroo",
      artist: findArtist("CARL STONE"),
      description: ``,
      releaseDate: "March 1, 2019",
      images: [require("./assets/releases/UW26.jpg")],
    },
  ]
}

function getArtistsData() {
  return [
    {
      name: "Sam Ashley & Werner Durand",
      bio: `SAM ASHLEY'S invention of an experimental trance-mysticism has been a lifelong endeavor, and his art always reflects or incorporates, in some way, this unique mysticism. He has created and performed many original music, performance art and other, more abstract compositions that express this contemporary "shamanism", several of which--including the early pieces Seeing Things (1981) and How To Make Things Go Away (1979)--have had many performances around the US and abroad. Two current works-in-progress, Everyone Laughed When I Sat Down At The Piano and Happy As Can Be (expected)!, feature genuine spirit possession as performance. The essence of his life, then, is the artistic application of an innovative approach to mysticism.`,
      images: [
        require("./assets/large_Sam_Ashley.jpg"),
        require("./assets/sam-ashley-2.jpg"),
      ],
      videos: [require("./assets/sam-ashley-video.png")],
    },
    {
      name: "Carl Stone",
      images: [require("./assets/artists/carl-stone.jpg")],
    },
    {
      name: "Laurie Spiegel",
      images: [require("./assets/artists/laurie-speigel.jpg")],
    },
    {
      name: "Philip Corner",
      images: [require("./assets/artists/philip-corner.jpg")],
    },
    {
      name: "Maria Monti",
      images: [require("./assets/artists/maria-monte.jpg")],
    },
    {
      name: "Robert Haigh",
      images: [require("./assets/artists/robert-haigh.jpg")],
    },
    {
      name: "Jacqueline Humbert & David Rosenboom",
      images: [require("./assets/artists/jacqueline-humbert.jpg")],
    },
    {
      name: "C-Schulz",
      images: [require("./assets/artists/c-shulz.jpg")],
    },
    {
      name: "Girma Yifrashewa",
      images: [require("./assets/artists/girma.jpg")],
    },
    {
      name: "Lubomyr Melnyk",
      images: [require("./assets/artists/lubmyer.jpg")],
    },
    {
      name: `"Blue" Gene Tyranny`,
      images: [require("./assets/artists/blue-gene-tyranny.jpg")],
    },
    {
      name: "Dickie Landry",
      images: [require("./assets/artists/dicky-landry.jpg")],
    },
    {
      name: "Elodie Lauten",
      images: [require("./assets/artists/elodi-lauten.jpg")],
    },
  ]
}

export const releases = getReleasesData()
export const artists = getArtistsData().map(artist => {
  return {
    ...artist,
    releases: findReleases(artist.name),
  }
})

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
    image: require("./assets/releases/merch_IMG_0026.JPG"),
    content: `Heather green canvas tote with pale pink ink. 18”w x 14.5”h, 3” gusset, 25” handle`,
    button: "TOTE | $20.00",
  },
  {
    image: require("./assets/releases/merch_IMG_0552.jpg"),
    content: `Natural canvas tote with blue ink. 18”w x 14.5”h, 3” gusset, 25” handle`,
    button: "TOTE | $20.00",
  },
  {
    image: require("./assets/releases/merc_girma-poster.png"),
    content: `Silkscreen. 11"x17". Limited edition of 30. Signed by Girma Yifrashewa.`,
    button: "TOTE | $20.00",
  },
]
