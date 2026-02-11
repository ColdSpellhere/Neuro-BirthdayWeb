"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ExternalLink, AlertTriangle, Users, Image, Briefcase, Pencil } from "lucide-react"
import { motion } from "framer-motion"

export default function ParticipatePage() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              参与方式一览
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            选择你的参与方式，一起为 Neuro-Sama 庆生！
          </p>
        </motion.div>

        {/* Tabs Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="audience" className="w-full">
            {/* 优化移动端 TabsList */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 h-auto gap-2 sm:gap-0 bg-slate-900/50 p-1">
              <TabsTrigger value="audience" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>观众</span>
              </TabsTrigger>
              <TabsTrigger value="submission" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
                <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>单品投稿</span>
              </TabsTrigger>
              <TabsTrigger value="art" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
                <Image className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>贺图投稿</span>
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Staff志愿者</span>
                <span className="xs:hidden">志愿者</span>
              </TabsTrigger>
            </TabsList>

            {/* Audience Tab */}
            <TabsContent value="audience">
              <Card className="glass-effect border-pink-500/30">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 flex-shrink-0" />
                    观众参与
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      欢迎所有喜欢 Neuro-Sama 的朋友们！无论你是新粉丝还是老观众，我们都希望你能参与这场盛大的生日庆典。
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      填写意愿问卷可以帮助我们更好地了解你的需求，为你提供更好的活动体验。同时，你也可以通过问卷表达你对活动的期待和建议。
                    </p>
                  </div>

                  <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-3 sm:p-4">
                    <p className="text-pink-400 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">💝 主办方希望你填写</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      你的反馈对我们非常重要，将帮助我们打造更好的活动体验！
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12"
                    asChild
                    >
                      <a
                        href="https://www.wjx.cn/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        填写意愿问卷
                      </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Submission Tab */}
            <TabsContent value="submission">
              <Card className="glass-effect border-cyan-400/30">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                    <Pencil className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                    单品投稿规则
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">投稿要求：</h3>
                    <ul className="space-y-2 sm:space-y-2.5 text-gray-300 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">作品必须为原创内容，严禁抄袭或未经授权的二次创作</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">内容需健康向上，符合社区规范，不含敏感或不当内容</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">视频类作品请确保画质清晰（推荐 1080p 及以上）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">音频类作品请确保音质清晰，无明显杂音或失真</span>
                      </li>
                    </ul>
                  </div>

                  <Alert variant="warning" className="border-2">
                    <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <AlertTitle className="text-base sm:text-lg font-bold mb-2">重要提示</AlertTitle>
                    <AlertDescription className="space-y-2 sm:space-y-3">
                      <p className="text-sm sm:text-base leading-relaxed">
                        <strong>必须填写问卷才能获取创作者群链接！</strong>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300">
                        加入创作者群后，你将获得：
                      </p>
                      <ul className="text-xs sm:text-sm space-y-1 ml-4 text-gray-300">
                        <li>• 投稿通道和详细指南</li>
                        <li>• 与其他创作者交流的机会</li>
                        <li>• 活动最新资讯和素材包</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12" 
                    variant="outline"
                    asChild
                    >
                    <a
                      href="https://www.wjx.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">前往问卷获取群链接</span>
                    <span className="sm:hidden">获取群链接</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Art Tab */}
            <TabsContent value="art">
              <Card className="glass-effect border-purple-500/30">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                    <Image className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                    贺图投稿说明
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      我们诚挚邀请所有艺术创作者为 Neuro-Sama 的生日绘制贺图！你的作品将有机会在庆典直播中展示。
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white">尺寸要求：</h3>
                      <ul className="space-y-2 sm:space-y-2.5 text-gray-300 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            推荐分辨率：<strong className="text-white">1920x1080</strong> 或更高
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            文件格式：<strong className="text-white">PNG / JPG</strong>（推荐 PNG）
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            文件大小：不超过 <strong className="text-white">20MB</strong>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">请在作品中标注你的画师名/ID</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 sm:p-4">
                    <p className="text-purple-400 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">🎨 非必填但希望你填</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      虽然不是必须的，但我们真的很期待看到你的创作！每一份作品都是对 Neuro 最好的祝福。
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12"
                    asChild
                    >
                      <a
                        href="https://www.wjx.cn/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    投递通道
                      </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <Card className="glass-effect border-cyan-400/30">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                    Staff 志愿者招募
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      我们正在招募有才华的志愿者加入 Staff 团队，共同打造这场精彩的生日庆典！
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white">招募岗位：</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        <div className="glass-effect p-3 sm:p-4 rounded-lg border border-white/10">
                          <h4 className="font-semibold text-pink-400 mb-1.5 sm:mb-2 text-sm sm:text-base">🎬 视频剪辑</h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            负责活动视频的剪辑、特效制作和后期处理
                          </p>
                        </div>
                        <div className="glass-effect p-3 sm:p-4 rounded-lg border border-white/10">
                          <h4 className="font-semibold text-cyan-400 mb-1.5 sm:mb-2 text-sm sm:text-base">🎨 平面设计</h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            设计活动海报、宣传物料和视觉元素
                          </p>
                        </div>
                        <div className="glass-effect p-3 sm:p-4 rounded-lg border border-white/10">
                          <h4 className="font-semibold text-purple-400 mb-1.5 sm:mb-2 text-sm sm:text-base">📋 活动策划</h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            协助策划活动流程、协调各部门工作
                          </p>
                        </div>
                        <div className="glass-effect p-3 sm:p-4 rounded-lg border border-white/10">
                          <h4 className="font-semibold text-yellow-400 mb-1.5 sm:mb-2 text-sm sm:text-base">💬 社区管理</h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            管理社区秩序、回答粉丝问题
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-3 sm:p-4">
                    <p className="text-cyan-400 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">⏳ 需人工审核</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      提交申请后，我们会在 3-5 个工作日内审核你的申请并与你联系。请确保填写准确的联系方式！
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12" 
                      asChild
                    >
                      <a
                        href="https://www.wjx.cn/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      申请加入
                      </a>
                    </Button>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      * 所有志愿者岗位均为无偿工作，但会获得特别的纪念证书和周边奖励
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
