<template>
  <div class="hero">
    <img class="heroImg" :src="data.heroImage" alt="hero">
    <h1 class="title">{{ data.title }}</h1>
    <!-- <a :href="data.actionLink">{{ data.actionText }}</a> -->
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
  .heroImg
    width 200px
</style>

