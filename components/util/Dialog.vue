<template>
  <dialog
    v-show="dialogValue"
    id="dialog"
    ref="dialog"
    :style="{ width: formatSize(width) }"
    @click="handleClickOutSide"
  >
    <header class="h-74px border-b-1px border-b-btn_gray relative w-full">
      <slot name="header">Header</slot>
      <img
        class="right-20px absolute top-1/2 -translate-y-1/2 cursor-pointer"
        src="@/assets/icons/close.svg"
        alt=""
        @click="handleCloseWindow"
      />
    </header>
    <main class="grow-1 p-12px">
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
});

const formatSize = (size) => `${size}px`;

const dialog = ref(null);
const dialogValue = defineModel('showDialog', {
  type: Boolean,
  default: false,
});

const handleCloseWindow = () => {
  dialog.value.close();
  dialogValue.value = false;
};

const handleClickOutSide = ({ clientX: x, clientY: y }) => {
  if (!dialog.value) return;

  const { left, right, top, bottom } = dialog.value.getBoundingClientRect();
  if (x < left || x > right || y < top || y > bottom) dialogValue.value = false;
};

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
