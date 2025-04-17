# VivaChat - 实时视频聊天支持服务

VivaChat 是一个现代化的实时视频聊天支持服务平台，旨在为客户提供即时的视觉连接和问题解答。

## 项目概述

这个项目使用 Next.js 15 构建，采用 App Router 架构，结合了 Server Components 和 Client Components，以提供最佳的性能和用户体验。

### 主要功能

- 实时视频聊天支持
- 即时消息交流
- 用户友好的界面设计
- 响应式布局，适配各种设备

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **样式**: TailwindCSS
- **字体**: Geist Sans 和 Geist Mono
- **图标**: SVG 内联图标

## 项目结构

```
app/
├── components/       # 可复用组件
├── page.tsx          # 主页面
├── layout.tsx        # 应用布局
├── globals.css       # 全局样式
└── favicon.ico       # 网站图标
```

## 页面设计

### 首页

首页采用现代简洁的两栏布局：

- **左侧**：包含品牌标识、导航栏、主标题、副标题、CTA按钮和关键词标签
- **右侧**：展示视频聊天卡片轮播组件，呈现产品的核心功能

### 颜色方案

- 主色调：淡绿色 (#10b981)
- 背景色：白色 (#ffffff)
- 文字色：深灰色 (#171717)
- 强调色：黑色 (#000000)

## 部署与使用

1. 克隆此仓库
2. 安装依赖: `npm install`
3. 开发环境运行: `npm run dev`
4. 构建生产版本: `npm run build`
5. 启动生产服务器: `npm start`

## 后续开发计划

- 添加用户认证系统
- 实现真实的视频聊天功能
- 开发客服管理后台
- 集成数据分析工具
- 添加多语言支持

## 联系方式

网站: [vivachat.com](https://vivachat.com)

---

© 2024 VivaChat. All Rights Reserved.
