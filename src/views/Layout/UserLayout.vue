<template>
  <!-- -->
  <div class="container-fluid p-0 bg-black">
    <div class="user_center_banner">
      <div class="container d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/user1.png?raw=true"
          alt="img"
        />

        <h1 class="text-white">Hello，{{ userInfo?.name }}</h1>
      </div>
    </div>

    <!-- 會員中心選單 tab  -->

    <div class="container">
      <ul class="nav user_center_menu py-7 py-lg-8" id="userInfo" role="tablist">
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
          <div class="d-flex flex-column flex-lg-row justify-content-between">
            <v-form
              ref="resetForm"
              v-slot="{ errors }"
              @submit.prevent="saveAccount"
              class="content_left"
            >
              <div class="content_left bg-white p-5 p-md-7 rounded-4">
                <h5 class="fw-bold mb-7">修改密碼</h5>
                <div class="mb-3">
                  <h6>電子信箱</h6>
                  <p class="fw-bold">{{ userInfo.email }}</p>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col">
                    <h6>密碼</h6>
                    <div v-if="!showResetPwd">
                      <input type="password" value="testnumber" class="border-0 fw-bold" disabled />
                    </div>
                  </div>
                  <div class="col text-end">
                    <button
                      class="btn border-0 text-primary text-decoration-underline"
                      @click.prevent="resetPwd"
                    >
                      重設
                    </button>
                  </div>
                </div>

                <div class="mb-3" v-if="showResetPwd">
                  <h6 class="fw-bold">舊密碼</h6>
                  <!-- <v-field
                    type="password"
                    class="form-control"
                    placeholder="請輸入舊密碼"
                    v-model="userInfo.oldPassword"
                  /> -->

                  <v-field
                    name="oldPassword"
                    label="舊密碼"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errors['oldPassword'] }"
                    id="oldPassword"
                    placeholder="請輸入舊密碼"
                    v-model="userInfo.oldPassword"
                    rules="required|min:8|password"
                  />
                  <ErrorMessage name="oldPassword" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="mb-3" v-if="showResetPwd">
                  <h6 class="fw-bold">新密碼</h6>
                  <!-- <v-field
                    type="password"
                    class="form-control"
                    placeholder="請輸入新密碼"
                    v-model="userInfo.newPassword"
                  /> -->
                  <v-field
                    name="newPassword"
                    label="新密碼"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errors['newPassword'] }"
                    id="newPassword"
                    placeholder="請輸入新密碼"
                    v-model="userInfo.newPassword"
                    rules="required|min:8|password"
                  />
                  <ErrorMessage name="newPassword" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="mb-3" v-if="showResetPwd">
                  <h6 class="fw-bold">確認新密碼</h6>
                  <v-field
                    name="confirmPassword"
                    label="確認新密碼"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errors['confirmPassword'] }"
                    id="confirmPassword"
                    placeholder="請再輸入一次密碼"
                    v-model="userInfo.confirmPwd"
                    rules="required|confirmed:@newPassword"
                  />
                  <ErrorMessage name="confirmPassword" class="invalid-feedback"></ErrorMessage>
                </div>
                <button
                  v-if="showResetPwd"
                  class="btn btn-light py-3 px-6 text-gray"
                  @click="saveAccount"
                >
                  儲存設定
                </button>
              </div>
            </v-form>

            <v-form ref="dataForm" v-slot="{ errors }" class="content_right">
              <div class="content_right bg-white p-5 p-md-7 rounded-4 mt-3 mt-lg-0 ms-lg-7">
                <div class="row flex-column">
                  <h5 class="fw-bold mb-7">基本資料</h5>
                  <div class="col mb-3">
                    <label v-if="!isEditData" class="form-label" for="name">姓名</label>
                    <label v-else class="form-label" for="name" v-required="true">姓名</label>
                    <v-field
                      name="name"
                      label="姓名"
                      type="text"
                      class="form-control fw-bold"
                      :class="{
                        'is-invalid': errors['name'] && isEditData,
                        'border-0 p-0 bg-white  ': !isEditData
                      }"
                      id="name"
                      placeholder="輸入姓名"
                      v-model="userInfo.name"
                      rules="required"
                      :disabled="!isEditData"
                    />
                    <ErrorMessage
                      v-if="isEditData"
                      name="name"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col mb-3">
                    <label v-if="!isEditData" class="form-label" for="phone">手機號碼</label>
                    <label v-else class="form-label" for="phone" v-required="true">手機號碼</label>
                    <v-field
                      name="phone"
                      label="手機號碼"
                      type="text"
                      class="form-control fw-bold"
                      :class="{
                        'is-invalid': errors['phone'] && isEditData,
                        'border-0 p-0 bg-white': !isEditData
                      }"
                      id="phone"
                      placeholder="請輸入手機號碼"
                      v-model="userInfo.phone"
                      rules="required|phone"
                      :disabled="!isEditData"
                    />
                    <ErrorMessage
                      v-if="isEditData"
                      name="phone"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col mb-3">
                    <label v-if="!isEditData" class="form-label" for="birthday" label="生日"
                      >生日</label
                    >

                    <label v-else class="form-label" for="birthday" label="生日" v-required="true"
                      >生日</label
                    >

                    <div class="row g-2">
                      <div class="col-md-4">
                        <input
                          type="text"
                          v-if="!isEditData"
                          class="form-control border-0 p-0 bg-white"
                          :value="`${birthday.year} 年 ${birthday.month} 月 ${birthday.day} 日`"
                          disabled
                        />
                        <v-field
                          v-else
                          name="year"
                          as="select"
                          label="年"
                          id="birthday"
                          class="form-select"
                          :class="{
                            'is-invalid': errors['year']
                          }"
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
                      <div class="col-md-4" v-if="isEditData">
                        <!-- <input
                          type="text"
                          v-if="!isEditData"
                          class="form-control border-0 p-0 bg-white"
                          v-model="birthday.month"
                          disabled
                        /> -->
                        <v-field
                          name="month"
                          as="select"
                          label="月"
                          id="birthday2"
                          class="form-select"
                          :class="{
                            'is-invalid': errors['month']
                          }"
                          rules="required"
                          v-model="birthday.month"
                        >
                          <option value="" selected>請選擇</option>
                          <option v-for="item in 12" :key="item" :value="item">
                            {{ item }} 月
                          </option>
                        </v-field>
                      </div>
                      <div class="col-md-4" v-if="isEditData">
                        <v-field
                          name="day"
                          as="select"
                          label="日"
                          id="birthday3"
                          class="form-select"
                          :class="{
                            'is-invalid': errors['day']
                          }"
                          rules="required"
                          v-model="birthday.day"
                        >
                          <option value="" selected>請選擇</option>
                          <option v-for="item in dayRange" :key="item" :value="item">
                            {{ item }} 日
                          </option>
                        </v-field>
                      </div>
                      <div v-if="isEditData" class="col-md-12 d-flex flex-row">
                        <ErrorMessage name="year" class="invalid-feedback"></ErrorMessage>
                        <ErrorMessage name="month" class="invalid-feedback"></ErrorMessage>
                        <ErrorMessage name="day" class="invalid-feedback"></ErrorMessage>
                      </div>
                    </div>
                  </div>

                  <div class="col mb-3">
                    <label v-if="!isEditData" class="form-label" for="address" label="地址"
                      >地址</label
                    ><label v-else class="form-label" for="address" label="地址" v-required="true"
                      >地址</label
                    >

                    <div class="row g-2">
                      <div class="col-md-6" :class="{ 'col-md-12': !isEditData }">
                        <input
                          type="text"
                          v-if="!isEditData"
                          class="form-control border-0 p-0 bg-white fw-bold"
                          :value="`${addressSelected.city}${addressSelected.county}${addressSelected.detail}`"
                          disabled
                        />
                        <v-field
                          v-else
                          name="city"
                          as="select"
                          label="縣市"
                          id="address"
                          class="form-select"
                          :class="{
                            'is-invalid': errors['city']
                          }"
                          v-model="addressSelected.city"
                          rules="required"
                        >
                          <option value="" selected>請選擇</option>
                          <option v-for="city in cityArray" :key="city" :value="city">
                            {{ city }}
                          </option>
                        </v-field>
                      </div>
                      <div class="col-md-6" v-if="isEditData">
                        <v-field
                          name="county"
                          as="select"
                          label="鄉鎮區"
                          id="address2"
                          class="form-select"
                          :class="{
                            'is-invalid': errors['county']
                          }"
                          v-model="addressSelected.county"
                          rules="required"
                        >
                          <option value="" selected>請選擇</option>
                          <option
                            v-for="county in countyArray"
                            :key="county.countyName"
                            :value="county.countyName"
                          >
                            {{ county.countyName }}
                          </option>
                        </v-field>
                      </div>
                      <div class="col-md-12" v-if="isEditData">
                        <v-field
                          name="detail"
                          type="text"
                          label="詳細地址"
                          class="form-control"
                          :class="{
                            'is-invalid': errors['detail'],
                            'border-0 p-0 bg-white': !isEditData
                          }"
                          id="address3"
                          placeholder="請輸入詳細地址"
                          v-model="addressSelected.detail"
                          rules="required"
                          :disabled="!isEditData"
                        />

                        <template v-if="isEditData">
                          <ErrorMessage name="city" class="invalid-feedback"></ErrorMessage>
                          <ErrorMessage name="county" class="invalid-feedback"></ErrorMessage>
                          <ErrorMessage name="detail" class="invalid-feedback"></ErrorMessage>
                        </template>
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <button
                      v-if="!isEditData"
                      class="btn btn-outline-primary py-3 px-6 text-primary"
                      @click="changeStateToEdit"
                    >
                      編輯
                    </button>
                    <button v-else class="btn btn-light py-3 px-6 text-gray" @click="saveUserData">
                      儲存設定
                    </button>
                  </div>
                </div>
              </div>
            </v-form>
          </div>
        </div>

        <!-- 我的訂單  id="userOrder"-->
        <div class="tab-pane fade" role="tabpanel" aria-labelledby="userOrder-tab">
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
import { mapActions } from 'pinia'
import { userAuthStore } from '@/stores/userAuthStore'

