<template>
  <div class="container-fluid p-0 overflow-hidden bg-black " style="min-height: 100vh">
    <nav class="navbar navbar-dark navbar-expand-lg py-lg-3 px-lg-7 bg-black">
      <div class="container-fluid flex-row">
        <router-link class="navbar-brand mx-0" to="/"
          ><img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true"
            alt="Logo"
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
      <div class="bg d-block">
        <img src="@/assets/images/line3.png" alt="bg-line" />
      </div>
      <div class="row px-4 px-md-0">
        <div class="col-6 start_block d-none d-md-block"></div>
        <div class="col-12 col-md-6 end_block pt-md-8">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
 
</script>
<style scoped="scss">
@import '@/assets/css/layout/loginLayout.scss';
</style>
