import React from 'react';
import { Music, Headphones, Play, Radio, Share } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  tagline: string;
  color: string;
  url: string;
  icon: React.ComponentType<any>;
  description: string;
  stats: string;
  statsLabel: string;
}

const platforms: Platform[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    tagline: 'NOW STREAMING',
    color: '#1DB954',
    url: 'https://open.spotify.com/artist/3YiIhcUe0Kfw3WXbtPbNU7?si=N-NkTGSyT1CeXdp-X8qA3g',
    icon: Music,
    description: 'Stream latest releases & exclusive tracks',
    stats: '12K',
    statsLabel: 'LATEST TRACKS',
  },
  {
    id: 'apple',
    name: 'Apple Music',
    tagline: 'NEW DROP',
    color: '#FA57C1',
    url: 'https://music.apple.com/us/artist/rav/1617592297',
    icon: Headphones,
    description: 'High-quality audio & exclusive content',
    stats: '8K',
    statsLabel: 'HI-FI TRACKS',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tagline: 'LATEST VIDEOS',
    color: '#FF0000',
    url: 'https://youtube.com/channel/UCNKynbHhfQq58XWygZAfQlQ?si=aYqHihZfRsQ9lFHs',
    icon: Play,
    description: 'Music videos, behind the scenes & creative content',
    stats: '15K',
    statsLabel: 'VISUAL CONTENT',
  },
  {
    id: 'tidal',
    name: 'Tidal',
    tagline: 'HI-FI QUALITY',
    color: '#00D4FF',
    url: 'https://tidal.com/browse/artist/10489782/u',
    icon: Radio,
    description: 'Lossless audio & exclusive releases',
    stats: '5K',
    statsLabel: 'PREMIUM TRACKS',
  },
];

const MyMusic: React.FC = () => {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareClick = (platform: Platform, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `Listen to music on ${platform.name}`,
        text: `Check out my music on ${platform.name}!`,
        url: platform.url,
      });
    } else {
      navigator.clipboard.writeText(platform.url);
      // Could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-red-950 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-red-900/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent mb-2 tracking-tight">
                My Music
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-300 text-xl font-light tracking-wide">
              Stream across all platforms • Experience the sound
            </p>
          </div>

          {/* Enhanced Music Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              
              return (
                <div
                  key={platform.id}
                  className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-8 cursor-default transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/5 hover:border-white/30 hover:shadow-2xl hover:shadow-black/40"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards',
                  }}
                >
                  {/* Share Icon */}
                  <button
                    onClick={(e) => handleShareClick(platform, e)}
                    className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 z-10"
                  >
                    <Share size={14} className="text-white/80" />
                  </button>

                  {/* Enhanced Platform Icon */}
                  <div className="mb-8">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
                      style={{ 
                        backgroundColor: `${platform.color}20`,
                        borderColor: `${platform.color}40`,
                        boxShadow: `0 8px 32px ${platform.color}20`,
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-br opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${platform.color}40, transparent)`
                        }}
                      ></div>
                      <Icon 
                        size={24} 
                        style={{ color: platform.color }}
                        className="relative z-10 drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Enhanced Platform Info */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300 tracking-tight">
                      {platform.name}
                    </h3>
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border"
                      style={{ 
                        color: platform.color,
                        backgroundColor: `${platform.color}15`,
                        borderColor: `${platform.color}30`,
                      }}
                    >
                      {platform.tagline}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      {platform.description}
                    </p>
                  </div>

                  {/* Enhanced Stats */}
                  <div className="mb-8">
                    <div 
                      className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${platform.color}, white)`
                      }}
                    >
                      {platform.stats}
                    </div>
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {platform.statsLabel}
                    </div>
                  </div>

                  {/* Enhanced Listen Button */}
                  <button
                    onClick={() => handleButtonClick(platform.url)}
                    className="w-full py-4 px-6 rounded-3xl font-bold text-sm transition-all duration-300 backdrop-blur-sm border group-hover:scale-105 active:scale-95 relative overflow-hidden"
                    style={{
                      backgroundColor: `${platform.color}25`,
                      borderColor: `${platform.color}50`,
                      color: platform.color,
                      boxShadow: `0 4px 20px ${platform.color}20`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${platform.color}35`;
                      e.currentTarget.style.borderColor = `${platform.color}70`;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = `0 8px 40px ${platform.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${platform.color}25`;
                      e.currentTarget.style.borderColor = `${platform.color}50`;
                      e.currentTarget.style.color = platform.color;
                      e.currentTarget.style.boxShadow = `0 4px 20px ${platform.color}20`;
                    }}
                  >
                    <span className="relative z-10 tracking-wider">LISTEN NOW</span>
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"
                    ></div>
                  </button>

                  {/* Enhanced Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl -z-10"
                    style={{ backgroundColor: platform.color }}
                  ></div>

                  {/* Subtle border glow */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${platform.color}20, transparent)`,
                      padding: '1px',
                      WebkitMask: 'linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)',
                      WebkitMaskComposite: 'xor'
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Footer */}
          <div className="text-center mt-20 pt-12 border-t border-white/10">
            <p className="text-gray-500 text-sm font-light">
              Available on all major streaming platforms
            </p>
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
    </div>
  );
};

export default MyMusic;