"use client"

import { useState, useMemo, useEffect, useRef, useCallback, type KeyboardEvent as ReactKeyboardEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Search, X, TrendingUp, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// 新闻数据
const newsData = [
  {
    id: 1,
    title: "关于本期生日会参与意愿调查问卷",
    date: "2026-01-19",
    category: "公告",
    image: "/news/news1-opt.jpg",
    excerpt: "致上期生日会全体工作人员：感谢你们在上期 Neuro-Sama 生日庆典中的辛勤付出与卓越表现。本期生日会筹备工作现已启动，我们诚挚邀请各位填写参与意愿调查问卷。",
    content: {
      intro: "致上期生日会全体工作人员：",
      greeting: "感谢你们在上期 Neuro-Sama 生日庆典中的辛勤付出与卓越表现！正是因为有你们的专业协作和热情投入，才让那次活动取得了圆满成功，为所有参与者留下了美好而难忘的回忆。",
      sections: [
        {
          title: "本期生日会筹备启动",
          content: "随着新一年的到来，Neuro-Sama 的生日庆典筹备工作再次拉开帷幕。我们计划于今年延续以往的精彩传统，同时加入更多创新元素，为粉丝们带来更加精彩纷呈的体验。"
        },
        {
          title: "参与意愿调查",
          content: "为了更好地组织本期生日会，我们希望了解各位工作人员的参与意愿与时间安排。本次问卷调查主要包含以下内容：",
          list: [
            "本期生日会参与意愿",
            "可投入的时间和精力",
            "希望负责的志愿者",
            "对本期活动的建议与期待",
            "个人能力与特长补充"
          ]
        },
        {
          title: "问卷填写说明",
          content: "问卷采用匿名形式，请大家根据自身实际情况如实填写。无论您是否能够参与本期活动，我们都非常感谢您抽出时间填写问卷。您的反馈将帮助我们更合理地安排人员配置，确保活动顺利进行。"
        },
        {
          title: "填写方式",
          content: "请在2月1日前通过以下方式提交问卷：",
          link: {
            text: "Neuro-Sama 2026年B站社群生日会-前期调查",
            url: "https://wj.qq.com/s2/25563205/fh82/"
          }
        },
        {
          title: "后续安排",
          content: "问卷收集完成后，我们将根据大家的反馈进行联系，届时将详细介绍本期生日会的整体方案和具体工作安排。"
        }
      ],
      closing: "再次感谢各位一直以来的支持与付出！期待与大家再次携手，共同打造一场精彩的生日盛典！",
      signature: "Neuro-Sama 生日会筹备组",
      date: "2026年1月19日"
    },
    categoryColor: "pink" as const,
    featured: true,  // 设置为精选新闻
  },
]

const categoryColors = {
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  cyan: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
}

const categories = ["全部", "公告", "周边", "社区", "活动"]

const ITEMS_PER_PAGE = 6

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  // 点击新闻时打开详情
  const handleNewsClick = (news: typeof newsData[0]) => {
    setSelectedNews(news)
  }

  const handleCardKeyDown = (
    event: ReactKeyboardEvent<HTMLDivElement>,
    news: typeof newsData[0]
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    handleNewsClick(news)
  }

  // Filter and search logic
  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesCategory = selectedCategory === "全部" || news.category === selectedCategory
      const matchesSearch = 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredNews, currentPage])

  // Featured news
  const featuredNews = newsData.filter(news => news.featured).slice(0, 3)

  const selectedNewsIndex = useMemo(() => {
    if (!selectedNews) return -1
    return newsData.findIndex((item) => item.id === selectedNews.id)
  }, [selectedNews])

  const hasPrevNews = selectedNewsIndex > 0
  const hasNextNews = selectedNewsIndex >= 0 && selectedNewsIndex < newsData.length - 1

  // Reset page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const openPrevNews = useCallback(() => {
    if (!hasPrevNews) return
    setSelectedNews(newsData[selectedNewsIndex - 1])
  }, [hasPrevNews, selectedNewsIndex])

  const openNextNews = useCallback(() => {
    if (!hasNextNews) return
    setSelectedNews(newsData[selectedNewsIndex + 1])
  }, [hasNextNews, selectedNewsIndex])

  useEffect(() => {
    if (!selectedNews) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedNews(null)
        return
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        openPrevNews()
        return
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        openNextNews()
        return
      }

      if (event.key !== "Tab" || !modalRef.current) return

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedNews, openPrevNews, openNextNews])

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="page-hero section-reveal">
          <span className="page-kicker">信息中心</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-3">
            <span className="title-gradient-tech">最新新闻</span>
          </h1>
          <p className="page-subtitle">
            实时同步活动公告、项目进展与关键更新。
          </p>
          <div className="hero-divider" />
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && (
          <div className="mb-16 section-reveal [animation-delay:80ms]">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <h2 className="text-2xl font-bold">精选新闻</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredNews.map((news, index) => (
                <div key={news.id}>
                  <Card 
                    className="glass-effect hover:neon-glow-pink transition-all h-full cursor-pointer group card-lift"
                    onClick={() => handleNewsClick(news)}
                    onKeyDown={(event) => handleCardKeyDown(event, news)}
                    role="button"
                    tabIndex={0}
                    aria-label={`查看新闻：${news.title}`}
                  >
                    <div className="aspect-video bg-gradient-to-br from-pink-600/20 to-purple-600/20 relative overflow-hidden">
                      {news.image ? (
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          priority={index === 0}
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.3),transparent_70%)]" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <TrendingUp className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform" />
                          </div>
                        </>
                      )}
                      <Badge className={`absolute top-4 right-4 ${categoryColors[news.categoryColor]}`}>
                        {news.category}
                      </Badge>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-white/80">
                        <Calendar className="w-3 h-3" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-pink-400 transition-colors">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300/90 text-sm line-clamp-2 mb-3">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-end">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-pink-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="mb-8 section-reveal [animation-delay:120ms]">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索新闻标题或内容..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-slate-900/50 border border-slate-700 rounded-lg 
                       focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 
                       text-white placeholder-gray-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="清空搜索"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">分类：</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={selectedCategory === category}
                className={`transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.35)]"
                    : "bg-slate-900/30 border-white/15 text-gray-300 hover:text-pink-300 hover:border-pink-400/60"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Info */}
          <div className="mt-4 text-sm text-gray-400">
            找到 <span className="text-pink-400 font-semibold">{filteredNews.length}</span> 篇新闻
          </div>
        </div>

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 section-reveal [animation-delay:150ms]">
              {paginatedNews.map((news) => (
                <div key={news.id}>
                  <Card 
                    className="glass-effect hover:neon-glow-pink transition-all h-full flex flex-col cursor-pointer group card-lift"
                    onClick={() => handleNewsClick(news)}
                    onKeyDown={(event) => handleCardKeyDown(event, news)}
                    role="button"
                    tabIndex={0}
                    aria-label={`查看新闻：${news.title}`}
                  >
                    {/* News Image */}
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                      {news.image ? (
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.2),transparent_70%)]" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-4xl font-bold text-white/20 group-hover:scale-110 transition-transform">
                              NEWS
                            </div>
                          </div>
                        </>
                      )}
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
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-pink-400 transition-colors">
                        {news.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-slate-300/90 text-sm line-clamp-3 mb-4">
                        {news.excerpt}
                      </p>

                      {/* Read More Button */}
                      <Button
                        type="button"
                        variant="ghost"
                        className="mt-auto w-full group/btn"
                        onClick={(event) => {
                          event.stopPropagation()
                          handleNewsClick(news)
                        }}
                      >
                        查看详情
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-400 text-lg">没有找到符合条件的新闻</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("全部")
                }}
              >
                重置筛选
              </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              上一页
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={`min-w-[40px] ${
                    currentPage === page
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : ""
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              下一页
            </Button>
          </div>
        )}

        {/* News Detail Modal */}
        {selectedNews && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
              <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="news-modal-title"
                className="bg-slate-900 border border-slate-700 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto section-reveal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-6 flex justify-between items-start z-10">
                  <div className="flex-1 pr-4">
                    <Badge className={`mb-3 ${categoryColors[selectedNews.categoryColor]}`}>
                      {selectedNews.category}
                    </Badge>
                    <h2 id="news-modal-title" className="text-3xl font-bold mb-3">
                      {selectedNews.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedNews.date}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={openPrevNews}
                        disabled={!hasPrevNews}
                        className="border-white/15 hover:border-pink-400/60"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        上一篇
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={openNextNews}
                        disabled={!hasNextNews}
                        className="border-white/15 hover:border-pink-400/60"
                      >
                        下一篇
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setSelectedNews(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    aria-label="关闭新闻详情"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden rounded-lg mb-6">
                    {selectedNews.image ? (
                      <Image
                        src={selectedNews.image}
                        alt={selectedNews.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.3),transparent_70%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold text-white/20">
                            NEWS
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="prose prose-invert max-w-none">
                    {/* 开头 */}
                    <p className="text-gray-300 mb-2 leading-relaxed">{selectedNews.content.intro}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedNews.content.greeting}</p>

                    {/* 各个章节 */}
                    {selectedNews.content.sections.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                        <p className="text-gray-300 mb-3 leading-relaxed">{section.content}</p>
                        
                        {/* 列表 */}
                        {section.list && (
                          <ul className="list-none space-y-2 mb-3 ml-4">
                            {section.list.map((item, i) => (
                              <li key={i} className="text-gray-300 flex items-start">
                                <span className="text-pink-400 mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {/* 链接 */}
                        {section.link && (
                          <a 
                            href={section.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-cyan-400 hover:text-cyan-300 underline transition-colors"
                          >
                            {section.link.text}
                          </a>
                        )}
                      </div>
                    ))}

                    {/* 结尾 */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{selectedNews.content.closing}</p>
                    <p className="text-gray-400 mt-6">{selectedNews.content.signature}</p>
                    <p className="text-gray-400">{selectedNews.content.date}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
