"use client"

import type React from "react"
import { Music, Headphones, Play, Radio, Share, ExternalLink, Users, Calendar, Star } from "lucide-react"
import OutNowSection from "../components/outnow-section"
import ContactSection from "../components/contact-section"

interface Platform {
  id: string
  name: string
  tagline: string
  color: string
  url: string
  icon: React.ComponentType<any>
  description: string
  stats: string
  statsLabel: string
  followers: string
  lastUpdate: string
  rating: number
  featuredTrack?: string
}

const platforms: Platform[] = [
  {
    id: "spotify",
    name: "Spotify",
    tagline: "NOW STREAMING",
    color: "#1DB954",
    url: "https://open.spotify.com/artist/3YiIhcUe0Kfw3WXbtPbNU7?si=N-NkTGSyT1CeXdp-X8qA3g",
    icon: Music,
    description: "Stream latest releases & exclusive tracks",
    stats: "12K",
    statsLabel: "LATEST TRACKS",
    followers: "2.4M",
    lastUpdate: "2 days ago",
    rating: 4.8,
    featuredTrack: "Midnight Vibes",
  },
  {
    id: "apple",
    name: "Apple Music",
    tagline: "NEW DROP",
    color: "#FA57C1",
    url: "https://music.apple.com/us/artist/rav/1617592297",
    icon: Headphones,
    description: "High-quality audio & exclusive content",
    stats: "8K",
    statsLabel: "HI-FI TRACKS",
    followers: "1.8M",
    lastUpdate: "1 week ago",
    rating: 4.9,
    featuredTrack: "Spatial Audio Mix",
  },
  {
    id: "youtube",
    name: "YouTube",
    tagline: "LATEST VIDEOS",
    color: "#FF0000",
    url: "https://youtube.com/channel/UCNKynbHhfQq58XWygZAfQlQ?si=aYqHihZfRsQ9lFHs",
    icon: Play,
    description: "Music videos, behind the scenes & creative content",
    stats: "15K",
    statsLabel: "VISUAL CONTENT",
    followers: "892K",
    lastUpdate: "3 days ago",
    rating: 4.7,
    featuredTrack: "Studio Sessions EP1",
  },
  {
    id: "tidal",
    name: "Tidal",
    tagline: "HI-FI QUALITY",
    color: "#00D4FF",
    url: "https://tidal.com/browse/artist/10489782/u",
    icon: Radio,
    description: "Lossless audio & exclusive releases",
    stats: "5K",
    statsLabel: "PREMIUM TRACKS",
    followers: "456K",
    lastUpdate: "5 days ago",
    rating: 4.9,
    featuredTrack: "Master Quality Album",
  },
]

