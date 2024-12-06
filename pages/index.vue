<template>
  <div>
    <div
      class="dark:bg-dark-bg px-280px pt-22px animation flex flex-col duration-200"
    >
      <div class="gap-25px mb-20px flex text-white">
        <div
          class="h-150px pt-36px pl-20px relative flex w-full justify-between rounded-lg bg-[url('@/assets/images/cardbg1.png')]"
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
          <img src="@/assets/images/UsElectionForecast.webp" alt="" />
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
          <img src="@/assets/images/mention-markets.webp" alt="" />
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
          <img src="@/assets/images/Deposit.webp" alt="" />
        </div>
      </div>

      <!-- 排序條件 -->
      <div class="gap-10px text-content font-600 flex">
        <div
          class="h-40px border-1px border-btn_gray px-5px hover:bg-#f5f5f5 animation duration-200ms flex w-full items-center rounded-md"
        >
          <Icon name="material-symbols:search-rounded" size="24px" />
          <input
            id="search"
            class="ml-5px w-full bg-transparent outline-none"
            type="text"
            name="search"
            placeholder="搜索"
          />
        </div>
        <div class="gap-8px flex">
          <button
            class="center gap-12px w-106px border-1px border-#ECECEC rounded-5px h-full"
          >
            排序條件
            <img src="@/assets/icons/arrow-down.svg" alt="arrow-down" />
          </button>
          <button
            class="center gap-12px w-106px border-1px border-#ECECEC rounded-5px h-full"
          >
            <img src="@/assets/icons/filter.svg" alt="filter" />
            狀態過濾
          </button>
          <div
            class="w-100px border-1px border-#ECECEC rounded-5px flex h-full"
          >
            <button class="center w-1/2">
              <img src="@/assets/icons/showblock.svg" alt="favorite" />
            </button>
            <button class="center bg-btn_gray w-1/2">
              <img src="@/assets/icons/showlist.svg" alt="favorite" />
            </button>
          </div>
          <button class="center gap-12px w-88px bg-#FFE1A3 rounded-5px h-full">
            <img src="@/assets/icons/favorite.svg" alt="favorite" />
            收藏
          </button>
        </div>
      </div>

      <!-- 分類 -->
      <div class="h-40px gap-16px mt-30px text-content font-600 flex">
        <button class="w-130px bg-btn_gray rounded-5px">最新</button>
        <button class="w-130px bg-btn_gray rounded-5px">以太坊</button>
        <button class="w-130px bg-btn_gray rounded-5px">Solana</button>
        <button class="w-130px bg-btn_gray rounded-5px">穩定幣</button>
        <button class="w-130px bg-btn_gray rounded-5px">馬斯克</button>
        <button class="w-130px bg-btn_gray rounded-5px">名人</button>
        <button class="w-130px bg-btn_gray rounded-5px">烏克蘭</button>
        <button class="w-130px bg-btn_gray rounded-5px">俄羅斯</button>
        <button class="w-130px bg-btn_gray rounded-5px">Polygon</button>
        <button class="center size-40px bg-btn_gray rounded-full">
          <img src="@/assets/icons/next.svg" alt="next" />
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
        顯示更多
      </button>

      <!-- 排行 -->
      <div class="gap-48px my-30px flex">
        <div class="w-1/2">
          <div class="mb-40px flex justify-between">
            <p class="text-24px text-content">最近的活動</p>
            <img
              src="@/assets/icons/gray_arrow_right.svg"
              alt="gray_arrow_right"
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
                  <p class="text-content">
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
                  <p class="text-content">
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
                  <p class="text-content">
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
                  <p class="text-content">
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

        <div class="w-1/2">
          <div class="mb-40px flex justify-between">
            <p class="text-24px text-content">本週銷售最高</p>
            <img
              src="@/assets/icons/gray_arrow_right.svg"
              alt="gray_arrow_right"
            />
          </div>
          <div class="h-290px gap-10px flex flex-col flex-wrap">
            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  1
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  2
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  3
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  4
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  5
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  6
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  7
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="gap-20px flex w-1/2 items-center">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="center size-15px text-10px bg-content border-1px absolute right-0 top-0 rounded-full border-white text-white"
                >
                  8
                </div>
              </div>
              <div class="">
                <p class="text-content">FB757</p>
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

<script lang="ts" setup></script>

<style></style>
