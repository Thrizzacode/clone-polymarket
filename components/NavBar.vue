<template>
  <div class="h-50px gap-10px text-content flex items-center dark:text-white">
    <NuxtLink
      to="/markets/all"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('all') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/new"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('new') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/sports"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('sport') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/elections"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('election') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/politics"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('politic') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/business"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('business') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/popculture"
      class="dark:hover:bg-dark-btn_gray center hover:bg-btn_gray h-full break-normal"
      >{{ $t('popCulture') }}</NuxtLink
    >
    <NuxtLink
      to="/markets/crypto"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >{{ $t('crypto') }}</NuxtLink
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