const MyMusic: React.FC = () => {
  const handleButtonClick = (url: string, platformName: string) => {
    console.log(`[v0] Attempting to navigate to ${platformName}: ${url}`)

    // Try to open in a new tab
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")

    if (!newWindow) {
      console.warn(`[v0] Popup blocked for ${platformName}. User interaction required.`)
    } else {
      console.log(`[v0] Successfully opened ${platformName}`)
    }
  }

  const handleShareClick = (platform: Platform, e: React.MouseEvent) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({
        title: `Listen to music on ${platform.name}`,
        text: `Check out my music on ${platform.name}!`,
        url: platform.url,
      })
    } else {
      navigator.clipboard.writeText(platform.url)
      // Could add a toast notification here
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Primary floating gradient blurs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-950/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-purple-950/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-purple-950/25 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Secondary accent glows */}
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-950/20 rounded-full blur-3xl animate-pulse delay-300"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-500/15 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-purple-300/10 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent mb-2 tracking-tight">
                My Music
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-400 text-xl font-light tracking-wide">
              Stream across all platforms • Experience the sound
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon

              return (
                <div
                  key={platform.id}
                  className="group relative bg-gradient-to-br from-white/5 via-purple-950/10 to-black backdrop-blur-3xl border border-purple-500/20 rounded-3xl p-6 cursor-default transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-white/8 hover:via-purple-950/20 hover:to-purple-950/5 hover:border-purple-400/40 hover:shadow-2xl"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                    boxShadow: `0 0 40px rgba(168, 85, 247, 0.1), inset 0 0 40px rgba(168, 85, 247, 0.05)`,
                  }}
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-purple-400/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
                      style={{
                        backgroundColor: `${platform.color}12`,
                        borderColor: `${platform.color}35`,
                        boxShadow: `0 8px 32px ${platform.color}20, inset 0 0 20px ${platform.color}10`,
                      }}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${platform.color}40, transparent)`,
                        }}
                      ></div>
                      <Icon size={20} style={{ color: platform.color }} className="relative z-10 drop-shadow-lg" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => handleShareClick(platform, e)}
                        className="w-8 h-8 rounded-full bg-purple-950/30 backdrop-blur-md border border-purple-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-900/50 hover:border-purple-400/40 hover:scale-110 cursor-pointer"
                      >
                        <Share size={12} className="text-purple-300" />
                      </button>
                      <button
                        onClick={() => handleButtonClick(platform.url, platform.name)}
                        className="w-8 h-8 rounded-full bg-purple-950/30 backdrop-blur-md border border-purple-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-900/50 hover:border-purple-400/40 hover:scale-110 cursor-pointer"
                      >
                        <ExternalLink size={12} className="text-purple-300" />
                      </button>
                    </div>
                  </div>

                  {/* Platform Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300 tracking-tight">
                      {platform.name}
                    </h3>
                    <div
                      className="inline-block px-2 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 border backdrop-blur-sm"
                      style={{
                        color: platform.color,
                        backgroundColor: `${platform.color}15`,
                        borderColor: `${platform.color}30`,
                        boxShadow: `0 4px 12px ${platform.color}15`,
                      }}
                    >
                      {platform.tagline}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">{platform.description}</p>

                    {platform.featuredTrack && (
                      <div className="bg-purple-950/20 border border-purple-500/20 rounded-lg p-3 mb-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Star size={12} style={{ color: platform.color }} />
                          <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">Featured</span>
                        </div>
                        <p className="text-white text-sm font-medium">{platform.featuredTrack}</p>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div
                        className="text-2xl font-bold mb-1 bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${platform.color}, #a855f7)`,
                        }}
                      >
                        {platform.stats}
                      </div>
                      <div className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                        {platform.statsLabel}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Users size={12} className="text-purple-400" />
                        <span className="text-lg font-bold text-white">{platform.followers}</span>
                      </div>
                      <div className="text-xs font-medium text-purple-400 uppercase tracking-wider">Followers</div>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="flex justify-between items-center mb-6 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-purple-400" />
                      <span className="text-gray-400">Updated {platform.lastUpdate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} style={{ color: platform.color }} />
                      <span className="text-white font-medium">{platform.rating}</span>
                    </div>
                  </div>

                  {/* Listen Button */}
                  <button
                    type="button"
                    onClick={() => handleButtonClick(platform.url, platform.name)}
                    className="w-full py-3 px-6 rounded-3xl font-bold text-sm transition-all duration-300 backdrop-blur-md border relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                    style={{
                      backgroundColor: `${platform.color}18`,
                      borderColor: `${platform.color}40`,
                      color: platform.color,
                      boxShadow: `0 8px 24px ${platform.color}20, inset 0 0 20px ${platform.color}10`,
                    }}
                  >
                    <span className="relative z-10 tracking-wider flex items-center justify-center gap-2">
                      <Play size={14} />
                      LISTEN NOW
                    </span>

                    {/* Shine effect */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                  </button>

                  {/* Enhanced glow effects */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl -z-10"
                    style={{ backgroundColor: platform.color }}
                  ></div>
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 border"
                    style={{
                      borderColor: `${platform.color}50`,
                    }}
                  ></div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Footer */}
          <div className="text-center mt-20 pt-12 border-t border-purple-500/20">
            <p className="text-gray-500 text-sm font-light">Available on all major streaming platforms</p>
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
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
      <OutNowSection />
      <ContactSection />
    </div>
  )
}

export default MyMusic
