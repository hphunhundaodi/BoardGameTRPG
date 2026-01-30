<template>
  <div class="space-y-4">
    <!-- 搜索框 -->
    <div class="relative flex-1">
      <input v-model="searchQuery" type="text" placeholder="搜索模组中英文名、特色标签"
        :class="`w-full px-4 py-2 pl-9 pr-9 bg-gradient-to-br border ${colorClass} rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all`">
      <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
      <button v-if="searchQuery"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
        @click="searchQuery = ''">
        <Icon name="lucide:x" class="w-4 h-4" />
      </button>
    </div>
    <!-- COC筛选器 -->
    <!-- <div v-if="category === 'COC'" class="flex gap-4 items-stretch"> -->
    <!-- 筛选器主体 -->
    <div
      class="flex-1 rounded-xl bg-gradient-to-br from-red-900/20 to-purple-900/20 border border-red-500/30 backdrop-blur-sm overflow-hidden">
      <div class="p-4 space-y-3">
        <!-- 主筛选 + 搜索 -->
        <div class="flex gap-3">
          <!-- 主筛选按钮组 -->
          <div class="flex gap-2 overflow-y-auto">
            <button v-for="filter in allFilters" :key="filter" :class="`px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${(filter === '全部' && selectedFilter === null) || selectedFilter === filter
              ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg shadow-red-500/50 border'
              : 'bg-black/30 text-slate-300 hover:bg-black/50 hover:text-white border border-white/10'
              }`" @click="setSelectedFilter(filter === '全部' ? null : filter as FilterType)">
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- 高级筛选 -->
        <div class="flex items-center justify-between gap-3">
          <button class="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            @click="showAdvancedFilters = !showAdvancedFilters">
            <Icon name="lucide:filter" class="w-3.5 h-3.5" />
            <span>高级筛选</span>
            <Icon name="lucide:chevron-down"
              :class="`w-3.5 h-3.5 transition-transform duration-300 ${showAdvancedFilters ? 'rotate-180' : ''}`" />
          </button>

          <!-- 结果统计 -->
          <div class="flex items-center gap-3">
            <div class="text-sm text-slate-400">
              <span class="text-white">{{ filteredGames.length }}</span> 个模组
            </div>
            <button v-if="hasActiveFilters"
              class="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
              @click="clearAllFilters">
              <Icon name="lucide:x" class="w-3.5 h-3.5" />
              清除
            </button>
          </div>
        </div>

        <!-- 高级筛选选项 -->
        <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
          @leave="leave" @after-leave="afterLeave">
          <div v-if="showAdvancedFilters" class="space-y-3 pt-3 border-t border-white/10">
            <!-- 难度 + 时长 在同一行 -->
            <div class="grid grid-cols-2 gap-4">
              <!-- 难度筛选 -->
              <div class="space-y-2">
                <label class="text-xs text-slate-400">难度等级</label>
                <div class="flex gap-1.5">
                  <button v-for="level in 5" :key="level" :class="`flex-1 py-1.5 rounded-md transition-all duration-300 ${selectedDifficulty === level
                    ? 'bg-yellow-600/80 text-white shadow-lg shadow-yellow-500/30'
                    : 'bg-black/30 text-slate-400 hover:bg-black/50 border border-white/10'
                    }`" @click="setSelectedDifficulty(level)">
                    <Icon name="lucide:star" class="w-3.5 h-3.5 mx-auto" />
                  </button>
                </div>
              </div>

              <!-- 时长筛选 -->
              <!-- <div class="space-y-2">
                  <label class="text-xs text-slate-400">游戏时长</label>
                  <div class="grid grid-cols-3 gap-1.5">
                    <button v-for="duration in durationFilters" :key="duration" :class="`py-1.5 rounded-md text-xs transition-all duration-300 ${selectedDuration === duration
                      ? 'bg-blue-600/80 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-black/30 text-slate-400 hover:bg-black/50 border border-white/10'
                      }`" @click="setSelectedDuration(duration)">
                      {{ duration.replace(/[（）]/g, '').replace('<', '<').replace('>', '>') }}
                    </button>
                  </div>
                </div> -->
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- COC类型选择器 -->
    <!-- <div class="w-36 flex flex-col justify-between gap-3">
        <button
          v-for="type in cocTypes"
          :key="type"
          :class="`h-full flex-1 px-2 py-1 rounded-xl transition-all duration-200 ${selectedCOCType === type
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border shadow-lg shadow-purple-500/50 scale-105'
            : 'bg-gradient-to-br from-red-900/20 to-purple-900/20 border border-red-500/30 text-slate-300 hover:border-purple-500/50 hover:text-white backdrop-blur-sm'
            }`"
          @click="setSelectedCOCType(type)"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-2xl pr-2">
              {{ type === '标准COC' ? '📜' : '🌍' }}
            </div>
            <div class="text-xs leading-tight">{{ type }}</div>
          </div>
        </button>
      </div> -->
    <!-- </div> -->

    <!-- <div v-if="currentCOCType === 'BigWorldAllModules'">
      <div class="font-bold pb-2">【关于“大世界COC”模式的说明】</div>
      <div class="">
        <div>亲爱的玩家，您关注的“大世界”模式是我们为您准备的特色体验。</div>
        <div>它与固定剧本不同，无需预先车卡，故事将根据您队伍的行程、选择与阵营实时展开。</div>
        <div>正因如此，它没有固定的故事简介 —— 您的冒险本身就是独一无二的传奇。</div>
        <div>我们相信，这种未知与高自由度，将为您带来无与伦比的沉浸感。</div>
      </div>
    </div> -->

    <!-- 游戏列表 -->
    <div class="space-y-4">
      <div v-for="(game, index) in filteredGames" :key="index"
        :class="`relative rounded-xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl min-h-[120px]`">
        <!-- 背景图片 -->
        <div class="absolute inset-0 bg-cover bg-center opacity-10"
          :style="{ backgroundImage: `url('${getBackgroundImage(game.type)}')` }" />
        <!-- 渐变遮罩 -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        <!-- 折叠的基础信息 -->
        <div class="relative p-6 cursor-pointer z-10" @click="toggleExpanded(index)">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4 flex-1">
              <span class="text-2xl">{{ game.isCollection ? '📚' : icon }}</span>
              <div class="flex-1">
                <div class="flex items-baseline gap-2 mb-2">
                  <h3 class="text-xl group-hover:text-white transition-colors">
                    {{ game.name }}
                  </h3>
                  <span v-if="game.originName" class="text-sm text-slate-400 italic">
                    {{ game.originName }}
                  </span>
                  <span v-if="game.isCollection"
                    class="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30">
                    合集 · {{ game.modules?.length || 0 }}个模组
                  </span>
                  <span v-else-if="game.isNewbie"
                    class="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                    新手友好
                  </span>
                </div>
                <div class="flex items-center gap-4 text-sm text-slate-400">
                  <template v-if="!game.isCollection">
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:users" class="w-3.5 h-3.5" />
                      <span>{{ game.players }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:clock" class="w-3.5 h-3.5" />
                      <span>{{ game.duration }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <span class="text-xs">难度:</span>
                      <Icon v-for="i in 5" :key="i" name="lucide:star" :customize="fillIcon"
                        :class="`w-4 h-4 ${i <= game.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`" />
                    </div>
                  </template>
                  <template v-else>
                    <div class="text-slate-300">
                      点击查看合集内所有模组
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <Icon name="lucide:chevron-down" :class="`w-5 h-5 text-slate-400 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''
                }`" />
            </div>
          </div>
        </div>

        <!-- 展开的详细信息 -->
        <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
          @leave="leave" @after-leave="afterLeave">
          <div v-if="expandedIndex === index" class="relative z-10 px-6 pb-6 border-t border-white/10">
            <div v-if="game.isCollection && game.modules" class="pt-4 space-y-4">
              <!-- 合集：显示子模组列表 -->
              <!-- 合集描述 -->
              <div>
                <p class="text-slate-300 leading-relaxed mb-4">
                  {{ game.description }}
                </p>
              </div>

              <!-- 合集信息 -->
              <div v-if="game.author || game.era || game.tags.length > 0"
                class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-white/10">
                <div v-if="game.author" class="flex items-center gap-2">
                  <Icon name="lucide:user" class="w-4 h-4 text-slate-400" />
                  <span class="text-sm text-slate-300">
                    出处: <span class="text-white">{{ game.author }}</span>
                  </span>
                </div>
                <div v-if="game.era" class="flex items-center gap-2">
                  <Icon name="lucide:calendar" class="w-4 h-4 text-slate-400" />
                  <span class="text-sm text-slate-300">
                    时代背景: <span class="text-white">{{ game.era }}</span>
                  </span>
                </div>
              </div>

              <!-- 合集标签 -->
              <div v-if="game.tags.length > 0" class="pb-4 border-b border-white/10">
                <h4 class="text-sm text-slate-400 mb-2">合集标签</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tag, tagIndex) in game.tags" :key="tagIndex"
                    class="px-3 py-1 text-xs bg-amber-500/10 rounded-full border border-amber-500/20 text-amber-300">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- 子模组列表 -->
              <div>
                <h4 class="text-sm text-slate-400 mb-3">包含的模组 ({{ game.modules.length }})</h4>
                <div class="space-y-3">
                  <div v-for="(module, moduleIndex) in game.modules" :key="moduleIndex"
                    class="p-4 rounded-lg bg-black/30 border border-white/10 hover:bg-black/40 hover:border-white/20 transition-all">
                    <!-- 模组标题 -->
                    <div class="flex items-baseline gap-2 mb-2">
                      <h5 class="text-white">{{ module.name }}</h5>
                      <span v-if="module.originName" class="text-xs text-slate-400 italic">
                        {{ module.originName }}
                      </span>
                      <span v-if="module.isNewbie"
                        class="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                        新手友好
                      </span>
                    </div>

                    <!-- 模组基本信息 -->
                    <div class="flex items-center gap-4 text-xs text-slate-400 mb-2">
                      <div class="flex items-center gap-1">
                        <Icon name="lucide:users" class="w-3 h-3" />
                        <span>{{ module.players }}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <Icon name="lucide:clock" class="w-3 h-3" />
                        <span>{{ module.duration }}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <span>难度:</span>
                        <Icon v-for="i in 5" :key="i" name="lucide:star" :customize="fillIcon"
                          :class="`w-3 h-3 ${i <= module.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`" />
                      </div>
                      <div v-if="module.author" class="flex items-center gap-1">
                        <Icon name="lucide:user" class="w-3 h-3 text-slate-400" />
                        <span>{{ module.author }}</span>
                      </div>
                    </div>

                    <!-- 模组描述 -->
                    <p class="text-sm text-slate-300 mb-2 leading-relaxed">
                      {{ module.description }}
                    </p>

                    <!-- 模组详细信息 -->
                    <div class="grid grid-cols-2 gap-2 text-xs">
                      <div v-if="module.kp" class="text-slate-400">
                        主持人: <span class="text-slate-300">{{ module.kp }}</span>
                      </div>
                      <div v-if="module.era" class="text-slate-400">
                        时代: <span class="text-slate-300">{{ module.era }}</span>
                      </div>
                      <div v-if="module.notes" class="text-slate-400">
                        备注: <span class="text-slate-300">{{ module.notes }}</span>
                      </div>
                    </div>

                    <!-- 模组标签 -->
                    <div v-if="module.tags.length > 0" class="mt-2 flex flex-wrap gap-1">
                      <span v-for="(tag, tagIndex) in module.tags" :key="tagIndex"
                        class="px-2 py-0.5 text-xs bg-black/20 rounded-full border border-white/10 text-slate-400">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="pt-4 space-y-4">
              <!-- 普通模组：显示详细信息 -->
              <!-- 模组描述 -->
              <div>
                <p class="text-slate-300 leading-relaxed">
                  {{ game.description }}
                </p>
              </div>

              <!-- 详细信息网格 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-if="game.era" class="flex items-center gap-2">
                  <Icon name="lucide:calendar" class="w-4 h-4 text-slate-400" />
                  <span class="text-sm text-slate-300">
                    时代背景: <span class="text-white">{{ game.era }}</span>
                  </span>
                </div>
                <div v-if="game.requirements" class="flex items-center gap-2">
                  <Icon name="lucide:book-open" class="w-4 h-4 text-slate-400" />
                  <span class="text-sm text-slate-300">
                    创建方式: <span class="text-white">{{ game.requirements }}</span>
                  </span>
                </div>
                <div v-if="game.author" class="flex items-center gap-2">
                  <Icon name="lucide:user" class="w-4 h-4 text-slate-400" />
                  <span class="text-sm text-slate-300">
                    作者: <span class="text-white">{{ game.author }}</span>
                  </span>
                </div>
                <div v-if="game.kp" class="flex items-center gap-2">
                  <Icon name="lucide:badge" class="w-4 h-4 text-slate-400" />
                  <span class="text-sm text-slate-300">
                    主持人: <span class="text-white">{{ game.kp }}</span>
                  </span>
                </div>
              </div>

              <!-- 推荐技能 -->
              <div v-if="game.skills" class="border-t border-white/10 pt-4">
                <h4 class="text-sm text-slate-400 mb-2">推荐技能</h4>
                <p class="text-sm text-slate-300">{{ game.skills }}</p>
              </div>

              <!-- 备注 -->
              <div v-if="game.notes" class="border-t border-white/10 pt-4">
                <h4 class="text-sm text-slate-400 mb-2">备注</h4>
                <p class="text-sm text-slate-300">{{ game.notes }}</p>
              </div>

              <!-- 标签 -->
              <div v-if="game.tags.length > 0" class="border-t border-white/10 pt-4">
                <h4 class="text-sm text-slate-400 mb-2">特色标签</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tag, tagIndex) in game.tags" :key="tagIndex"
                    class="px-3 py-1 text-xs bg-black/20 rounded-full border border-white/10 text-slate-300">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <!-- 悬停效果 -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-5" />
        <!-- 展开时的额外背景增强 -->
        <Transition name="fade">
          <div v-if="expandedIndex === index" class="absolute inset-0 bg-black/20 pointer-events-none" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useCOCType } from '~/composables/useGameData'

export interface GameDetails {
  name: string // 中文名 (展示)
  originName?: string // 英文名 (小点字展示)
  description: string // 模组描述 (展示)
  players: string // 玩家人数 (展示)
  duration: string // 游玩时间 (展示)
  difficulty: number // 难度 (展示)
  tags: string[] // 特殊标记 (展示)
  era?: string // 模组内容的时代背景 (展示)
  requirements?: string // 创建人物的方式 (展示)
  isNewbie: boolean // 是否是新手模组 (展示)
  type: string // 模组类型 (不展示)
  kp?: string // 主持人名字 (展示)
  author?: string // 模组作者 (展示)
  skills?: string // 模组推荐技能 (展示)
  notes?: string // 备注 (展示)
  mastery?: string // 主持人是否掌握该模组 (不展示)
  weight?: number // 模组权重 (不展示)
  cocType?: "标准COC" | "大世界COC" // COC专用字段
  isCollection?: boolean // 是否为合集
  modules?: GameDetails[] // 如果是合集，包含的子模组列表
}

interface Props {
  games: GameDetails[]
  category: string
  cocType?: 'CocAllModules' | 'BigWorldAllModules'
}

type FilterType = "标准" | "新手"
// type COCType = "标准COC" | "大世界COC"

// 手动设置 icon 填充
const fillIcon = (content: string) => {
  const filledPath = content.replace('fill="none"', 'fill="currentColor"');
  return filledPath
}

const props = defineProps<Props>()
const expandedIndex = ref<number | null>(null)

// 筛选状态管理
const selectedFilter = ref<FilterType | null>(null)
const searchQuery = ref("")
const selectedDifficulty = ref<number | null>(null)
const selectedDuration = ref<string>("")
const showAdvancedFilters = ref(false)

// 筛选选项
const filters: FilterType[] = ["新手", "标准"]
// const durationFilters = ["短（<4h）", "中（4-6h）", "长（>6h）"]

// 添加"全部"选项
const allFilters = ["全部", ...filters]

// COC类型选择状态
// const { currentCOCType, setCOCType } = useCOCType()
// const cocTypes: COCType[] = ["标准COC", "大世界COC"]

// 计算当前选中的COC类型
// const selectedCOCType = computed(() => {
//   const result = currentCOCType.value === 'CocAllModules' ? '标准COC' : '大世界COC'
//   return result
// })

// 设置COC类型
// const setSelectedCOCType = (type: COCType) => {
//   if (type === '标准COC') {
//     setCOCType('CocAllModules')
//   } else if (type === '大世界COC') {
//     setCOCType('BigWorldAllModules')
//   }
// }

const categoryColors: Record<string, string> = {
  COC: 'from-red-900/20 to-purple-900/20 border-red-500/30',
  DND: 'from-blue-900/20 to-green-900/20 border-blue-500/30',
  毛线: 'from-pink-900/20 to-rose-900/20 border-pink-500/30',
  轻策: 'from-yellow-900/20 to-orange-900/20 border-yellow-500/30',
  中策: 'from-blue-900/20 to-cyan-900/20 border-blue-500/30',
  重策: 'from-red-900/20 to-orange-900/20 border-red-500/30'
}

const categoryIcons: Record<string, string> = {
  COC: '🌟',
  DND: '🐉',
  毛线: '🧶',
  轻策: '⚡',
  中策: '🧠',
  重策: '⚔️'
}

const colorClass = computed(
  () =>
    categoryColors[props.category] ||
    'from-gray-900/20 to-slate-900/20 border-gray-500/30'
)
const icon = computed(() => categoryIcons[props.category] || '🎮')

const expandedIndexRef = expandedIndex

const toggleExpanded = (index: number) => {
  expandedIndexRef.value = expandedIndexRef.value === index ? null : index
}

const getBackgroundImage = (gameType: string) => {
  const backgroundImages: Record<string, string> = {
    coc: 'https://images.unsplash.com/photo-1701791470518-cba3a91d6abd?auto=format&fit=crop&w=1080&q=80',
    dnd: 'https://images.unsplash.com/photo-1683660107861-c555be9775b9?auto=format&fit=crop&w=1080&q=80',
    dnd5E: 'https://images.unsplash.com/photo-1683660107861-c555be9775b9?auto=format&fit=crop&w=1080&q=80',
    boardgame:
      'https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=1080&q=80'
  }
  return backgroundImages[gameType] || backgroundImages.boardgame
}

// 时长解析函数
const parseDuration = (duration: string): number => {
  // 提取数字，如 "4-6小时" -> 5, "8h+" -> 8, "3-5小时" -> 4
  const match = duration.match(/(\d+)/)
  if (match) {
    const numStr = match[1]
    if (numStr) {
      return parseInt(numStr, 10)
    }
  }
  return 0
}

// 递归匹配游戏（包含合集内的子模组）
const matchesGame = (game: GameDetails): boolean => {
  // COC类型筛选
  // if (game.cocType && game.cocType !== selectedCOCType.value) {
  //   return false
  // }

  // 主要筛选条件
  if (selectedFilter.value === "新手" && !game.isNewbie) return false
  if (selectedFilter.value === "标准" && game.isNewbie) return false

  // 搜索查询
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    const matchesName = game.name.toLowerCase().includes(query)
    const matchesOriginName = game.originName?.toLowerCase().includes(query) || false
    const matchesDescription = game.description.toLowerCase().includes(query)
    const matchesTags = game.tags.some(tag => tag.toLowerCase().includes(query))
    if (!matchesName && !matchesOriginName && !matchesDescription && !matchesTags) {
      return false
    }
  }

  // 难度筛选
  if (selectedDifficulty.value !== null && game.difficulty !== selectedDifficulty.value) {
    return false
  }

  // 时长筛选
  if (selectedDuration.value) {
    const hours = parseDuration(game.duration)
    if (selectedDuration.value === "短（<4h）" && hours >= 4) return false
    if (selectedDuration.value === "中（4-6h）" && (hours < 4 || hours > 6)) return false
    if (selectedDuration.value === "长（>6h）" && hours <= 6) return false
  }

  return true
}

// 筛选逻辑（仅针对COC）
const filteredGames = computed(() => {
  if (props.category !== "COC") {
    return props.games
  }

  return props.games.filter(game => {
    // 如果是合集，只要合集本身或其任何子模组匹配就显示
    if (game.isCollection && game.modules) {
      // 合集本身匹配
      const collectionMatches = matchesGame(game)
      // 或者任何子模组匹配
      const anyModuleMatches = game.modules.some(module => matchesGame(module))
      return collectionMatches || anyModuleMatches
    }
    // 普通模组直接匹配
    return matchesGame(game)
  })
})

// 筛选器方法
const setSelectedFilter = (filter: FilterType | null) => {
  selectedFilter.value = filter
}

const setSelectedDifficulty = (level: number) => {
  selectedDifficulty.value = selectedDifficulty.value === level ? null : level
}

// const setSelectedDuration = (duration: string) => {
//   selectedDuration.value = selectedDuration.value === duration ? "" : duration
// }

// 清除所有筛选
const clearAllFilters = () => {
  selectedFilter.value = null
  searchQuery.value = ""
  selectedDifficulty.value = null
  selectedDuration.value = ""
}

// 检查是否有激活的筛选
const hasActiveFilters = computed(() => {
  return selectedFilter.value !== null ||
    searchQuery.value !== "" ||
    selectedDifficulty.value !== null ||
    selectedDuration.value !== ""
})

// 过渡钩子：平滑展开/收起容器高度
const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.opacity = '0'
}
const enter = (el: Element) => {
  const element = el as HTMLElement
  const height = element.scrollHeight
  element.style.transition = 'height 220ms ease, opacity 220ms ease'
  requestAnimationFrame(() => {
    element.style.height = height + 'px'
    element.style.opacity = '1'
  })
}
const afterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = 'auto'
  element.style.transition = ''
}
const beforeLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = element.scrollHeight + 'px'
  element.style.opacity = '1'
}
const leave = (el: Element) => {
  const element = el as HTMLElement
  element.style.transition = 'height 220ms ease, opacity 220ms ease'
  requestAnimationFrame(() => {
    element.style.height = '0'
    element.style.opacity = '0'
  })
}
const afterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.transition = ''
}
</script>

<style scoped>
/* 进入和离开时淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 进入和离开时上滑/下滑伴随淡入淡出 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 220ms ease, transform 220ms ease, max-height 220ms ease;
  overflow: hidden;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
  max-height: 0;
}
</style>
