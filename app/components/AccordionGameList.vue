<template>
  <div class="space-y-4">
    <div
      v-for="(game, index) in games"
      :key="index"
      :class="`relative rounded-xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl min-h-[120px]`"
    >
      <!-- 背景图片 -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-10"
        :style="{ backgroundImage: `url('${getBackgroundImage(game.type)}')` }"
      />
      <!-- 渐变遮罩 -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      <!-- 折叠的基础信息 -->
      <div
        class="relative p-6 cursor-pointer z-10"
        @click="toggleExpanded(index)"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4 flex-1">
            <span class="text-2xl">{{ icon }}</span>
            <div class="flex-1">
              <div class="flex items-baseline gap-2 mb-2">
                <h3 class="text-xl group-hover:text-white transition-colors">
                  {{ game.name }}
                </h3>
                <span v-if="game.originName" class="text-sm text-slate-400 italic">
                  {{ game.originName }}
                </span>
                <span
                  v-if="game.isNewbie"
                  class="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                >
                  新手友好
                </span>
              </div>
              <div class="flex items-center gap-4 text-sm text-slate-400">
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
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    name="lucide:star"
                    :customize="fillIcon"
                    :class="`w-4 h-4 ${i <= game.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`"
                    />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <Icon
              name="lucide:chevron-down"
              :class="`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`"
            />
          </div>
        </div>
      </div>

      <!-- 展开的详细信息 -->
      <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div
          v-if="expandedIndex === index"
          class="relative z-10 px-6 pb-6 border-t border-white/10"
        >
          <div class="pt-4 space-y-4">
          <!-- 模组描述 -->
          <p class="text-slate-300 leading-relaxed">{{ game.description }}</p>

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
              <span
                v-for="(tag, tagIndex) in game.tags"
                :key="tagIndex"
                class="px-3 py-1 text-xs bg-black/20 rounded-full border border-white/10 text-slate-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          </div>
        </div>
      </Transition>

      <!-- 悬停效果 -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-5"
      />
      <!-- 展开时的额外背景增强 -->
      <Transition name="fade">
        <div
          v-if="expandedIndex === index"
          class="absolute inset-0 bg-black/20 pointer-events-none"
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface GameDetails {
  name: string // 中文名 (展示)
  originName: string // 英文名 (小点字展示)
  description: string // 模组描述 (展示)
  players: string // 玩家人数 (展示)
  duration: string // 游玩时间 (展示)
  difficulty: number // 难度 (展示)
  tags: string[] // 特殊标记 (展示)
  era: string // 模组内容的时代背景 (展示)
  requirements: string // 创建人物的方式 (展示)
  isNewbie: boolean // 是否是新手模组 (展示)
  type: string // 模组类型 (不展示)
  kp: string // 主持人名字 (展示)
  author: string // 模组作者 (展示)
  skills: string // 模组推荐技能 (展示)
  notes: string // 备注 (展示)
  mastery: string // 主持人是否掌握该模组 (不展示)
}

interface Props {
  games: GameDetails[]
  category: string
}

// 手动设置 icon 填充
const fillIcon = (content: string) => {
  const filledPath = content.replace('fill="none"', 'fill="currentColor"');
  return filledPath
}

const props = defineProps<Props>()
const expandedIndex = ref<number | null>(null)

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
.fade-leave-active { transition: opacity 200ms ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

/* 进入和离开时上滑/下滑伴随淡入淡出 */
.fade-slide-enter-active,
.fade-slide-leave-active { transition: opacity 220ms ease, transform 220ms ease, max-height 220ms ease; overflow: hidden; }
.fade-slide-enter-from,
.fade-slide-leave-to { opacity: 0; transform: translateY(-4px); max-height: 0; }
</style>
