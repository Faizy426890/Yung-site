"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Music, Heart, Sparkles, Award, Users, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  }

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Full Background Theme Image with Advanced Overlays */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFwJTIwY29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000)",
            filter: "brightness(0.8) contrast(1.2)"
          }}
        />
        
        {/* Multiple Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent" />
      </div>

      {/* Animated Purple Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/3 -right-32 w-[700px] h-[700px] bg-purple-700/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-1/4 w-[650px] h-[650px] bg-purple-800/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Hero Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/30 backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Legacy Artist</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              The Art{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Robert Bernard
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-lg blur-2xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A Journey of Legacy, Art, and Positivity
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Bio Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="group relative backdrop-blur-2xl bg-gradient-to-br from-black/80 to-purple-950/20 border border-purple-500/30 rounded-3xl p-8 md:p-10 hover:border-purple-500/60 transition-all duration-500 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30">
                    <Music className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">The Artist</h2>
                </div>

                <div className="space-y-5 text-gray-200 leading-relaxed">
                  <p className="text-base md:text-lg">
                    Born in Atlanta, Georgia and raised in Detroit, Michigan, Robert Bernard is more than just an
                    artist—he's a visionary with a purpose. His journey is rooted in the desire to create lasting
                    impact, not just for himself, but for generations to come.
                  </p>

                  <div className="relative p-5 rounded-2xl bg-purple-900/20 border border-purple-500/20">
                    <Heart className="absolute top-3 left-3 w-5 h-5 text-purple-400/50" />
                    <p className="text-base md:text-lg pl-8">
                      <span className="text-purple-300 font-semibold block mb-2">
                        "I want to just leave a legacy for my daughter to live by."
                      </span>
                      This philosophy drives everything Robert does. He's committed to leaving a stamp on the world as a
                      mogul artist—one who doesn't just create music, but spreads light and positivity through every note.
                    </p>
                  </div>

                  <p className="text-base md:text-lg">
                    As an artist that spreads light and positivity, Robert Bernard is dedicated to giving people the
                    motivation to achieve what they want from life. His music is a beacon of hope, his presence an
                    inspiration, and his legacy a testament to the power of purpose-driven artistry.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    Core Values
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Legacy & Family",
                      "Artistic Excellence",
                      "Spreading Positivity",
                      "Empowering Others",
                      "Authentic Expression",
                      "Community Impact"
                    ].map((value, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-300 p-3 rounded-lg bg-purple-900/10 hover:bg-purple-900/20 transition-colors border border-purple-500/10 hover:border-purple-500/30"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
                        <span className="text-sm font-medium">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Theme Image & Additional Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Main Theme Image */}
              <div className="group relative">
                <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFwJTIwY29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 border-2 border-purple-500/40 rounded-3xl group-hover:border-purple-400/60 transition-colors duration-500" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-purple-700/30 to-purple-900/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">The Visionary</h3>
                    <p className="text-gray-300 text-sm">Crafting Legacy Through Music</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: "Years Active", value: "10+", color: "purple" },
                  { icon: Music, label: "Projects", value: "50+", color: "purple" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="relative backdrop-blur-2xl bg-gradient-to-br from-black/80 to-purple-950/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-300 shadow-xl group"
                  >
                    <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                    
                    {/* Glow on hover */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Journey Captured</h2>
              <p className="text-gray-400">Moments that define the legacy</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  src: "https://res.cloudinary.com/diml90c1y/image/upload/v1760915727/PHOTO-2025-10-15-14-11-53_eszsbl.jpg",
                  alt: "Robert Bernard - Moment 1",
                  title: "The Artist at Work",
                  desc: "Creating magic in the studio"
                },
                {
                  src: "https://res.cloudinary.com/diml90c1y/image/upload/v1760915750/PHOTO-2025-10-15-14-11-58_svk5uu.jpg",
                  alt: "Robert Bernard - Moment 2",
                  title: "Creative Expression",
                  desc: "Living the artistic vision"
                },
              ].map((image, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group relative h-96 rounded-2xl overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image.src}')` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.desc}
                    </p>
                  </div>

                  {/* Border & Glow */}
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-2xl group-hover:border-purple-400/60 transition-colors duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-purple-700/20 to-purple-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Active", value: "10+", icon: TrendingUp },
              { label: "Projects", value: "50+", icon: Music },
              { label: "Global Reach", value: "1M+", icon: Users },
              { label: "Impact", value: "∞", icon: Heart },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-black/80 to-purple-950/20 border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500/60 transition-all duration-300 shadow-xl group"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-400 mt-2">{stat.label}</p>
                
                {/* Hover Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-purple-900/40 to-purple-950/30 border border-purple-500/50 rounded-3xl p-10 md:p-12 hover:border-purple-400/70 transition-all duration-500 shadow-2xl group overflow-hidden">
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              />
              
              {/* Glow Effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600/30 via-purple-500/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
              
              <div className="relative z-10">
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  className="inline-block mb-4"
                >
                  <Sparkles className="w-12 h-12 text-purple-400 mx-auto" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Experience the Legacy
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join Robert Bernard on his journey of artistic excellence and positive impact. Discover music that
                  inspires, motivates, and transforms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.youtube.com/channel/UCNKynbHhfQq58XWygZAfQlQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-600/50 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Music className="w-5 h-5" />
                      Listen Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/about"
                    className="px-8 py-4 backdrop-blur-xl bg-white/10 border-2 border-purple-500/50 hover:border-purple-400/70 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Learn More
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}