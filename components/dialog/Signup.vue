<template>
  <UtilDialog v-model:showDialog="showSignupDialog">
    <template #header>
      <div class="center flex h-full flex-col">
        <div class="text-24px text-content font-semibold">{{ title }}</div>
      </div>
    </template>
    <template #main>
      <!-- 註冊 -->
      <Form v-if="status === 1" @submit="onSubmit">
        <div class="field">
          <div class="gap-10px flex">
            <p>您的電子郵件地址</p>
            <ErrorMessage class="text-red" name="電子郵件" />
          </div>
          <Field
            v-model="emailValue"
            type="email"
            name="電子郵件"
            rules="required|email"
            placeholder="請輸入電子郵件"
          />
        </div>

        <button class="w-390px h-47px rounded-4px bg-primary text-white">
          建立帳戶
        </button>
        <div class="center text-gray py-20px">請到信箱收取驗證碼</div>
      </Form>

      <!-- 請求代碼 -->
      <div v-if="status === 2" class="mb-15px flex flex-col">
        <UtilLoading class="my-26px" />
        <p class="text-gray">將此代碼輸入到您剛剛收到的電子郵件中</p>
      </div>

      <!-- 檢查電子郵件 -->
      <div
        v-if="status === 3"
        class="mb-15px center text-12px gap-5px flex-col"
      >
        <p>請使用郵件內發送到的鏈結登錄</p>
        <p>********0730@gmail.com</p>
        <p class="text-gray">然後輸入此安全代碼:</p>
        <div class="w-200px h-47px bg-#F2F5FB rounded-4px flex items-center">
          <div class="text-24px center tracking-5px w-1/2">
            {{ oneTimeCode }}
          </div>
          <div class="h-80% w-1px bg-gray"></div>
          <div
            class="center gap-10px w-1/2 cursor-pointer"
            @click="copy(oneTimeCode)"
          >
            <img src="@/assets/icons/copy_blue.svg" alt="" />
            <p class="text-#004DE7">Copy</p>
          </div>
        </div>
      </div>

      <!-- 建立帳戶 -->
      <div v-if="status === 4" class="mb-15px text-12px gap-5px flex flex-col">
        <p class="text-14px font-semibold">
          選擇顯示名稱<span class="text-red">*</span>
        </p>
        <Form @submit="onSubmit">
          <div class="field">
            <div class="gap-10px flex">
              <p>用戶名</p>
              <ErrorMessage class="text-red" name="用戶名" />
            </div>
            <Field
              type="text"
              name="用戶名"
              rules="required"
              placeholder="請輸入用戶名"
            />
          </div>
        </Form>
        <p class="text-gray">這是公開的，您以後可以隨時更改它</p>
        <div class="gap-10px flex items-center">
          <input type="checkbox" class="size-24px" />
          <p class="font-semibold">
            透過交易，您同意使用條款並證明您不是美國人，不在
            美國，也不是受限制司法管轄區的居民或所在地。
          </p>
        </div>
      </div>
    </template>
    <template #footer> </template>
  </UtilDialog>
</template>

<script setup>
import { useClipboard } from '@vueuse/core';
const showSignupDialog = defineModel({
  type: Boolean,
  default: false,
});

const title = ref('註冊');
const status = ref(1);
const oneTimeCode = '239';

// 複製安全碼
const { text, copy, copied } = useClipboard();

watch(copied, (copyVal) => {
  if (copyVal) {
    console.log('copied', text.value);
    alert('已複製' + oneTimeCode);
    title.value = '建立帳戶';
    status.value = 4;
  }
});

// 註冊
const onSubmit = (value, { resetForm }) => {
  console.log(value);
  resetForm();
  title.value = '請求代碼';
  status.value = 2;
  setTimeout(() => {
    status.value = 3;
    title.value = '檢查您的電子郵件';
    window.open('verify.html', '_blank');
  }, 1500);
};

watch(showSignupDialog, (val) => {
  if (val) {
    title.value = '註冊';
    status.value = 1;
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
  color: #9d99ac;
}
</style>
