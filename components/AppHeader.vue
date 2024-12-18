<template>
  <header>
    <div
      class="dark:border-#2D395B dark:bg-dark-head_bg z-999 h-120px px-280px backdrop-blur-90px bg-#ffffffbb border-b-1px border-#e0e0e0 fixed w-full border-b"
    >
      <div class="h-70px gap-20px flex items-center">
        <!-- logo -->
        <div>
          <NuxtLink to="/" class="gap-10px center flex">
            <img src="@/assets/images/logo.svg" alt="logo" />
            <p class="text-26px font-600 dark:text-white">
              <span class="text-primary">88</span>Market
            </p>
          </NuxtLink>
        </div>

        <!-- navbar -->
        <nav>
          <ul class="gap-20px text-13px text-gray flex">
            <li>
              <NuxtLink
                to="/"
                class="dark:hover:bg-dark-btn_gray center text-primary px-5px hover:bg-#e0e0e0 animaition flex-col rounded-md duration-200 hover:text-black dark:hover:text-white"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.45238 0.5C0.927143 0.5 0.5 0.927143 0.5 1.45238V5.2619C0.5 5.78714 0.927143 6.21429 1.45238 6.21429H5.2619C5.78714 6.21429 6.21429 5.78714 6.21429 5.2619V1.45238C6.21429 0.927143 5.78714 0.5 5.2619 0.5H1.45238ZM8.59524 0.5C8.07 0.5 7.64286 0.927143 7.64286 1.45238V5.2619C7.64286 5.78714 8.07 6.21429 8.59524 6.21429H12.4048C12.93 6.21429 13.3571 5.78714 13.3571 5.2619V1.45238C13.3571 0.927143 12.93 0.5 12.4048 0.5H8.59524ZM15.7381 0.5C15.2129 0.5 14.7857 0.927143 14.7857 1.45238V5.2619C14.7857 5.78714 15.2129 6.21429 15.7381 6.21429H19.5476C20.0729 6.21429 20.5 5.78714 20.5 5.2619V1.45238C20.5 0.927143 20.0729 0.5 19.5476 0.5H15.7381ZM1.45238 7.64286C0.927143 7.64286 0.5 8.07 0.5 8.59524V12.4048C0.5 12.93 0.927143 13.3571 1.45238 13.3571H5.2619C5.78714 13.3571 6.21429 12.93 6.21429 12.4048V8.59524C6.21429 8.07 5.78714 7.64286 5.2619 7.64286H1.45238ZM8.59524 7.64286C8.07 7.64286 7.64286 8.07 7.64286 8.59524V12.4048C7.64286 12.93 8.07 13.3571 8.59524 13.3571H12.4048C12.93 13.3571 13.3571 12.93 13.3571 12.4048V8.59524C13.3571 8.07 12.93 7.64286 12.4048 7.64286H8.59524ZM15.7381 7.64286C15.2129 7.64286 14.7857 8.07 14.7857 8.59524V12.4048C14.7857 12.93 15.2129 13.3571 15.7381 13.3571H19.5476C20.0729 13.3571 20.5 12.93 20.5 12.4048V8.59524C20.5 8.07 20.0729 7.64286 19.5476 7.64286H15.7381ZM1.45238 14.7857C0.927143 14.7857 0.5 15.2129 0.5 15.7381V19.5476C0.5 20.0729 0.927143 20.5 1.45238 20.5H5.2619C5.78714 20.5 6.21429 20.0729 6.21429 19.5476V15.7381C6.21429 15.2129 5.78714 14.7857 5.2619 14.7857H1.45238ZM8.59524 14.7857C8.07 14.7857 7.64286 15.2129 7.64286 15.7381V19.5476C7.64286 20.0729 8.07 20.5 8.59524 20.5H12.4048C12.93 20.5 13.3571 20.0729 13.3571 19.5476V15.7381C13.3571 15.2129 12.93 14.7857 12.4048 14.7857H8.59524ZM15.7381 14.7857C15.2129 14.7857 14.7857 15.2129 14.7857 15.7381V19.5476C14.7857 20.0729 15.2129 20.5 15.7381 20.5H19.5476C20.0729 20.5 20.5 20.0729 20.5 19.5476V15.7381C20.5 15.2129 20.0729 14.7857 19.5476 14.7857H15.7381Z"
                    fill="currentColor"
                  />
                </svg>
                預測市場</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="dark:hover:bg-dark-btn_gray center px-5px hover:bg-#e0e0e0 animaition flex-col rounded-md duration-200 hover:text-black dark:hover:text-white"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.5C3.63281 0.5 0.5 2.73828 0.5 5.5V18.5C0.5 19.6055 1.39453 20.5 2.5 20.5H12.5C13.6055 20.5 14.5 19.6055 14.5 18.5V5.5C14.5 2.73828 11.3672 0.5 7.5 0.5ZM18.5312 2.5C18.375 2.49609 18.2227 2.49609 18.0625 2.53125C17.3359 2.68359 16.7383 3.28125 16.5625 4C16.332 4.94531 16.7734 5.79688 17.5 6.21875V10.5C17.5 11.0508 17.0508 11.5 16.5 11.5H15.5V13.5H17.5C18.6055 13.5 19.5 12.6055 19.5 11.5V6.21875C20.0938 5.87109 20.5 5.23828 20.5 4.5C20.5 3.41016 19.6172 2.52344 18.5312 2.5ZM3.5 5.5H11.5C12.0508 5.5 12.5 5.94922 12.5 6.5V10.5C12.5 11.0508 12.0508 11.5 11.5 11.5H3.5C2.94922 11.5 2.5 11.0508 2.5 10.5V6.5C2.5 5.94922 2.94922 5.5 3.5 5.5ZM3.5 6.5V10.5H5.5V6.5H3.5ZM6.5 6.5V10.5H8.5V6.5H6.5ZM9.5 6.5V10.5H11.5V6.5H9.5ZM4.5 14.5H10.5L12.5 17.5H2.5L4.5 14.5Z"
                    fill="currentColor"
                  />
                </svg>
                休閒遊戲</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="dark:hover:bg-dark-btn_gray center px-5px hover:bg-#e0e0e0 animaition flex-col rounded-md duration-200 hover:text-black dark:hover:text-white"
              >
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.69629 0.500019C9.49655 0.501571 9.30326 0.594842 9.14876 0.76423C8.99427 0.933618 8.88793 1.16885 8.84754 1.43057L7.36542 11.096L6.63926 8.48889C6.57971 8.27531 6.47469 8.08975 6.33718 7.95515C6.19967 7.82056 6.03569 7.74282 5.86552 7.73155C5.69534 7.72028 5.52643 7.77598 5.37966 7.89175C5.23288 8.00752 5.11468 8.17829 5.03966 8.38297L4.10238 10.9377H1.81237C1.69686 10.9355 1.58217 10.9641 1.47497 11.0217C1.36778 11.0794 1.27021 11.1649 1.18795 11.2734C1.10568 11.382 1.04036 11.5113 0.995771 11.6539C0.951183 11.7965 0.928223 11.9495 0.928223 12.104C0.928223 12.2586 0.951183 12.4116 0.995771 12.5542C1.04036 12.6968 1.10568 12.8261 1.18795 12.9347C1.27021 13.0432 1.36778 13.1287 1.47497 13.1864C1.58217 13.244 1.69686 13.2726 1.81237 13.2704H4.64551C4.80847 13.2703 4.96815 13.2091 5.10644 13.0937C5.24472 12.9784 5.35607 12.8135 5.42786 12.6177L5.71219 11.8421L6.79249 15.7192C6.85857 15.9566 6.98059 16.1587 7.14013 16.2951C7.29967 16.4314 7.48805 16.4946 7.6768 16.4751C7.86556 16.4555 8.04442 16.3543 8.18637 16.1867C8.32831 16.0191 8.42563 15.7942 8.4636 15.5461L9.6418 7.86131L11.1971 19.5394C11.2308 19.7904 11.3249 20.0197 11.4652 20.1923C11.6055 20.3648 11.7842 20.4711 11.974 20.4949C12.1637 20.5187 12.3541 20.4586 12.5159 20.3239C12.6777 20.1892 12.8021 19.9872 12.8699 19.7489L15.011 12.2088L15.9891 15.7192C16.0461 15.9238 16.1449 16.1028 16.2743 16.236C16.4036 16.3691 16.5583 16.451 16.7207 16.4724C16.8831 16.4938 17.0467 16.4537 17.1929 16.3568C17.3392 16.2599 17.4621 16.11 17.5479 15.9242L18.7737 13.2704H21.8623C21.9778 13.2726 22.0925 13.244 22.1997 13.1864C22.3068 13.1287 22.4044 13.0432 22.4867 12.9347C22.5689 12.8261 22.6343 12.6968 22.6789 12.5542C22.7234 12.4116 22.7464 12.2586 22.7464 12.104C22.7464 11.9495 22.7234 11.7965 22.6789 11.6539C22.6343 11.5113 22.5689 11.382 22.4867 11.2734C22.4044 11.1649 22.3068 11.0794 22.1997 11.0217C22.0925 10.9641 21.9778 10.9355 21.8623 10.9377H18.2885C18.1399 10.9378 17.9937 10.9887 17.864 11.0856C17.7342 11.1824 17.6251 11.3221 17.547 11.4913L17.0013 12.6724L15.8359 8.48889C15.774 8.2666 15.6629 8.07485 15.5174 7.93922C15.3719 7.80359 15.199 7.73053 15.0217 7.72979C14.8444 7.72905 14.6711 7.80066 14.525 7.93506C14.3789 8.06947 14.2669 8.26029 14.2039 8.48206L12.36 14.9777L10.5595 1.46133C10.5234 1.19068 10.4169 0.945806 10.259 0.769922C10.1011 0.594038 9.90177 0.498447 9.69629 0.500019Z"
                    fill="currentColor"
                  />
                </svg>
                進行中</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="dark:hover:bg-dark-btn_gray center px-5px hover:bg-#e0e0e0 animaition flex-col rounded-md duration-200 hover:text-black dark:hover:text-white"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.06148 0.5C2.21904 0.5 0.728149 1.99089 0.728149 3.83333C0.728149 6.18685 2.25159 7.77865 3.74898 9.09375C4.79065 10.0085 5.83883 10.8418 6.58752 11.75C6.60054 11.7663 6.60054 11.7858 6.61357 11.8021C7.27763 13.498 8.11096 14.8587 9.03544 15.6302C11.5582 18.3971 5.65002 18.0195 5.65002 20.5H15.7281C15.7281 18.0553 10.025 18.3939 12.2646 15.7604C13.2672 15.0085 14.1624 13.5697 14.8688 11.75C15.6175 10.8418 16.6656 10.0085 17.7073 9.09375C19.2047 7.77865 20.7281 6.18685 20.7281 3.83333C20.7281 1.99089 19.2373 0.5 17.3948 0.5C16.1611 0.5 15.1064 1.17057 14.5302 2.16667H6.92607C6.34989 1.17057 5.29521 0.5 4.06148 0.5ZM4.06148 2.16667C4.37724 2.16667 4.65393 2.24805 4.89482 2.375C4.91109 4.42253 5.18127 6.54818 5.62398 8.49479C5.36357 8.27344 5.09013 8.06185 4.84273 7.84375C3.42346 6.597 2.39482 5.48047 2.39482 3.83333C2.39482 2.84049 3.06864 2.16667 4.06148 2.16667ZM17.3948 2.16667C18.3877 2.16667 19.0615 2.84049 19.0615 3.83333C19.0615 5.48047 18.0328 6.597 16.6136 7.84375C16.3662 8.06185 16.0927 8.27344 15.8323 8.49479C16.275 6.54818 16.5452 4.42253 16.5615 2.375C16.8024 2.24805 17.0791 2.16667 17.3948 2.16667ZM10.2334 5.5H11.5615V11.3333H9.89482V8H8.64482V6.90625C9.64417 6.90625 10.1487 5.91667 10.2334 5.5Z"
                    fill="currentColor"
                  />
                </svg>
                排行榜</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="dark:hover:bg-dark-btn_gray center px-5px hover:bg-#e0e0e0 animaition flex-col rounded-md duration-200 hover:text-black dark:hover:text-white"
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.55819 0.632812C3.9561 0.632812 0.224854 4.21481 0.224854 8.63281C0.224854 12.7115 3.40702 16.0714 7.51652 16.5645V18.4004C6.85429 18.0191 5.9362 17.6328 4.91235 17.6328C2.89881 17.6328 1.26652 19.1328 1.26652 19.1328C1.26652 19.1328 2.89881 20.6328 4.91235 20.6328C6.16303 20.6328 7.21178 20.0713 7.86849 19.6328H9.24788C9.90459 20.0713 10.9533 20.6328 12.204 20.6328C14.2176 20.6328 15.8499 19.1328 15.8499 19.1328C15.8499 19.1328 14.2176 17.6328 12.204 17.6328C11.1802 17.6328 10.2621 18.0191 9.59985 18.4004V16.5645C13.7094 16.0714 16.8915 12.7115 16.8915 8.63281C16.8915 4.21481 13.1603 0.632812 8.55819 0.632812ZM8.25911 2.23242H9.30892V3.68945C9.64329 3.75045 11.5143 4.16011 11.5143 6.78711H9.54492C9.54492 5.41411 8.9375 5.19727 8.68229 5.19727C8.54271 5.19727 7.89697 5.23238 7.89697 6.35938C7.89801 8.32638 11.5001 7.71297 11.5001 10.918C11.5001 13.246 9.50841 13.5615 9.15633 13.6035V14.9336H8.11263V13.6035C7.78763 13.5605 5.60205 13.3295 5.60205 10.4375H7.57145C7.57145 12.1455 8.48778 12.0742 8.62736 12.0742C8.78048 12.0742 9.53271 12.0476 9.53271 10.9316C9.53271 8.70264 5.92961 9.69256 5.92961 6.35156C5.92961 4.06156 7.90599 3.70316 8.25911 3.66016V2.23242Z"
                    fill="currentColor"
                  />
                </svg>
                賺錢</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="dark:hover:bg-dark-btn_gray center px-5px hover:bg-#e0e0e0 animaition flex-col rounded-md duration-200 hover:text-black dark:hover:text-white"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4998 0.399994C4.98576 0.399994 0.499756 4.88599 0.499756 10.4C0.499756 15.914 4.98576 20.4 10.4998 20.4C16.0138 20.4 20.4998 15.914 20.4998 10.4C20.4998 4.88599 16.0138 0.399994 10.4998 0.399994ZM10.4998 16.4C9.94726 16.4 9.49976 15.9525 9.49976 15.4C9.49976 14.8475 9.94726 14.4 10.4998 14.4C11.0523 14.4 11.4998 14.8475 11.4998 15.4C11.4998 15.9525 11.0523 16.4 10.4998 16.4ZM11.9948 10.8885C11.4988 11.275 11.2498 11.469 11.2498 12.15C11.2498 12.5645 10.9143 12.9 10.4998 12.9C10.0853 12.9 9.74976 12.5645 9.74976 12.15C9.74976 10.736 10.5143 10.1405 11.0728 9.70549C11.6108 9.28599 11.9998 8.98299 11.9998 7.89999C11.9998 7.07299 11.3268 6.39999 10.4998 6.39999C9.67276 6.39999 8.99976 7.07299 8.99976 7.89999V8.14999C8.99976 8.56449 8.66426 8.89999 8.24976 8.89999C7.83526 8.89999 7.49976 8.56449 7.49976 8.14999V7.89999C7.49976 6.24549 8.84526 4.89999 10.4998 4.89999C12.1543 4.89999 13.4998 6.24549 13.4998 7.89999C13.4998 9.71549 12.6298 10.3935 11.9948 10.8885Z"
                    fill="currentColor"
                  />
                </svg>
                幫助</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <div class="h-40px gap-10px flex">
          <div class="w-219px rounded-5px flex h-full overflow-hidden">
            <div
              class="dark:bg-dark-btn_gray w-169px bg-btn_gray text-gray tracking-1px flex items-center justify-end dark:text-white"
            >
              0.00000000
              <img class="mx-8px" src="@/assets/images/USDC.png" alt="usdc" />
              <img
                class="mr-16px"
                src="@/assets/icons/arrow-down.svg"
                alt="usdc"
              />
            </div>
            <div class="center w-50px bg-primary text-white">錢包</div>
          </div>
          <button
            class="dark:bg-dark-bg text-primary border-1px border-primary px-30px rounded-5px h-full bg-white"
            @click="showLoginDialog = true"
          >
            登錄
          </button>
          <DialogLogin v-model="showLoginDialog" />

          <button
            class="bg-primary px-30px rounded-5px h-full text-white"
            @click="showSignupDialog = true"
          >
            註冊
          </button>
          <DialogSignup v-model="showSignupDialog" />

          <LanguageSelect />
          <button class="center size-40px">
            <img src="@/assets/icons/noty.svg" alt="" />
          </button>

          <div class="h-39px w-1px bg-btn_gray"></div>
          <UserInfo />
        </div>
      </div>
      <NavBar />
    </div>
  </header>
