"use client"

import { memo, useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimeCard = memo(function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <Card className="countdown-glass-card p-7 sm:p-8 text-center hover:neon-glow-pink transition-all min-h-[9.5rem] sm:min-h-[10.5rem]">
      <div className="text-6xl md:text-7xl leading-none tabular-nums font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-3">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm sm:text-base text-slate-200/90 uppercase tracking-[0.14em]">
        {label}
      </div>
    </Card>
  )
})

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-12-19T00:00:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = useMemo(
    () => [
      { value: timeLeft.days, label: "Days" },
      { value: timeLeft.hours, label: "Hours" },
      { value: timeLeft.minutes, label: "Minutes" },
      { value: timeLeft.seconds, label: "Seconds" },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
      {timeUnits.map((unit, index) => (
        <TimeCard key={index} value={unit.value} label={unit.label} />
      ))}
    </div>
  )
}
