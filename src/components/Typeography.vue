<template>
  <div id="sg_typeography">
    <div ref="asdf">{{ test1 }}</div>
    <h1>
      H1 Heading 28px font-weight: 300 line-height: 1.2
    </h1>
    <h2>
      H2 Heading 24px font-weight: 300 line-height: 1.2
    </h2>
    <h3>
      H3 Heading 18px font-weight: 400 line-height: 1.4
    </h3>
    <h4>
      H4 Heading 14px line-height: 1.4
    </h4>
    <h5>
      H5 Heading 13px line-height: 1.4
    </h5>
    <h6>
      H6 Heading 12px font-weight: 700 line-height: 1.4
    </h6>
    
    <h1 class="sg_h1">
      Paragraph
    </h1>
    font-size: 14px, line-height: 1.5
    <hr>
    <p>
      Eu dolor irure nisi labore cupidatat adipisicing dolore duis magna nisi id dolor nisi ullamco. Consequat eu veniam et labore nulla reprehenderit velit ut sunt id reprehenderit irure voluptate. Anim labore sunt aliquip tempor sit laborum consequat voluptate. Aliqua nisi velit officia exercitation aliquip deserunt veniam veniam officia tempor. Dolore occaecat consequat laboris incididunt ut velit tempor nulla veniam excepteur ad commodo minim proident.
    </p>

    <h1 class="sg_h1">
      font
    </h1>
    Open Sans
    <hr>
  </div>
</template>

<script>
export default {
  name: 'sg_typeography',
  data () {
    return {
      test1: 'DAVE'
    }
  },
  beforeMount() {
    this.$store.dispatch('EMIT_pageHeader', {
      SEND_pageTitle: 'Typography',
      SEND_pageLink: '/typeography'
    })
    console.log('name = ' + this.name)
  }
}
</script>


<style scoped>
  #sg_typeography { padding: 40px; }
</style>