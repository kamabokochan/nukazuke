<template>
  <div class="top">
    <ul class="link-list">
      <li>
        <nuxt-link to="about">about me</nuxt-link>
      </li>
      <li>
        <nuxt-link to="work">work</nuxt-link>
      </li>
      <li>
        <a href="https://kamabokoblog.netlify.com/">blog</a>
      </li>
      <li>
        <nuxt-link to="link">link</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.link-list {
  font-size: 24px;
  > li {
    a {
      display: block;
      padding: 9px 18px;
    }
  }
}
</style>
