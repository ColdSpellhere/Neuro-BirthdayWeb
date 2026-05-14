/**
 * 日程事件数据模型
 * @property {string} timestamp - 事件开始时间，采用 ISO 8601 格式（UTC+8 北京时间）
 * @property {string} title - 事件标题
 * @property {string} description - 事件描述
 * @property {string} timeLabel - 时间轴左侧显示文本，适合日期范围或节点日期
 * @property {number} [durationMinutes] - 可选，事件预计持续时间（单位：分钟）。未指定时将使用下个事件开始时间作为结束时间
 * @property {boolean} [showDuration] - 可选，是否在卡片中展示持续时间
 * @property {string} [link] - 可选，事件相关链接
 */
export interface ScheduleEvent {
  timestamp: string
  title: string
  description: string
  timeLabel: string
  durationMinutes?: number
  showDuration?: boolean
  link?: string
}

/** 日程事件数据集合（跨多日） */
export const scheduleEvents: ScheduleEvent[] = [
  {
    timestamp: "2026-05-15T00:00:00+08:00",
    timeLabel: "5/15",
    title: "首次宣传",
    description: "发布参与意愿调查问卷，开放创作者群，同步官网入口与贺图、单品征集规则。",
    durationMinutes: 1440,
    showDuration: false,
    link: "https://wj.qq.com/s2/25563205/fh82/",
  },
  {
    timestamp: "2026-06-19T00:00:00+08:00",
    timeLabel: "6/19",
    title: "开放立项",
    description: "开放单品立项申报，创作者可按规则提交项目计划。",
    durationMinutes: 1440,
    showDuration: false,
  },
  {
    timestamp: "2026-07-03T00:00:00+08:00",
    timeLabel: "7/3-7/10",
    title: "二次宣传",
    description: "暑假初期补充宣传活动资讯，提醒观众与创作者关注参与方式和投稿安排。",
    durationMinutes: 11520,
    showDuration: false,
  },
  {
    timestamp: "2026-08-07T00:00:00+08:00",
    timeLabel: "8/7",
    title: "三次宣传",
    description: "暑假中期进行最后一轮集中提醒，补充触达仍有参与意愿的创作者与观众。",
    durationMinutes: 1440,
    showDuration: false,
  },
  {
    timestamp: "2026-09-09T00:00:00+08:00",
    timeLabel: "9/9",
    title: "单品征稿截止",
    description: "单品投稿通道关闭，后续进入整理与选稿阶段。",
    durationMinutes: 1440,
    showDuration: false,
  },
  {
    timestamp: "2026-09-23T00:00:00+08:00",
    timeLabel: "9/23",
    title: "贺图征稿截止",
    description: "贺图投稿通道关闭，后续进入汇总与展示准备阶段。",
    durationMinutes: 1440,
    showDuration: false,
  },
  {
    timestamp: "2026-10-11T00:00:00+08:00",
    timeLabel: "10/11-10/18",
    title: "公布采用单品及贺图数量",
    description: "选稿结束后一周内，公布采用结果与贺图数量，并向参与创作者致谢。",
    durationMinutes: 11520,
    showDuration: false,
  },
]
