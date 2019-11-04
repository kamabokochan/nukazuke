<template>
  <div class="wrap">
    <div class="main-img">
      <img src="/img/main.jpg" alt />
      <small>
        <a href="https://natura.netlify.com/">photo by PhotoStudio NATURA</a>
      </small>
    </div>
    <div class="contents">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
}
.main-img,
.contents {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: 100vh;
}
.main-img {
  position: relative;
  background-color: #070707;
  small {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #607d8b;
    font-size: 10px;
  }
}
</style>
