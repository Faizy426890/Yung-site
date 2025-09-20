import React from 'react';
import { Music, Headphones, Play, Radio } from 'lucide-react';

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
  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-red-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-800/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-900/3 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
              My Music
            </h1>
            <p className="text-gray-400 text-lg font-medium">
              Stream across all platforms
            </p>
          </div>

          {/* Music Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              
              return (
                <div
                  key={platform.id}
                  onClick={() => handleCardClick(platform.url)}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                >
                  {/* Platform Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${platform.color}15`,
                        borderColor: `${platform.color}30`
                      }}
                    >
                      <Icon 
                        size={20} 
                        style={{ color: platform.color }}
                      />
                    </div>
                  </div>

                  {/* Platform Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: platform.color }}>
                      {platform.tagline}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-1">
                      {platform.stats}
                    </div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {platform.statsLabel}
                    </div>
                  </div>

                  {/* Listen Button */}
                  <button
                    className="w-full py-3 px-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 backdrop-blur-sm border group-hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: `${platform.color}20`,
                      borderColor: `${platform.color}40`,
                      color: platform.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${platform.color}30`;
                      e.currentTarget.style.borderColor = `${platform.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${platform.color}20`;
                      e.currentTarget.style.borderColor = `${platform.color}40`;
                    }}
                  >
                    LISTEN
                  </button>

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: platform.color }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMusic;