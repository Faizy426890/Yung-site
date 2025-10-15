import { GeistSans } from "geist/font/sans"
import { Italianno } from "next/font/google"

export const geistSans = GeistSans

export const italianno = Italianno({
  weight: "400",
  variable: "--font-italianno",
  subsets: ["latin"],
})
