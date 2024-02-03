<template>
  <span class="text-primary">享樂酒店，誠摯歡迎</span>
  <h1 class="mb-7">立即開始旅程</h1>

  <v-form ref="myForm" v-slot="{ errors }" @submit="userLogin()">
    <div class="row g-2 d-flex flex-column">
      <div class="col mb-3">
        <label class="form-label" for="email">電子信箱</label>
        <v-field
          name="email"
          id="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          label="帳號"
          placeholder="hello@exsample.com"
          v-model="userAccount.email"
          rules="required"
        />
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="col mb-3">
        <label class="form-label" for="password">密碼</label>
        <v-field
          name="password"
          type="password"
          label="密碼"
          class="form-control"
          :class="{ 'is-invalid': errors['password'] }"
          id="password"
          placeholder="請輸入密碼"
          v-model="userAccount.password"
          rules="required"
        />
        <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
        <div class="mt-3 d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="isRememberAccount"
              v-model="loginSetting.isRememberAccount"
            />
            <label class="form-check-label" for="isRememberAccount"> 記住帳號</label>
          </div>
          <span class="text-decoration-underline text-primary pointer">忘記密碼？</span>
        </div>
      </div>
      <div class="col mb-3">
        <button
          type="button"
          class="btn py-3 btn-white w-100 site_button text-gray"
          @click="userLogin"
        >
          會員登入
        </button>
      </div>
      <div class="col mb-3">
        <span class="pointer me-2">沒有會員嗎?</span>
        <router-link
          :to="{ name: 'register' }"
          role="button"
          class="text-decoration-underline text-primary pointer"
          >前往註冊</router-link
        >
      </div>
    </div>
  </v-form>
</template>

<script lang="ts">
import Swal from 'sweetalert2'

const apiUrl = import.meta.env.VITE_BACKEND_HOST
import { mapActions } from 'pinia'
import { userAuthStore } from '@/stores/userAuthStore.js'
// import { useAlertStore } from '@/stores/alertStore'

export default {
  data() {
    return {
      userAccount: {
        email: '' as string,
        password: '' as string //test1234
      },
      loginSetting: {
        isRememberAccount: false
      }
    }
  },
  methods: {
    ...mapActions(userAuthStore, ['getUserEmail']),

    userLogin() :void {
      let data = this.userAccount
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
      console.log('this.userAccount', this.userAccount)
      console.log('data', data)
      //   console.log('apiUrl', apiUrl)
      if (this.$refs.myForm) {
        ;(this.$refs.myForm as any).validate().then((result: { valid: boolean }) => {
          if (result.valid) {
            this.axios
              .post(`${apiUrl}user/login`, data, { headers })
              .then((res) => {
                console.log('res', res)
                console.log('res', JSON.stringify(res.data))

                if (res.data.status) {
                  console.log('res', res)
                  console.log('res', JSON.stringify(res.data))
                  document.cookie = `loginToken=${res.data.token};  path=/ ;`
                  document.cookie = `userInfo=${JSON.stringify(res.data.result)};  path=/ ;`

                  this.$router.push({ name: 'userCenter' })
                } else {
                  Swal.fire({
                    icon: 'error',
                    iconColor: '#dc3545',
                    title: res.data.message,
                    showConfirmButton: false,
                    width: '400px',
                    customClass: {
                      title: 'fs-4'
                    }
                  })
                }
              })
              .catch((err) => {
                console.log('err', err)
                Swal.fire({
                  icon: 'error',
                  iconColor: '#C22538',
                  title: err.response.data.message,
                  showConfirmButton: false,
                  width: '400px',
                  customClass: {
                    title: 'fs-4'
                  }
                })
              })
          }
        })
      }

      // 是否記住帳號判斷
      if (this.loginSetting.isRememberAccount == true) {
        document.cookie = `userEmail=${this.userAccount.email};  path=/ ;`
      } else {
        document.cookie = 'userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      }
    }
  },
  mounted() {
    // let rem = this.getUserEmail()
    // console.log('rem', rem)
    if (this.getUserEmail()) {
      this.loginSetting.isRememberAccount = true
      const userEmail = this.getUserEmail()
      this.userAccount.email = userEmail !== null ? userEmail : ''
    }
  }
}
</script>
<style scoped="scss">
@import '@/assets/css/utils/utils.scss';
@import '@/assets/css/layout/LoginLayout.scss';
</style>
