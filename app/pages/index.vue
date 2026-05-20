<template>
  <div class="PageHomeRoot">
    <div class="min-h-screen bg-linear-to-br from-slate-900 via-purple-900/50 to-slate-900 p-6">
      <!-- 背景装饰 -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-5xl mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {{ pageInfo.title }}
          </h1>
          <p class="text-slate-300 text-xl">
            {{ pageInfo.description }}
          </p>
        </div>

        <!-- 主分类大卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="(category, index) in categories"
            :key="`main-category-${index}`"
            :class="`relative p-12 rounded-2xl bg-linear-to-br ${getCategoryConfig(category).color} border-2 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl group`"
            @click="goToCategory(category)"
          >
            <div class="flex flex-col items-center text-center">
              <div class="text-8xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {{ getCategoryConfig(category).icon }}
              </div>
              <h3 class="text-3xl mb-4 group-hover:text-white transition-colors">
                {{ category }} 
                <!-- {{ index === 0 ? '(敬请期待)' : '' }} -->
              </h3>
              <p class="text-lg text-slate-400 group-hover:text-slate-300 transition-colors">
                {{ getCategoryConfig(category).description }}
              </p>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <!-- 悬停时的边框光效 -->
            <div class="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-20 text-center text-slate-400">
          <p class="text-lg">点击选择你想要体验的游戏类型</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categoryConfig } from '~/composables/useGameData'

// 设置页面标题
useHead({
  title: '游戏世界 - 桌面游戏推荐系统'
})

const router = useRouter()
const categories = computed(() => ['跑团'])
const pageInfo = computed(() => ({ title: '游戏世界', description: '选择你想要体验的游戏类型' }))
const goToCategory = (_category?: string) => {
  router.push('/adventure')
}
const getCategoryConfig = (category: string) => {
  if (category in categoryConfig) {
    return categoryConfig[category as keyof typeof categoryConfig]
  }
  return { color: "from-gray-900/20 to-slate-900/20 border-gray-500/30", icon: "📁", description: "" }
}
</script>

