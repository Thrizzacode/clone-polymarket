<template>
  <div class="h-50px gap-10px text-content flex items-center dark:text-white">
    <NuxtLink
      to="/markets/all"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >全部</NuxtLink
    >
    <NuxtLink
      to="/markets/new"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >最新</NuxtLink
    >
    <NuxtLink
      to="/markets/sports"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >體育</NuxtLink
    >
    <NuxtLink
      to="/markets/elections"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >選舉</NuxtLink
    >
    <NuxtLink
      to="/markets/politics"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >政治</NuxtLink
    >
    <NuxtLink
      to="/markets/business"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >商業</NuxtLink
    >
    <NuxtLink
      to="/markets/popculture"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >流行文化</NuxtLink
    >
    <NuxtLink
      to="/markets/crypto"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >加密貨幣</NuxtLink
    >
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  color: #00aeff;
  border-bottom: 2px solid #00aeff;
}

.router-link-exact-active {
  color: #00aeff;
  border-bottom: 2px solid #00aeff;
}
</style>
