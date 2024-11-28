<template>
  <div
    class="card flex flex-col h-170px border-1px border-#e4e4e455 rounded-lg animation duration-200"
  >
    <div class="flex flex-col justify-between h-138px px-12px pt-19px pb-14px">
      <div class="relative flex items-center h-40px gap-10px">
        <img class="rounded-md size-40px" src="@/assets/images/bitcoin.webp" />
        <p class="w-190px text-content text-14px font-600">
          2024 年比特幣會達到 10 萬美元嗎？
        </p>
        <div class="absolute top-0 right-0">
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
            ></path>
            <path
              d="M -29.001 3.5514757175273244e-15 A 29 29 0 0 1 -24.593394788536354 -15.367658662762938"
              fill="none"
              stroke="#E64800"
              stroke-opacity="0.8425"
              stroke-width="4"
              stroke-linecap="butt"
            ></path>
          </svg>
          <div
            class="absolute top-10px left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <p>18%</p>
            <p class="text-12px text-#828282">機會</p>
          </div>
        </div>
      </div>
      <div class="flex gap-10px">
        <button
          class="center gap-10px h-36px w-full bg-#27AE601A text-#27AE60 hover:bg-#27AE60 hover:text-white font-semibold rounded-md"
        >
          購買是
          <img src="@/assets/icons/yes.svg" alt="yes" />
        </button>
        <button
          class="center gap-10px h-36px w-full bg-#EB57571A text-#E64800 hover:bg-#E64800 hover:text-white font-semibold rounded-md"
        >
          購買否
          <img src="@/assets/icons/no.svg" alt="no" />
        </button>
      </div>
    </div>

    <div
      class="flex justify-between items-center h-32px px-12px text-#828282 text-14px"
      style="box-shadow: 0px -2px 4px 0px #0000000d"
    >
      <div class="flex gap-5px h-24px">
        <div class="center size-24px bg-#ECF2FD rounded-4px">
          <img src="@/assets/icons/pin.svg" alt="pin" />
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
