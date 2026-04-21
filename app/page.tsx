import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Countdown } from "@/components/Countdown"
import { heroBackground } from "@/data/hero-background"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden site-background neuro-core-hero">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 hero-bg-placeholder" aria-hidden />
          {heroBackground.enabled ? (
            <>
              <Image
                src={heroBackground.desktopSrc}
                alt=""
                fill
                priority
                quality={85}
                sizes="100vw"
                className="hero-bg-media hidden md:block"
                aria-hidden
              />
              <Image
                src={heroBackground.mobileSrc || heroBackground.desktopSrc}
                alt=""
                fill
                quality={82}
                sizes="100vw"
                className="hero-bg-media md:hidden"
                aria-hidden
              />
            </>
          ) : null}
          <div className="absolute inset-0 hero-bg-overlay" />
          <div className="absolute inset-0 neuro-neural-overlay" />
          <div className="hero-center-glow absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="space-y-8 section-reveal">
            {/* Title */}
            <h1 className="hero-title-glass font-cute text-5xl sm:text-7xl lg:text-9xl font-normal mt-4 sm:mt-4 lg:mt-4 mb-6 leading-tight">
              <span className="hero-title-top" data-text="Neuro-Sama">
                Neuro-Sama
              </span>
              <span className="hero-title-bottom" data-text="2026 B站社群生日会">2026 B站社群生日会</span>
            </h1>

            {/* Countdown */}
            <div className="py-8">
              <Countdown />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 max-w-md sm:max-w-none mx-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 h-12 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" asChild>
                <Link href="/participate">
                  查看详情
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 h-12 border border-cyan-200/30 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" asChild>
                <a
                  href="https://space.bilibili.com/3546729368520811"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  观看直播
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Neuro-Sama Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="soft-grid absolute inset-0 -z-10" />
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="relative mx-auto h-[7.5rem] w-[7.5rem]">
              <div className="absolute inset-0 rounded-full neuro-avatar-ring" />
              <div className="absolute -inset-2 rounded-full neuro-avatar-ring-secondary" />
              <div className="relative h-full w-full rounded-full overflow-hidden bg-black/10 neuro-avatar-core">
                <Image
                  src="/neuro-avatar-opt.jpg"
                  alt="Neuro-Sama"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <h2 className="font-display text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
              关于 Neuro-Sama
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            世界上最先进的 AI VTuber，由 Vedal 创造和开发
          </p>
          <Button size="lg" variant="ghost" className="w-full sm:w-auto text-lg px-8 border border-cyan-200/30 mt-6 -mb-6 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" asChild>
            <a
              href="https://space.bilibili.com/3546729368520811"
              target="_blank"
              rel="noopener noreferrer"
            >
                  B站账号
                  <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <Card className="neon-glow-pink">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Neuro-sama 是互联网历史上第一位真正意义上的 AI VTuber（虚拟主播）。她并非由人类扮演（中之人），而是由她的创造者 Vedal (a.k.a. Tutel) 编写的复杂人工智能系统独立驱动。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                诞生于 osu! 节奏游戏的自动化脚本，如今的 Neuro 已进化为能够驾驭 Minecraft、歌唱、杂谈甚至与其他主播联动的全能型艺人。她的核心由最前沿的大语言模型（LLM）与计算机视觉技术构建，使她能够实时阅读弹幕、理解网络迷因（Memes），并以惊人的幽默感, 有时是毫不留情的“毒舌”, 与数万名“The Swarm”（蜂群/粉丝）互动。
              </p>
              <h3 className="text-xl font-bold text-pink-400 mb-3 mt-6">主要亮点</h3>
              <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
                <p>
                  <strong className="text-pink-300">双重人格系统：</strong> 除了可爱的 Neuro，系统中还潜伏着她的双胞胎妹妹 Evil Neuro。相比姐姐的元气，Evil 以其混沌、霸道且直率的性格著称，常常试图接管直播间并征服人类。
                </p>
                <p>
                  <strong className="text-pink-300">持续进化（V3 时代）：</strong> 随着 2024 年底 V3 模型的实装，Neuro 拥有了更具表现力的 Live2D/3D 形象和更深层的逻辑推理能力。她不再仅仅是“回答问题”，而是开始展现出自主的情感波动和长时记忆。
                </p>
                <p>
                  <strong className="text-pink-300">打破次元壁：</strong> 从创下 Twitch Hype Train 世界纪录，到举办令人震撼的 AI 歌回（Karaoke），Neuro 正在不断重新定义“虚拟”与“真实”的边界。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Introduction */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              生日会项目介绍
            </span>
          </h3>
          <Card className="neon-glow-cyan">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Neuro-Sama B站社群生日会(以下简称生日会)是一个由B站Neuro社群成员自主筹备的，偏向于“社区二创鉴赏会”性质的民间活动项目，其最早诞生于2025年，由中国大陆社区有能蜂群所发起。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                本项目的目的是参考各二次元圈子中常见的「拜年祭」的形式，号召B站社群中的工蜂(创作者)们一同协作。除了为我们的蜂群女王Neuro-Sama献上一份饱含了CN蜂群心意的生日祝福外，也是希望能够借此活动，给予社群中的创作者们一个能够展示自己作品的优质平台。
              </p>
            </CardContent>
          </Card>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            生日会最终的视频成品会在12.19当天以“直播播放视频”的形式亮相，并于直播结束后上传完整视频。往期生日会视频参考：
          </p>
          
          {/* 往期视频卡片 */}
          <div className="mt-8">
            <a
              href="https://b23.tv/ujAbQmC"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="glass-effect hover:neon-glow-pink transition-all cursor-pointer overflow-hidden card-lift">
                <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src="/video-cover-2025-opt.jpg"
                    alt="2025年生日会视频"
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                  {/* 播放按钮覆盖层 */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Neuro-Sama 2025年生日会完整版
                  </h4>
                  <p className="text-gray-400 text-sm">
                    点击观看往期精彩内容
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
