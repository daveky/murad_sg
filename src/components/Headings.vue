<template>
  <div id="headings">

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

    <hr class="sg_hr">
    
    <div class="top-block-container top-block-category-solid">
      <h1> Oil Control </h1>
    </div>
    h1 color: #414042;
    font-size: 35px;
    <hr class="sg_hr">
    <h1 class="heading text-normal">Personalized Skin Consultation</h1>
    .heading .text-normal h1 color: #636363; font-size: 28px;

    <hr class="sg_hr">

    <div class="product-name">
      <span class="h1">
        Resurgence Youth Activation Collection
      </span>
    </div>
    .product-name h1 color: #272727; font-size: 24px;

    <hr class="sg_hr">

    <div class="hd-title">Resurgence is as Easy as 1-2-3</div>
    .hd-title color: #6f6f6f; font-size: 36px
    <div class="resproduct-pgright-text resprod-fnt">
      <h4>Powerful Repair plus Maximum Moisture.</h4>
      <h5><strong>Intensive Age-Diffusing Serum</strong></h5>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
    }
  },
  beforeMount() {
      this.$store.dispatch('EMIT_pageHeader', {
        SEND_pageTitle: 'Headings',
        SEND_pageLink: '/headings'
      })
  }
}
</script>

<style scoped>
#headings { padding: 40px; }
</style>