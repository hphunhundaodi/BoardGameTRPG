// 游戏详细数据结构
export const gameDetailsData = {
  桌游: {
    毛线: [
      {
        name: "阿瓦隆",
        description: "一款社交推理游戏，玩家分为好人和坏人两个阵营，通过投票和任务来决定胜负。需要良好的观察力和推理能力。",
        players: "5-10人",
        duration: "30-45分钟",
        difficulty: 2,
        tags: ["推理", "社交", "角色扮演"]
      },
      {
        name: "狼人杀",
        description: "经典的多人社交推理游戏，村民需要找出隐藏的狼人，而狼人要消灭所有村民。考验玩家的逻辑推理和表演能力。",
        players: "6-18人",
        duration: "20-40分钟",
        difficulty: 2,
        tags: ["推理", "社交", "经典"]
      },
      {
        name: "剧本杀：古宅惊魂",
        description: "沉浸式角色扮演推理游戏，玩家需要在古老宅邸中寻找线索，揭开神秘案件的真相。",
        players: "6-8人",
        duration: "3-4小时",
        difficulty: 3,
        tags: ["推理", "沉浸式", "悬疑"]
      },
      {
        name: "谁是卧底",
        description: "简单有趣的社交游戏，大部分玩家拿到相同词汇，少数卧底拿到相似词汇，通过描述找出卧底。",
        players: "4-10人",
        duration: "15-30分钟",
        difficulty: 1,
        tags: ["社交", "词汇", "轻松"]
      },
      {
        name: "剧本杀：民国往事",
        description: "以民国时期为背景的推理剧本，玩家扮演不同身份的角色，在错综复杂的关系中寻找真相。",
        players: "6-7人",
        duration: "4-5小时",
        difficulty: 4,
        tags: ["推理", "历史", "情感"]
      }
    ],
    轻策: [
      {
        name: "卡坦岛",
        description: "经典的资源管理和建设游戏，玩家通过收集资源、建造道路和城镇来获得胜利点数。",
        players: "3-4人",
        duration: "60-90分钟",
        difficulty: 2,
        tags: ["资源管理", "建设", "经典"]
      },
      {
        name: "车票之旅",
        description: "铁路主题的策略游戏，玩家收集车票卡牌来连接不同城市的铁路线，完成目的地路线。",
        players: "2-5人",
        duration: "30-60分钟",
        difficulty: 2,
        tags: ["铁路", "收集", "路线规划"]
      },
      {
        name: "拼布艺术",
        description: "双人抽象策略游戏，玩家购买拼布块来填充自己的被子，获得最高分数。",
        players: "2人",
        duration: "15-30分钟",
        difficulty: 2,
        tags: ["拼图", "双人", "抽象"]
      },
      {
        name: "七大奇迹",
        description: "文明建设游戏，玩家发展古代文明，建造世界奇迹，通过多种途径获得胜利点数。",
        players: "2-7人",
        duration: "30-60分钟",
        difficulty: 3,
        tags: ["文明", "建设", "多元化"]
      },
      {
        name: "璀璨宝石",
        description: "宝石商人主题游戏，玩家收集宝石来购买发展卡，建立宝石帝国。",
        players: "2-4人",
        duration: "30-45分钟",
        difficulty: 2,
        tags: ["引擎构建", "宝石", "经济"]
      }
    ],
    中策: [
      {
        name: "农场主",
        description: "家庭农场经营游戏，玩家管理农场资源，养殖动物，种植作物，建设农场设施。",
        players: "1-5人",
        duration: "30-45分钟",
        difficulty: 3,
        tags: ["农场", "资源管理", "家庭"]
      },
      {
        name: "港口城市",
        description: "海洋贸易主题策略游戏，玩家建设港口城市，发展贸易路线，控制海洋资源。",
        players: "2-4人",
        duration: "90-120分钟",
        difficulty: 3,
        tags: ["贸易", "海洋", "城市建设"]
      },
      {
        name: "翼展",
        description: "鸟类主题的引擎构建游戏，玩家吸引不同鸟类到栖息地，建立强大的鸟类生态系统。",
        players: "1-5人",
        duration: "40-70分钟",
        difficulty: 3,
        tags: ["鸟类", "引擎构建", "自然"]
      },
      {
        name: "马可波罗游记",
        description: "以马可波罗的旅行为主题，玩家沿着丝绸之路进行贸易和探险。",
        players: "2-4人",
        duration: "60-100分钟",
        difficulty: 4,
        tags: ["探险", "贸易", "历史"]
      },
      {
        name: "大西部铁路",
        description: "铁路建设策略游戏，玩家在美国西部建设铁路网络，运输货物和乘客。",
        players: "2-4人",
        duration: "60-90分钟",
        difficulty: 3,
        tags: ["铁路", "西部", "网络建设"]
      }
    ],
    重策: [
      {
        name: "盖亚计划",
        description: "太空殖民主题的重度策略游戏，玩家控制外星种族在银河系中殖民和发展。",
        players: "1-4人",
        duration: "60-150分钟",
        difficulty: 5,
        tags: ["太空", "殖民", "重度策略"]
      },
      {
        name: "文明帝国",
        description: "史诗级文明发展游戏，玩家从古代发展到现代，管理文明的各个方面。",
        players: "2-4人",
        duration: "120-240分钟",
        difficulty: 5,
        tags: ["文明", "史诗", "发展"]
      },
      {
        name: "黄昏帝国",
        description: "太空歌剧风格的策略游戏，玩家控制星际帝国争夺银河系的霸权。",
        players: "3-6人",
        duration: "240-480分钟",
        difficulty: 5,
        tags: ["太空歌剧", "帝国", "史诗战争"]
      },
      {
        name: "通过时代",
        description: "文明发展游戏，玩家引导文明从古代发展到现代，做出重要的历史决策。",
        players: "2-4人",
        duration: "60-120分钟",
        difficulty: 4,
        tags: ["文明", "历史", "发展"]
      },
      {
        name: "火星计划",
        description: "火星殖民主题游戏，玩家作为公司在火星上建设基础设施，改造环境。",
        players: "1-5人",
        duration: "90-120分钟",
        difficulty: 4,
        tags: ["火星", "殖民", "环境改造"]
      }
    ]
  },
  跑团: {
    COC: [
      {
        name: "燃烧的星辰",
        description: "经典的克苏鲁神话模组，调查员们需要深入一个偏远小镇，揭开古老邪教的秘密。充满悬疑和恐怖元素。",
        players: "3-6人",
        duration: "4-6小时",
        difficulty: 3,
        tags: ["恐怖", "调查", "邪教"]
      },
      {
        name: "不息的渴望",
        description: "心理恐怖主题模组，调查员面临内心深处的恐惧，在现实与幻境之间寻找真相。",
        players: "3-5人",
        duration: "3-5小时",
        difficulty: 4,
        tags: ["心理恐怖", "幻境", "内心"]
      },
      {
        name: "冰冷的收获",
        description: "北极探险主题，调查员在严酷的环境中追踪神秘失踪案件，面对未知的古老存在。",
        players: "4-6人",
        duration: "5-7小时",
        difficulty: 4,
        tags: ["北极", "探险", "失踪"]
      },
      {
        name: "爱丽丝的茶话会",
        description: "童话风格的诡异模组，调查员进入扭曲的仙境世界，体验疯狂的茶话会。",
        players: "3-5人",
        duration: "3-4小时",
        difficulty: 3,
        tags: ["童话", "仙境", "疯狂"]
      },
      {
        name: "狂气山脉",
        description: "洛夫克拉夫特原著改编，调查员探索南极洲的古老遗迹，面对超越人类理解的恐怖。",
        players: "4-6人",
        duration: "6-8小时",
        difficulty: 5,
        tags: ["南极", "古老", "超越理解"]
      }
    ],
    DND: [
      {
        name: "雪夜怪谈",
        description: "寒冬背景的冒险模组，冒险者在暴风雪中寻找失踪的村民，揭开雪山深处的秘密。",
        players: "3-6人",
        duration: "4-6小时",
        difficulty: 3,
        tags: ["寒冬", "救援", "雪山"]
      },
      {
        name: "暗无天日",
        description: "地下城探险经典模组，冒险者深入黑暗的地下迷宫，面对各种怪物和陷阱的挑战。",
        players: "4-6人",
        duration: "5-8小时",
        difficulty: 4,
        tags: ["地下城", "迷宫", "怪物"]
      },
      {
        name: "林中魅影",
        description: "森林主题冒险，冒险者调查神秘的森林异象，与精灵、德鲁伊和古老魔法打交道。",
        players: "3-5人",
        duration: "3-5小时",
        difficulty: 3,
        tags: ["森林", "精灵", "魔法"]
      }
    ]
  }
}

