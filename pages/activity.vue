<template>
  <div class="flex flex-col items-center">
    <div class="dark:bg-dark-bg w-1360px py-22px gap-20px flex flex-col">
      <div class="flex w-full justify-between">
        <p class="text-20px text-content font-bold">活動</p>
        <div
          class="border-1px border-#E2E2E2 rounded-5px p-8px text-gray gap-10px flex cursor-pointer"
        >
          下注金額限制
          <img src="@/assets/icons/arrow-down.svg" alt="" />
        </div>
      </div>

      <div
        v-for="n in 6"
        :key="n"
        class="gap-10px text-gray flex w-full items-center justify-between"
      >
        <div class="gap-10px flex">
          <img src="@/assets/images/activity1.png" alt="" />
          <div>
            <p>聯準會12月決定?</p>
            <div class="gap-10px flex items-center">
              <img class="size-20px" src="@/assets/images/avatar2.png" alt="" />
              <p class="text-content dark:text-white">
                marekSan以98 美分（7.88 美元）出售<span class="text-#27AE60"
                  >Yes</span
                >
              </p>
            </div>
          </div>
        </div>
        <p>17秒前</p>
      </div>

      <button
        class="w-100px h-40px rounded-5px bg-primary mt-26px mx-auto text-white"
      >
        {{ $t('showMore') }}
      </button>
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
