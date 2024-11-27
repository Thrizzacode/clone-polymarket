<template>
  <div
    class="card flex flex-col h-180px p-15px border-1px border-#e4e4e455 rounded-lg animation duration-200"
  >
    <div class="relative flex items-center h-40px gap-10px">
      <img class="rounded-md size-40px" src="@/assets/images/bitcoin.webp" />
      <p class="w-190px">Will Bitcoin hit $100k in November?</p>
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
          <p class="text-12px text-#828282">chance</p>
        </div>
      </div>
    </div>

    <div class="h-82px flex gap-10px items-end">
      <button
        class="h-36px w-full bg-#27AE601A text-#27AE60 hover:bg-#27AE60 hover:text-white font-semibold rounded-md"
      >
        Buy Yes
        <Icon
          class="translate-y-3px"
          name="material-symbols:keyboard-double-arrow-up-rounded"
          size="18px"
        />
      </button>
      <button
        class="h-36px w-full bg-#EB57571A text-#E64800 hover:bg-#E64800 hover:text-white font-semibold rounded-md"
      >
        Buy No
        <Icon
          class="translate-y-3px"
          name="material-symbols:keyboard-double-arrow-down-rounded"
          size="18px"
        />
      </button>
    </div>

    <div class="flex justify-between text-#828282 text-14px mt-10px">
      <p>$13m Vol</p>
      <div class="flex items-center gap-10px">
        <div
          data-state="delayed-open"
          class=""
          style="opacity: 1"
          aria-describedby="radix-:ru2:"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="c-ipwcRu"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20,7h-1.209C18.922,6.589,19,6.096,19,5.5C19,3.57,17.43,2,15.5,2c-1.622,0-2.705,1.482-3.404,3.085 C11.407,3.57,10.269,2,8.5,2C6.57,2,5,3.57,5,5.5C5,6.096,5.079,6.589,5.209,7H4C2.897,7,2,7.897,2,9v2c0,1.103,0.897,2,2,2v7 c0,1.103,0.897,2,2,2h5h2h5c1.103,0,2-0.897,2-2v-7c1.103,0,2-0.897,2-2V9C22,7.897,21.103,7,20,7z M15.5,4 C16.327,4,17,4.673,17,5.5C17,7,16.374,7,16,7h-2.478C14.033,5.424,14.775,4,15.5,4z M7,5.5C7,4.673,7.673,4,8.5,4 c0.888,0,1.714,1.525,2.198,3H8C7.626,7,7,7,7,5.5z M4,9h7v2H4V9z M6,20v-7h5v7H6z M18,20h-5v-7h5V20z M13,11V9.085 C13.005,9.057,13.011,9.028,13.017,9H20l0.001,2H13z"
            ></path>
          </svg>
        </div>
        <a href="/event/will-bitcoin-hit-100k-in-november#comments" class=""
          ><div class="">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class=""
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"
                ></path></svg
              ><span class="">1,927</span>
            </div>
          </div></a
        ><button data-state="closed" class="">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            class=""
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
            ></path>
          </svg>
        </button>
      </div>
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
