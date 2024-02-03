import { defineStore } from 'pinia'
import router from '@/router'

export const userAuthStore = defineStore('userAuthStore', {
  state: () => ({}),

  getters: {},
  actions: {
    getCookie(cookieName :string) {
      const cookieStr = decodeURIComponent(document.cookie)
      const cookies = cookieStr.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        if (cookie.startsWith(cookieName + '=')) {
          return cookie.substring(cookieName.length + 1)
        }
      }
      return null
    },

    // 取token，不需轉回js數值
    getToken() {
      return this.getCookie('loginToken')
    },
    getUserAccount() {
      const rawCookieValue = this.getCookie('userInfo')
      try {
        // const parsedValue = JSON.parse(rawCookieValue)
        // // //console.log('Parsed userAccount:', parsedValue);
        // return parsedValue
         if (rawCookieValue !== null) {
    const parsedValue = JSON.parse(rawCookieValue);
    return parsedValue;
  }
  return null;
      } catch (error) {
        //console.error('Error parsing cookie value as JSON:', error)
        return null
      }
      // return this.getCookie('userAccount')
    },

    // 取得用戶mail, 表示用戶登入時有使用記住帳號
    getUserEmail() {
      return this.getCookie('userEmail')
    },

    userLogout() {
      router.replace('/login')
      document.cookie = 'userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }
  }
})

export default userAuthStore
