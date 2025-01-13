<template>
  <div class="flex flex-col items-center">
    <div
      class="dark:bg-dark-bg w-1360px py-22px gap-20px flex flex-col items-center"
    >
      <p class="text-20px text-content font-bold">排行榜</p>

      <div class="gap-20px flex">
        <button
          v-for="date in dateRange"
          :key="date.range"
          class="w-100px h-40px rounded-4px text-gray"
          :class="selectedRange === date.range ? 'bg-#7886A04D' : 'bg-#F5F5F5'"
          @click="selectRange(date.range)"
        >
          {{ date.label }}
        </button>
      </div>

      <div class="text-gray gap-10px flex items-center">
        <img src="@/assets/icons/clock.svg" alt="" />
        <p>1 d 18h 11m 49s 重设</p>
      </div>

      <div class="flex w-full justify-between">
        <div
          class="w-670px rounded-10px p-11px shadow-[0px_0px_7px_0px_#00000040]"
        >
          <p class="text-20px mb-10px text-content">交易量排行</p>
          <div
            v-for="n in 8"
            :key="n"
            class="gap-20px mb-5px hover:bg-#F2F9FF flex items-center rounded-full"
          >
            <div class="relative">
              <img src="@/assets/images/avatar3.png" alt="" />
              <div
                class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
              >
                {{ n }}
              </div>
            </div>
            <p class="text-content dark:text-white">FB757</p>
            <p class="text-gray mr-26px ml-auto">$13,726,504 美元</p>
          </div>
        </div>
        <div
          class="w-670px rounded-10px p-11px shadow-[0px_0px_7px_0px_#00000040]"
        >
          <p class="text-20px text-content">收益排行</p>
          <div
            v-for="n in 8"
            :key="n"
            class="gap-20px mb-5px hover:bg-#F2F9FF flex items-center rounded-full"
          >
            <div class="relative">
              <img src="@/assets/images/avatar3.png" alt="" />
              <div
                class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
              >
                {{ n }}
              </div>
            </div>
            <p class="text-content dark:text-white">FB757</p>
            <p class="text-gray mr-26px ml-auto">$13,726,504 美元</p>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
const dateRange = ref([
  { range: 'day', label: '天' },
  { range: 'week', label: '星期' },
  { range: 'all', label: '全部' },
  { range: 'month', label: '月' },
]);

// 預設選中的範圍，例如 'today'
const selectedRange = ref('day');

// 更新選中的範圍
const selectRange = (range) => {
  selectedRange.value = range;
};
</script>

<style></style>
