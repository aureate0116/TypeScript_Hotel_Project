<template>
  <!-- -->
  <div class="container-fluid p-0 bg-black">
    <div class="user_center_banner">
      <div class="container d-flex align-items-center">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/user1.png?raw=true"
          alt="Logo"
          height="144"
        />

        <h1 class="text-white ms-5">Hello，{{ userInfo.name }}</h1>
      </div>
    </div>

    <!-- 會員中心選單 tab  -->

    <div class="container">
      <ul class="nav user_center_menu py-8" id="userInfo" role="tablist">
        <li class="nav-item" role="presentation">
          <!-- userData -->
          <button
            class="nav-link active"
            id="userData-tab"
            data-bs-toggle="tab"
            data-bs-target="#userData"
            type="button"
            role="tab"
            aria-controls="userData"
            aria-selected="true"
          >
            個人資料
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <!-- userOrder -->
          <button
            class="nav-link"
            id="userOrder-tab"
            data-bs-toggle="tab"
            data-bs-target="#userOrder"
            type="button"
            role="tab"
            aria-controls="userOrder"
            aria-selected="false"
          >
            我的訂單
          </button>
        </li>
      </ul>

      <div class="tab-content w-100" id="userInfoContent">
        <div
          class="tab-pane fade show active"
          id="userData"
          role="tabpanel"
          aria-labelledby="userData-tab"
        >
          <div class="d-flex justify-content-between">
            <v-form ref="resetForm" v-slot="{ errors }" @submit="saveAccount">
              <div class="content_left bg-white p-7 rounded-4">
                <h5 class="fw-bold mb-7">修改密碼</h5>
                <div class="mb-3">
                  <h6>電子信箱</h6>
                  <p>{{ userInfo.email }}</p>
                </div>
                <div class="row w-100  align-items-center">
                  <div class="col">
                    <h6 class="fw-bold">電子信箱</h6>
                    <input type="password" value="testnumber" class="border-0" />
                  </div>
                  <div class="col text-end">
                    <a href="" class="" @click="resetPwd">重設</a>
                  </div>
                </div>

                <div class="mb-3">
                  <h6 class="fw-bold">舊密碼</h6>
                  <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <h6 class="fw-bold">新密碼</h6>
                  <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <h6 class="fw-bold">確認新密碼</h6>
                  <input type="password" class="form-control" />
                </div>
              </div>
            </v-form>

            <v-form ref="dataForm" v-slot="{ errors }" @submit="saveUserData"></v-form>
            <div class="content_right bg-white p-7 rounded-4 ms-7">
              <h5 class="fw-bold mb-7">基本資料</h5>
              <!-- <div class="mb-3">
                  <h6>電子信箱</h6>
                  <p>{{ userInfo.email }}</p>
                </div>
                <div>
                  <h6 class="fw-bold">電子信箱</h6>
                  <input type="password" value="testnumber" class="border-0" />
                </div>
                <div class=" ">
                  <a href="" class="" @click="resetPwd">重設</a>
                </div>

                <div class="mb-3">
                  <h6 class="fw-bold">舊密碼</h6>
                  <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <h6 class="fw-bold">新密碼</h6>
                  <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                  <h6 class="fw-bold">確認新密碼</h6>
                  <input type="password" class="form-control" />
                </div> -->
            </div>
          </div>
        </div>

        <!-- 我的訂單 -->
        <div class="tab-pane fade" id="userOrder" role="tabpanel" aria-labelledby="userOrder-tab">
          <div class="row">
            <div class="col bg-white p-7 rounded-4">我的訂單</div>
            <div class="col bg-white p-7 rounded-4">我的訂單</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from '@vue/composition-api'
import { mapActions, mapState } from 'pinia'
import { userAuthStore } from '@/stores/userAuthStore.js'
export default {
  data() {
    return {
      // isScrolled: false
      userName: '' as string,
      userInfo: {
        name: '' as string,
        email: '' as string
      },
      showResetPwd: false
    }
  },
  methods: {
    ...mapActions(userAuthStore, ['getUserAccount']),

    // handleScroll() {
    //   this.isScrolled = window.scrollY > 0
    // }

    resetPwd(): void {
      this.showResetPwd = true
    }
  },
  mounted() {
    this.userInfo = this.getUserAccount()
    // this.userName =
    console.log('userinfo', this.userInfo)
    console.log('document.cookie', document.cookie)
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped="scss">
@import '@/assets/css/layout/userLayout.scss';
</style>
