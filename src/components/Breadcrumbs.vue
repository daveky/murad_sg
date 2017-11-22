<template>
  <div id="sg_breadcrumbs" class="main">
    <div class="breadcrumbs">
      <ul>
        <li class="home">
          <a href="https://www.murad.com/" title="Go to Home Page">Home</a>
          <span>/ </span>
        </li>
        <li class="category129">
          <a href="https://www.murad.com/skin-concerns" title="">Skin Concerns</a>
          <span>/ </span>
        </li>
        <li class="category135">
          <strong>Oil Control</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sg_breadcrumbs',
  data () {
    return {
    }
  },
  beforeMount() {
      this.$store.dispatch('EMIT_pageHeader', {
        SEND_pageTitle: 'Breadcrumbs',
        SEND_pageLink: '/breadcrumbs'
      })
  }
}
</script>

<style scoped>
  #sg_breadcrumbs { padding: 40px; }
  .breadcrumbs { display: block; }
</style>