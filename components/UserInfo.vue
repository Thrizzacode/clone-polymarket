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
        class="dark:bg-#353F5D dark:border-#525F87 top-45px w-225px border-1px border-btn_gray rounded-5px text-gray absolute right-0 bg-white dark:text-white"
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
            <p class="text-black">UI Desinger</p>
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
        <div class="flex flex-col">
          <button class="h-37px px-10px hover:bg-btn_gray text-start">
            會員資料
          </button>
          <button class="h-37px px-10px hover:bg-btn_gray text-start">
            設置
          </button>
          <button class="h-37px px-10px hover:bg-btn_gray text-start">
            關注列表
          </button>
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
          <button class="center h-37px bg-btn_gray" @click="logout">
            登出
            <img class="ml-5px" src="@/assets/icons/logout.svg" alt="" />
          </button>
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

const logout = () => {
  console.log('logout');
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
