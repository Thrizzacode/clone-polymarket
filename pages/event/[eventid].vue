<template>
  <div>
    <div class="dark:bg-dark-bg px-280px pt-22px flex">
      <!-- left -->
      <div class="w-972px">
        <div class="gap-20px flex items-center">
          <img class="w-64px" src="@/assets/images/romania.png" />
          <p class="text-24px font-600">羅馬尼亞選舉</p>
        </div>

        <div class="flex justify-between">
          <div class="gap-30px flex">
            <div class="text-gray gap-10px flex items-center">
              <div class="size-24px rounded-4px bg-btn_gray center">
                <img src="@/assets/icons/trophy.svg" alt="" />
              </div>
              <div>卷92,799,613 美元</div>
            </div>

            <div class="text-gray gap-10px flex items-center">
              <div class="size-24px rounded-4px bg-btn_gray center">
                <img src="@/assets/icons/clock.svg" alt="" />
              </div>
              <div>2025 年 6 月 23 日</div>
            </div>
          </div>

          <div class="gap-10px flex">
            <img src="@/assets/icons/gray_star.svg" alt="" />
            <img src="@/assets/icons/share.svg" alt="" />
          </div>
        </div>

        <div class="gap-20px text-gray flex">
          <div class="gap-10px flex items-center">
            <div class="size-14px bg-#FF4B4B rounded-full"></div>
            <div>卖出 65%</div>
          </div>

          <div class="gap-10px flex items-center">
            <div class="size-14px bg-#0EA45B rounded-full"></div>
            <div>买入 35%</div>
          </div>
        </div>

        <VChart :option="option" class="h-300px" />

        <div class="flex justify-between">
          <div class="w-475px flex flex-col items-end">
            <div
              class="w-440px text-primary pl-40px h-35px bg-#E3EDFE rounded-t-10px border-1px border-#C7C7C7 flex items-center font-bold"
            >
              交易 是
            </div>
            <div
              class="w-440px h-30px bg-#E3EDFE -mt-1px border-1px border-#C7C7C7"
            >
              <table class="w-full">
                <thead>
                  <tr>
                    <td class="text-center">價格</td>
                    <td class="text-center">股份</td>
                    <td class="text-center">全部</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="h-360px -mt-1px flex w-full justify-end">
              <div
                class="w-35px bg-#E3EDFE rounded-l-10px -mr-1px border-1px border-#C7C7C7 center h-full"
              >
                賣<br />出
              </div>
              <div class="w-440px bg-#E3EDFE border-1px border-#C7C7C7 h-full">
                <table class="w-full">
                  <tbody>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="w-440px pl-40px h-30px bg-#E3EDFE -mt-1px border-1px border-#C7C7C7 flex items-center"
            >
              点差 : 0.1美分
            </div>
            <div class="h-360px -mt-1px flex w-full justify-end">
              <div
                class="w-35px bg-#E3EDFE rounded-l-10px -mr-1px border-1px border-#C7C7C7 center h-full"
              >
                買<br />入
              </div>
              <div
                class="w-440px bg-#E3EDFE border-1px border-#C7C7C7 rounded-rb-10px h-full"
              >
                <table class="w-full">
                  <tbody>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="w-475px flex flex-col items-end">
            <div
              class="w-440px text-primary pl-40px h-35px bg-#FFFDEA rounded-t-10px border-1px border-#C7C7C7 flex items-center font-bold"
            >
              交易 否
            </div>
            <div
              class="w-440px h-30px bg-#FFFDEA -mt-1px border-1px border-#C7C7C7"
            >
              <table class="w-full">
                <thead>
                  <tr>
                    <td class="text-center">價格</td>
                    <td class="text-center">股份</td>
                    <td class="text-center">全部</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="h-360px -mt-1px flex w-full justify-end">
              <div
                class="w-35px bg-#FFFDEA rounded-l-10px -mr-1px border-1px border-#C7C7C7 center h-full"
              >
                賣<br />出
              </div>
              <div class="w-440px bg-#FFFDEA border-1px border-#C7C7C7 h-full">
                <table class="w-full">
                  <tbody>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#FFD6E6 h-30px">
                      <td class="text-#EB3B16 w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="w-440px pl-40px h-30px bg-#FFFDEA -mt-1px border-1px border-#C7C7C7 flex items-center"
            >
              点差 : 0.1美分
            </div>
            <div class="h-360px -mt-1px flex w-full justify-end">
              <div
                class="w-35px bg-#FFFDEA rounded-l-10px -mr-1px border-1px border-#C7C7C7 center h-full"
              >
                買<br />入
              </div>
              <div
                class="w-440px bg-#FFFDEA border-1px border-#C7C7C7 rounded-rb-10px h-full"
              >
                <table class="w-full">
                  <tbody>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                    <tr class="hover:bg-#B4D9E1 h-30px">
                      <td class="text-#0EA45B w-1/3 text-center">80¢</td>
                      <td class="w-1/3 text-center">100</td>
                      <td class="w-1/3 text-center">$4,485.1664</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="border-1px my-30px rounded-10px w-full border-gray-200">
          <div
            class="h-56px text-content px-27px text-16px flex items-center font-bold"
          >
            持倉列表
          </div>
          <table class="px-27px w-full">
            <thead>
              <tr class="border-b-1px border-gray-200">
                <th class="text-14px text-content text-center">結果</th>
                <th class="text-14px text-content text-center">數量</th>
                <th class="text-14px text-content text-center">平均</th>
                <th class="text-14px text-content text-center">價值</th>
                <th class="text-14px text-content text-center">回報</th>
                <th class="text-14px text-content text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b-1px h-50px border-gray-200">
                <td class="text-14px text-content">
                  <div
                    class="w-24px h-30px 3px bg-#E6F6EE text-#0EA45B center mx-auto rounded"
                  >
                    是
                  </div>
                </td>
                <td class="text-14px text-content text-center">5張</td>
                <td class="text-14px text-content text-center">16¢</td>
                <td class="text-14px text-content text-center">$1.70</td>
                <td class="text-14px text-content text-center">
                  +$0.90<span class="text-#0EA45B">(+112.50%)</span>
                </td>
                <td class="text-14px text-content">
                  <div class="gap-10px flex items-center">
                    <button
                      class="w-58px h-30px rounded-4px border-1px border-btn_gray"
                    >
                      出售
                    </button>
                    <button>
                      <img src="@/assets/icons/upload.svg" alt="" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="h-50px">
                <td class="text-14px text-content">
                  <div
                    class="w-24px h-30px 3px bg-#FDEDED text-#EB3B16 center mx-auto rounded"
                  >
                    否
                  </div>
                </td>
                <td class="text-14px text-content text-center">5張</td>
                <td class="text-14px text-content text-center">83¢</td>
                <td class="text-14px text-content text-center">$3.30</td>
                <td class="text-14px text-content text-center">
                  -$0.90<span class="text-#EB3B16">(-112.50%)</span>
                </td>
                <td class="text-14px text-content">
                  <div class="gap-10px flex items-center">
                    <button
                      class="w-58px h-30px rounded-4px border-1px border-btn_gray"
                    >
                      出售
                    </button>
                    <button>
                      <img src="@/assets/icons/upload.svg" alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="border-1px mb-80px rounded-10px w-full border-gray-200">
          <div
            class="h-56px border-b-1px text-content px-27px text-16px flex items-center border-gray-200 font-bold"
          >
            規則
          </div>
          <p class="px-27px py-18px text-gray text-18px leading-40px">
            罗马尼亚将于 2024 年 11 月 24 日举行总统选举。<br />
            如果埃琳娜·拉斯科尼赢得这次选举，市场将决定「是」。否则，这个市场将会做出「不」的决定。<br />
            这个市场包括任何潜在的第二轮。如果在美国东部时间 2025 年 4 月 30<br />
            日晚上 11:59 之前仍未得知此次选举的结果，市场将决定「否」。<br />
            该市场将仅根据罗马尼亚政府（特别是常设选举机构）首次正式宣布的选举结果来决定（https://www.roaep.ro/prezentare/）。<br />
          </p>
        </div>
      </div>

      <!-- right -->
      <div
        class="w-340px h-577px border-0px border-btn_gray rounded-10px mx-auto shadow-[0_0_10px_rgba(0,0,0,0.3)]"
      >
        <div
          class="h-55px border-b-1px border-btn_gray text-gray px-12px flex items-center justify-between font-bold"
        >
          <div class="flex h-full">
            <button
              class="w-90px center"
              :class="{ active: selectedTab === 'buy' }"
              @click="selectedTab = 'buy'"
            >
              買
            </button>
            <button
              class="w-90px center"
              :class="{ active: selectedTab === 'sell' }"
              @click="selectedTab = 'sell'"
            >
              賣
            </button>
          </div>

          <button class="gap-5px flex items-center">
            市場
            <img src="@/assets/icons/arrow-down.svg" alt="" />
          </button>
        </div>

        <div
          class="p-15px h- flex h-[calc(100%-55px)] flex-col justify-between"
        >
          <div class="flex items-center justify-between">
            <div class="gap-10px flex">
              <div>結果</div>
              <img src="@/assets/icons/info.svg" alt="" />
            </div>

            <div class="gap-10px flex">
              <div
                class="size-20px center border-1px border-btn_gray rounded-3px"
              >
                <img src="@/assets/icons/refresh.svg" alt="" />
              </div>
              <img src="@/assets/icons/setup.svg" alt="" />
            </div>
          </div>

          <div class="gap-10px flex">
            <button class="w-151px h-67px bg-#0EA45B rounded-5px text-white">
              是 62美分
            </button>
            <button class="w-151px h-67px bg-#F7F7F7 rounded-5px text-gray">
              否 39美分
            </button>
          </div>

          <div class="flex items-center justify-between">
            <div>限價</div>
            <div class="rounded-4px px-10px py-5px bg-#F7F7F7 text-gray">
              餘額 0.00 美元
            </div>
          </div>

          <div
            class="border-1px border-btn_gray rounded-4px h-50px px-14px flex items-center justify-between"
          >
            <button
              class="size-33px rounded-3px bg-#EBEBEB text-gray text-20px"
            >
              -
            </button>
            <div>68.9 ¢</div>
            <button
              class="size-33px rounded-3px bg-#EBEBEB text-gray text-20px"
            >
              +
            </button>
          </div>

          <div class="flex items-center justify-between">
            <div>股份</div>
            <button class="rounded-4px px-10px py-5px bg-#7886A0 text-white">
              最大限度
            </button>
          </div>

          <div
            class="border-1px border-btn_gray rounded-4px h-50px px-14px flex items-center justify-between"
          >
            <button
              class="size-33px rounded-3px bg-#EBEBEB text-gray text-20px"
            >
              -
            </button>
            <div>0.0</div>
            <button
              class="size-33px rounded-3px bg-#EBEBEB text-gray text-20px"
            >
              +
            </button>
          </div>

          <table>
            <tbody>
              <tr>
                <td>平均價格</td>
                <td class="text-#005EFF text-end">0.0美分</td>
              </tr>
              <tr>
                <td>股份</td>
                <td class="text-gray text-end">0.00</td>
              </tr>
              <tr>
                <td>回報</td>
                <td class="text-#009E42 text-end">0.00 美元(0.00%)</td>
              </tr>
            </tbody>
          </table>
          <button class="h-50px bg-primary rounded-5px w-full text-white">
            購買
          </button>
          <div class="center text-gray text-14px">
            透过交易 , 您同意<a href="#" class="underline">使用条款</a>。
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
const data1 = ref([
  { date: '2023-09-01', value: 50 },
  { date: '2023-09-02', value: 45 },
  { date: '2023-09-03', value: 30 },
  { date: '2023-09-04', value: 95 },
  { date: '2023-09-05', value: 60 },
  { date: '2023-09-06', value: 35 },
  { date: '2023-09-07', value: 70 },
]);

