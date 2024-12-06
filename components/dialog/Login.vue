<template>
  <UtilDialog v-model:showDialog="showLoginDialog">
    <template #header>
      <div class="flex flex-col items-center">
        <div class="text-24px text-content font-semibold">登錄</div>
        <div class="text-gray">
          沒有帳戶？<a href="#" class="underline">註冊</a>
        </div>
      </div>
    </template>
    <template #main>
      <Form @submit="onSubmit">
        <div class="field">
          <div class="gap-10px flex">
            <p>帳號</p>
            <ErrorMessage class="text-red" name="帳號" />
          </div>
          <Field name="帳號" rules="required" placeholder="請輸入用戶名" />
        </div>

        <div class="field relative">
          <div class="gap-10px flex">
            <p>密碼</p>
            <ErrorMessage class="text-red" name="密碼" />
          </div>
          <Field
            name="密碼"
            :type="showPassword ? 'text' : 'password'"
            rules="required"
          />
          <img
            class="right-10px absolute top-1/2 -translate-y-1/2 cursor-pointer"
            width="24"
            src="@/assets/icons/closeEyes.svg"
            alt=""
            @click="showPassword = !showPassword"
          />
        </div>

        <div class="gap-10px text-12px text-gray mb-12px flex items-center">
          <input type="checkbox" />
          <p>記住並自動登入</p>
        </div>
        <button class="w-390px h-47px rounded-4px bg-primary text-white">
          登錄
        </button>
      </Form>
    </template>
    <template #footer> </template>
  </UtilDialog>
</template>

<script setup>
const showLoginDialog = defineModel({
  type: Boolean,
  default: false,
});

const showPassword = ref(false);

// 註冊
const onSubmit = (value, { resetForm }) => {
  console.log(value);
  resetForm();
};
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
