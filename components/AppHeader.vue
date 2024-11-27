<template>
  <header>
    <div
      class="fixed z-999 w-full h-117px px-16px backdrop-blur-90px bg-#ffffffbb border-b border-b-1px border-#e0e0e0"
    >
      <div class="h-80px flex items-center gap-20px">
        <!-- logo -->
        <div>
          <NuxtLink to="/" class="flex gap-10px center">
            <Icon
              class="-translate-y-5px"
              name="fluent-emoji-high-contrast:hippopotamus"
              size="36px"
            />
            <p class="text-26px font-semibold">88Market</p>
          </NuxtLink>
        </div>
        <!-- search -->
        <div
          class="h-40px w-full border-1px border-#e0e0e0 rounded-md flex items-center px-5px hover:bg-#f5f5f5 animation duration-200ms"
        >
          <Icon
            name="material-symbols:search-rounded"
            size="24px"
            style="color: #828282"
          />
          <input
            class="w-full outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search markets"
          />
        </div>
        <!-- navbar -->
        <nav>
          <ul class="flex gap-20px text-14px text-#828282">
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <Icon name="icon-park-outline:stock-market" size="22px" />
                Markets</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <Icon name="hugeicons:dashboard-square-02" size="22px" />
                Dashboards</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <Icon name="material-symbols:sports-and-outdoors" size="22px" />
                Sports</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <Icon name="tabler:activity-heartbeat" size="22px" />
                Activity</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <Icon name="hugeicons:ranking" size="22px" />
                Ranks</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <p class="text-16px text-#27AE60 font-semibold">$3.44</p>
                Protfolio</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="center flex-col rounded-md px-5px hover:text-black hover:bg-#e0e0e0 animaition duration-200"
              >
                <p class="text-16px text-#27AE60 font-semibold">$3.44</p>
                Cash</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <button
          class="bg-#1652f0 h-36px hover:bg-#2662FA text-white font-semibold px-16px rounded-md animaition duration-200"
        >
          Deposit
        </button>
        <button class="">
          <Icon name="hugeicons:notification-01" size="22px" />
        </button>

        <div class="h-39px w-1px bg-#e0e0e0"></div>
        <div class="flex items-center gap-10px">
          <div class="rounded-full border-1px border-#e0e0e0 size-35px center">
            <Icon name="unjs:magic-regexp" size="26px" />
          </div>
          <Icon name="solar:double-alt-arrow-down-bold-duotone" size="20px" />
        </div>
      </div>
      <div class="h-32px flex gap-20px items-center">
        <div class="flex items-center gap-8px">
          <NuxtLink to="/" class="text-14px text-#ff5f4a font-bold"
            >LIVE
          </NuxtLink>
          <div class="size-8px rounded-full bg-#ff5f4a"></div>
        </div>
        <NuxtLink to="/" class="text-14px">All</NuxtLink>
        <NuxtLink to="/" class="text-14px">New</NuxtLink>
        <NuxtLink to="/" class="text-14px"
          >Creators
          <Icon name="bi:stars" style="color: blue" />
        </NuxtLink>
        <NuxtLink to="/" class="text-14px">Sports</NuxtLink>
        <NuxtLink to="/" class="text-14px">Global Elections</NuxtLink>
        <NuxtLink to="/" class="text-14px">Mentions</NuxtLink>
        <NuxtLink to="/" class="text-14px">Politics</NuxtLink>
        <NuxtLink to="/" class="text-14px">Crypto</NuxtLink>
        <NuxtLink to="/" class="text-14px">Pop Culture</NuxtLink>
        <NuxtLink to="/" class="text-14px">Business</NuxtLink>
        <NuxtLink to="/" class="text-14px">Science</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style></style>
