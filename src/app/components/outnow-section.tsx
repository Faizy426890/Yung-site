"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink, Music, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Song {
  id: string
  title: string
  description: string
  youtubeUrl?: string
  spotifyUrl?: string
  thumbnail: string
  duration: string
  releaseDate: string
  genre: string
  plays: string
  platform: "youtube" | "spotify"
}

const songs: Song[] = [
  {
    id: "1",
    title: "Too Much",
    description:
      "A cosmic journey through raw emotions and stellar beats. This track showcases the artist's ability to blend street narratives with otherworldly production, creating an atmosphere that's both grounded and transcendent.",
    spotifyUrl:
      "https://open.spotify.com/track/1EVFM1UupPNkM4KnAd7ack?si=qErNe2GMRnuDXZ9Ho4r7NA&nd=1&dlsi=9742a84ab2574fb8",
    thumbnail:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1758331649/7bb10b39-e1c9-4538-8619-b29984e2c8a1_aqhlzn.jpg",
    duration: "3:42",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "15.2K",
    platform: "spotify",
  },
  {
    id: "2",
    title: "UP",
    description:
      "Unapologetic and fierce, this track embodies the raw energy that defines the artist's sound. With hard-hitting lyrics and an infectious beat, it's a statement piece that demands attention and respect.",
    spotifyUrl:
      "https://open.spotify.com/track/3ZcVETMrjQf42lWs3WBmwe?si=meOMd44HRt2S6SqdNm3NwQ&nd=1&dlsi=b42496bf4b1d4eac",
    thumbnail:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1758593360/WhatsApp_Image_2025-09-06_at_14.54.45_d7ff1500_pxyd7m.jpg",
    duration: "2:58",
    releaseDate: "2024",
    genre: "Trap",
    plays: "22.8K",
    platform: "spotify",
  },
  {
    id: "3",
    title: "PXINT",
    description:
      "A declaration of serious intent and unwavering dedication. This track perfectly captures the essence of the grind mentality, delivering powerful verses over a commanding instrumental that leaves no doubt about commitment to excellence.",
    spotifyUrl:
      "https://open.spotify.com/track/7q30RruL77IO3zn4v0sgvB?si=Dmo7sqlDQ0qZ9o5V_J3aaA&nd=1&dlsi=4c20c9dffb264a35",
    thumbnail:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1758593339/WhatsApp_Image_2025-09-06_at_14.54.44_2911c722_iiogdq.jpg",
    duration: "4:15",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "31.5K",
    platform: "spotify",
  },
  {
    id: "4",
    title: "TRUST THE PROCESS",
    description:
      "A motivational anthem that speaks to perseverance and faith in the journey. This track combines introspective lyrics with a powerful beat, creating an inspiring message about staying true to your path despite obstacles.",
    spotifyUrl:
      "https://open.spotify.com/track/6r8rMHc5AOKyVS0ECjJWIz?si=fcU2O8HoSq21YF1EJ5lJSw&nd=1&dlsi=21ad7602ae644917",
    thumbnail:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1758593349/WhatsApp_Image_2025-09-06_at_14.54.44_a12d514b_plg7wm.jpg",
    duration: "3:28",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "18.7K",
    platform: "spotify",
  },
]

export default function OutNowSection() {
  const [hoveredSong, setHoveredSong] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-black via-red-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-red-600/25 via-red-500/20 to-red-700/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-red-800/25 via-red-600/20 to-red-900/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.015)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-800/5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-600/15 via-red-500/10 to-red-700/15 backdrop-blur-xl border border-red-400/20 shadow-lg shadow-red-500/10 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-pulse shadow-sm shadow-red-400/50" />
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
            <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide">Latest Releases</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-pulse shadow-sm shadow-red-600/50" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight relative"
            variants={itemVariants}
          >
            <span className="text-white drop-shadow-2xl">OUT</span>{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-red-500 drop-shadow-2xl">
                NOW
              </span>
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 blur-sm opacity-70">
                NOW
              </span>
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 blur-lg opacity-40">
                NOW
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-medium px-4"
            variants={itemVariants}
          >
            Experience the latest from Yung's musical journey.
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 font-semibold drop-shadow-sm">
              Each track tells a story of dedication, passion, and street elegance.
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredSong(song.id)}
              onHoverEnd={() => setHoveredSong(null)}
            >
              <Link
                href={song.platform === "youtube" ? song.youtubeUrl! : song.spotifyUrl!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="relative h-96 md:h-[28rem] lg:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40"
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={song.thumbnail || "/placeholder.svg?height=600&width=400&query=music album cover"}
                      alt={`${song.title} cover art`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150 brightness-75 contrast-75 saturate-50"
                    />

                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                          {song.genre}
                        </span>
                      </div>

                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          y: hoveredSong === song.id ? [-2, 2, -2] : 0,
                          rotate: hoveredSong === song.id ? [0, 180, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredSong === song.id ? Number.POSITIVE_INFINITY : 0,
                          ease: "easeInOut",
                        }}
                      >
                        <Music className="w-3 h-3 text-white" />
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-7 h-7 text-white ml-1" />
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/70 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {song.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {song.plays}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300">
                        {song.title}
                      </h3>

                      <p className="text-white/80 text-sm leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                        {song.description}
                      </p>

                      <Button className="w-full bg-gradient-to-r from-green-600/90 to-green-500/90 hover:from-green-600 hover:to-green-500 border-green-500/20 shadow-green-500/25 group-hover:shadow-green-500/40 text-white font-semibold py-3 text-sm rounded-xl transition-all duration-300 backdrop-blur-sm border shadow-lg">
                        <Play className="w-4 h-4 mr-2" />
                        Listen on Spotify
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-green-600/10 via-green-500/10 to-green-700/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-black/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              More Music Coming Soon
            </h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay tuned for more releases from Yung. Follow on social media to be the first to know when new tracks
              drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://open.spotify.com/track/1EVFM1UupPNkM4KnAd7ack?si=qErNe2GMRnuDXZ9Ho4r7NA&nd=1&dlsi=9742a84ab2574fb8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base inline-block"
              >
                Follow on Spotify
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
