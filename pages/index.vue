<template>
  <div>
    <div class="flex flex-col px-280px pt-22px">
      <div class="flex gap-25px text-white text-14px mb-20px">
        <div
          class="relative flex justify-between h-150px w-full bg-[url('@/assets/images/cardbg1.png')] rounded-lg pt-36px pl-20px"
        >
          <div>
            <p class="w-170px">川普贏了，現在怎麼辦?</p>
            <button
              class="absolute bottom-20px bg-black/30 rounded-5px py-6px px-22px mt-42px hover:bg-black animaition duration-200"
            >
              想法?
            </button>
          </div>
          <img
            class="absolute top-21px right-14px"
            src="@/assets/images/trump-won.png"
            alt=""
          />
        </div>
        <div
          class="relative flex justify-between h-150px w-full rounded-lg pt-36px pl-20px"
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
              class="absolute bottom-20px bg-black/30 rounded-5px py-6px px-22px mt-42px hover:bg-black animaition duration-200"
            >
              想法?
            </button>
          </div>
          <img src="@/assets/images/UsElectionForecast.webp" alt="" />
        </div>
        <div
          class="relative flex justify-between h-150px w-full rounded-lg pt-36px pl-20px"
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
              class="absolute bottom-20px bg-black/30 rounded-5px py-6px px-22px mt-42px hover:bg-black animaition duration-200"
            >
              想法?
            </button>
          </div>
          <img src="@/assets/images/mention-markets.webp" alt="" />
        </div>
        <div
          class="relative flex justify-between h-150px w-full rounded-lg pt-36px pl-20px"
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
              class="absolute bottom-20px bg-black/30 rounded-5px py-6px px-22px mt-42px hover:bg-black animaition duration-200"
            >
              想法?
            </button>
          </div>
          <img src="@/assets/images/Deposit.webp" alt="" />
        </div>
      </div>

      <!-- 排序條件 -->
      <div class="flex gap-10px text-content font-600">
        <div
          class="flex h-40px w-full border-1px border-btn_gray rounded-md items-center px-5px hover:bg-#f5f5f5 animation duration-200ms"
        >
          <Icon name="material-symbols:search-rounded" size="24px" />
          <input
            class="w-full outline-none bg-transparent ml-5px"
            type="text"
            name="search"
            id="search"
            placeholder="搜索"
          />
        </div>
        <div class="flex gap-8px text-14px">
          <button
            class="center gap-12px w-106px h-full border-1px border-#ECECEC rounded-5px"
          >
            排序條件
            <img src="@/assets/icons/arrow-down.svg" alt="arrow-down" />
          </button>
          <button
            class="center gap-12px w-106px h-full border-1px border-#ECECEC rounded-5px"
          >
            <img src="@/assets/icons/filter.svg" alt="filter" />
            狀態過濾
          </button>
          <div
            class="flex w-100px h-full border-1px border-#ECECEC rounded-5px"
          >
            <button class="center w-1/2">
              <img src="@/assets/icons/showblock.svg" alt="favorite" />
            </button>
            <button class="center w-1/2 bg-btn_gray">
              <img src="@/assets/icons/showlist.svg" alt="favorite" />
            </button>
          </div>
          <button class="center gap-12px w-88px h-full bg-#FFE1A3 rounded-5px">
            <img src="@/assets/icons/favorite.svg" alt="favorite" />
            收藏
          </button>
        </div>
      </div>

      <!-- 分類 -->
      <div class="flex h-40px gap-16px mt-30px text-14px text-content font-600">
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
        class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-15px mt-20px"
      >
        <EventCard v-for="n in 12" :key="n" />
      </div>
      <button
        class="w-100px h-40px rounded-5px bg-primary text-white text-14px mx-auto mt-26px"
      >
        顯示更多
      </button>

      <!-- 排行 -->
      <div class="flex gap-48px my-30px">
        <div class="w-1/2">
          <div class="flex justify-between mb-40px">
            <p class="text-24px text-content">最近的活動</p>
            <img
              src="@/assets/icons/gray_arrow_right.svg"
              alt="gray_arrow_right"
            />
          </div>
          <div class="flex flex-col gap-24px">
            <div class="flex items-center gap-10px text-gray text-14px">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="flex items-center gap-10px">
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

            <div class="flex items-center gap-10px text-gray text-14px">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="flex items-center gap-10px">
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
            <div class="flex items-center gap-10px text-gray text-14px">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="flex items-center gap-10px">
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
            <div class="flex items-center gap-10px text-gray text-14px">
              <img src="@/assets/images/activity1.png" alt="" />
              <div class="grow-1">
                <p>聯準會12月決定?</p>
                <div class="flex items-center gap-10px">
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
          <div class="flex justify-between mb-40px">
            <p class="text-24px text-content">本週銷售最高</p>
            <img
              src="@/assets/icons/gray_arrow_right.svg"
              alt="gray_arrow_right"
            />
          </div>
          <div class="flex flex-col flex-wrap h-290px gap-10px">
            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  1
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  2
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  3
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  4
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  5
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  6
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  7
                </div>
              </div>
              <div class="text-14px">
                <p class="text-content">FB757</p>
                <p class="text-gray">$13,726,504 美元</p>
              </div>
            </div>

            <div class="flex items-center w-1/2 gap-20px">
              <div class="relative">
                <img src="@/assets/images/avatar3.png" alt="" />
                <div
                  class="absolute top-0 right-0 center size-15px text-10px text-white bg-content border-1px border-white rounded-full"
                >
                  8
                </div>
              </div>
              <div class="text-14px">
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
