<template>
  <div id="headings">
    <div class="top-block-container top-block-category-solid">
      <h1> Oil Control </h1>
    </div>
    color: #414042;
    font-size: 35px;
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
    }
  },
  created: function() {
      this.$store.dispatch('set_pageTitle', {
        sendPageTitle: 'Headings'
      })
  }
}
</script>

<style scoped>
#headings { padding: 40px; }
</style>