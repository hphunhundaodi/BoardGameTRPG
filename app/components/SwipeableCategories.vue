<template>
  <div class="relative">
    <!-- 动态背景 -->
    <div 
      :class="`fixed inset-0 bg-gradient-to-br ${backgroundGradient} transition-all duration-1000 ease-in-out`"
      style="z-index: -1"
    />
    
    <!-- 背景装饰 - 根据当前分类调整 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        :class="`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl transition-all duration-1000 ${
          currentCategory === 'COC' ? 'bg-red-500/20' : 
          currentCategory === 'DND' ? 'bg-blue-500/20' :
          currentCategory === '毛线' ? 'bg-pink-500/20' :
          currentCategory === '轻策' ? 'bg-yellow-500/20' :
          currentCategory === '中策' ? 'bg-cyan-500/20' :
          currentCategory === '重策' ? 'bg-orange-500/20' :
          'bg-purple-500/10'
        }`" 
      />
      <div 
        :class="`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
          currentCategory === 'COC' ? 'bg-purple-500/20' : 
          currentCategory === 'DND' ? 'bg-green-500/20' :
          currentCategory === '毛线' ? 'bg-rose-500/20' :
          currentCategory === '轻策' ? 'bg-orange-500/20' :
          currentCategory === '中策' ? 'bg-blue-500/20' :
          currentCategory === '重策' ? 'bg-red-500/20' :
          'bg-blue-500/10'
        }`" 
      />
    </div>

    <div class="relative flex items-center justify-center min-h-[60vh]">
      <!-- 左箭头 -->
      <button
        @click="prevCategory"
        class="absolute left-8 z-10 p-4 rounded-full bg-black/20 border border-white/20 hover:bg-black/40 transition-all duration-300 group"
      >
        <Icon name="heroicons:chevron-left" class="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <!-- 中心卡片 -->
      <div class="relative max-w-md w-full mx-16">
        <div 
          :class="`relative p-12 rounded-2xl bg-gradient-to-br ${config?.color || 'from-gray-900/20 to-slate-900/20 border-gray-500/30'} border-2 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl group`"
          @click="onCategorySelect(currentCategory)"
        >
          <div class="flex flex-col items-center text-center">
            <div class="text-8xl mb-6 group-hover:scale-110 transition-transform duration-500">
              {{ config?.icon || '📁' }}
            </div>
            <h3 class="text-3xl mb-4 group-hover:text-white transition-colors">
              {{ currentCategory }}
            </h3>
            <p class="text-lg text-slate-400 group-hover:text-slate-300 transition-colors">
              {{ config?.description || '' }}
            </p>
          </div>
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <!-- 悬停时的边框光效 -->
          <div class="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <!-- 右箭头 -->
      <button
        @click="nextCategory"
        class="absolute right-8 z-10 p-4 rounded-full bg-black/20 border border-white/20 hover:bg-black/40 transition-all duration-300 group"
      >
        <Icon name="heroicons:chevron-right" class="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>

    <!-- 指示器 -->
    <div class="flex justify-center gap-3 mt-8">
      <button
        v-for="(_, index) in categories"
        :key="index"
        @click="setCurrentIndex(index)"
        :class="`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentIndex 
            ? 'bg-white scale-125' 
            : 'bg-white/30 hover:bg-white/50'
        }`"
      />
    </div>

    <!-- 分类名称显示 -->
    <div class="text-center mt-6">
      <div class="flex justify-center gap-4">
        <button
          v-for="(category, index) in categories"
          :key="category"
          @click="setCurrentIndex(index)"
          :class="`px-4 py-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? 'bg-white/20 text-white border border-white/30'
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CategoryConfig {
  icon: string
  color: string
  description: string
  bgGradient: string
}

interface Props {
  categories: string[]
  categoryConfig: Record<string, CategoryConfig>
}

interface Emits {
  (e: 'category-select', category: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const currentIndex = ref(0)
const backgroundGradient = ref('')

const currentCategory = computed(() => props.categories[currentIndex.value])
const config = computed(() => props.categoryConfig[currentCategory.value])

watch([currentIndex, () => props.categories, () => props.categoryConfig], () => {
  const gradient = props.categoryConfig[currentCategory.value]?.bgGradient || 'from-slate-900 via-purple-900/50 to-slate-900'
  backgroundGradient.value = gradient
}, { immediate: true })

const nextCategory = () => {
  currentIndex.value = (currentIndex.value + 1) % props.categories.length
}

const prevCategory = () => {
  currentIndex.value = (currentIndex.value - 1 + props.categories.length) % props.categories.length
}

const setCurrentIndex = (index: number) => {
  currentIndex.value = index
}

const onCategorySelect = (category: string) => {
  emit('category-select', category)
}
</script>

