# AI Vue - 桌面游戏推荐系统

这是将 React TSX 代码转换为 Nuxt.js Vue 代码的桌面游戏推荐系统。

## 功能特性

- 🎲 桌面游戏分类浏览
- 🎭 跑团游戏推荐
- 📱 响应式设计
- 🎨 现代化 UI 界面
- ⚡ Vue 3 + Nuxt 3 技术栈

## 项目结构

```
aivue/
├── components/           # Vue 组件
│   ├── AccordionGameList.vue    # 手风琴游戏列表
│   ├── Breadcrumb.vue          # 面包屑导航
│   └── SwipeableCategories.vue # 滑动分类选择
├── composables/         # Vue 组合式函数
│   └── useGameData.ts          # 游戏数据和导航逻辑
├── pages/               # Nuxt 页面
│   └── index.vue              # 主页面
└── assets/              # 静态资源
```

## 技术栈

- **框架**: Nuxt 3
- **UI 库**: Vue 3 + Composition API
- **样式**: Tailwind CSS
- **图标**: Heroicons
- **类型**: TypeScript

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 访问应用：
```
http://localhost:3000
```

## 主要组件

### AccordionGameList.vue
手风琴式游戏列表组件，支持展开/折叠显示游戏详细信息。

### Breadcrumb.vue
面包屑导航组件，提供页面层级导航。

### SwipeableCategories.vue
滑动分类选择组件，支持左右滑动切换分类。

### useGameData.ts
游戏数据和导航逻辑的组合式函数，包含：
- 游戏数据管理
- 导航状态管理
- 页面信息获取

## 数据格式

游戏数据结构：
```typescript
interface GameDetails {
  name: string        // 游戏名称
  description: string // 游戏描述
  players: string     // 玩家人数
  duration: string    // 游戏时长
  difficulty: number // 难度等级 (1-5)
  tags: string[]      // 游戏标签
}
```

## 样式说明

使用 Tailwind CSS 进行样式设计，主要特点：
- 渐变背景
- 毛玻璃效果
- 悬停动画
- 响应式布局
- 深色主题

## 开发说明

- 所有组件使用 Vue 3 Composition API
- 使用 TypeScript 进行类型检查
- 遵循 Nuxt 3 最佳实践
- 组件间通过 props 和 emit 通信

