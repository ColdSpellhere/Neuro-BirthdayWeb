"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * 日程事件数据模型
 * @property {string} timestamp - 事件开始时间，采用 ISO 8601 格式（UTC+8 北京时间）
 * @property {string} title - 事件标题
 * @property {string} description - 事件描述
 * @property {number} [durationMinutes] - 可选，事件预计持续时间（单位：分钟）。未指定时将使用下个事件开始时间作为结束时间
 * @property {string} [link] - 可选，事件相关链接
 */
interface ScheduleEvent {
  timestamp: string
  title: string
  description: string
  durationMinutes?: number
  link?: string
}

/** 日程事件数据集合（跨多日） */
const scheduleEvents: ScheduleEvent[] = [
  {
    timestamp: "2026-01-19T23:59:59+08:00",
    title: "Neuro-Sama 2026年B站社群生日会-前期调查",
    description: "对上期生日会的工作人员进行本期生日会的参与意愿调查。",
    durationMinutes: 18720,
    link: "https://wj.qq.com/s2/25563205/fh82/",
  },
]

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

/**
 * 按日期对事件进行分组
 * @param {ScheduleEvent[]} events - 事件数组
 * @returns {Map<string, ScheduleEvent[]>} 日期为键，该日事件数组为值的 Map
 */
function groupEventsByDate(events: ScheduleEvent[]): Map<string, ScheduleEvent[]> {
  const grouped = new Map<string, ScheduleEvent[]>()
  
  events.forEach((event) => {
    const { fullDate } = formatBeijingDateTime(event.timestamp)
    if (!grouped.has(fullDate)) {
      grouped.set(fullDate, [])
    }
    grouped.get(fullDate)!.push(event)
  })
  
  return grouped
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
  
  const currentBeijingDisplay = formatBeijingDateTime(currentTime);
  // 按日期分组并排序事件
  const groupedEvents = groupEventsByDate(scheduleEvents)
  const sortedDates = Array.from(groupedEvents.keys()).sort()
  
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              活动日程
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            所有时间均为北京时间 (UTC+8)
          </p>
          <p className="text-cyan-400 text-sm mt-2">
            当前时间: {currentBeijingDisplay.date} {currentBeijingDisplay.time}
          </p>
        </div>

        {/* 按日期分组渲染时间轴 */}
        {sortedDates.map((dateKey) => {
          const eventsOnThisDay = groupedEvents.get(dateKey)!
          const { date } = formatBeijingDateTime(eventsOnThisDay[0].timestamp)
          
          return (
            <div key={dateKey} className="mb-12">
              {/* 日期标签 */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="glass-effect px-6 py-3 rounded-full border border-pink-500/30">
                    <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                      {date}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-pink-500/50 to-transparent" />
                </div>
              </div>

              {/* 该日期的时间轴容器 */}
              <div className="relative">
                {/* 垂直分隔线 */}
                <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400" />

                {/* 时间轴事件列表 */}
                <div className="space-y-8">
                  {eventsOnThisDay.map((event, eventIndex) => {
                    const nextEvent = eventIndex < eventsOnThisDay.length - 1 
                      ? eventsOnThisDay[eventIndex + 1] 
                      : null
                    const status = calculateEventStatus(event, nextEvent, currentTime)
                    const { time } = formatBeijingDateTime(event.timestamp)
                    
                    return (
                      <div key={event.timestamp} className="relative flex gap-2 group">
                        {/* 时间与状态指示器 */}
                        <div className="flex flex-col items-center gap-2 flex-shrink-0 ml-8">
                          {/* 状态图标 */}
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all",
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

                          {/* 时间显示 */}
                          <div className={cn(
                            "text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap",
                            status === "completed" && "text-gray-500",
                            status === "active" && "text-pink-400 bg-pink-500/20",
                            status === "upcoming" && "text-gray-400"
                          )}>
                            {time}
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
                              {event.durationMinutes && (
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
                              {event.durationMinutes && (
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
            </div>
          )
        })}

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
