'use client'
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Music, Play } from "lucide-react";


const HeroSection = () => {
  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-accent-gradient rounded-full flex items-center justify-center">
            <Music className="w-6 h-6 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">YUNG RAVAGE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#music" className="text-foreground hover:text-primary transition-colors">Music</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>

        <Button variant="hero" size="sm" className="hidden md:flex">
          Get In Touch
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground backdrop-blur-sm">
                ✨ Welcome to my world
              </div>
              
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-accent-gradient bg-clip-text text-transparent">
                    YUNG RAVAGE
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
                  Hip-Hop Artist & Mogul
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Born in Atlanta Georgia, raised in Detroit Michigan. I'm here to leave a legacy for my daughter 
              and spread light and positivity. My mission is to motivate people to achieve what they want from life 
              and leave a stamp on the world as an artist who makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Listen Now
              </Button>
              <Button variant="hero-outline" size="lg">
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow the journey:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Artist Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl transform rotate-6"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl p-1 backdrop-blur-sm">
                <div className="bg-card/50 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmnUn448MbrGd73XnnMauADHQnJk3nrD6FLRXnMwboTvu-tcHy-UBhzlWpoeC6myYCF4&usqp=CAU"
                    alt="YUNG RAVAGE - Hip-Hop Artist"
                    className="w-full h-[500px] lg:h-[600px] object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-gradient rounded-full flex items-center justify-center shadow-strong animate-bounce">
                <Music className="w-10 h-10 text-accent-foreground" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-strong">
                <div className="text-sm text-muted-foreground">Legacy Builder</div>
                <div className="text-lg font-semibold text-foreground">Detroit ↔ Atlanta</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;