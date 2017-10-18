<template>
  <div id="buttons" class="fadeIn">
    <v-container fluid>
      <button class="button">Buy Now</button>

      <div class="product-essential">
        <div class="product-right-contents">
          <div class="add-to-cart-wrapper">
            <div class="add-to-box">
              <div class="add-to-cart">
                <div class="add-to-cart-buttons">
                  <button id="disable-btn" type="button" title="Add to Bag" class="button btn-cart clubkit clubkit-disabled product-1264  sku-15250 clubkit" data-controlleraction="add" data-product_id="1264" onclick="productAddToCartForm.submit(this)"><span><span>Add to Bag</span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-block">
        <ul class="three-block">
          <li>
            <div>
              <div>
                <p class="underline"><a href="/product/rapid-lightening-30-day-kit/">Shop Now</a></p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div id="subcatlist">
        <ul class="products-grid products-grid--max-4-col four-column-product-grid" id="catlist">
          <li class="item gateway-container">
            <a href="https://www.murad.com/anti-aging/menopause-treatments" class="scroll">
              <div class="gateway-img">
                <!--           images should be 300x390-->
                <img src="https://6b901r-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/catalog/category/a60361.1505517973.jpg.pagespeed.ic.OfFUsqCIPb.webp" alt="" data-pagespeed-url-hash="2610495335" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
              </div>
              <div class="gateway-label">
                <span>Loss of Firmness &amp; Deep Wrinkles</span>
              </div>
            </a>
          </li>
        </ul>
      </div>




    </v-container>
  </div>
</template>

<script>
export default {
  name: 'buttons',
  data () {
    return {
    }
  },
  created: function() {
      this.$store.dispatch('set_pageTitle', {
        sendPageTitle: 'Buttons'
      })
  }
}
</script>