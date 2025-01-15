<template>
  <div v-if="visible" :class="['notification', type]">
    <div
      class="right-11px top-11px absolute cursor-pointer text-white"
      @click="close"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="gap-20px flex">
      <div>
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.5 30.4701V33.0001C60.4966 38.9303 58.5764 44.7005 55.0257 49.4501C51.475 54.1998 46.484 57.6744 40.7972 59.3558C35.1104 61.0373 29.0325 60.8353 23.4698 58.7802C17.9071 56.7251 13.1578 52.9269 9.93014 47.9521C6.70248 42.9772 5.16943 37.0923 5.55961 31.175C5.9498 25.2577 8.24232 19.625 12.0953 15.1171C15.9482 10.6091 21.1552 7.46742 26.9395 6.16052C32.7239 4.85362 38.7757 5.45154 44.1925 7.86512"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M60.5 11L33 38.5275L24.75 30.2775"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="text-20px text-white">
        <h4>{{ title }}</h4>
        <p>{{ message }}</p>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

// 定义传入的 props
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'success', // success, error, warning, info
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(['close']);

const visible = ref(true);
const timeLeft = ref(props.duration);
const progress = ref(100);
let timer;

const close = () => {
  visible.value = false;
  emit('close');
};

const updateProgress = () => {
  timeLeft.value -= 1000;
  progress.value = (timeLeft.value / props.duration) * 100;

  if (timeLeft.value === -1000) {
    clearInterval(timer);
    close();
  }
};
// 開始倒數計時
const startTimer = () => {
  timer = setInterval(updateProgress, 1000);
};

onMounted(() => {
  let first = setTimeout(() => {
    timeLeft.value -= 1000;
    progress.value = (timeLeft.value / props.duration) * 100;
    clearTimeout(first);
  }, 100);
  startTimer();
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 145px;
  left: 20px;
  width: 300px;
  height: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  transition: opacity 0.3s ease-in-out;
  border: 2px solid #5b7d8b;
  background-color: #002130b2;
}
.notification.success {
  background-color: #28a745;
}
.notification.error {
  background-color: #dc3545;
}
.notification.warning {
  background-color: #ffc107;
}
.notification.info {
  color: #00aeff;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #869aa4;
  border-radius: 30px;
}

.progress {
  height: 100%;
  background-color: #00aeff;
  border-radius: 30px;
  transition: width 1s linear;
}
</style>
