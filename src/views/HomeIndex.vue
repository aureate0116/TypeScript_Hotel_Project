<template>
  <!-- <TheWelcome /> -->
  <!-- <div>
      <p>{{ msg }}</p>
      <button @click="handler">click</button>
    </div> -->
  <div class="section_banner">
    <div class="row">
      <div class="col text-primary">
        <h2 class="">享樂酒店</h2>
        <h5 class="mt-2">Enjoyment Luxury Hotel</h5>
        <div class="border-bottom pt-7"></div>
      </div>
      <div class="col text-white">
        <h1 class="fs-10">高雄<br />豪華住宿之選</h1>
        <p class="fs-10">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
        <button type="button" class="btn btn-lg btn-white"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
export default {
  setup() {
    // const msg = 'hello!'
    // const handler = () => {
    //   alert(msg)
    // }
    // return { msg, handler }
  }
}
</script>
<style scoped="scss">
@import '@/assets/css/pages/homeIndex.scss';
</style>
