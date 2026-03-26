import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "参与方式",
  description: "了解 Neuro-Sama 2026年B站社群生日会的观众参与、投稿与志愿者报名方式。",
  alternates: {
    canonical: "/participate",
  },
}

export default function ParticipateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
