"use client"

import type React from "react"
import { Instagram, Youtube, MessageCircle, Star, Users, TrendingUp, ExternalLink } from "lucide-react"

interface SocialCard {
  platform: string
  username: string
  followers: string
  engagement: string
  status: string
  color: string
  icon: React.ReactNode
  bgGradient: string
  featured: string
  stats: {
    posts: string
    label: string
  }
  rating: string
  url: string
}

const socialData: SocialCard[] = [
  {
    platform: "Instagram",
    username: "yung_ravage",
    followers: "125K",
    engagement: "8.4%",
    status: "DAILY POSTS",
    color: "from-purple-500 to-purple-600",
    icon: <Instagram size={28} />,
    bgGradient: "from-purple-500/10 to-purple-600/10",
    featured: "Latest Stories & Reels",
    stats: { posts: "2.1K", label: "POSTS" },
    rating: "4.9",
    url: "https://www.instagram.com/yung_ravage?igsh=bnh0OXd2OXcyd3d2",
  },
  {
    platform: "YouTube",
    username: "YUNG RAVAGE",
    followers: "89K",
    engagement: "12.3%",
    status: "NEW UPLOADS",
    color: "from-purple-400 to-purple-500",
    icon: <Youtube size={28} />,
    bgGradient: "from-purple-400/10 to-purple-500/10",
    featured: "Music Videos & Content",
    stats: { posts: "156", label: "VIDEOS" },
    rating: "4.8",
    url: "https://www.youtube.com/channel/UCNKynbHhfQq58XWygZAfQlQ",
  },
  {
    platform: "SnapChat",
    username: "youngtana",
    followers: "98K",
    engagement: "11.1%",
    status: "STORY ACTIVE",
    color: "from-purple-600 to-purple-700",
    icon: <MessageCircle size={28} />,
    bgGradient: "from-purple-600/10 to-purple-700/10",
    featured: "Behind The Scenes",
    stats: { posts: "1.2K", label: "SNAPS" },
    rating: "4.8",
    url: "https://www.snapchat.com/add/youngtana",
  },
]

function SocialMediaCard({ card }: { card: SocialCard }) {
  const handleCardClick = () => {
    window.open(card.url, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      onClick={handleCardClick}
      className={`
        relative overflow-hidden rounded-3xl p-8
        bg-gradient-to-br ${card.bgGradient}
        backdrop-blur-2xl border border-purple-500/20
        hover:border-purple-400/40 hover:scale-[1.03]
        transition-all duration-700 ease-out
        group cursor-pointer
        shadow-2xl hover:shadow-purple-500/20 hover:shadow-2xl
        transform-gpu
        min-h-[420px] sm:min-h-[450px]
        bg-black/40
      `}
    >
      <div
        className={`
        absolute inset-0 opacity-0 group-hover:opacity-30
        bg-gradient-to-br ${card.color}
        transition-opacity duration-700 blur-3xl -z-10
      `}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`
          absolute top-4 right-4 w-2 h-2 rounded-full
          bg-gradient-to-r ${card.color} opacity-60
          animate-pulse
        `}
        />
        <div
          className={`
          absolute bottom-8 left-6 w-1 h-1 rounded-full
          bg-gradient-to-r ${card.color} opacity-40
          animate-pulse delay-1000
        `}
        />
      </div>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-5 h-5 text-white/60" />
      </div>

      <div
        className={`
        inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
        bg-gradient-to-br ${card.color} shadow-2xl
        group-hover:scale-110 group-hover:rotate-3
        transition-all duration-500 ease-out
        border border-purple-400/30
      `}
      >
        <div className="text-white drop-shadow-lg">{card.icon}</div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-black text-white tracking-tight">{card.platform}</h3>
        <span
          className={`
          text-xs px-3 py-1.5 rounded-full font-bold tracking-wider
          bg-gradient-to-r ${card.color} text-white shadow-lg
          group-hover:shadow-xl transition-shadow duration-300
        `}
        >
          {card.status}
        </span>
      </div>

      <p className="text-white/80 text-base mb-4 font-medium">{card.username}</p>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-purple-400 fill-purple-400 drop-shadow-sm" />
          <span className="text-purple-400 text-xs font-bold tracking-wider">FEATURED</span>
        </div>
        <p className="text-white font-semibold text-base leading-relaxed">{card.featured}</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <div className="text-3xl font-black bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent mb-1">
            {card.stats.posts}
          </div>
          <div className="text-white/60 text-xs font-semibold tracking-wide">{card.stats.label}</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-white/80 mb-1">
            <Users className="w-5 h-5" />
            <span className="text-2xl font-black">{card.followers}</span>
          </div>
          <div className="text-white/60 text-xs font-semibold tracking-wide">FOLLOWERS</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-400 drop-shadow-sm" />
          <span className="text-white/80 text-sm font-medium">Engagement {card.engagement}</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-purple-400 fill-purple-400 drop-shadow-sm" />
          <span className="text-white font-bold text-lg">{card.rating}</span>
        </div>
      </div>

      <button
        className={`
        w-full py-4 rounded-2xl font-bold text-white text-lg
        bg-gradient-to-r ${card.color}
        hover:shadow-2xl hover:shadow-purple-500/30
        transition-all duration-500 group/btn
        flex items-center justify-center gap-3
        border border-purple-400/30 hover:border-purple-300/60
        transform hover:translate-y-[-2px]
      `}
      >
        <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        FOLLOW NOW
      </button>
    </div>
  )
}

function SocialMedia() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black  to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-950 via-black to-black"></div>

      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-700/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            YUNG RAVAGE
          </h1>
          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl font-semibold max-w-2xl mx-auto leading-relaxed">
            Connect With Me Across All Platforms
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {socialData.map((card, index) => (
            <div
              key={index}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              <SocialMediaCard card={card} />
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 text-white/70">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                312K+
              </div>
              <div className="text-sm sm:text-base font-semibold tracking-wide">Total Followers</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                10.6%
              </div>
              <div className="text-sm sm:text-base font-semibold tracking-wide">Avg Engagement</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                4.8
              </div>
              <div className="text-sm sm:text-base font-semibold tracking-wide">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default SocialMedia
