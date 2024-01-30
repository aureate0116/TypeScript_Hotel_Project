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
  <v-form ref="step1Form" v-slot="{ errors }" @submit="changeStep">
    <div class="row flex-column" v-if="userStep === 1">
      <div class="col mb-3">
        <label class="form-label" for="email" v-required="true">電子信箱</label>
        <v-field
          name="email"
          id="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          label="帳號"
          placeholder="hello@exsample.com"
          v-model="registerData.email"
          rules="required"
        />
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="col mb-3">
        <label class="form-label" for="password" v-required="true">密碼</label>
        <v-field
          name="password"
          label="密碼"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['password'] }"
          id="password"
          placeholder="請輸入密碼"
          v-model="registerData.password"
          rules="required|min:8|password"
        />
        <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="col mb-3">
        <label class="form-label" for="confirmPassword" v-required="true">確認密碼</label>
        <v-field
          name="confirmPassword"
          label="確認密碼"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['confirmPassword'] }"
          id="confirmPassword"
          placeholder="請再輸入一次密碼"
          v-model="registerData.confirmPassword"
          rules="required|confirmed:@password"
        />
        <ErrorMessage name="confirmPassword" class="invalid-feedback"></ErrorMessage>
        <!-- <pre>{{ errors }}</pre> -->
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
  </v-form>

  <!-- Step 2  -->
  <v-form ref="step2Form" v-slot="{ errors }" @submit="saveRegisterData()">
    <div class="row flex-column" v-if="userStep === 2">
      <div class="col mb-3">
        <label class="form-label" for="name" v-required="true">姓名</label>
        <v-field
          name="name"
          label="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['name'] }"
          id="name"
          placeholder="輸入姓名"
          v-model="registerData.name"
          rules="required"
        />
        <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="col mb-3">
        <label class="form-label" for="phone" v-required="true">手機號碼</label>
        <v-field
          name="phone"
          label="手機號碼"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['phone'] }"
          id="phone"
          placeholder="請輸入手機號碼"
          v-model="registerData.phone"
          rules="required|phone"
        />
        <ErrorMessage name="phone" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="col mb-3">
        <label class="form-label" for="birthday" label="生日" v-required="true">生日</label>

        <div class="row g-2">
          <div class="col-md-4">
            <v-field
              name="year"
              as="select"
              label="年"
              id="birthday"
              class="form-select"
              :class="{ 'is-invalid': errors['year'] }"
              rules="required"
              v-model="birthday.year"
            >
              <option value="" selected>請選擇</option>
              <option
                v-for="item in 100"
                :key="item"
                :value="new Date().getFullYear() - (100 - item)"
              >
                {{ new Date().getFullYear() - (100 - item) }} 年
              </option>
            </v-field>
          </div>
          <div class="col-md-4">
            <v-field
              name="month"
              as="select"
              label="月"
              id="birthday"
              class="form-select"
              :class="{ 'is-invalid': errors['month'] }"
              rules="required"
              v-model="birthday.month"
            >
              <option value="" selected>請選擇</option>
              <option v-for="item in 12" :key="item" :value="item">{{ item }} 月</option>
            </v-field>
          </div>
          <div class="col-md-4">
            <v-field
              name="day"
              as="select"
              label="日"
              id="birthday"
              class="form-select"
              :class="{ 'is-invalid': errors['day'] }"
              rules="required"
              v-model="birthday.day"
            >
              <option value="" selected>請選擇</option>
              <option v-for="item in dayRange" :key="item" :value="item">{{ item }} 日</option>
            </v-field>
          </div>
          <div class="col-md-12 d-flex flex-row">
            <!-- <ErrorMessage
              :name="`year` || `month` || `day`"
              class="invalid-feedback"
            ></ErrorMessage> -->
            <ErrorMessage name="year" class="invalid-feedback"></ErrorMessage>
            <ErrorMessage name="month" class="invalid-feedback"></ErrorMessage>
            <ErrorMessage name="day" class="invalid-feedback"></ErrorMessage>
          </div>
        </div>
      </div>

      <div class="col mb-3">
        <label class="form-label" for="address" label="地址" v-required="true">地址</label>

        <div class="row g-2">
          <div class="col-md-6">
            <v-field
              name="city"
              as="select"
              label="縣市"
              id="address"
              class="form-select"
              :class="{ 'is-invalid': errors['city'] }"
              v-model="addressSelected.city"
              rules="required"
            >
              <option value="" selected>請選擇</option>
              <option v-for="city in cityArray" :key="city" :value="city">{{ city }}</option>
            </v-field>
          </div>
          <div class="col-md-6">
            <v-field
              name="county"
              as="select"
              label="鄉鎮區"
              id="address"
              class="form-select"
              :class="{ 'is-invalid': errors['county'] }"
              v-model="addressSelected.county"
              rules="required"
            >
              <option value="" selected>請選擇</option>
              <option v-for="county in countyArray" :key="county.countyName" :value="county">
                {{ county.countyName }}
              </option>
            </v-field>
          </div>
          <div class="col-md-12">
            <v-field
              name="detail"
              type="text"
              label="詳細地址"
              class="form-control"
              :class="{ 'is-invalid': errors['detail'] }"
              id="address"
              placeholder="請輸入詳細地址"
              v-model="addressSelected.detail"
              rules="required"
            />
            <!-- <ErrorMessage
              :name="`city` || `county` || `detail`"
              class="invalid-feedback"
            ></ErrorMessage> -->
            <ErrorMessage name="city" class="invalid-feedback"></ErrorMessage>
            <ErrorMessage name="county" class="invalid-feedback"></ErrorMessage>
            <ErrorMessage name="detail" class="invalid-feedback"></ErrorMessage>
          </div>
        </div>
      </div>
      <div class="col mb-3">
        <div class="form-check">
          <label class="form-check-label" for="pravicy"> 我已閱讀並同意本網站個資使用規範</label>
          <v-field
            name="isCheckRule"
            label="個資使用規範"
            :class="{ 'is-invalid': errors['isCheckRule'] }"
            class="form-check-input"
            type="checkbox"
            rules="required"
            id="pravicy"
            @click="updateValue"
            v-model="registerData.isCheckRule"
            value="true"
          />

          <ErrorMessage name="isCheckRule" class="invalid-feedback"></ErrorMessage>
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
  </v-form>
