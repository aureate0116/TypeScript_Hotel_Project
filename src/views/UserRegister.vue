<template>
  <span class="text-primary">享樂酒店，誠摯歡迎</span>
  <h1 class="mb-7">立即註冊</h1>

  <div class="row g-1 stepper mb-7">
    <div class="col-auto d-flex">
      <div class="d-flex flex-column align-items-center">
        <p
          class="dot rounded-circle bg-primary d-flex align-items-center justify-content-center mb-1"
        >
          <template v-if="userStep === 1">1</template>
          <template v-else> <span class="material-icons"> done </span> </template>
        </p>

        <p>輸入信箱及密碼</p>
      </div>
    </div>
    <div class="col d-flex align-items-center">
      <p class="border-bottom border-gray w-100"></p>
    </div>

    <div class="col-auto d-flex justify-content-end">
      <div
        class="d-flex flex-column align-items-center text-gray"
        :class="{ ' text-white': userStep === 2 }"
      >
        <p
          class="dot rounded-circle border border-gray bg-outline-gray d-flex align-items-center justify-content-center mb-1"
          :class="{ 'bg-primary ': userStep === 2 }"
        >
          2
        </p>
        <p>填寫基本資料</p>
      </div>
    </div>
  </div>

  <!-- Step 1 -->
  <div class="row flex-column" v-if="userStep === 1">
    <div class="col mb-3">
      <label class="form-label" for="email">電子信箱</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="hello@exsample.com"
        required
      />
    </div>
    <div class="col mb-3">
      <label class="form-label" for="password">密碼</label>
      <input type="password" class="form-control" id="email" placeholder="請輸入密碼" required />
    </div>
    <div class="col mb-3">
      <label class="form-label" for="password">確認密碼</label>
      <input
        type="password"
        class="form-control"
        id="email"
        placeholder="請再輸入一次密碼"
        required
      />
    </div>
    <div class="col mt-3">
      <button
        type="button"
        class="btn py-3 btn-white w-100 site_button text-gray"
        @click="changeStep(2)"
      >
        下一步
      </button>
    </div>
    <div class="col mb-3">
      <span class="pointer me-2">已經有會員了嗎?</span>
      <router-link
        :to="{ name: 'login' }"
        role="button"
        class="btn text-decoration-underline text-primary pointer"
        >立即登入</router-link
      >
    </div>
  </div>

  <!-- Step 2  -->
  <div class="row flex-column" v-if="userStep === 2">
    <div class="col mb-3">
      <label class="form-label" for="email">姓名</label>
      <input type="email" class="form-control" id="email" placeholder="請輸入姓名" required />
    </div>
    <div class="col mb-3">
      <label class="form-label" for="phone">手機號碼</label>
      <input type="text" class="form-control" id="phone" placeholder="請輸入手機號碼" required />
    </div>
    <div class="col mb-3">
      <label class="form-label" for="birthday">生日</label>
      <div class="d-flex">
        <select id="birthday" class="form-select mb-3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select id="birthday" class="form-select mb-3 mx-2">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select id="birthday" class="form-select mb-3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <div class="col mb-3">
      <label class="form-label" for="address">地址</label>
      <div class="d-flex">
        <select id="address" class="form-select mb-3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select id="address" class="form-select mb-3 mx-2">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <input type="text" class="form-control" id="address" placeholder="請輸入詳細地址" required />
    </div>
    <div class="col mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="pravicy" />
        <label class="form-check-label" for="pravicy"> 我已閱讀並同意本網站個資使用規範</label>
      </div>
    </div>
    <div class="col mt-3">
      <button
        type="button"
        class="btn py-3 btn-primary w-100 site_button text-white"
        @click="saveRegisterData"
      >
        完成註冊
      </button>
    </div>
    <div class="col mb-3">
      <span class="pointer me-2">已經有會員了嗎?</span>
      <router-link
        :to="{ name: 'login' }"
        role="button"
        class="btn text-decoration-underline text-primary pointer"
        >立即登入</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      userStep: 1 as number
    }
  },
  methods: {
    changeStep(num: number) {
      this.userStep = num
      console.log('this.userStep', this.userStep)
    },

    saveRegisterData() {}
  },
  mounted() {}
}
// export default defineComponent({
//     setup() {

//     },
// })
</script>
<style scoped="scss">
@import '@/assets/css/pages/LoginLayout.scss';
.stepper {
  .dot {
    width: 32px;
    height: 32px;
  }
}
</style>
