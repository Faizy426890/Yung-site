"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Red Gradients matching reference */}
      <div className="absolute inset-0 z-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black" />
        
        {/* Left Red Gradient Shape - matching reference */}
        <div className="absolute -left-32 top-0 h-full w-96 bg-gradient-to-r from-black via-black to-transparent transform -skew-x-12" />
        <div className="absolute -left-16 top-0 h-full w-80 bg-gradient-to-r from-black via-black  to-transparent transform -skew-x-12" />
        
        {/* Right Red Gradient Shape - matching reference */}
        <div className="absolute -right-32 top-0 h-full w-96 bg-gradient-to-l from-black via-black to-transparent transform skew-x-12" />
        <div className="absolute -right-16 top-0 h-full w-80 bg-gradient-to-l from-black  via-black  to-transparent transform skew-x-12" />
        
        {/* Top gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        
        {/* Bottom gradient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Artist Info */}
          <div className="space-y-8">
            {/* Stats Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">LIVE</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <span className="text-white/90 text-sm font-medium">50K+ Fans Worldwide</span>
            </div>

            {/* Stage Name & Real Name */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-gray-400 via-red-500 to-gray-100 bg-clip-text text-transparent">
                    YUNG
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
                    RAVAGE
                  </span>
                </h1>
                <p className="text-lg text-white/70 font-medium">
                  Robert Bernard Lincoln II
                </p>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wide">
                OWN THE STAGE • RHYTHM IN EVERY BAR
              </h2>
            </div>

            {/* Bio Section */}
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-red-400 mb-4">Artist Bio</h3>
              <div className="space-y-3 text-white/80 leading-relaxed">
                <p>Born in Atlanta Georgia and raised in Detroit Michigan.</p>
                <p>I want to just leave a legacy for my daughter to live by.</p>
                <p>I want to leave a stamp on the world as a mogul artist.</p>
                <p>An artist that spreads light and positivity.</p>
                <p>Giving people the motivation to achieve what they want from life.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
             <button
  className="
    group relative 
    px-8 py-4 
    bg-white/5 
    backdrop-blur-xl 
    rounded-2xl 
    border border-white/20 
    shadow-xl shadow-black/40 
    transform transition-all duration-500 
    hover:scale-105 
    hover:shadow-2xl hover:shadow-white/20 
    overflow-hidden
  "
>
  <div 
    className="
      absolute inset-0 
      bg-gradient-to-r from-transparent via-white/10 to-transparent 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 
      blur-xl 
    " 
  />

  <div className="relative flex items-center gap-3 font-bold text-lg text-white">
    🔥 Book for a Show
  </div>
  
  <div 
    className="
      absolute inset-0 
      bg-gradient-to-r from-transparent via-white/40 to-transparent 
      -skew-x-12 opacity-0 
      group-hover:opacity-100 group-hover:animate-pulse 
      transition-opacity duration-500
    " 
  />
</button>
              {/* Secondary Button */}
              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-red-400/50 hover:shadow-red-400/25 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                <div className="relative flex items-center gap-3 font-bold text-lg text-white group-hover:text-red-100 transition-colors duration-300">
                  🎧 Watch Live Freestyle
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-black text-red-400 mb-1">127</div>
                <div className="text-white/70 text-sm font-medium">Shows</div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-black text-red-400 mb-1">2.5M</div>
                <div className="text-white/70 text-sm font-medium">Views</div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-4 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl font-black text-red-400 mb-1">98%</div>
                <div className="text-white/70 text-sm font-medium">Energy</div>
              </div>
            </div>
          </div>

          {/* Right Side - Performance Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            {/* Image Container with Glassmorphism */}
            <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl">
              {/* Performance Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/diml90c1y/image/upload/v1760520429/WhatsApp_Image_2025-10-15_at_2.11.53_AM_vphrov.jpg')`
                }}
              />
              
              {/* Image Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-red-900/20" />
              
              {/* Floating Performance Badge */}
              <div className="absolute top-6 right-6 backdrop-blur-lg bg-red-600/20 rounded-full px-4 py-2 border border-red-400/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-red-300 text-sm font-semibold">PERFORMING</span>
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-lg bg-black/30 rounded-2xl p-4 border border-white/10">
                <div className="text-white font-bold text-lg">Live at The Stage</div>
                <div className="text-white/70 text-sm">Detroit • Atlanta Vibes</div>
              </div>
            </div>

            {/* Decorative Glow Effects around Image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-3xl blur-2xl opacity-50 -z-10"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500/10 to-red-300/10 rounded-3xl blur-3xl opacity-30 -z-20"></div>
          </div>
        </div>
      </div>
    </section> 
  );
}