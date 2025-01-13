<template>
  <div class="h-50px gap-10px text-content flex items-center dark:text-white">
    <NuxtLink
      to="/games/casualgame"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >小遊戲</NuxtLink
    >

    <NuxtLink
      to="/games/slotgame"
      class="dark:hover:bg-dark-btn_gray center w-70px hover:bg-btn_gray h-full"
      >電子遊戲</NuxtLink
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
