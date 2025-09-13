<template>
  <div class="space-y-4">
    <div
      v-for="(game, index) in games"
      :key="index"
      :class="`relative rounded-xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl`"
    >
      <!-- 折叠的基础信息 -->
      <div
        class="p-6 cursor-pointer"
        @click="toggleExpanded(index)"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <span class="text-2xl">{{ icon }}</span>
            <div>
              <h3 class="text-xl mb-1 group-hover:text-white transition-colors">
                {{ game.name }}
              </h3>
              <div class="flex items-center gap-4 text-sm text-slate-400">
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:users" class="w-3.5 h-3.5" />
                  <span>{{ game.players }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:clock" class="w-3.5 h-3.5" />
                  <span>{{ game.duration }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    name="heroicons:star"
                    :class="`w-4 h-4 ${i <= game.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex items-center gap-3">
            <!-- <button
              @click.stop="onGameSelect(game.name)"
              class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-sm transition-all duration-300"
            >
              选择游戏
            </button> -->
            <Icon
              name="heroicons:chevron-down"
              :class="`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`"
            />
          </div>
        </div>
      </div>

      <!-- 展开的详细信息 -->
      <div v-if="expandedIndex === index" class="px-6 pb-6 border-t border-white/10">
        <div class="pt-4">
          <p class="text-slate-300 mb-4 leading-relaxed">
            {{ game.description }}
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="flex items-center gap-2">
              <Icon name="heroicons:users" class="w-4 h-4 text-slate-400" />
              <span class="text-sm text-slate-300">
                玩家人数: <span class="text-white">{{ game.players }}</span>
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="heroicons:clock" class="w-4 h-4 text-slate-400" />
              <span class="text-sm text-slate-300">
                游戏时长: <span class="text-white">{{ game.duration }}</span>
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="heroicons:cube" class="w-4 h-4 text-slate-400" />
              <span class="text-sm text-slate-300">
                难度等级: <span class="text-white flex items-center gap-1 ml-2">
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    name="heroicons:star"
                    :class="`w-4 h-4 ${i <= game.difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`"
                  />
                </span>
              </span>
            </div>
          </div>

          <div v-if="game.tags.length > 0" class="flex flex-wrap gap-2">
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

      <!-- 悬停效果 -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface GameDetails {
  name: string
  description: string
  players: string
  duration: string
  difficulty: number
  tags: string[]
}

interface Props {
  games: GameDetails[]
  category: string
}

// interface Emits {
//   (e: 'game-select', game: string): void
// }

const props = defineProps<Props>()
// const emit = defineEmits<Emits>()

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

const colorClass = computed(() => categoryColors[props.category] || 'from-gray-900/20 to-slate-900/20 border-gray-500/30')
const icon = computed(() => categoryIcons[props.category] || '🎮')

const toggleExpanded = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

// const onGameSelect = (game: string) => {
//   emit('game-select', game)
// }
</script>

