<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core';
const isDark = useDark();

// 使用 computed 來動態生成 htmlAttrs
const htmlAttributes = computed(() => ({
  class: isDark.value ? 'dark' : '',
}));

// 使用 useHead 並傳入反應式的 htmlAttrs
useHead({
  htmlAttrs: htmlAttributes,
});
</script>
