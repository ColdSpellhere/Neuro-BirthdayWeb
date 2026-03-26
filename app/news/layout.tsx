import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "最新新闻",
  description: "查看 Neuro-Sama 2026年B站社群生日会的最新公告、活动动态与项目进展。",
  alternates: {
    canonical: "/news",
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
