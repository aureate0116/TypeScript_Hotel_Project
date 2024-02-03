<template>
  <div class="container-fluid p-0 overflow-hidden">
    <nav
      class="navbar navbar-dark site_layout_navbar navbar-expand-lg fixed-top"
      :class="{ 'bg-black': $route.path !== '/' }"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand p-0" to="/"
          ><img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
            alt="Logo"
            height="72"
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-end">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li> -->
            <li class="nav-item px-3">
              <a class="nav-link text-white" href="#">客房旅宿</a>
            </li>
            <li class="nav-item px-3">
              <template v-if="getToken()">
                <router-link :to="{ name: 'userCenter' }" class="nav-link text-white" href="#">
                  <img src="@/assets/images/icons/user.png" alt="icon" height="20" class="me-1" />
                  {{ getUserAccount().name }}</router-link
                >
              </template>

              <template v-else>
                <router-link :to="{ name: 'login' }" class="nav-link text-white" href="#"
                  >會員登入</router-link
                >
              </template>
            </li>

            <li class="nav-item px-3">
              <button type="button" class="btn btn-primary text-white px-3 py-2">立即訂房</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="site_mainContent">
      <div class="content">
        <RouterView />
      </div>
    </main>

    <div class="container-fluid bg-black site_footer_top px-0 pt-4">
      <img src="@/assets/images/line2.png" alt="line" />
    </div>
    <footer class="site_footer bg-black text-white">
      <div class="row g-3 flex-column flex-lg-row">
        <div class="col-auto flex-fill">
          <img
            class="mb-7"
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
            alt="Logo"
            height="72"
          />

          <ul class="list-unstyled d-flex">
            <li class="me-3">
              <img src="@/assets/images/icons/LINE.png" alt="LINE" height="40" />
            </li>
            <li><img src="@/assets/images/icons/IG.png" alt="IG" height="40" /></li>
          </ul>
        </div>
        <div class="col-auto">
          <p class="mb-7">TEL <br />+886-7-1234567</p>
          <p>FAX<br />+886-7-1234567</p>
        </div>
        <div class="col-auto">
          <p class="mb-7">MAIL<br />elh@hexschool.com</p>
          <p>WEB<br />www.elhhexschool.com.tw</p>
        </div>
      </div>

      <div class="row mt-8 justify-content-between">
        <div class="col-auto">806023 台灣高雄市新興區六角路123號</div>
        <div class="col-auto">© 享樂酒店 2023 All Rights Reserved.</div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { userAuthStore } from '@/stores/userAuthStore.js'
export default {
  data() {
    return {
      isScrolled: false,
      // isLogin:false,
      userInfo: {} as object
    }
  },
  methods: {
    ...mapActions(userAuthStore, ['getUserAccount', 'getToken']),
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    if (this.getUserAccount()) {
      console.log('layout', this.getUserAccount())
      console.log('layout', this.getToken())
    }
  }
}
// export default defineComponent({
//     setup() {

//     },
// })
</script>
