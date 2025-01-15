<template>
  <div class="flex flex-col items-center">
    <div class="dark:bg-dark-bg w-1360px pt-22px flex flex-col">
      <div class="gap-25px mb-20px flex text-white">
        <div
          class="h-150px pt-36px pl-20px relative flex w-full justify-between rounded-lg"
          style="
            background: linear-gradient(
              90deg,
              rgba(251, 94, 98, 1) 0%,
              rgba(0, 116, 229, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px">川普贏了，現在怎麼辦?</p>
            <button
              class="bottom-20px rounded-5px py-6px px-22px mt-42px animaition absolute bg-black/30 duration-200 hover:bg-black"
            >
              想法?
            </button>
          </div>
          <img
            class="absolute right-0 top-0 mix-blend-color-dodge"
            src="@/assets/images/light_watermark.png"
            alt=""
          />
          <img
            class="top-21px right-14px absolute"
            src="@/assets/images/trump-won.png"
            alt=""
          />
        </div>
        <div
          class="h-150px pt-36px pl-20px relative flex w-full justify-between rounded-lg"
          style="
            background: linear-gradient(
              90deg,
              rgba(89, 133, 184, 1) 0%,
              rgba(102, 194, 255, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px">2024年選舉結果</p>
            <button
              class="bottom-20px rounded-5px py-6px px-22px mt-42px animaition absolute bg-black/30 duration-200 hover:bg-black"
            >
              想法?
            </button>
          </div>
          <img
            class="absolute right-0 top-0 mix-blend-color-dodge"
            src="@/assets/images/light_watermark.png"
            alt=""
          />
          <img
            class="top-21px right-14px absolute"
            src="@/assets/images/trump-won2.png"
            alt=""
          />
        </div>
        <div
          class="h-150px pt-36px pl-20px relative flex w-full justify-between rounded-lg"
          style="
            background: linear-gradient(
              90deg,
              rgba(235, 94, 251, 1) 0%,
              rgba(0, 116, 229, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px">以色列與真主黨將於2024年停火</p>
            <button
              class="bottom-20px rounded-5px py-6px px-22px mt-42px animaition absolute bg-black/30 duration-200 hover:bg-black"
            >
              想法?
            </button>
          </div>
          <img
            class="absolute right-0 top-0 mix-blend-color-dodge"
            src="@/assets/images/light_watermark.png"
            alt=""
          />
          <img
            class="top-21px right-14px absolute"
            src="@/assets/images/trump-won3.png"
            alt=""
          />
        </div>
        <div
          class="h-150px pt-36px pl-20px relative flex w-full justify-between rounded-lg"
          style="
            background: linear-gradient(
              0deg,
              rgba(0, 135, 162, 1) 0%,
              rgba(51, 198, 156, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px">誰將成為川普的司法部長?</p>
            <button
              class="bottom-20px rounded-5px py-6px px-22px mt-42px animaition absolute bg-black/30 duration-200 hover:bg-black"
            >
              想法?
            </button>
          </div>
          <img
            class="absolute right-0 top-0 mix-blend-color-dodge"
            src="@/assets/images/light_watermark.png"
            alt=""
          />
          <img
            class="top-21px right-14px absolute"
            src="@/assets/images/trump-won4.png"
            alt=""
          />
        </div>
      </div>

      <!-- 排序條件 -->
      <div class="gap-10px text-content font-600 flex">
        <div
          class="h-40px border-1px border-btn_gray px-5px hover:bg-#f5f5f5 hover:dark:bg-dark-btn_gray animation duration-200ms dark:border-dark-btn_gray flex w-full items-center rounded-md"
        >
          <Icon
            class="dark:text-white"
            name="material-symbols:search-rounded"
            size="24px"
          />
          <input
            id="search"
            class="ml-5px w-full bg-transparent outline-none dark:text-white"
            type="text"
            name="search"
            :placeholder="$t('search')"
          />
        </div>
        <div class="gap-8px flex dark:text-white">
          <button
            class="center gap-12px w-106px border-1px border-#ECECEC rounded-5px dark:bg-dark-btn_gray h-full dark:border-0"
          >
            {{ $t('sort') }}
            <img src="@/assets/icons/arrow-down.svg" alt="arrow-down" />
          </button>
          <button
            class="center gap-12px w-106px border-1px border-#ECECEC rounded-5px dark:bg-dark-btn_gray h-full dark:border-0 dark:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 0.75V2.58333H1.66667L6.3431 9.91667H11.6927L16.3333 2.58333H17.25V0.75H16.3333H1.66667H0.75ZM7.16667 11.75V17.25H10.8333V11.75H7.16667Z"
              />
            </svg>
            {{ $t('statusFilter') }}
          </button>
          <div
            class="w-100px border-1px border-#ECECEC rounded-5px flex h-full"
          >
            <button
              class="center w-1/2"
              :class="{ 'bg-btn_gray dark:border-dark-btn_gray': isBlock }"
              @click="isBlock = true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.69236 6.30769C9.69236 7.41226 10.5878 8.30769 11.6924 8.30769H16C17.1046 8.30769 18 7.41226 18 6.30769V2C18 0.895431 17.1046 0 16.0001 0H11.6924C10.5878 0 9.69236 0.895431 9.69236 2V6.30769ZM2 18C0.895431 18 0 17.1046 0 16V11.6923C0 10.5877 0.895431 9.6923 2 9.6923H6.30769C7.41226 9.6923 8.30769 10.5877 8.30769 11.6923V16C8.30769 17.1046 7.41226 18 6.30769 18H2ZM11.6924 18C10.5878 18 9.69236 17.1046 9.69236 16V11.6923C9.69236 10.5877 10.5878 9.6923 11.6924 9.6923H16.0001C17.1046 9.6923 18 10.5877 18 11.6923V16C18 17.1046 17.1046 18 16 18H11.6924ZM2 8.30769C0.895431 8.30769 0 7.41226 0 6.30769V2C0 0.895431 0.895431 0 2 0H6.30769C7.41226 0 8.30769 0.895431 8.30769 2V6.30769C8.30769 7.41226 7.41226 8.30769 6.30769 8.30769H2Z"
                />
              </svg>
            </button>
            <button
              class="center w-1/2"
              :class="{ 'bg-btn_gray dark:bg-dark-btn_gray': !isBlock }"
              @click="isBlock = false"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2C0 2.82843 0.671573 3.5 1.5 3.5H16.5C17.3284 3.5 18 2.82843 18 2C18 1.17157 17.3284 0.5 16.5 0.5H1.5C0.671573 0.5 0 1.17157 0 2ZM0 8C0 8.82843 0.671573 9.5 1.5 9.5H16.5C17.3284 9.5 18 8.82843 18 8C18 7.17158 17.3284 6.5 16.5 6.5H1.5C0.671573 6.5 0 7.17158 0 8ZM1.5 15.5C0.671573 15.5 0 14.8284 0 14C0 13.1716 0.671573 12.5 1.5 12.5H16.5C17.3284 12.5 18 13.1716 18 14C18 14.8284 17.3284 15.5 16.5 15.5H1.5Z"
                />
              </svg>
            </button>
          </div>
          <button
            class="center gap-12px w-88px bg-#FFE1A3 rounded-5px dark:bg-#503F2A dark:text-#FFAA00 h-full"
          >
            <img src="@/assets/icons/favorite.svg" alt="favorite" />
            {{ $t('collect') }}
          </button>
        </div>
      </div>

      <!-- 分類 -->
      <div
        class="h-40px gap-16px mt-30px text-content font-600 flex dark:text-white"
      >
        <button
          v-for="tag in tagList"
          :key="tag.name"
          class="w-130px bg-btn_gray rounded-5px dark:bg-dark-btn_gray dark:text-white"
          :class="{ '!bg-primary': tag.isActive }"
          @click="selectTag(tag)"
        >
          {{ $t(tag.name) }}
        </button>
        <button
          class="center size-40px bg-btn_gray dark:bg-dark-btn_gray rounded-full"
        >
          <!-- <img src="@/assets/icons/next.svg" alt="next" /> -->

          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        class="gap-15px mt-20px grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
      >
        <EventCard v-for="n in 12" :key="n" />
      </div>
      <button
        class="w-100px h-40px rounded-5px bg-primary mt-26px mx-auto text-white"
      >
        {{ $t('showMore') }}
      </button>

      <!-- 排行 -->
      <div class="gap-48px my-30px flex">
        <div class="text-content w-1/2 dark:text-white">
          <div class="mb-40px flex justify-between">
            <p class="text-24px">{{ $t('recentAvtivity') }}</p>
            <img
              class="cursor-pointer"
              src="@/assets/icons/gray_arrow_right.svg"
              alt="gray_arrow_right"
              @click="navigateTo('/activity')"
            />
          </div>
          <div class="gap-24px flex flex-col">
            <div class="gap-10px text-gray flex items-center">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="gap-10px flex items-center">
                  <img
                    class="size-20px"
                    src="@/assets/images/avatar2.png"
                    alt=""
                  />
                  <p class="text-content dark:text-white">
                    marekSan以98 美分（7.88 美元）出售<span class="text-#27AE60"
                      >Yes</span
                    >
                  </p>
                </div>
              </div>
              <p>17秒前</p>
            </div>

            <div class="gap-10px text-gray flex items-center">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="gap-10px flex items-center">
                  <img
                    class="size-20px"
                    src="@/assets/images/avatar2.png"
                    alt=""
                  />
                  <p class="text-content dark:text-white">
                    marekSan以98 美分（7.88 美元）出售<span class="text-#E64800"
                      >No</span
                    >
                  </p>
                </div>
              </div>
              <p>17秒前</p>
            </div>
            <div class="gap-10px text-gray flex items-center">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="gap-10px flex items-center">
                  <img
                    class="size-20px"
                    src="@/assets/images/avatar2.png"
                    alt=""
                  />
                  <p class="text-content dark:text-white">
                    marekSan以98 美分（7.88 美元）出售<span class="text-#27AE60"
                      >Yes</span
                    >
                  </p>
                </div>
              </div>
              <p>17秒前</p>
            </div>
            <div class="gap-10px text-gray flex items-center">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="gap-10px flex items-center">
                  <img
                    class="size-20px"
                    src="@/assets/images/avatar2.png"
                    alt=""
                  />
                  <p class="text-content dark:text-white">
                    marekSan以98 美分（7.88 美元）出售<span class="text-#E64800"
                      >No</span
                    >
                  </p>
                </div>
              </div>
              <p>17秒前</p>
            </div>
          </div>
        </div>

        <div class="text-content w-1/2 dark:text-white">
          <div class="mb-40px flex justify-between">
            <p class="text-24px">{{ $t('sellHeightest') }}</p>
            <img
              class="cursor-pointer"
              src="@/assets/icons/gray_arrow_right.svg"
              alt="gray_arrow_right"
              @click="navigateTo('/ranking')"
            />
          </div>
          <div class="h-290px gap-10px flex flex-col flex-wrap">
            <div
              v-for="n in 8"
              :key="n"
              class="gap-20px flex w-1/2 items-center"
            >
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  {{ n }}
                </div>
              </div>
              <div>
                <p class="text-content dark:text-white">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
const isBlock = ref(true);
const tagList = ref([
  { name: 'new', isActive: true },
  { name: 'eth', isActive: false },
  { name: 'solana', isActive: false },
  {
    name: 'usdc',
    isActive: false,
  },
  { name: 'musk', isActive: false },
  { name: 'famouspeople', isActive: false },
  { name: 'ukraine', isActive: false },
  { name: 'russian', isActive: false },
  { name: 'polygon', isActive: false },
]);

const selectTag = (tag) => {
  tagList.value.forEach((item) => {
    item.isActive = item.name === tag.name;
  });
};
</script>

<style></style>
