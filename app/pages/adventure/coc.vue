<template>
  <div class="PageSubCategoryRoot min-h-screen bg-linear-to-br from-slate-900 via-purple-900/50 to-slate-900 p-6">
    <div class="relative max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {{ pageInfo.title }}
        </h1>
        <p class="text-slate-300 text-lg">
          {{ pageInfo.description }}
        </p>
      </div>

      <BreadcrumbNav :path="[category, sub]" :total="games.length" @navigate="onBreadcrumb" />

      <AccordionGameList
        :games="games"
        :category="sub"
      />

      <div class="mt-16 text-center text-slate-400">
        <p>展开游戏卡片查看详细信息，选择你感兴趣的游戏开始体验</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categoryConfig, useGameData } from '~/composables/useGameData'

const router = useRouter()
const category = computed(() => '跑团')
const sub = computed(() => 'COC')

const { games } = useGameData(category, sub)

const pageInfo = computed(() => ({
  title: 'COC',
  description: categoryConfig[sub.value as keyof typeof categoryConfig]?.description || '选择游戏开始体验'
}))

const onBreadcrumb = (index: number) => {
  if (index === -1) return router.push('/')
  if (index === 0) return router.push('/adventure')
}
</script>
