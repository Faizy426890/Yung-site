"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/platforms", label: "Platforms" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-600 bg-black backdrop-blur supports-[backdrop-filter]:bg-black/95">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded bg-white px-3 py-2 text-black font-medium"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1">
          <ul className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      active 
                        ? "bg-white/10 text-white " 
                        : "text-gray-300 hover:text-white hover:bg-gray-900"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden ml-auto inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white "
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="w-80 bg-black border-r border-gray-600 p-0"
          >
            <SheetHeader className="border-b border-gray-600 px-6 py-5 bg-black text-left">
          
            </SheetHeader>

            {/* Navigation Links */}
            <nav className="flex flex-col h-full">
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="flex flex-col gap-2">
                  {links.map(({ href, label }) => {
                    const active = pathname === href
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition-all duration-200",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                            active
                              ? "bg-white/10 text-white  shadow-sm"
                              : "text-gray-300 hover:text-white "
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          <span>{label}</span>
                          {active && (
                            <span 
                              className="h-2 w-2 rounded-full bg-white shadow-sm shadow-white/50" 
                              aria-hidden="true" 
                            />
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-600 px-6 py-4 bg-gray-950">
                <p className="text-xs text-gray-600 font-medium">
                  © {new Date().getFullYear()} Brand. All rights reserved.
                </p>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}