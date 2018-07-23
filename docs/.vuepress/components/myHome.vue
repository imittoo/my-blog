<template>
  <div class="hero">
    <img class="heroImg" :src="data.heroImage" alt="hero">
    <h1 class="title">{{ data.title }}</h1>
    <a :href="data.actionLink">{{ data.actionText }}</a>
  </div>
</template>
<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>
<style lang="stylus" scoped>
.hero
  height 500px
  display flex
  flex-direction column
  justify-content center
  align-items center
  .title
    color #3eaf7c
  .heroImg
    width 300px
</style>

