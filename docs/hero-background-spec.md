# Hero 背景图资源规范

## 预留路径

- 当前测试路径（已接入）:
- 桌面端: /public/hero/neuro-hero-bg-desktop.jpg
- 移动端: /public/hero/neuro-hero-bg-mobile.jpg
- 正式推荐路径（建议上线前切换）:
- 桌面端: /public/hero/neuro-hero-bg-desktop.webp
- 移动端: /public/hero/neuro-hero-bg-mobile.webp

代码已接好以上路径。需要启用时，在 data/hero-background.ts 中把 enabled 改为 true。

## 推荐尺寸

- 桌面主图: 2560x1440 (16:9)
- 桌面最低兜底: 1920x1080
- 手机竖图: 1080x1920 (9:16)
- 手机最低兜底: 900x1600

## 格式与质量

- 首选格式: WebP
- 可选高质量来源: AVIF（在视觉效果稳定的前提下）
- 可选兜底格式: JPG
- 压缩目标:
- 桌面图 <= 450 KB
- 手机图 <= 250 KB

说明:

- 当前本地测试使用 JPG 兜底格式，便于快速验证视觉与布局。
- 正式版本建议切换为 WebP/AVIF 以降低带宽和首屏体积。

## 构图安全区

首页 Hero 文案在中间区域，建议这部分保持低细节，避免与文字冲突:

- 横向安全区: 28% 到 72%
- 纵向安全区: 16% 到 72%

角色面部与高对比细节尽量放在中心安全区之外。

## 视觉建议

- 整体亮度建议为低到中（深色场景优先）。
- 标题后方避免纯白高亮。
- 青色与粉色建议作为辅光，不建议整屏高饱和覆盖。
- 建议边缘细节多于中心细节。

## 接入检查清单

1. 导出并放置两张图到 /public/hero/。
2. 在 data/hero-background.ts 中设置 enabled: true。
3. 执行 npm run lint。
4. 在桌面和移动端宽度下检查首页显示。
5. 如果文字可读性下降，优先把素材整体压暗或降低对比度。