</template>

<script setup>
// import { ethers } from 'ethers';

const showSignupDialog = ref(false);
const showLoginDialog = ref(false);

// const provider = new ethers.JsonRpcProvider('https://polygon.llamarpc.com');
// const test = async () => {
// const balance = await provider.getBalance("vitalik.eth");
// const balance = await provider.getBalance(
//   "0xC5d12D23EfD7485f8114a5784d901F31aD086f9f"
// );
// const transactions = await provider.getTransactionCount(
//   "0xC5d12D23EfD7485f8114a5784d901F31aD086f9f"
// );
// const contract = '0xF042d69C505dB0a9ae67c6278B5c2090C4457bCD';
// const abi =
//   '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"AddedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"approvedHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"ApproveHash","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"handler","type":"address"}],"name":"ChangedFallbackHandler","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"guard","type":"address"}],"name":"ChangedGuard","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"ChangedThreshold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"}],"name":"DisabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"}],"name":"EnabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"module","type":"address"}],"name":"ExecutionFromModuleFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"module","type":"address"}],"name":"ExecutionFromModuleSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"ExecutionSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"RemovedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"},{"indexed":false,"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"SafeModuleTransaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"},{"indexed":false,"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseGas","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"gasPrice","type":"uint256"},{"indexed":false,"internalType":"address","name":"gasToken","type":"address"},{"indexed":false,"internalType":"address payable","name":"refundReceiver","type":"address"},{"indexed":false,"internalType":"bytes","name":"signatures","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"additionalInfo","type":"bytes"}],"name":"SafeMultiSigTransaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"SafeReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":false,"internalType":"address[]","name":"owners","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"},{"indexed":false,"internalType":"address","name":"initializer","type":"address"},{"indexed":false,"internalType":"address","name":"fallbackHandler","type":"address"}],"name":"SafeSetup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"msgHash","type":"bytes32"}],"name":"SignMsg","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"addOwnerWithThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hashToApprove","type":"bytes32"}],"name":"approveHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"approvedHashes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"changeThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dataHash","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signatures","type":"bytes"},{"internalType":"uint256","name":"requiredSignatures","type":"uint256"}],"name":"checkNSignatures","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dataHash","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signatures","type":"bytes"}],"name":"checkSignatures","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"prevModule","type":"address"},{"internalType":"address","name":"module","type":"address"}],"name":"disableModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"domainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"enableModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address","name":"refundReceiver","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"encodeTransactionData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address payable","name":"refundReceiver","type":"address"},{"internalType":"bytes","name":"signatures","type":"bytes"}],"name":"execTransaction","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"execTransactionFromModule","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"execTransactionFromModuleReturnData","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"start","type":"address"},{"internalType":"uint256","name":"pageSize","type":"uint256"}],"name":"getModulesPaginated","outputs":[{"internalType":"address[]","name":"array","type":"address[]"},{"internalType":"address","name":"next","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offset","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"getStorageAt","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address","name":"refundReceiver","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"getTransactionHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"isModuleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"prevOwner","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"removeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"requiredTxGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"handler","type":"address"}],"name":"setFallbackHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guard","type":"address"}],"name":"setGuard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"fallbackHandler","type":"address"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"address payable","name":"paymentReceiver","type":"address"}],"name":"setup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"signedMessages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"calldataPayload","type":"bytes"}],"name":"simulateAndRevert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"prevOwner","type":"address"},{"internalType":"address","name":"oldOwner","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"swapOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]';
// const myContract = new ethers.Contract(contract, abi, provider);
// console.log("balance:", ethers.formatEther(balance));
// console.log("count:", transactions);
//   console.log('myContract', myContract);
// };
// const login = async () => {
//   let signer = null;
//   let address = null;

//   let provider;
//   if (window.ethereum == null) {
//     // If MetaMask is not installed, we use the default provider,
//     // which is backed by a variety of third-party services (such
//     // as INFURA). They do not have private keys installed,
//     // so they only have read-only access
//     console.log('MetaMask not installed; using read-only defaults');
//     provider = ethers.getDefaultProvider();
//   } else {
//     // Connect to the MetaMask EIP-1193 object. This is a standard
//     // protocol that allows Ethers access to make all read-only
//     // requests through MetaMask.
//     provider = new ethers.BrowserProvider(window.ethereum);

//     // It also provides an opportunity to request access to write
//     // operations, which will be performed by the private key
//     // that MetaMask manages for the user.
//     signer = await provider.getSigner();
//     address = await signer.getAddress();
//     provider.getBalance(address).then((balance) => {
//       let etherString = ethers.formatEther(balance);
//       console.log('Balance: ' + etherString);
//     });
//   }
// };
</script>

<style lang="scss" scoped></style>
