<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useLocalStorage } from "@vueuse/core";
if (typeof window !== "undefined") {
  const isDarkMode = useLocalStorage("dark", false);
  console.log("app", isDarkMode.value);

  // 使用 computed 來動態生成 htmlAttrs
  const htmlAttributes = computed(() => ({
    class: isDarkMode.value ? "dark" : "",
  }));

  // 使用 useHead 並傳入反應式的 htmlAttrs
  useHead({
    htmlAttrs: htmlAttributes,
  });
}

//   watch(
//     isDarkMode,
//     (newValue) => {
//       console.log("watch", newValue);
//       useHead({
//         htmlAttrs: {
//           class: newValue ? "dark" : "", // 動態設置類名
//         },
//       });
//     },
//     { immediate: true }
//   );
// }
</script>
