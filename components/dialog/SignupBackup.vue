<template>
  <UtilDialog v-model:showDialog="showSignupDialog">
    <template #header>
      <div class="flex flex-col items-center">
        <div class="text-24px text-content font-semibold">註冊</div>
        <div class="text-gray">
          注册已经有帐户？<a href="#" class="underline">在此登入</a>
        </div>
      </div>
    </template>
    <template #main>
      <Form @submit="onSubmit">
        <div class="field">
          <div class="gap-10px flex">
            <p>用戶名</p>
            <ErrorMessage class="text-red" name="用戶名" />
          </div>
          <Field name="用戶名" rules="required" placeholder="請輸入用戶名" />
        </div>

        <div class="field">
          <div class="gap-10px flex">
            <p>電子郵件</p>
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

        <div class="field">
          <div class="gap-10px flex">
            <p>確認電子郵件</p>
            <ErrorMessage class="text-red" name="確認電子郵件" />
          </div>
          <Field type="email" name="確認電子郵件" :rules="sameEmail" />
        </div>
        <div class="field relative">
          <div class="gap-10px flex">
            <p>密碼</p>
            <ErrorMessage class="text-red" name="密碼" />
          </div>
          <Field
            v-model="passwordValue"
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
        <div class="field relative">
          <div class="gap-10px flex">
            <p>確認密碼</p>
            <ErrorMessage class="text-red" name="確認密碼" />
          </div>
          <Field
            name="確認密碼"
            :type="showPasswordConfirm ? 'text' : 'password'"
            :rules="samePassword"
          />
          <img
            class="right-10px absolute top-1/2 -translate-y-1/2 cursor-pointer"
            width="24"
            src="@/assets/icons/closeEyes.svg"
            alt=""
            @click="showPasswordConfirm = !showPasswordConfirm"
          />
        </div>
        <div class="gap-10px text-12px text-gray flex items-center">
          <input v-model="confirmTerms" type="checkbox" />
          <p>我同意<a href="#" class="text-primary underline">條款和條件</a></p>
        </div>
        <div class="gap-10px text-12px text-gray mb-12px flex items-center">
          <input v-model="confirmSubscribe" type="checkbox" />
          <p>
            我希望收到PolygonScan時事通訊，並了解我可以隨時<a
              href="#"
              class="text-primary underline"
              >取消訂閱</a
            >。
          </p>
        </div>
        <button
          class="w-390px h-47px rounded-4px"
          :class="
            buttonStatus
              ? 'bg-btn_gray text-gray cursor-not-allowed'
              : 'bg-primary text-white'
          "
          :disabled="buttonStatus"
        >
          建立帳戶
        </button>
      </Form>
    </template>
    <template #footer> </template>
  </UtilDialog>
</template>

<script setup>
const showSignupDialog = defineModel({
  type: Boolean,
  default: false,
});

const showPassword = ref(false);
const showPasswordConfirm = ref(false);
const emailValue = ref('');
const passwordValue = ref('');
const confirmTerms = ref(false);
const confirmSubscribe = ref(false);
const buttonStatus = ref(true);

const sameEmail = (value) => {
  if (!value) {
    return '電子郵件是必须的';
  }
  if (emailValue.value !== value) {
    return '電子郵件不一致';
  }
  return true;
};

const samePassword = (value) => {
  if (!value) {
    return '密碼是必须的';
  }
  if (passwordValue.value !== value) {
    return '密碼不一致';
  }
  return true;
};

// 註冊
const onSubmit = (value, { resetForm }) => {
  console.log(value);
  resetForm();
};

//監聽按鈕狀態
watch(
  () => confirmTerms.value && confirmSubscribe.value,
  (val) => {
    if (val) {
      buttonStatus.value = false;
    } else {
      buttonStatus.value = true;
    }
  }
);
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
