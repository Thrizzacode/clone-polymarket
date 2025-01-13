<template>
  <div class="flex flex-col items-center">
    <div class="dark:bg-dark-bg w-1360px py-22px gap-20px flex flex-wrap">
      <div
        v-for="game in gameList"
        :key="game.title"
        class="w-670px gap-24px h-430px rounded-10px p-13px flex shadow-[0px_0px_10px_0px_#00000026]"
      >
        <img class="rounded-10px" :src="game.img" alt="" />
        <div class="flex flex-col items-center justify-between">
          <p class="text-24px font-bold">{{ game.title }}</p>

          <div class="flex w-full items-center">
            <div class="flex w-full flex-col items-center justify-center">
              <p>{{ game.rating }} &#9733;</p>
              <p class="text-gray">評價</p>
            </div>
            <div class="w-1px h-80% bg-#D5D5D5"></div>
            <div class="flex w-full flex-col items-center justify-center">
              <p>{{ game.rtp }}%</p>
              <p class="text-gray">RTP</p>
            </div>
          </div>

          <div class="h-50px flex w-full justify-around">
            <button
              class="w-160px text-16px bg-#788FAB rounded-5px font-bold text-white"
            >
              &#9654; 試玩
            </button>
            <button
              class="w-160px bg-#5CF348 text-16px rounded-5px font-bold text-black"
            >
              &#9654; 開始遊戲
            </button>
          </div>

          <div class="gap-10px flex">
            <div
              v-for="tag in game.tags"
              :key="tag"
              class="border-1px border-#DADADA text-#8D8D8D px-10px rounded-full"
            >
              {{ tag }}
            </div>
          </div>

          <div class="text-16px px-5px">
            <p class="mb-10px font-bold">關於這個遊戲</p>
            <p class="text-#8D8D8D whitespace-pre-line">
              {{ game.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
definePageMeta({
  type: 'game',
});

const gameList = ref([
  {
    img: '/images/games/the_meg.png',
    title: '巨齒鯊',
    rating: 5.0,
    rtp: 99,
    tags: ['休閒', '多人同玩', '鯊魚', '逃生'],
    description:
      '「巨齿鲨」是一款即时、简单且带来刺激的游戏，您可以在有公平保证的同时来获得游玩的乐趣或赢得财富。\n\n每回合游戏，您都有机会下注。',
  },
  {
    img: '/images/games/crocodile_plinko.png',
    title: '鱷魚彈珠',
    rating: 5.0,
    rtp: 99,
    tags: ['休閒', '單人同玩', '鱷魚', '彈珠'],
    description:
      '鳄鱼弹珠是一款下落球游戏,选择球从顶端落下,掉入底部决定返还乘数。\n\n玩家透过选择弹珠层数、球与鳄鱼嘴模式改变游戏乘数。',
  },
  {
    img: '/images/games/bar_beer.png',
    title: '酒推',
    rating: 5.0,
    rtp: 99,
    tags: ['休閒', '多人同玩', '酒杯', '啤酒'],
    description:
      '「酒推」 是一款简单明快的游戏，您可以在有公平保证的同时来获得游玩的乐趣或赢得财富。\n\n每回合下注游戏后，即可開出結果，总得奖金将以乘数与下注金额来决定。',
  },
  {
    img: '/images/games/vertical_limit.png',
    title: '巔峰極限',
    rating: 5.0,
    rtp: 99,
    tags: ['休閒', '多人同玩', '炸彈'],
    description:
      '「巅峰极限」 是一款简单且有趣的游戏，您可以在有公平保证的同时来获得游玩的乐趣或赢得财富。\n\n每回合的攀登点都是随机公平公正的，快来挑战最高乘数吧！',
  },
]);
</script>

<style></style>
