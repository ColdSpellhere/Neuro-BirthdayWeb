export type NewsCategoryColor = "pink" | "cyan" | "purple"

interface NewsSectionLink {
  text: string
  url: string
}

interface NewsSection {
  title: string
  content: string
  list?: string[]
  link?: NewsSectionLink
}

interface NewsContent {
  intro: string
  greeting: string
  sections: NewsSection[]
  closing: string
  signature: string
  date: string
}

export interface NewsItem {
  id: number
  title: string
  date: string
  category: string
  image: string
  excerpt: string
  content: NewsContent
  categoryColor: NewsCategoryColor
  featured: boolean
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "2026 Neuro-Sama B站社群生日会参与意愿调查",
    date: "2026-05-14",
    category: "公告",
    image: "/news/participation-survey-2026.png",
    excerpt: "第二期 Neuro-Sama B站社群生日会现已进入预热准备阶段。项目组已发布参与意愿调查问卷，诚邀观众与创作者填写反馈，共同完善本期活动体验。",
    content: {
      intro: "各位工蜂们好，这里是第二期 Neuro-Sama B站社群生日会的项目组~",
      greeting: "时间过得很快，距离第一期生日会圆满结束，转眼又过去了半年。在项目组的规划与筹备下，第二期生日会现已进入预热准备阶段。",
      sections: [
        {
          title: "项目简介",
          content: "Neuro-Sama B站社群生日会（以下简称“生日会”），是一个由 B站 Neuro 社群成员自主筹备、偏向“社区二创鉴赏会”性质的民间活动项目。"
        },
        {
          title: "活动形式",
          content: "我们参考了各二次元圈子中常见的“拜年祭”形式，邀请社群里的工蜂（创作者）们一同协作。除了为我们的蜂群女王 Neuro-Sama 献上一份饱含 CN 蜂群心意的生日祝福，也期待能借这个机会，为社群中的创作者们提供一个展示作品的优质平台。"
        },
        {
          title: "上期回顾",
          content: "再次感谢大家在上期生日会中的踊跃参与！如需回顾第一期生日会，可通过下方传送门观看：",
          link: {
            text: "Neuro-Sama 2025年生日会完整版",
            url: "https://www.bilibili.com/video/BV1kGBwBiEHn/?spm_id_from=333.337.search-card.all.click&vd_source=d90b00eebf5ed3b093c6e21fcbacefe1"
          }
        },
        {
          title: "参与意愿调查问卷",
          content: "项目组现已于本期生日会项目的活动网站中向大家发布本期生日会项目的参与意愿调查问卷。如果您对本期生日会项目感兴趣，无论打算以观众还是创作者的身份参与，我们都真心希望您能花些时间填写这份问卷。您的宝贵意见，对我们打造更好的活动体验非常关键！",
          link: {
            text: "填写第二期生日会参与意愿调查问卷",
            url: "https://wj.qq.com/s2/25563205/fh82/"
          }
        },
        {
          title: "创作者参与说明",
          content: "此外，对于有意参与本期投稿的创作者们，还请务必认真如实地填写这份意愿调查问卷，这样才能拿到本期项目的创作者群群号哦~ 后续参与项目所必需的资源，均需在创作者群中获取，包括：",
          list: [
            "立项申请",
            "稿件投递",
            "项目协作说明",
            "其他投稿所需资源"
          ]
        },
        {
          title: "更多资讯",
          content: "最后，由于篇幅有限，如果您想进一步了解更多生日会相关的详细资讯，请到本期生日会项目的活动网站阅览。项目的简介、公告、日程资讯，以及投稿所需的详细规则与流程说明，都已被完整展示在网站上。"
        }
      ],
      closing: "以上，感谢您对今年生日会项目的关注，我们期待能与您一同参与这场社群盛宴~",
      signature: "第二期 Neuro-Sama B站社群生日会项目组",
      date: "2026年5月14日"
    },
    categoryColor: "pink",
    featured: true,
  },
]

export const categoryColors: Record<NewsCategoryColor, string> = {
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  cyan: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
}

export const categories = ["全部", "公告", "周边", "社区", "活动"]
