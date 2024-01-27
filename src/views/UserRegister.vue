<template>
  <div class="row g-2 d-flex flex-column">
    <div class="col">
      <span class="text-primary">享樂酒店，誠摯歡迎</span>
      <h1 class="mb-7">立即開始旅程</h1>
    </div>
    <div class="col mb-3">
      <label class="form-label" for="email">電子信箱1231</label>
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

      <div class="mt-3 d-flex justify-content-between">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault"> 記住帳號</label>
        </div>
        <span class="text-decoration-underline text-primary pointer">忘記密碼？</span>
      </div>
    </div>
    <div class="col mb-3">
      <button type="button" class="btn py-2 btn-white w-100 site_button text-gray">會員登入</button>
    </div>
    <div class="col mb-3">
      <span class="pointer me-2">沒有會員嗎?</span>
      <span class="text-decoration-underline text-primary pointer">前往註冊</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // isScrolled: false
    }
  },
  methods: {
    // handleScroll() {
    //   this.isScrolled = window.scrollY > 0
    // }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  }
}
// export default defineComponent({
//     setup() {

//     },
// })
</script>
<style scoped="scss">
@import '@/assets/css/pages/LoginLayout.scss';
</style>
