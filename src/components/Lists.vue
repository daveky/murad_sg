<template>
  <div id="sg_lists">
    <ul>
      <li><a href="https://www.murad.com/customer/account/login/">Sign In</a>
      </li>
      <li><a href="https://www.murad.com/customer/account/create/">Create Account</a>
      </li>
      <li><a href="https://help.murad.com/app/answers/list/c/16,26">Customer Bill of Rights</a>
      </li>
      <li><a href="https://help.murad.com/app/answers/detail/a_id/49/">Return Policy</a>
      </li>
    </ul>
    <ul style="list-style: disc !important;margin: 3% 0 0 6%;">
      <li>
        Minimize dark circles
      </li>
      <li>
        Reduce puffiness
      </li>
      <li>
        Reduce crow’s feet
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sg_lists',
  data () {
    return {
    }
  },
  beforeMount() {
      this.$store.dispatch('EMIT_pageHeader', {
        SEND_pageTitle: 'Lists',
        SEND_pageLink: '/lists'
      })
  }
}
</script>

<style scoped>
  #sg_lists { padding: 40px; }
</style>