<template>
  <div
    class="relative"
    @mouseenter="handleShowUserInfo"
    @mouseleave="handleCloseUserInfo"
  >
    <button
      class="dark:bg-dark-btn_gray w-84px bg-btn_gray gap-10px flex items-center rounded-full"
    >
      <img src="@/assets/images/avatar.png" alt="" />
      <img :src="showUserInfo ? arrowUp : arrowDown" alt="usdc" />
    </button>

    <Transition name="fade">
      <div
        v-show="showUserInfo"
        class="dark:bg-#353F5D dark:border-#525F87 top-45px w-225px h-200px border-1px border-btn_gray rounded-5px text-gray absolute right-0 bg-white dark:text-white"
      >
        <div
          class="dark:border-#525F87 h-70px border-b-1px border-btn_gray flex items-center justify-start"
        >
          <img
            class="size-40px mx-10px"
            src="@/assets/images/avatar4.png"
            alt=""
          />
          <div>
            <p>Paul</p>
            <div class="gap-10px flex">
              <p class="dark:text-gray">{{ walletAddress }}</p>
              <img
                class="cursor-pointer"
                src="@/assets/icons/copy.svg"
                alt=""
                @click="copy(walletAddress)"
              />
            </div>
          </div>
        </div>
        <div class="h-130px flex flex-col">
          <div class="center grow-1">
            <div
              class="dark:bg-#414C6D w-213px h-60px bg-#f5f5f5 rounded-10px px-15px flex items-center justify-between"
            >
              <p>{{ $t('darkMode') }}</p>
              <DarkModeSwitch @click="toggleDark()" />
            </div>
          </div>
          <button class="center h-40px">登出</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useDark, useToggle, useClipboard } from '@vueuse/core';
import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';

const walletAddress = '0x88...doFc';
const { text, copy, copied } = useClipboard();

watch(copied, (copyVal) => {
  if (copyVal) {
    console.log('copied', text.value);
  }
});

// 暗黑模式
const isDark = useDark();
const toggleDark = useToggle(isDark);
// 顯示/關閉用户信息
const showUserInfo = ref(false);
let closeTimeout = null;
const handleShowUserInfo = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  showUserInfo.value = true;
};

const handleCloseUserInfo = () => {
  closeTimeout = setTimeout(() => {
    showUserInfo.value = false;
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
