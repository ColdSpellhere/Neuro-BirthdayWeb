# Neuro-Sama 2026 Birthday Festival 🎉

欢迎来到 Neuro-Sama 2026 生日庆典官方网站 Demo！

## 项目概述

这是一个使用 Next.js 14 (App Router) 搭建的赛博朋克风格网站，用于庆祝 AI VTuber Neuro-Sama 的生日。

## 技术栈

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion

## 设计语言

- **主题**: 深色模式 (Dark Mode)
- **配色**:
  - 背景: Slate-950 (深空灰)
  - 主色: Pink-500 (Neuro 代表色)
  - 辅色: Cyan-400 (赛博科技蓝)
- **风格**: 玻璃拟态 (Glassmorphism) + 霓虹发光 (Neon Glow)

## 功能特性

### 页面
- ✅ **首页**: Hero Section + 活动预览 + 倒计时
- ✅ **活动日程**: 完整的一周活动安排
- ✅ **新闻公告**: 最新消息和社区动态
- ✅ **关于 Neuro**: Neuro-Sama 的介绍和发展历程

### 特色功能
- 🎨 完全响应式设计 (Mobile First)
- ✨ 精美的动画效果 (Framer Motion)
- 🌈 赛博朋克风格的 UI
- 💫 霓虹发光效果
- 🔄 交互式组件

## 快速开始

### 安装依赖
\`\`\`bash
npm install
\`\`\`

### 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

然后打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
\`\`\`bash
npm run build
npm run start
\`\`\`

## 项目结构

\`\`\`
TestNeuroBirthWeb/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 首页
│   ├── schedule/          # 活动日程页
│   ├── news/              # 新闻公告页
│   ├── about/             # 关于页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── navbar.tsx         # 导航栏
│   ├── footer.tsx         # 页脚
│   └── ui/                # Shadcn/ui 组件
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/                   # 工具函数
│   └── utils.ts
└── public/                # 静态资源
\`\`\`

## Mock Data

目前所有数据（新闻、活动日程等）都是硬编码在组件中的 Mock Data，便于演示。

## 自定义 CSS 类

项目中定义了一些实用的 Tailwind CSS 类：

- `.glass-effect` - 玻璃拟态效果
- `.neon-glow-pink` - 粉色霓虹发光
- `.neon-glow-cyan` - 青色霓虹发光
- `.animate-glow` - 发光动画
- `.animate-float` - 浮动动画

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 开发注意事项

1. 所有交互组件都使用了 `'use client'` 指令
2. 图片使用 CSS 渐变色块代替
3. 完全响应式设计，优先考虑移动端
4. 使用 Framer Motion 实现流畅动画

## License

MIT

## 致谢

感谢 Neuro-Sama 和 Vedal 为我们带来的欢乐！

---

Made with 💖 for Neuro-Sama
