import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ExternalLink, AlertTriangle, Users, Image as ImageIcon, Briefcase, Pencil, Download } from "lucide-react"

export default function ParticipatePage() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="page-hero mb-8 sm:mb-12">
          <span className="page-kicker">参与指南</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-3 sm:mb-4">
            <span className="title-gradient-tech">
              参与方式一览
            </span>
          </h1>
          <p className="page-subtitle px-4">
            选择你的参与方式，一起为 Neuro-Sama 庆生。
          </p>
          <div className="hero-divider" />
        </div>

        {/* Tabs Component */}
        <div>
          <Tabs defaultValue="audience" className="w-full">
            {/* 优化移动端 TabsList */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 h-auto gap-2 sm:gap-0 bg-slate-900/50 p-1">
              <TabsTrigger value="audience" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>观众</span>
              </TabsTrigger>
              <TabsTrigger value="submission" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>单品投稿</span>
              </TabsTrigger>
              <TabsTrigger value="art" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>贺图投稿</span>
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="gap-1 sm:gap-2 text-xs sm:text-sm py-2 sm:py-2.5 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Staff志愿者</span>
                <span className="sm:hidden">志愿者</span>
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
                    className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
                  <div className="space-y-4 sm:space-y-5">
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white">投稿规范</h3>
                      <ul className="space-y-2 sm:space-y-2.5 text-gray-300 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">投稿作品须为原创，<strong className="text-rose-300">严禁洗稿、抄袭、搬运及直接切片</strong>。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                          <span className="leading-relaxed">主办方不建议使用 AI 工具；如非必要，应尽量避免将 AI 用于作品创作。</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white">1. 原创性原则</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        对于绘画、动画类稿件，主办方 <strong className="text-rose-300">严格禁止</strong> 在制作过程中使用 AI 工具。其他类型稿件如需使用 AI 工具，须在立项申报及稿件说明文档中 <strong className="text-cyan-300">明确标注 AI 使用范围及参与环节</strong>，以便审核与后期处理。
                      </p>

                      <ul className="space-y-2 sm:space-y-2.5 text-gray-300 text-sm sm:text-base">
                        <li className="leading-relaxed">
                          ● AI 补帧/降噪/插值：<strong className="text-yellow-300">允许但不推荐</strong>，请注明所用软件及处理片段的时间码区间。
                        </li>
                        <li className="leading-relaxed">
                          ● AI 动画/绘图/参考：无论是直接生成绘画，还是作为草稿、分镜辅助参考，<strong className="text-rose-300">一律禁止使用</strong>。
                        </li>
                        <li className="leading-relaxed">
                          ● AI 配音/翻唱：允许，尽量保证听觉效果自然流畅即可。
                        </li>
                        <li className="leading-relaxed">
                          ● AI 完全生成画面/整段：<strong className="text-rose-300">禁止使用</strong>。
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white">2. 氛围与主题</h3>
                      <ul className="space-y-2 sm:space-y-2.5 text-gray-300 text-sm sm:text-base">
                        <li className="leading-relaxed">
                          主题契合度：保证作品与“环牛圈”及相关文化相关即可，不需要和生日会主题强相关。
                        </li>
                        <li className="leading-relaxed">
                          内容合规：稿件需符合法律法规，不得包含引战、不良引导、过激言论，也不得出现对民族、文化、宗教的贬低抹黑等内容。
                        </li>
                        <li className="leading-relaxed">
                          调性引导：请注意自身作品氛围，避免使用恐怖、抑郁、血腥、暴力、猎奇、政治、低俗及 ARG 相关等不适合出现于生日会节目中的设计元素与氛围。
                        </li>
                      </ul>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        如作品中可能包含抽象、鬼畜、意识流或过于小众的设计元素及氛围，请于立项申报时提前注明，并在交稿说明文档中附上相应元素的简要说明，方便主办方审核评估。
                      </p>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white">3. 概念设计</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        质量保证：整体观赏性不足（如幻灯片搭配音乐 remix）、过于低创低质、原创成分不足的立项申请，<strong className="text-rose-300">高概率会被打回</strong>。
                      </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4 rounded-xl border border-cyan-400/30 bg-slate-900/40 p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-cyan-200">稿件规格</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        为确保多节目串联时的视听一致性，请尽可能使提交稿件符合以下参数规范：
                      </p>

                      <div className="overflow-x-auto rounded-lg border border-white/10">
                        <table className="w-full min-w-[760px] text-left text-sm sm:text-base">
                          <thead className="bg-cyan-500/10 text-cyan-200">
                            <tr>
                              <th className="px-4 py-3 font-semibold">项目</th>
                              <th className="px-4 py-3 font-semibold">规格要求</th>
                              <th className="px-4 py-3 font-semibold">备注</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-300 [&_tr]:border-t [&_tr]:border-white/10 [&_tr:nth-child(even)]:bg-white/[0.03]">
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">封装格式</td>
                              <td className="px-4 py-3">.mp4 / .mov / .avi / .flv / .mkv</td>
                              <td className="px-4 py-3">建议使用 H.264 (AVC) 或 H.265 (HEVC)</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">分辨率</td>
                              <td className="px-4 py-3">1920*1080 (FHD) 及以上</td>
                              <td className="px-4 py-3">比例 16:9 横屏，不接受竖屏投稿</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">帧率</td>
                              <td className="px-4 py-3">24 - 60 fps</td>
                              <td className="px-4 py-3">注意帧率一致性</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">视频码率</td>
                              <td className="px-4 py-3">6000 - 50000 kbps</td>
                              <td className="px-4 py-3">根据分辨率灵活调整，不出现明显的画质问题即可</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">色彩空间</td>
                              <td className="px-4 py-3">Rec.709 (SDR)</td>
                              <td className="px-4 py-3">深度 8/10bit 均可，有 HDR 稿件需求请注明</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">音频标准</td>
                              <td className="px-4 py-3">AAC / PCM 立体声，采样率 48kHz，比特率 ≥192kbps</td>
                              <td className="px-4 py-3">注意响度区间，建议平均响度 -14 LUFS ±1，最大音量不要出现爆红</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">稿件时长</td>
                              <td className="px-4 py-3">3 - 5 分钟</td>
                              <td className="px-4 py-3">仅建议，非强制要求</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">稿件封面</td>
                              <td className="px-4 py-3">.png / .jpg</td>
                              <td className="px-4 py-3">封面分辨率规格要求比照视频的分辨率规格要求</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium text-white">说明文档</td>
                              <td className="px-4 py-3">.txt / .doc / .docx / .md / .rtf</td>
                              <td className="px-4 py-3">请简单介绍稿件与设计构想，并根据内容规范清楚注明必要的补充资讯</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        <strong className="text-rose-300">注：如有手绘抽帧等风格化特殊规格需求，请在申报或说明文档中标注
                        </strong>。
                      </p>
                      </div>
                    </div>
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

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      asChild
                    >
                      <a href="/doc/2026生日会单品征集规则与流程.docx" download>
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="hidden sm:inline">下载单品征集规则文档</span>
                        <span className="sm:hidden">下载规则文档</span>
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Art Tab */}
            <TabsContent value="art">
              <Card className="glass-effect border-purple-500/30">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
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
                        <li>• 与其他创作者交流的机会</li>
                        <li>• 活动最新资讯和素材包</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
                      className="w-full sm:w-auto text-base sm:text-lg h-11 sm:h-12 focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" 
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
        </div>
      </div>
    </div>
  )
}
