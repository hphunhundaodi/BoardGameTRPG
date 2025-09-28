<template>
  <div class="PageCategoryRoot min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 p-6">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </div>

    <div class="relative max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {{ pageInfo.title }}
        </h1>
        <p class="text-slate-300 text-lg">
          {{ pageInfo.description }}
        </p>
      </div>

      <!-- Breadcrumb -->
      <BreadcrumbNav :path="[category]" :total="subCategories.length" @navigate="onBreadcrumb" />

      <!-- 子分类卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div
          v-for="(subCategory, index) in subCategories"
          :key="`sub-category-${index}`"
          :class="`relative p-8 rounded-2xl bg-gradient-to-br ${getSubCategoryConfig(subCategory).color} border-2 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl group`"
          @click="goToSubCategory(subCategory)"
        >
          <div class="flex flex-col items-center text-center">
            <div class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
              {{ getSubCategoryConfig(subCategory).icon }}
            </div>
            <h3 class="text-2xl mb-3 group-hover:text-white transition-colors">
              {{ subCategory }}
            </h3>
            <p class="text-base text-slate-400 group-hover:text-slate-300 transition-colors">
              {{ getSubCategoryConfig(subCategory).description }}
            </p>
          </div>

          <!-- 悬停渐变蒙层 -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <!-- 悬停光效边框 -->
          <div class="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-16 text-center text-slate-400">
        <p>选择子分类查看具体游戏</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { gameDetailsData, categoryConfig, categoryRouterKey } from '~/composables/useGameData'

const route = useRoute()
const router = useRouter()

// 当前分类
const category = computed(() => {
  const categorySlug = String(route.params.category || '')
  return categoryRouterKey[categorySlug as keyof typeof categoryRouterKey] || categorySlug
})

// 子分类列表
const subCategories = computed(() => {
  const mainCategory = category.value as keyof typeof gameDetailsData
  const categoryData = gameDetailsData[mainCategory]
  return categoryData ? Object.keys(categoryData) : []
})

// 页面信息
const pageInfo = computed(() => ({
  title: category.value || '游戏分类',
  description: (category.value && category.value in categoryConfig)
    ? categoryConfig[category.value as keyof typeof categoryConfig].description
    : '选择游戏分类'
}))

// Breadcrumb 导航
const onBreadcrumb = (index: number) => {
  if (index === -1) router.push('/')
}

// 跳转子分类
const goToSubCategory = (subCategory: string) => {
  const categorySlug = String(route.params.category || '')
  const subSlug = categoryRouterKey[subCategory as keyof typeof categoryRouterKey] || subCategory
  router.push(`/${categorySlug}/${subSlug}`)
}

// 子分类样式配置
const getSubCategoryConfig = (subCategory: string) => {
  if (subCategory in categoryConfig) {
    return categoryConfig[subCategory as keyof typeof categoryConfig]
  }
  return { color: "from-gray-900/20 to-slate-900/20 border-gray-500/30", icon: "📁", description: "游戏分类" }
}
</script>
