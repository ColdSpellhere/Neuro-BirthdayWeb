"use client"

import { useMemo, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { scheduleEvents, type ScheduleEvent } from "@/data/schedule"

/**
 * 北京时间格式化工具
 * 将时间戳转换为北京时区的可读格式
 * @param {string | Date} timestamp - ISO 8601 时间戳或 Date 对象
 * @returns {Object} 包含日期、时间及完整日期字符串
 */
function formatBeijingDateTime(timestamp: string | Date) : { date: string; time :string; fullDate: string} {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;

  const options = { timeZone: 'Asia/Shanghai'};
  const fullDate = date.toLocaleDateString('zh-CN', { ...options, year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
  const dateStr = date.toLocaleDateString('zh-CN', { ...options, month: 'long', day: 'numeric' });
  const time = date.toLocaleTimeString('zh-CN', { ...options,hour12: false, hour: '2-digit', minute: '2-digit' });
  return { date: dateStr, time, fullDate };
}

/** 事件进行状态枚举 */
type EventStatus = "completed" | "active" | "upcoming"

/**
 * 计算事件当前状态
 * @param {ScheduleEvent} event - 目标事件
 * @param {ScheduleEvent | null} nextEvent - 下一个事件（用于推断结束时间）
 * @param {Date} currentTime - 当前时间
 * @returns {EventStatus} 事件状态
 */
function calculateEventStatus(
  event: ScheduleEvent,
  nextEvent: ScheduleEvent | null,
  currentTime: Date
): EventStatus {
  const eventStart = new Date(event.timestamp)

  // 确定事件结束时间：优先使用 durationMinutes，其次使用下一事件开始时间，最后默认 2 小时
  let eventEnd: Date
  if (event.durationMinutes) {
    eventEnd = new Date(eventStart.getTime() + event.durationMinutes * 60000)
  } else if (nextEvent) {
    eventEnd = new Date(nextEvent.timestamp)
  } else {
    eventEnd = new Date(eventStart.getTime() + 2 * 3600000)
  }

  // 将所有时间统一转换为时间戳进行比较
  const current = currentTime.getTime()
  const start = eventStart.getTime()
  const end = eventEnd.getTime()

  if (current >= end) return "completed"
  if (current >= start && current < end) return "active"
  return "upcoming"
}

/**
 * 格式化事件持续时间为可读文本
 * @param {number} minutes - 时长（单位：分钟）
 * @returns {string} 格式化后的时长描述
 */
function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} 分钟`
  } else if (minutes < 1440) {
    // 小于24小时，显示小时
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    if (remainingMinutes === 0) {
      return `${hours} 小时`
    }
    return `${hours} 小时 ${remainingMinutes} 分钟`
  } else {
    // 大于等于24小时，显示天数
    const days = Math.floor(minutes / 1440)
    const remainingHours = Math.floor((minutes % 1440) / 60)
    if (remainingHours === 0) {
      return `${days} 天`
    }
    return `${days} 天 ${remainingHours} 小时`
  }
}

export default function SchedulePage() {
  // 在首次渲染就初始化时间，减少页面闪烁
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date())
  
  // 在客户端挂载后初始化时间，并设置定时器每分钟更新一次
  useEffect(() => {
    setCurrentTime(new Date())
    
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    return () => clearInterval(interval)
  }, [])
  
  const currentBeijingDisplay = useMemo(
    () => formatBeijingDateTime(currentTime),
    [currentTime]
  )

  // 按时间排序事件，避免每分钟更新时间时重复计算静态数据
  const sortedEvents = useMemo(
    () => [...scheduleEvents].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()),
    []
  )
  
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="page-hero mb-16">
          <span className="page-kicker">活动时间轴</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-3">
            <span className="title-gradient-tech">
              活动日程
            </span>
          </h1>
          <p className="page-subtitle">
            所有时间均为北京时间 (UTC+8)
          </p>
          <p className="text-cyan-300 text-xs sm:text-sm mt-2">
            当前时间: {currentBeijingDisplay.date} {currentBeijingDisplay.time}
          </p>
          <div className="hero-divider" />
        </div>

        {/* 项目节点时间轴 */}
        <div className="relative">
          <div className="absolute left-[3.35rem] top-3 bottom-3 w-px bg-gradient-to-b from-pink-500/60 via-purple-500/50 to-cyan-400/60" />

          <div className="space-y-6">
            {sortedEvents.map((event, eventIndex) => {
                    const nextEvent = eventIndex < sortedEvents.length - 1 
                      ? sortedEvents[eventIndex + 1] 
                      : null
                    const status = calculateEventStatus(event, nextEvent, currentTime)
                    const { fullDate } = formatBeijingDateTime(event.timestamp)
                    const displayTime = event.timeLabel
                    const statusLabel = status === "completed" ? "已完成" : status === "active" ? "进行中" : "待开始"
                    
                    return (
                      <div key={event.timestamp} className="relative grid grid-cols-[6.75rem_minmax(0,1fr)] gap-4 group">
                        {/* 时间与状态指示器 */}
                        <div className="flex flex-col items-center gap-2">
                          <div className={cn(
                            "w-full rounded-lg border px-3 py-2 text-center transition-colors",
                            status === "completed" && "border-white/10 bg-slate-900/35 text-gray-500",
                            status === "active" && "border-pink-400/40 bg-pink-500/15 text-pink-200",
                            status === "upcoming" && "border-cyan-300/20 bg-slate-900/45 text-cyan-100"
                          )}>
                            <div className="text-lg font-bold leading-none tabular-nums">
                              {displayTime}
                            </div>
                            <div className="mt-1 text-[11px] text-slate-400">
                              {statusLabel}
                            </div>
                          </div>

                          {/* 状态图标 */}
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all border-2 border-slate-950",
                            status === "completed" && "bg-gray-600",
                            status === "active" && "bg-pink-500 animate-glow ring-4 ring-pink-500/30",
                            status === "upcoming" && "bg-slate-700"
                          )}>
                            {status === "completed" && (
                              <CheckCircle2 className="w-5 h-5 text-gray-400" />
                            )}
                            {status === "active" && (
                              <Clock className="w-5 h-5 text-white animate-pulse" />
                            )}
                            {status === "upcoming" && (
                              <Circle className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </div>

                        {/* 事件卡片 */}
                        {event.link ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Card className={cn(
                              "transition-all cursor-pointer hover:scale-[1.02]",
                              status === "completed" && "opacity-50 glass-effect hover:opacity-60",
                              status === "active" && "neon-glow-pink glass-effect border-pink-500/50",
                              status === "upcoming" && "glass-effect border-white/10 hover:border-white/20"
                            )}>
                            <CardContent className="relative p-6">
                              {status === "active" && (
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-l-lg" />
                              )}
                              <p className="text-xs text-slate-500 mb-2">
                                {fullDate}
                              </p>
                              <h3 className={cn(
                                "text-xl font-bold mb-2",
                                status === "completed" && "text-gray-400",
                                status === "active" && "text-pink-400",
                                status === "upcoming" && "text-white"
                              )}>
                                {event.title}
                                {status === "active" && (
                                  <span className="ml-2 text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">
                                    进行中
                                  </span>
                                )}
                              </h3>
                              <p className={cn(
                                "text-sm",
                                status === "completed" && "text-gray-500",
                                status === "active" && "text-gray-300",
                                status === "upcoming" && "text-gray-400"
                              )}>
                                {event.description}
                              </p>
                              {event.durationMinutes && event.showDuration !== false && (
                                <p className="text-xs text-gray-500 mt-2">
                                  预计时长: {formatDuration(event.durationMinutes)}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </a>
                        ) : (
                          <div className="flex-1">
                            <Card className={cn(
                              "transition-all",
                              status === "completed" && "opacity-50 glass-effect",
                              status === "active" && "neon-glow-pink glass-effect border-pink-500/50",
                              status === "upcoming" && "glass-effect border-white/10"
                            )}>
                            <CardContent className="relative p-6">
                              {status === "active" && (
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-l-lg" />
                              )}
                              <p className="text-xs text-slate-500 mb-2">
                                {fullDate}
                              </p>
                              <h3 className={cn(
                                "text-xl font-bold mb-2",
                                status === "completed" && "text-gray-400",
                                status === "active" && "text-pink-400",
                                status === "upcoming" && "text-white"
                              )}>
                                {event.title}
                                {status === "active" && (
                                  <span className="ml-2 text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">
                                    进行中
                                  </span>
                                )}
                              </h3>
                              <p className={cn(
                                "text-sm",
                                status === "completed" && "text-gray-500",
                                status === "active" && "text-gray-300",
                                status === "upcoming" && "text-gray-400"
                              )}>
                                {event.description}
                              </p>
                              {event.durationMinutes && event.showDuration !== false && (
                                <p className="text-xs text-gray-500 mt-2">
                                  预计时长: {formatDuration(event.durationMinutes)}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                          </div>
                        )}
                      </div>
                    )
            })}
          </div>
        </div>

        {/* 页脚提示 */}
        <div className="mt-16 text-center">
          <Card className="glass-effect inline-block">
            <CardContent className="p-6">
              <p className="text-gray-400 text-sm">
                💡 时间可能根据实际情况调整，请以直播间公告为准
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