// 分类配置
export const categoryConfig = {
  桌游: {
    icon: "🎲",
    color: "from-emerald-900/20 to-teal-900/20 border-emerald-500/30",
    description: "经典桌面游戏体验",
    bgGradient: "from-emerald-900 via-teal-900/50 to-slate-900"
  },
  跑团: {
    icon: "🎭",
    color: "from-purple-900/20 to-indigo-900/20 border-purple-500/30",
    description: "角色扮演冒险之旅",
    bgGradient: "from-purple-900 via-indigo-900/50 to-slate-900"
  },
  毛线: {
    icon: "🧶",
    color: "from-pink-900/20 to-rose-900/20 border-pink-500/30",
    description: "轻松社交游戏",
    bgGradient: "from-pink-900 via-rose-900/50 to-slate-900"
  },
  轻策: {
    icon: "⚡",
    color: "from-yellow-900/20 to-orange-900/20 border-yellow-500/30",
    description: "策略入门级游戏",
    bgGradient: "from-yellow-900 via-orange-900/50 to-slate-900"
  },
  中策: {
    icon: "🧠",
    color: "from-blue-900/20 to-cyan-900/20 border-blue-500/30",
    description: "中等复杂度策略",
    bgGradient: "from-blue-900 via-cyan-900/50 to-slate-900"
  },
  重策: {
    icon: "⚔️",
    color: "from-red-900/20 to-orange-900/20 border-red-500/30",
    description: "高级策略挑战",
    bgGradient: "from-red-900 via-orange-900/50 to-slate-900"
  },
  COC: {
    icon: "🌟",
    color: "from-red-900/20 to-purple-900/20 border-red-500/30",
    description: "克苏鲁的呼唤",
    bgGradient: "from-red-900 via-purple-900/50 to-slate-900"
  },
  DND: {
    icon: "🐉",
    color: "from-blue-900/20 to-green-900/20 border-blue-500/30",
    description: "龙与地下城",
    bgGradient: "from-blue-900 via-green-900/50 to-slate-900"
  }
}

