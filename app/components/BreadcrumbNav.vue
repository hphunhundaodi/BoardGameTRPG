<template>
  <div v-if="path.length > 0"
    class="flex items-center justify-between gap-2 mb-8 px-4 py-2 bg-black/20 rounded-lg border border-white/10">
    <div class="flex items-center">
      <button class="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
        @click="handleNavigate(-1)">
        <Icon name="heroicons:home" class="w-4 h-4" />
        <span>首页</span>
      </button>

      <div v-for="(item, index) in path" :key="index" class="flex items-center gap-2">
        <Icon name="heroicons:chevron-right" class="w-4 h-4 text-slate-500" />
        <button :class="['transition-colors', index === path.length - 1
          ? 'text-white cursor-default'
          : 'text-slate-400 hover:text-white'
        ]" @click="handleNavigate(index)">
          {{ item }}
        </button>
      </div>
    </div>
    <div v-if="total" class="text-slate-400">共 {{ total }} 个</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  path: string[]
  total?: number
}

defineProps<Props>()
const emit = defineEmits<{
  navigate: [index: number]
}>()

const handleNavigate = (index: number) => {
  emit('navigate', index)
}
</script>
