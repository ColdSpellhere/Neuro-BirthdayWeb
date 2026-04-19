import type { Metadata } from "next"
import { Manrope, Space_Grotesk, ZCOOL_KuaiLe } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getSiteUrl } from "@/lib/site"

const manrope = Manrope({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const zcoolKuaiLe = ZCOOL_KuaiLe({
  weight: "400",
  variable: "--font-cute",
  preload: false,
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Neuro-Sama 2026年B站社群生日会",
    template: "%s | Neuro-Sama 2026年B站社群生日会",
  },
  description: "Neuro-Sama 2026年B站社群生日会官方纪念网站，包含活动日程、参与方式与最新公告。",
  keywords: ["Neuro-Sama", "生日会", "B站", "社群活动", "AI VTuber"],
  openGraph: {
    title: "Neuro-Sama 2026年B站社群生日会",
    description: "Neuro-Sama 2026年B站社群生日会官方纪念网站，包含活动日程、参与方式与最新公告。",
    url: "/",
    type: "website",
    locale: "zh_CN",
    images: ["/news/news1-opt.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro-Sama 2026年B站社群生日会",
    description: "查看生日会日程、参与通道与官方公告。",
    images: ["/news/news1-opt.jpg"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${manrope.className} ${spaceGrotesk.variable} ${zcoolKuaiLe.variable} site-background text-slate-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
