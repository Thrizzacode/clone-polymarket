<template>
  <dialog
    v-show="dialogValue"
    id="dialog"
    ref="dialog"
    :style="{ width: formatSize(width) }"
    @click="handleClickOutSide"
  >
    <header
      v-if="header"
      class="h-74px border-b-1px border-b-btn_gray relative w-full"
    >
      <slot name="header">Header</slot>
      <img
        class="right-20px absolute top-1/2 -translate-y-1/2 cursor-pointer"
        src="@/assets/icons/close.svg"
        alt=""
        @click="handleCloseWindow"
      />
    </header>
    <main class="grow-1 p-11px">
      <slot name="main">Main</slot>
    </main>
  </dialog>
</template>

<script setup>
defineProps({
  width: {
    type: Number,
    default: 430,
  },
  header: {
    type: Boolean,
    default: true,
  },
});

const formatSize = (size) => `${size}px`;
let isClickOutside = false;

const dialog = ref(null);
const dialogValue = defineModel('showDialog', {
  type: Boolean,
  default: false,
});

const handleCloseWindow = () => {
  dialog.value.close();
  dialogValue.value = false;
};

// 鼠标按下时，判断是否点击在 dialog 外部
const handleMouseDown = (event) => {
  const rect = dialog.value?.getBoundingClientRect();
  if (!rect) return;
  isClickOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
};

// 鼠标释放时，判断是否依然在 dialog 外部，并关闭对话框
const handleMouseUp = (event) => {
  if (!isClickOutside) return;

  const rect = dialog.value?.getBoundingClientRect();
  if (!rect) return;

  const isReleaseOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (isReleaseOutside) {
    handleCloseWindow();
  }
};

// 监听 mousedown 和 mouseup
const addEventListeners = () => {
  dialog.value?.addEventListener('mousedown', handleMouseDown);
  dialog.value?.addEventListener('mouseup', handleMouseUp);
};

// 移除事件监听
const removeEventListeners = () => {
  dialog.value?.removeEventListener('mousedown', handleMouseDown);
  dialog.value?.removeEventListener('mouseup', handleMouseUp);
};

// 生命周期钩子
onMounted(() => {
  addEventListeners();
});

onBeforeUnmount(() => {
  removeEventListeners();
});

watch(
  () => dialogValue.value,
  (val) => {
    console.log(val);
    if (val) {
      dialog.value.showModal();
    } else {
      dialog.value.close();
    }
  }
);
</script>

<style scoped>
#dialog {
  border-radius: 20px;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
</style>
