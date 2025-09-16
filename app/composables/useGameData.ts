import { ahei, yanwo, store } from "@/composables/coc"

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
        duration: "3-4h",
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
        duration: "4-5h",
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
      ...ahei,
      ...yanwo,
      ...store,
    ],
    DND: [
      {
        "name": "凡达林的失落矿坑",
        "description": "你们也许是初出茅庐的冒险者，也许是为了名利前来的野心家，也许是一个有名的矮人商人——甘德论·巡岩者的朋友，无论如何，你们都一起走上了这场探索失落的矿洞的，惊奇的冒险之旅",
        "players": "3-5人",
        "duration": "4-6h",
        "difficulty": 1,
        "tags": ["新人模组", "战斗居多", "事件驱动", "传统英雄故事", "线性"],
        "era": null,
        "requirements": "车卡",
        "isNewbie": true,
        "type": "dnd5E",
        "kp": "月海",
        "author": null,
        "skills": null,
        "notes": "长度：约五次结团\n等级：一级开卡，结团升至五级",
        "mastery": "掌握模组"
      },
      {
        "name": "风骸岛之龙",
        "description": "在剑湾北部，一座名为巨龙休息处的修道院坐落在风骸岛之上.其院长茹娜拉是远近闻名的智者，许多人来这里解决心中的疑惑或是寻求内心的宁静.出于某种目的，冒险者们乘上了前往风骸岛的船只",
        "players": "3-5人",
        "duration": "4-6h",
        "difficulty": 1,
        "tags": ["费伦", "宝剑海风骇岛"],
        "era": null,
        "requirements": "车卡, 预设卡",
        "isNewbie": true,
        "type": "dnd5E",
        "kp": "月海",
        "author": null,
        "skills": null,
        "notes": "长度：约四次结团\n等级：一级开卡，结团升至三级",
        "mastery": "掌握模组"
      },
      {
        "name": "冰塔峰之龙",
        "description": "凡达林小镇安定,居民勤奋，在严酷的旷野经营者他们的生活，但在不久之前，一条白龙降落在了小镇附近的宝剑山脉，作为众多励志屠龙的冒险者小队之一，你们来到了凡达林，准备通过平凡的任务，寻找屠龙的方法",
        "players": "2-5人",
        "duration": "4-6h",
        "difficulty": 1,
        "tags": ["费伦", "凡达林"],
        "era": null,
        "requirements": "车卡",
        "isNewbie": true,
        "type": "dnd5E",
        "kp": "月海",
        "author": null,
        "skills": null,
        "notes": "长度：约五次结团\n等级：一级开卡，结团升至六级",
        "mastery": "掌握模组"
      },
      {
        "name": "雪夜怪谈",
        "description": "起因：一位牧师委托你们前往雪山中的修道院看望自己的弟弟——掌门人阿鲁津。",
        "players": "4人",
        "duration": "6-7h",
        "difficulty": 1,
        "tags": [],
        "era": "",
        "requirements": "车卡",
        "isNewbie": true,
        "type": "dnd5E",
        "kp": "燕窝",
        "author": " Mads Hvelplund",
        "skills": "",
        "notes": "dnd入门团，推荐给新手，后续可以衔接其他模组\n本模组不设补给点，但pc可以在正式开团之前用初始资金进行采购。\n短团，欢迎多多rp，欢迎合理搞事。 可能会有的后续模组：【魔现封神】。\n长度：一次结团\n等级：一级开卡",
        "mastery": "掌握模组"
      },
      {
        "name": "暗无天日",
        "description": "很久很久以前，一座巨大的城堡由于某种原因陷入地下。现在，残暴的怪物在厅堂中徘徊，邪恶在城堡中逐渐滋长。城堡底层枯萎的花园中，有人正在培育扭曲的树木。\n十二年前，为了证实“魔法苹果”的传言，放逐者贝利克来到这座城堡。他发现这座古老的建筑是由于某种魔法力量才陷入地下。在摆平城堡中的新居民后，贝利克在底层黄昏树丛的中心发现了自己寻找的目标，一根曾经钉在吸血鬼心脏上的古老木桩生根发芽，长成一颗被称为“甘提亚斯”的大树。夏至时，甘提亚斯树会结出一枚鲜红的苹果，为人们带来青春。冬至时，甘提亚斯树会结出一枚苍白的苹果，为人们带来死亡。贝利克在附近的区域散布两种苹果，为人们带来幸福与噩梦。但无论苹果的颜色，甘提亚斯树的种子都会成长为微似人形的活化幼树，在附近繁衍活动。",
        "players": "4人",
        "duration": "8h",
        "difficulty": 1,
        "tags": [],
        "era": "",
        "requirements": "车卡",
        "isNewbie": true,
        "type": "dnd5E",
        "kp": "燕窝",
        "author": null,
        "skills": "",
        "notes": "dnd入门团，推荐给新手，后续可以衔接其他模组\n长度：约一到二次结团\n等级：一级开卡，最终达到二级甚至三级",
        "mastery": "掌握模组"
      },
      {
        "name": "深水城-龙金之劫",
        "description": "你们或许是初来北地明珠的寻梦者，或许是受雇于神秘雇主的专业人士，又或许只是恰好在呵欠之门酒馆中接下了一单报酬不错的简单差事。无论如何，你们都因探险家瓦罗·赞普·格达姆的委托聚在一起，却不知不觉踏入深水城暗流汹涌的阴谋漩涡。两个庞大的邪恶组织因一笔传说中的巨款——“龙金”——展开激烈争夺，而你们，将成为改变这场暗战结局的关键……",
        "players": "3-6人",
        "duration": "4-6h",
        "difficulty": 3,
        "tags": ["费伦", "深水城"],
        "era": "",
        "requirements": "车卡",
        "isNewbie": false,
        "type": "dnd5E",
        "kp": "月海",
        "author": "",
        "skills": "",
        "notes": "长度：约五次结团\n等级：一级开卡，结团升至五级",
        "mastery": ""
      },
      {
        "name": "深水城-疯法师的地城",
        "description": "是男人就下地城!!! 23层地下城对应5到20级的冒险家，每层都可以是独立的团",
        "players": "4人",
        "duration": "4-6h",
        "difficulty": 4,
        "tags": ["是男人就下一百层", "费伦", "深水城"],
        "era": "",
        "requirements": "车卡",
        "isNewbie": false,
        "type": "dnd5E",
        "kp": "月海",
        "author": "",
        "skills": "",
        "notes": "长度：每层约1~2次，共23层\n等级：5~20级",
        "mastery": ""
      },
      {
        "name": "施特拉德的诅咒",
        "description": "浓雾不知何时已然散去，但眼前并非通往目的地的道路。惨白的闪电撕裂天际，刹那间照亮了前方——那是一片陌生而荒凉的土地，一座村庄在远方的山谷中若隐若现，而更高处，一座尖塔林立的黑色城堡巍然耸立于绝壁之巅，如同沉默的巨人俯视着一切。\n又一道闪电划过！你们似乎瞥见那最高的城墙上有一个模糊的剪影……是错觉吗？\n滚雷在头顶炸响，风声凄厉，仿佛夹杂着某种非人的嚎叫。一种被凝视的感觉挥之不去，仿佛整个黑暗天地都是一个巨大陷阱的一部分。\n而你们，已然身在其中。",
        "players": "4-6人",
        "duration": "4-6h",
        "difficulty": 5,
        "tags": ["哥特风", "人物驱动", "沙盒模组", "诡秘恐怖", "探索&交涉居多", "公路团"],
        "era": ["堕影冥界", "巴洛维亚"],
        "requirements": "车卡",
        "isNewbie": false,
        "type": "dnd5E",
        "kp": "月海",
        "author": null,
        "skills": null,
        "notes": "长度：约十三到十五次结团\n等级：一级开卡，结团升至十级",
        "mastery": ""
      },
      {
        "name": "林中魅影",
        "description": "朽木镇旁的黑血森林常年来一直为镇民津津乐道，据说：镇长有一个善良而美丽的女儿，名叫奥莉雅。她深受大家的喜爱，但有一天，奥莉雅收留了一个外地来的旅人，却不曾想到那个旅者竟然是一个林中魅影！那晚正好是月圆之夜，残暴的林中魅影虽然被杀死，但奥莉雅却不幸被咬伤，她感觉到自己身体的异样，知道自己已经染上了诅咒，于是便在黑血森林中上吊了。从那以后，那片森林便被迷雾所笼罩，而那奥莉雅的魂灵则在迷雾中游荡......\n但这还没完，黑血森林的迷雾似乎在逐渐地向外蔓延，许多离森林近的村子都被迷雾所覆盖，变成了死镇。\n镇民们十分惊慌，镇长也发出委托，希望有人能解决黑血森林的异变，但所有进入迷雾中的人都没能再回来。",
        "players": "4人",
        "duration": "5-7h",
        "difficulty": 3,
        "tags": [],
        "era": "",
        "requirements": "车卡",
        "isNewbie": false,
        "type": "dnd5R",
        "kp": "燕窝",
        "author": null,
        "skills": "",
        "notes": "身份：你可以是朽木镇本地人，可以是正巧旅行到这里的旅者，也可以是镇长从城里找来的雇佣兵……。5级开卡，全拓展，可以有三个非普通物品（+1武器和+1防具也是非普通）+1治疗药水+3天的干粮+一些身份有关的个人物品\n等级：五级开卡，适合老手",
        "mastery": "掌握模组"
      },
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

