import type React from "react"
import type { Metadata } from "next"
import { geistSans, italianno } from "@/lib/fonts"
import "./globals.css"
import { Suspense } from "react"

import { AppShell } from "./components/appsidebar"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${italianno.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          {/* AppShell now renders SiteNavbar and main internally */}
          <AppShell>
            {/* children are now rendered inside AppShell's main */}
            {children}
          </AppShell>
        </Suspense>
      </body>
    </html>
  )
}
