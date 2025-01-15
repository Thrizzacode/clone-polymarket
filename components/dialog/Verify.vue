<template>
  <UtilDialog
    v-model:showDialog="showVerifyDialog"
    :header="false"
    :width="360"
  >
    <template #header> </template>
    <template #main>
      <div class="flex flex-col items-center">
        <div class="size-108px relative">
          <img src="@/assets/images/blue_circle.png" alt="" />
          <img
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="@/assets/icons/rocket.svg"
            alt=""
          />
        </div>
        <div class="my-11px flex flex-col items-center font-bold">
          <p>已發送安全碼于您的電子郵件:</p>
          <p>xxx@xx.xx</p>
        </div>
        <div class="gap-5px text-32px flex font-bold">
          <input
            v-for="(input, index) in inputs"
            :key="index"
            ref="inputRefs"
            v-model="inputValues[index]"
            class="w-48px focus:outline-primary h-53px rounded-10px text-center text-black outline-none outline"
            type="text"
            maxlength="1"
            @input="handleInput(index)"
            @keydown="handleKeyDown($event, index)"
          />
        </div>

        <div class="center my-20px relative w-full">
          <div class="gap-10px center">
            <img class="size-20px" src="@/assets/icons/clock.svg" alt="" />
            <div class="text-gray">
              {{ formattedTime }}
            </div>
          </div>
          <a
            href="#"
            class="text-#7886A0 right-5px absolute underline underline-offset-2"
            >重新發送</a
          >
        </div>
        <button
          class="w-100% mb-12px h-47px rounded-4px bg-primary text-white"
          @click="confirm"
        >
          確認
        </button>
      </div>
    </template>
  </UtilDialog>
</template>

<script setup>
const { $notify } = useNuxtApp();
const showVerifyDialog = defineModel({
  type: Boolean,
  default: false,
});

const inputs = Array.from({ length: 6 }).fill(''); // 用來綁定每個input的數值
const inputValues = ref(inputs);
const inputRefs = ref([]); // 用來保存所有input的ref

const handleInput = (index) => {
  // 如果當前input填滿（長度為1），跳到下一個input
  if (
    inputValues.value[index].length === 1 &&
    index < inputRefs.value.length - 1
  ) {
    inputRefs.value[index + 1].focus();
  }
};

const handleKeyDown = (event, index) => {
  console.log(event, index);
  if (event.key === 'Backspace' && index > 0 && event.target.value === '') {
    inputRefs.value[index - 1].focus();
  }
};

//五分鐘倒數計時
const time = ref(300);
let timer = null;
const startTimer = () => {
  timer = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

// 格式化時間
const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${paddedMinutes}:${paddedSeconds}`;
});

const confirm = () => {
  $notify({
    title: '註冊成功',
    message: '歡迎Angela',
    type: 'info',
  });
  showVerifyDialog.value = false;
};

watch(showVerifyDialog, (val) => {
  console.log(val);
  if (val) {
    startTimer();
  } else {
    clearInterval(timer);
    time.value = 300;
  }
});
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 56px;
  border-radius: 4px;
  padding: 5px 20px;
  margin: 12px 0;
  background: #f7f7fd;
  color: #9d99ac;
}

input {
  background: #f7f7fd;
  color: #000;
}
</style>
