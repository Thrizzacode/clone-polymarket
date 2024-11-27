<template>
  <div>
    <div class="px-10% py-20px">
      <div class="flex gap-15px text-white">
        <div
          class="flex justify-between h-150px w-full rounded-lg py-10px pl-20px"
          style="
            background: linear-gradient(
              0deg,
              rgba(34, 193, 195, 1) 0%,
              rgba(253, 187, 45, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px font-semibold">Trump won,now what?</p>
            <button
              class="bg-black/30 rounded-full py-5px px-10px mt-10px hover:bg-black animaition duration-200"
            >
              View
            </button>
          </div>
          <img src="@/assets/images/trump-won.webp" alt="" />
        </div>
        <div
          class="flex justify-between h-150px w-full rounded-lg py-10px pl-20px"
          style="
            background: linear-gradient(
              90deg,
              rgba(131, 58, 180, 1) 0%,
              rgba(253, 29, 29, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px font-semibold">2024 Election Results</p>
            <button
              class="bg-black/30 rounded-full py-5px px-10px mt-10px hover:bg-black animaition duration-200"
            >
              View
            </button>
          </div>
          <img src="@/assets/images/UsElectionForecast.webp" alt="" />
        </div>
        <div
          class="flex justify-between h-150px w-full rounded-lg py-10px pl-20px"
          style="
            background: linear-gradient(
              0deg,
              rgba(34, 193, 195, 1) 0%,
              rgba(222, 0, 150, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px font-semibold">Mention Markets</p>
            <p class="w-170px text-12px mb-10px">What will they say?</p>
            <button
              class="bg-black/30 rounded-full py-5px px-10px mt-10px hover:bg-black animaition duration-200"
            >
              View
            </button>
          </div>
          <img src="@/assets/images/mention-markets.webp" alt="" />
        </div>
        <div
          class="flex justify-between h-150px w-full rounded-lg py-10px pl-20px"
          style="
            background: linear-gradient(
              0deg,
              rgba(255, 70, 176, 1) 0%,
              rgba(222, 122, 0, 1) 100%
            );
          "
        >
          <div>
            <p class="w-170px font-semibold">Start Trading</p>
            <p class="w-170px text-12px mb-10px">
              Add funds to start trading today
            </p>
            <button
              class="bg-black/30 rounded-full py-5px px-10px mt-10px hover:bg-black animaition duration-200"
            >
              Add funds
            </button>
          </div>
          <img src="@/assets/images/Deposit.webp" alt="" />
        </div>
      </div>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-15px mt-20px"
      >
        <EventCard v-for="n in 12" :key="n" />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
