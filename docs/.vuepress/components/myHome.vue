<template>
  <div class="hero">
    <h1 class="title">{{ data.msg }}</h1>
    <a :href="data.link">{{ data.actionText }}</a>
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
</style>

