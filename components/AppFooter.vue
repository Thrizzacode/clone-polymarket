<template>
  <!-- coin -->
  <div class="center h-110px w-full bg-btn_gray text-gray">
    <div class="h-30px flex text-14px">
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
  <div class="flex flex-col relative h-240px bg-#212A48">
    <div
      class="absolute top-0 left-0 w-full h-full bg-[url('@/assets/images/footer_watermark.png')] opacity-20"
      alt=""
    />
    <div
      class="flex z-10 w-full h-200px justify-between px-280px py-17px text-14px"
    >
      <div>
        <p class="text-footer_title font-bold mb-10px">娛樂城</p>
        <ul class="flex flex-col gap-10px text-footer_content">
          <li>
            <NuxtLink to="/">小遊戲</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">老虎機</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title font-bold mb-10px">支持</p>
        <ul class="flex flex-col gap-10px text-footer_content">
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
        <p class="text-footer_title font-bold mb-10px">關於我們</p>
        <ul class="flex flex-col gap-10px text-footer_content">
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
        <p class="text-footer_title font-bold mb-10px">付款信息</p>
        <ul class="flex flex-col gap-10px text-footer_content">
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
        <p class="text-footer_title font-bold mb-10px">操作指南</p>
        <ul class="flex flex-col gap-10px text-footer_content">
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
    <div class="center text-footer_content text-12px">
      © 2024 88Market.com | 版权所有
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
