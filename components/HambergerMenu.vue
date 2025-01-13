<template>
  <div
    class="relative"
    @mouseenter="handleShowHamberger"
    @mouseleave="handleCloseHamberger"
  >
    <button
      class="dark:bg-dark-btn_gray size-40px bg-btn_gray rounded-4px center"
    >
      <img src="@/assets/icons/hamberger.svg" alt="" />
    </button>

    <Transition name="fade">
      <div
        v-show="showHamberger"
        class="dark:bg-#353F5D dark:border-#525F87 top-55px w-225px border-1px border-btn_gray rounded-5px text-content absolute right-0 bg-white shadow-[0px_0px_7px_0px_#00000040] dark:text-white"
      >
        <div class="flex flex-col">
          <button class="h-37px px-10px hover:bg-btn_gray text-start">
            幫助
          </button>
          <button class="h-37px px-10px hover:bg-btn_gray text-start">
            使用條款
          </button>
          <div
            class="dark:bg-#414C6D w-213px h-40px px-10px flex items-center justify-between"
          >
            <p>{{ $t('darkMode') }}</p>
            <DarkModeSwitch @click="toggleDark()" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';

// 暗黑模式
const isDark = useDark();
const toggleDark = useToggle(isDark);
// 顯示/關閉用户信息
const showHamberger = ref(false);
let closeTimeout = null;
const handleShowHamberger = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  showHamberger.value = true;
};

const handleCloseHamberger = () => {
  closeTimeout = setTimeout(() => {
    showHamberger.value = false;
  }, 300);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
