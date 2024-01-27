<template>
  <div class="container-fluid p-0 overflow-hidden bg-black" style="min-height: 100vh">
    <nav class="navbar navbar-dark navbar-expand-lg py-lg-3 px-lg-7 bg-black">
      <div class="container-fluid flex-row">
        <router-link class="navbar-brand mx-0" to="/"
          ><img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
            alt="Logo"
            height="40"
        /></router-link>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <main class="user_login text-white">
      <!-- <div class="bg d-block d-md-none w-100">
        <img src="@/assets/images/line3.png" alt="bg-line" />
      </div> -->

      <div class="bg d-block">
        <img src="@/assets/images/line3.png" alt="bg-line" />
      </div>
      <div class="row px-4 px-md-0">
        <div class="col-6 start_block d-none d-md-block"></div>
        <div class="col-12 col-md-6 end_block pt-md-8">
          <div class="row g-2 d-flex flex-column">
            <div class="col">
              <span class="text-primary">享樂酒店，誠摯歡迎</span>
              <h1 class="mb-7">立即開始旅程</h1>
            </div>
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
              <input
                type="password"
                class="form-control"
                id="email"
                placeholder="請輸入密碼"
                required
              />

              <div class="mt-3 d-flex justify-content-between">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault"> 記住帳號</label>
                </div>
                <span class="text-decoration-underline text-primary pointer">忘記密碼？</span>
              </div>
            </div>
            <div class="col mb-3">
              <button type="button" class="btn py-2 btn-white w-100 site_button text-gray">
                會員登入
              </button>
            </div>
            <div class="col mb-3">
              <span class="pointer me-2">沒有會員嗎?</span>
              <span class="text-decoration-underline text-primary pointer">前往註冊</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isScrolled: false
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
@import '@/assets/css/pages/userLogin.scss';
</style>