const data2 = ref([
  { date: '2023-09-01', value: 30 },
  { date: '2023-09-02', value: 85 },
  { date: '2023-09-03', value: 20 },
  { date: '2023-09-04', value: 55 },
  { date: '2023-09-05', value: 70 },
  { date: '2023-09-06', value: 85 },
  { date: '2023-09-07', value: 40 },
]);
const option = ref({
  xAxis: {
    type: 'category',
    data: data1.value.map((item) => item.date),
    boundaryGap: false,
    axisLabel: {
      formatter: '{value}', // 顯示日期
    },
  },
  yAxis: {
    type: 'value',
    position: 'right',
    axisLabel: {
      formatter: '{value}%', // 顯示百分比
    },
    interval: 25, // 顯示間隔
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      data: data1.value.map((item) => item.value),
      type: 'line',
      itemStyle: {
        color: '#EB3B16', // 線條顏色
      },
      lineStyle: {
        width: 2, // 線條寬度
      },
    },

    {
      data: data2.value.map((item) => item.value),
      type: 'line',
      itemStyle: {
        color: '#0EA45B', // 線條顏色
      },
      lineStyle: {
        width: 2, // 線條寬度
      },
    },
  ],
});

const selectedTab = ref('buy');
</script>

<style>
.active {
  border-bottom: solid 2px #00aeff;
}
</style>