// 游戏导航逻辑
export const useGameNavigation = () => {
  const navigationPath = ref<string[]>([])
  const selectedGame = ref<string | null>(null)

  // 获取当前层级的数据
  const getCurrentLevelData = () => {
    if (navigationPath.value.length === 0) {
      return Object.keys(gameDetailsData)
    } else if (navigationPath.value.length === 1) {
      const mainCategory = navigationPath.value[0] as keyof typeof gameDetailsData
      return Object.keys(gameDetailsData[mainCategory])
    } else if (navigationPath.value.length === 2) {
      const mainCategory = navigationPath.value[0] as keyof typeof gameDetailsData
      const subCategory = navigationPath.value[1] as keyof (typeof gameDetailsData)[typeof mainCategory]

      // 使用可选链和空值合并
      return gameDetailsData[mainCategory]?.[subCategory] ?? []
    }
    return []
  }

  // 处理导航点击
  const handleNavigation = (item: string) => {
    if (navigationPath.value.length < 2) {
      navigationPath.value = [...navigationPath.value, item]
    }
  }

  // 处理面包屑导航
  const handleBreadcrumbNavigation = (index: number) => {
    if (index === -1) {
      navigationPath.value = []
    } else {
      navigationPath.value = navigationPath.value.slice(0, index + 1)
    }
    selectedGame.value = null
  }

  // 处理游戏选择
  const handleGameSelect = (game: string) => {
    const fullPath = [...navigationPath.value, game].join(' > ')
    selectedGame.value = fullPath
  }

  // 获取页面标题和描述
  type CategoryKey = keyof typeof categoryConfig

  const isCategoryKey = (v: unknown): v is CategoryKey =>
    typeof v === 'string' && v in categoryConfig
  
  const getPageInfo = () => {
    if (navigationPath.value.length === 0) {
      return { title: "游戏世界", description: "选择你想要体验的游戏类型" }
    }
  
    if (navigationPath.value.length === 1) {
      const category = navigationPath.value[0]
      const title = category ?? '游戏分类'
      const description = isCategoryKey(category)
        ? categoryConfig[category].description
        : '选择游戏分类'
      return { title, description }
    }
  
    const subCategory = navigationPath.value[1]
    const title = subCategory ?? '游戏选择'
    const description = isCategoryKey(subCategory)
      ? categoryConfig[subCategory].description
      : '选择游戏开始体验'
    return { title, description }
  }
  
  

  return {
    navigationPath,
    selectedGame,
    getCurrentLevelData,
    handleNavigation,
    handleBreadcrumbNavigation,
    handleGameSelect,
    getPageInfo
  }
}

