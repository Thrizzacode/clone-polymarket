<template>
  <!-- coin -->
  <div
    class="center h-110px bg-btn_gray text-gray dark:bg-dark-btn_gray w-full"
  >
    <div class="h-30px flex">
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/btc.svg" alt="" />
        <p>BITCOIN</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/eth.svg" alt="" />
        <p>ETHEREUM</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/usdt.svg" alt="" />
        <p>TETHER</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/sol.svg" alt="" />
        <p>SOLANA</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/bnb.svg" alt="" />
        <p>BNB</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/wsol.svg" alt="" />
        <p class="whitespace-nowrap">WRAPPED SOL</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/xrp.svg" alt="" />
        <p>XRP</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/doge.svg" alt="" />
        <p>DOGECOIN</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/usdc.svg" alt="" />
        <p>USDC</p>
      </div>
      <div class="center w-140px gap-10px">
        <img src="@/assets/icons/coin/ada.svg" alt="" />
        <p>CARDANO</p>
      </div>
    </div>
  </div>

  <!-- list -->
  <div class="h-240px bg-#212A48 relative flex flex-col">
    <div
      class="absolute left-0 top-0 h-full w-full bg-[url('@/assets/images/footer_watermark.png')] opacity-20"
      alt=""
    ></div>
    <div class="h-200px px-280px py-17px z-10 flex w-full justify-between">
      <div>
        <p class="text-footer_title mb-10px font-bold">娛樂城</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">小遊戲</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">老虎機</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">支持</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">幫助中心</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">公平性</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">在線支持</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">公平性</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">關於我們</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">聯盟計畫</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">隱私政策</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">反洗錢政策</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">服務條款</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">付款信息</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">存款和取款</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">加密貨幣指南</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">支持的加密貨幣</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">下注多少</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">操作指南</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">操作指南</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">88Market VIP 指南</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">莊家優勢指南</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="center text-footer_content text-12px text-primary">
      © 2024 88Market.com | 版权所有
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
