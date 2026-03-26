import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "活动日程",
  description: "查看 Neuro-Sama 2026年B站社群生日会活动安排，所有时间均以北京时间为准。",
  alternates: {
    canonical: "/schedule",
  },
}

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
