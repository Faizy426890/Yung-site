import { Music } from "lucide-react"

export function SocialMediaLinks() {
  // Custom SVG Icons
  const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )

  const SpotifyIcon = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@lzloudlyvisuals?si=8P22WsSnrvIMPBPy",
      icon: YouTubeIcon,
      color: "from-red-500 to-red-600",
      stats: "Visual Content",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/louiezartists?igsh=MW5kZWUydGlsZnZ1dw==",
      icon: InstagramIcon,
      color: "from-pink-500 via-purple-500 to-pink-600",
      stats: "Behind the Scenes",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/0Z3WN6svAClDBpfbk2HLz8?si=PnlfQUGdRAS7SAGK18Jlog",
      icon: SpotifyIcon,
      color: "from-green-400 to-emerald-500",
      stats: "Latest Tracks",
    },
  ]

  return (
   <div className="w-full 
  bg-gradient-to-br from-black via-gray-950 to-gray-900 
  p-10 rounded-3xl 
  backdrop-blur-2xl 
  border border-cyan-400/40 
  shadow-[0_0_25px_rgba(0,255,255,0.3),0_0_60px_rgba(0,255,255,0.15)] 
  relative overflow-hidden 
  text-cyan-300 tracking-wide
  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-cyan-500/20 before:to-transparent before:opacity-30 before:blur-3xl before:animate-pulse
">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight bg-gradient-to-r from-cyan-400 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            Connect With Louie Z
          </h1>
          <p className="text-gray-300 text-xl font-medium">Follow the journey across all platforms</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-gray-800/60 backdrop-blur-xl border border-gray-700/60 hover:border-cyan-400/80 rounded-2xl p-8 transition-all duration-500 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-cyan-400/30 hover:scale-[1.03] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center space-y-6">
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-r ${link.color} shadow-2xl shadow-gray-900/40 group-hover:shadow-3xl group-hover:shadow-cyan-400/50 transition-all duration-500 group-hover:scale-110 ring-1 ring-white/10 group-hover:ring-cyan-400/30`}
                  >
                    <IconComponent />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {link.stats}
                    </p>
                  </div>

                  <div className="w-full pt-4">
                    <div className="px-8 py-4 bg-gray-700/60 backdrop-blur-sm border border-gray-600/60 rounded-xl group-hover:border-cyan-400/80 group-hover:bg-gray-700/80 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300">
                      <span className="text-white text-lg font-semibold tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                        Follow & Connect
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center pt-10 border-t border-gray-700/60">
          <div className="inline-flex items-center space-x-4 text-gray-300 bg-gray-800/60 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/60 shadow-lg shadow-cyan-500/10">
            <Music className="w-6 h-6 text-cyan-400" />
            <p className="text-lg italic font-medium">"Creating lanes where we all shine"</p>
            <Music className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