</template>

<script lang="ts">
// TWzipcode.js https://code.essoduke.org/twzipcode/#n-download
// import Twzipcode from 'twzipcode.js'
import ZipCodeMap from '@/utils/zipcodes'
import Swal from 'sweetalert2'

const apiUrl = import.meta.env.VITE_BACKEND_HOST

import { defineRule } from 'vee-validate'

defineRule('phone', (value: string) => {
  const phoneNumberRegex = /^09\d{8}$/i //
  return phoneNumberRegex.test(value)
})

defineRule('password', (value: string) => {
  const phoneNumberRegex = /^(?=.*[A-Za-z]).*$/ //
  return phoneNumberRegex.test(value)
})
// 處理年月日
// const year = new Date().getFullYear()
// const month = 1 as number
// const monthDays = 31 as number

interface postSignUpData {
  name: string
  email: string
  password: string
  // confirmPassword: string;
  // name: string;
  phone: string
  birthday: string
  // isCheckRule: boolean;
  address: {
    zipcode: number
    detail: string
  }
}

export default {
  data() {
    return {
      userStep: 1 as number,
      registerData: {
        email: '' as string,
        password: '' as string,
        confirmPassword: '' as string,
        name: '' as string,
        phone: '' as string,
        birthday: '' as string,
        // address: '' as string
        isCheckRule: false as boolean
      },

      //
      organizedData: {} as {
        [key: string]: { CityName: string; countyList: { ZipCode: string; countyName: string }[] }
      },
      cityArray: [] as string[],

      // 綁定的地址
      addressSelected: {
        city: '' as string,
        county: '' as string,
        zipcode: '' as string,
        detail: '' as string
      },

      // 日期區間
      dayRange: 0 as number,

      // 用於綁定選擇的生日
      birthday: {
        year: '' as string,
        month: '' as string,
        day: '' as string
      }
    }
  },
  computed: {
    countyArray() {
      return this.addressSelected.city
        ? this.organizedData[this.addressSelected.city]?.countyList || []
        : []
    }
  },
  watch: {
    //依據county 取得zipcode
    'addressSelected.county': {
      handler(newValue) {
        console.log('countyArray', this.countyArray)
        console.log('newValue', newValue)

        let array = this.countyArray.filter((item) => {
          console.log('item', item)
          return item.countyName == newValue.countyName
        })

        console.log('array', array)
        if (array.length > 0) {
          this.addressSelected.zipcode = array[0].ZipCode
          console.log('this.addressSelected.zipcode', this.addressSelected.zipcode)
        }
      },
      immediate: true
    },

    'birthday.year': { handler: 'handleBirthdayChange', immediate: true },
    'birthday.month': { handler: 'handleBirthdayChange', immediate: true },
    'birthday.day': { handler: 'handleBirthdayChange', immediate: true }
  },
  methods: {
    // 切換表單步驟 & 驗證信箱是否已註冊過
    changeStep(num: number): void {
      if (this.$refs.step1Form) {
        ;(this.$refs.step1Form as any).validate().then((result: { valid: boolean }) => {
          if (result.valid) {
            // this.userStep = num
            // console.log('this.userStep', this.userStep)
            // 先驗證 email 是否註冊過
            let headers = {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }

            let data = {
              email: this.registerData.email
            }

            this.axios
              .post(`${apiUrl}verify/email`, data, { headers })
              .then((res) => {
                if (res.data.status) {
                  // 已存在
                  if (res.data.result.isEmailExists) {
                    Swal.fire({
                      icon: 'error',
                      iconColor: '#dc3545',
                      title: '此信箱已註冊過',
                      showConfirmButton: false,
                      width: '400px',
                      customClass: {
                        title: 'fs-4'
                      }
                    })
                  } else {
                    // 切換表單步驟
                    this.userStep = num
                  }
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
    },

    // 儲存資料
    saveRegisterData(): void {
      if (this.$refs.step2Form) {
        let headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }

        let data: postSignUpData = {
          name: this.registerData.name,
          email: this.registerData.email,
          password: this.registerData.password,
          phone: this.registerData.phone,
          birthday: this.registerData.birthday,
          address: {
            zipcode: Number(this.addressSelected.zipcode),
            detail: this.addressSelected.detail
          }
        }

        console.log('---data', data)
        ;(this.$refs.step2Form as any).validate().then((result: any) => {
          if (result.valid) {
            this.axios
              .post(`${apiUrl}user/signup`, data, { headers })
              .then((res) => {
                if (res.data.status) {
                  console.log('res', res)
                  console.log('res', JSON.stringify(res.data))
                  // document.cookie = `loginToken=${res.data.token};  path=/ ;`
                  // document.cookie = `userInfo=${res.data.result};  path=/ ;`

                  Swal.fire({
                    icon: 'success',
                    iconColor: '#299F65',
                    title: '註冊成功!',
                    showConfirmButton: false,
                    width: '400px',
                    customClass: {
                      title: 'fs-4'
                    }
                  })
                  this.$router.push({ name: 'login' })
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

                  this.userStep = 1
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
    },

    // 判斷平年閏年
    isLeapYear(year: number): boolean {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    },
    // 判斷日期範圍
    updateDayRange(year: any, month: any): void {
      const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12]
      this.dayRange =
        month === 2 ? (this.isLeapYear(year) ? 29 : 28) : monthsWith31Days.includes(month) ? 31 : 30
    },
    //處理生日日期格式
    handleBirthdayChange(newVal: any): void {
      this.updateDayRange(this.birthday.year, newVal)
      const dateObject = new Date(
        Number(this.birthday.year),
        Number(this.birthday.month) - 1,
        Number(this.birthday.day)
      )
      this.registerData.birthday = dateObject.toISOString()
      console.log('this.registerData.birthday', this.registerData.birthday)
    },

    // 處理地址
    handleAddressSelect(): void {
      ZipCodeMap.forEach((item: any) => {
        const { city, county, zipcode } = item

        if (!this.organizedData[city]) {
          this.organizedData[city] = {
            CityName: city,
            countyList: []
          }
        }

        this.organizedData[city].countyList.push({
          ZipCode: String(zipcode),
          countyName: county
        })
      })
      this.cityArray = Object.keys(this.organizedData)

      console.log('123', Object.values(this.organizedData)[0])
      console.log(' this.cityArray', this.cityArray)
    },

    //
    updateValue() {
      this.registerData.isCheckRule = !this.registerData.isCheckRule.toString()
      console.log(
        'this.registerData.isCheckRule',
        this.registerData.isCheckRule,
        typeof this.registerData.isCheckRule
      )
    }
  },
  mounted() {
    this.handleAddressSelect()
  }
}
</script>
<style scoped="scss">
@import '@/assets/css/layout/loginLayout.scss';
</style>
