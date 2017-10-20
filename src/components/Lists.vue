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
  </div>
</template>

<script>
export default {
  name: 'sg_lists',
  data () {
    return {
    }
  },
  created: function() {
      this.$store.dispatch('set_pageTitle', {
        sendPageTitle: 'Lists'
      })
  }
}
</script>

<style scoped>
  #sg_lists { padding: 40px; }
</style>