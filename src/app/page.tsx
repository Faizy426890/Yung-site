"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import MusicSection from "./components/Music-Section"
import ContactSection from "./components/contact-section"
import HeroSection from "./components/Hero-section"
import OutNowSection from "./components/outnow-section"
import { useState, useEffect } from "react" 
import { SocialMediaLinks } from "./components/Links"
import AboutSection from "./components/About"

export default function BlacRubyPortfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle navigation and close sidebar
  const handleNavClick = (sectionId: string) => {
    setIsSidebarOpen(false)
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  // Word-by-word animation for "Jae Kush"
  const nameWords = ["Louie", "Z"]
  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  // Lighter animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-white text-white font-sans overflow-hidden relative">
      {/* Checkered Background Pattern */}
     <HeroSection/> 
     <MusicSection /> 

      {/* Mobile Sidebar */}
   

      {/* Professional Glassy Navbar */}
     

      {/* <ContactSection /> */}

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-white/60 text-sm border-t border-white/10 bg-slate-950">
        <p>&copy; {new Date().getFullYear()} Yung . All rights reserved.</p>
        <p className="mt-2">Designed by {"<3"}BlazeTech Solutions</p>
      </footer>
    </div>
  )
}
