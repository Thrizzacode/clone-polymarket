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
        <p class="text-footer_title mb-10px font-bold">{{ $t('casino') }}</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">{{ $t('miniGame') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('slotGame') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">{{ $t('support') }}</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">{{ $t('helpcenter') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('fairness') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('onlineSupport') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">{{ $t('aboutUs') }}</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">{{ $t('aff') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('privacy') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('aml') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('service') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">{{ $t('payment') }}</p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">{{ $t('depositsAndWithdrawals') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('cryptoGuide') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('supportCrypto') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-footer_title mb-10px font-bold">
          {{ $t('operationGuide') }}
        </p>
        <ul class="gap-10px text-footer_content flex flex-col">
          <li>
            <NuxtLink to="/">{{ $t('operationGuide') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('vip') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t('bankerGuide') }}</NuxtLink>
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
