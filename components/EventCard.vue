<template>
  <div
    class="card h-170px border-1px border-#e4e4e455 animation dark:bg-dark-btn_gray flex flex-col overflow-hidden rounded-lg duration-200"
  >
    <div class="h-138px px-12px pt-19px pb-14px flex flex-col justify-between">
      <div class="h-40px gap-10px relative flex items-center">
        <img class="size-40px rounded-md" src="@/assets/images/bitcoin.webp" />
        <p class="w-190px text-content font-600 dark:text-white">
          2024 年比特幣會達到 10 萬美元嗎？
        </p>
        <div class="absolute right-0 top-0">
          <svg
            width="58"
            height="29"
            viewBox="-29 -29 58 29"
            style="width: 58px; max-width: 58px; overflow: visible"
          >
            <path
              d="M -29.001 3.5514757175273244e-15 A 29 29 0 1 1 29 -7.102951435054649e-15"
              fill="none"
              stroke="#E0E0E0"
              stroke-width="4"
              stroke-linecap="butt"
            />
            <path
              d="M -29.001 3.5514757175273244e-15 A 29 29 0 0 1 -24.593394788536354 -15.367658662762938"
              fill="none"
              stroke="#E64800"
              stroke-opacity="0.8425"
              stroke-width="4"
              stroke-linecap="butt"
            />
          </svg>
          <div
            class="top-10px absolute left-1/2 flex -translate-x-1/2 flex-col items-center dark:text-white"
          >
            <p>18%</p>
            <p class="text-12px text-#828282">機會</p>
          </div>
        </div>
      </div>
      <div class="gap-10px flex">
        <button
          class="center gap-10px h-36px bg-#27AE601A text-#27AE60 hover:bg-#27AE60 w-full rounded-md font-semibold hover:text-white"
        >
          購買是
          <img src="@/assets/icons/yes.svg" alt="yes" />
        </button>
        <button
          class="center gap-10px h-36px bg-#EB57571A text-#E64800 hover:bg-#E64800 w-full rounded-md font-semibold hover:text-white"
        >
          購買否
          <img src="@/assets/icons/no.svg" alt="no" />
        </button>
      </div>
    </div>

    <div
      class="h-32px px-12px text-#828282 dark:bg-#2A3450 flex items-center justify-between"
      style="box-shadow: 0px -2px 4px 0px #0000000d"
    >
      <div class="gap-5px h-24px flex">
        <div
          class="center size-24px bg-#ECF2FD rounded-4px dark:bg-dark-btn_gray dark:text-primary text-#004DE7"
        >
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.94311 0.881387C8.87133 0.802769 8.77739 0.745526 8.66838 0.721178C6.23326 0.170771 3.93474 0.172273 1.8362 0.725352C1.54828 0.801234 1.37316 1.10858 1.44514 1.41211C1.46972 1.51551 1.51907 1.60485 1.58572 1.67512C1.71498 1.81139 1.90699 1.87459 2.09707 1.82489C2.25041 1.78455 2.40701 1.75289 2.56288 1.71896L2.46635 6.39527C2.46534 6.45138 2.4392 6.50293 2.39358 6.54087C2.07247 6.80512 1.76737 7.0988 1.58869 7.28503C0.876253 8.02861 0.378803 8.9408 0.149687 9.92299C0.0569249 10.3211 0.14204 10.7362 0.383829 11.0611C0.416523 11.1052 0.451273 11.1469 0.488277 11.1859C0.728037 11.4386 1.05096 11.5804 1.39514 11.5804L4.72361 11.5804L4.72361 17.039C4.72216 17.1144 4.73499 17.1893 4.76135 17.2594C4.78771 17.3295 4.82708 17.3933 4.87714 17.4472C4.92721 17.5011 4.98696 17.5439 5.05291 17.5731C5.11885 17.6023 5.18966 17.6173 5.2612 17.6173C5.33273 17.6173 5.40354 17.6023 5.46949 17.5731C5.53543 17.5439 5.59518 17.5011 5.64525 17.4472C5.69531 17.3933 5.73468 17.3295 5.76104 17.2594C5.7874 17.1893 5.80023 17.1144 5.79878 17.039L5.79878 11.5804L9.12824 11.5804C9.52489 11.5807 9.89371 11.3914 10.1396 11.0611C10.3813 10.7362 10.4665 10.3211 10.3737 9.92299C10.1446 8.9408 9.64816 8.03183 8.9342 7.28451C8.74969 7.0916 8.4584 6.83819 8.13475 6.58783C8.0871 6.55043 8.0583 6.49607 8.05703 6.43702L7.96001 1.73305C8.12095 1.76431 8.28094 1.7922 8.44314 1.82907C8.73334 1.89453 9.01962 1.70031 9.08171 1.39385C9.12068 1.20214 9.06273 1.01242 8.94311 0.881387Z"
            />
          </svg>
        </div>
        <p>共 360 万美元</p>
      </div>
      <img src="@/assets/icons/favorite2.svg" alt="favorite2" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.card {
  box-shadow: rgba(183, 190, 197, 0.2) 0px 8px 24px;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  }
}
</style>
