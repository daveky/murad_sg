<template>
  <div id="buttons" class="fadeIn">
    <v-container fluid>
      <button class="button">Buy Now</button>

      <hr class="sg_hr">

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
      <div class="clearfix"></div>

      <hr class="sg_hr">

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

      <hr class="sg_hr">

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

      <hr class="sg_hr">
      
      <div class="product-essential">
        <form action="https://www.murad.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cubXVyYWQuY29tL3Jlc3VyZ2VuY2UtcmVnaW1lbg,,/product/1254/form_key/8xkUZ5m1cPE3pFDg/" method="post" id="product_addtocart_form">
            <div class="product-right-contents">
              <div class="add-to-cart-wrapper">
                  <!-- div for showing sku variants -->
                  <div class="sku_variant-outer">
                    <div class="sku_variant">
                        <!-- remove "FL. OZ." from sku size -->
                        <span id="prdqty_1254" style="cursor:pointer;" class="selectsku">
                        30 - Day</span>&nbsp;
                        <!-- remove "FL. OZ." from sku size -->
                        <span id="prdqty_1257" style="cursor:pointer;">
                        90 - Day</span>&nbsp;
                    </div>
                  </div>
              </div>
            </div>
        </form>
      </div>
      <div class="clearfix"></div>

      <hr class="sg_hr">

      <div class="page-content">
        <div class="pdt-shop"><a href="/skin-perfecting-super-system/">SHOP NOW</a></div>
      </div>

      <hr class="sg_hr">

      <input style="border: 1px solid #000; padding: 8px 23px; width: auto; height: auto; border-radius: 5px; font-size: 13px; font-weight: bold; color: #000; margin-top: 10px; background: #F3F3F3;" onclick="addToBag.add(1136,event)" type="button" value="ADD TO BAG">

      <hr class="sg_hr">
      
      <div style="color: #494949; font-size: 13px; padding: 18px 0 0; font-weight: bold;"><a style="color: #494949; border-bottom: 1px solid #494949; width: 35%;" href="/retinol-anti-aging-eye-serum/" target="_blank">LEARN MORE</a></div>


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
  beforeMount() {
    this.$store.dispatch('EMIT_pageHeader', {
      SEND_pageTitle: 'Buttons',
      SEND_pageLink: '/buttons'
    })
  }
}
</script>

<style scoped>
.top_head_ban img{width:100%;margin-bottom:50px}
.pdt-img img{width:90%;margin:0 auto;text-align:center}
.product-essential .product-right-contents .add-to-cart-wrapper .sku_variant-outer .sku_variant span{border:solid 1px;padding:3% 21px;border-radius:6px;width:47.5%;margin:0 1px;display:block;float:left}
.product-essential .product-right-contents .add-to-cart-wrapper .sku_variant-outer{margin-top:8%;text-align:center;width:74%;float:none;margin:0 auto}
</style>