import ZipCodeMap from '@/utils/zipcodes'
import Swal from 'sweetalert2'

const apiUrl = 'https://hexschool-freyja.onrender.com/api/v1/'

// import { defineRule } from 'vee-validate'

// defineRule('phone', (value: string) => {
//   const phoneNumberRegex = /^09\d{8}$/i //
//   return phoneNumberRegex.test(value)
// })

// defineRule('password', (value: string) => {
//   const phoneNumberRegex = /^(?=.*[A-Za-z]).*$/ //
//   return phoneNumberRegex.test(value)
// })

export default {
  data() {
    return {
      // isScrolled: false
      userName: '' as string,
      userInfo: {
        name: '' as string,
        email: '' as string,
        phone: '' as string,
        birthday: '' as string,
        address: {
          city: '' as string,
          detail: '' as string,
          zipcode: '' as string,
          county: '' as string
        },
        oldPassword: '' as string,
        confirmPwd: '' as string,
        newPassword: '' as string
      },

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

      birthday: {
        year: '' as string,
        month: '' as string,
        day: '' as string
      },
      showResetPwd: false,
      isEditData: false
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
        //console.log('countyArray', this.countyArray)
        //console.log('newValue', newValue)

        let array = this.countyArray.filter((item) => {
          // //console.log('item', item)
          return item.countyName == newValue.countyName
        })

        //console.log('array', array)
        if (array.length > 0) {
          this.addressSelected.zipcode = array[0].ZipCode
          //console.log('this.addressSelected.zipcode', this.addressSelected.zipcode)
        }
      },
      immediate: true
    },

    'birthday.year': { handler: 'handleBirthdayChange', immediate: true },
    'birthday.month': { handler: 'handleBirthdayChange', immediate: true },
    'birthday.day': { handler: 'handleBirthdayChange', immediate: true }
  },
  methods: {
    ...mapActions(userAuthStore, ['getUserAccount', 'getToken']),

    resetPwd(): void {
      this.showResetPwd = true
    },

    saveAccount(): void {
      if (this.$refs.resetForm) {
        let data = {
          ...this.userInfo
        }

        // delete data.confirmPwd
        // delete data.address.county
        // delete data.address.city

        let headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.getToken()}`
        }
        // //console.log('this.userAccount', this.userAccount)
        //console.log('data', data)
        //console.log('headers', headers)
        //   //console.log('apiUrl', apiUrl)
        ;(this.$refs.resetForm as any).validate().then((result: { valid: boolean }) => {
          if (result.valid) {
            this.axios
              .put(`${apiUrl}user/`, data, { headers })
              .then((res) => {
                //console.log('res', res)
                //console.log('res', JSON.stringify(res.data))

                if (res.data.status) {
                  //console.log('res', res)

                  Swal.fire({
                    icon: 'success',
                    iconColor: '#dc3545',
                    title: '修改成功',
                    showConfirmButton: false,
                    width: '400px',
                    customClass: {
                      title: 'fs-4'
                    }
                  })
                  this.showResetPwd = false
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
                //console.log('err', err)
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

    changeStateToEdit(): void {
      this.isEditData = true
    },
    saveUserData(): void {
      this.isEditData = false
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
      this.userInfo.birthday = dateObject.toISOString()
      //console.log('this.registerData.birthday', this.userInfo.birthday)
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

      //console.log('123', Object.values(this.organizedData)[0])
      //console.log(' this.cityArray', this.cityArray)
    },

    // 處理日期
    handelBirthday(): void {
      let birthday = this.userInfo.birthday
      const dateObject = new Date(birthday)

      this.birthday.year = dateObject.getFullYear().toString()
      this.birthday.month = (dateObject.getMonth() + 1).toString()
      this.birthday.day = dateObject.getDate().toString()

      //console.log('birthday', birthday)
    }
    //
    // updateValue() {
    //   // this.userInfo.isCheckRule = !this.registerData.isCheckRule.toString()
    //   //console.log(
    //     'this.registerData.isCheckRule',
    //     this.userInfo.isCheckRule,
    //     typeof this.userInfo.isCheckRule
    //   )
    // }
  },
  mounted() {
    this.userInfo = this.getUserAccount()
    if (this.userInfo) {
      this.addressSelected.detail = this.userInfo.address.detail
      this.addressSelected.county = this.userInfo.address.county
      this.addressSelected.city = this.userInfo.address.city
      this.addressSelected.zipcode = this.userInfo.address.zipcode
      // this.userName =
      //console.log('userinfo', this.userInfo)
      //console.log('document.cookie', document.cookie)
      //console.log(' this.addressSelected', this.addressSelected)
      this.handleAddressSelect()
      this.handelBirthday()
    } else {
      this.$router.push({ name: 'login' })
    }

    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped="scss">
@import '@/assets/css/layout/userLayout.scss';
</style>
