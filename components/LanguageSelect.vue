<template>
  <div
    class="relative"
    @mouseenter="handleShowLangSelect"
    @mouseleave="handleCloseLangSelect"
  >
    <button
      class="dark:bg-dark-btn_gray bg-btn_gray w-68px text-gray rounded-5px px-10px h-full dark:text-white"
    >
      <div class="flex items-center justify-between">
        <div class="font-600">{{ lang }}</div>
        <img :src="showLangSelect ? arrowUp : arrowDown" alt="usdc" />
      </div>
    </button>

    <Transition name="fade">
      <div
        v-if="showLangSelect"
        class="dark:bg-#353F5D dark:border-#525F87 top-45px w-68px border-1px border-btn_gray rounded-5px text-gray absolute right-0 bg-white dark:text-white"
      >
        <div class="flex flex-col items-center">
          <button
            v-for="item in langList"
            :key="item"
            class="p-5px hover:bg-btn_gray w-full"
            @click="handleLangSelect(item)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';

const { setLocale } = useI18n();
const lang = ref('');
const langList = ref([
  {
    value: 'zh-CN',
    label: 'CN',
  },
  {
    value: 'en-US',
    label: 'EN',
  },
]);

// 顯示/關閉語系選單
const showLangSelect = ref();
let closeTimeout = null;
const handleShowLangSelect = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
  }
  showLangSelect.value = true;
};

const handleCloseLangSelect = () => {
  closeTimeout = setTimeout(() => {
    showLangSelect.value = false;
  }, 300);
};

const handleLangSelect = (selectLang) => {
  lang.value = selectLang.label;
  showLangSelect.value = false;
  setLocale(selectLang.value);
};

const defaultLang = useCookie('locale');
lang.value = defaultLang.value === 'zh-CN' ? 'CN' : 'EN';
onMounted(() => {
  console.log(defaultLang.value);
  showLangSelect.value = false;
});
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
