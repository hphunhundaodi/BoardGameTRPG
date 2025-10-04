<template>
  <div class="PageSubCategoryRoot min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 p-6">
    <div class="relative max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
import { categoryConfig, categoryRouterKey, useGameData } from '~/composables/useGameData'
import { useLocalStorage } from '@vueuse/core'

// 定义页面元数据，确保这个页面匹配 /[category]/[sub] 格式的路由
definePageMeta({
  // 这个页面应该匹配 /[category]/[sub] 格式的路由
})

const route = useRoute()
const router = useRouter()

const category = computed(() => {
  const categorySlug = String(route.params.category || '')
  const result = categoryRouterKey[categorySlug as keyof typeof categoryRouterKey] || categorySlug
  return result
})
const sub = computed(() => {
  const subSlug = String(route.params.sub || '')
  const result = categoryRouterKey[subSlug as keyof typeof categoryRouterKey] || subSlug
  return result
})

// 导航历史记录
const navigationHistory = useLocalStorage<Record<string, string>>('navigation-history', {})

// 使用新的useGameData获取游戏数据
const { games } = useGameData(category, sub)

const pageInfo = computed(() => ({
  title: sub.value || '游戏选择',
  description: (sub.value && sub.value in categoryConfig)
    ? categoryConfig[sub.value as keyof typeof categoryConfig].description
    : '选择游戏开始体验'
}))

// 记录当前访问的子分类
onMounted(() => {
  navigationHistory.value[category.value] = sub.value
})

const onBreadcrumb = (index: number) => {
  const newPath = '/' + route.path.split('/')[1];
  if (index === -1) return router.push('/')
  else return router.push(newPath)
}
</script>
