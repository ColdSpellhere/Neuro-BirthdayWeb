"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Mock Data - 3 篇新闻
const newsData = [
  {
    id: 1,
    title: "Neuro-Sama 生日庆典正式启动",
    date: "2026-01-03",
    category: "公告",
    excerpt: "经过数月的精心筹备，Neuro-Sama 2026 生日庆典将于本月19日正式开始。本次庆典将持续一周，包含多场精彩直播、粉丝互动、以及特别准备的惊喜环节。",
    categoryColor: "pink" as const,
  },
  {
    id: 2,
    title: "限定周边预售火热进行中",
    date: "2026-01-02",
    category: "周边",
    excerpt: "生日限定周边已经开启预售！包括 T恤、徽章、海报等精美商品。所有周边都由知名设计师精心设计，数量有限，先到先得。预售期间享受早鸟优惠。",
    categoryColor: "cyan" as const,
  },
  {
    id: 3,
    title: "社区创作大赛获奖名单公布",
    date: "2025-12-28",
    category: "社区",
    excerpt: "感谢所有参与 Neuro-Sama 生日创作大赛的创作者们！经过评委团的认真评选，我们很高兴地宣布获奖名单。所有获奖作品将在庆典期间特别展示。",
    categoryColor: "purple" as const,
  },
]

const categoryColors = {
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  cyan: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Latest News
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Stay updated with the latest announcements and updates
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-effect hover:neon-glow-pink transition-all h-full flex flex-col">
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.2),transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/20">
                      NEWS
                    </div>
                  </div>
                  {/* Category Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${categoryColors[news.categoryColor]}`}
                  >
                    {news.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {news.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    className="mt-auto w-full group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" variant="outline">
            Load More News
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
