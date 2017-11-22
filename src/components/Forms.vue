<template>
  <div>
    <div class="add-to-cart-wrapper">
      <div class="ar-options">
        <div class="clear-both-full-div one-time-outer">
            <div class="clear-both-full-div row">
              <div class="f-left">
                  <input type="radio" name="purchase-type" checked="checked" id="just-once-radio-1070" value="just-once">
                  <label for="just-once" data-id="1070" onclick="toogleArPirce(this)" id="just-once-label-1070">One time purchase            </label>
              </div>
              <div class="f-right" id="just-once-price-1070">
                  $68.00        
              </div>
            </div>
            <div class="clear-both-full-div row">
              <div class="f-left">
                  <input type="radio" name="purchase-type" id="auto-replenishment-radio-1070" value="auto-replenishment">
                  <label for="auto-replenishment" data-id="1070" onclick="toogleArPirce(this)" id="auto-replenishment-label-1070">
                  Auto-Delivery <span class="message-red">(Save 10%)</span>
                  </label>
              </div>
              <div class="f-right">
                  <span class="message-red" id="auto-replenishment-price-1070"> $61.20</span>
              </div>
            </div>
        </div>
        <div id="autoreplenishment-details-box-1070" style="display:none">
            <div class="clear-both-full-div">
              <div class="custom-select">
                  <select name="autoreplenishment_frequency" id="autoreplenishment-frequency" class="" title="">
                    <option value="30" selected="selected">Every 30 days</option>
                    <option value="60">Every 60 days</option>
                    <option value="90">Every 90 days</option>
                  </select>
              </div>
              <p>
                  Save 10% +
                  Free shipping on every delivery. Cancel at anytime.
              </p>
            </div>
            <div class="clear-both-full-div learn-more-outer">
              <span class="ar-tt-trigger">
                  LEARN MORE
                  <div class="ar-tt price-popup" id="auto-replenishment-disclaimer">
                    <p>
                    </p>
                    <p>Our convenient Auto-Delivery program helps make sure you never run out of your Murad essential products. Check this option to get this product delivered to your door as often as you need it. You can change your shipment frequency or cancel anytime.<br>Disclaimer:  Offer includes enrollment in home delivery program with paid automatic shipments. Cancel at any time.</p>
                    <p></p>
                  </div>
              </span>
            </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>

    <hr class="sg_hr">
  
    <div style="position: relative">
      <div id="header-search" class="skip-content">
        <form id="search_mini_form" action="https://www.murad.com/nsearch/" method="get">
            <div class="input-box">
              <label for="search">Search:</label>
              <input id="search" type="search" name="q" value="" class="input-text required-entry" maxlength="128" placeholder="Search entire store here..." autocomplete="off">
              <button type="submit" title="Search" class="button search-button"><span><span>Search</span></span></button>
            </div>
            <div id="search_autocomplete" class="search-autocomplete" style="display:none"></div>
        </form>
      </div>
    </div>
    <div class="clearfix"></div>

    <hr class="sg_hr">

    <div class="footer-container">
      <div class="footer">
        <div class="form-subscribe block-subscribe">
              <!-- <label for="newsletter">Sign Up for Emails</label>
          <p>Free Bestseller Set, Exclusive Offers and Skincare Tips.</p> -->
              <div class="v-fix input-box">
                <input name="email" placeholder="Your Email Address" type="text" id="newsletter" source="web-footer" value="" class="input-text required-entry validate-email">
              </div>
              <div class="actions">
                <button type="submit" class="button sign-up" title="Sign Up"><span><span>Sign Up</span></span></button>
            </div>
          </div>
        </div>
      </div>

      <hr class="sg_hr">

      <v-container>
        <div class="field name-firstname">
          <label for="firstname" class="required"><em>*</em>First Name</label>
          <div class="input-box">
              <input type="text" id="firstname" name="firstname" value="" title="First Name" maxlength="255" class="input-text required-entry" autocomplete="off">
          </div>
        </div>
      </v-container>

      <hr class="sg_hr">

      <v-container>
        <div class="form-list">
          <label for="skin_concern">Primary Skin Concern</label>
          <div class="input-box">
            <select id="skin_concern" name="skin_concern" autocomplete="off">
              <option value="" selected="selected"></option>
              <option value="64">Acne Breakouts</option>
              <option value="71">Cellulite / Stretch Marks</option>
              <option value="69">Combination Skin / Clogged Pores</option>
              <option value="67">Environmental Damage (Age Spots, Sun Spots)</option>
              <option value="72">Eye Wrinkles / Crow's Feet</option>
              <option value="66">Fine Lines and Wrinkles</option>
              <option value="65">Hormonal Aging (Deep Wrinkles, Sagging Skin)</option>
              <option value="73">Not Available</option>
              <option value="68">Redness / Sensitivity</option>
              <option value="70">Sun Protection</option>
              </select>
          </div>
        </div>
      </v-container>

      <hr class="sg_hr">

      <v-container>
        <div class="form-list">
          <div class="control">
            <div class="input-box">
                <input type="checkbox" name="is_subscribed" title="Sign Up for Newsletter" value="1" id="is_subscribed" class="checkbox" autocomplete="off">
            </div>
            <label for="is_subscribed">Sign Up for Newsletter</label>
          </div>
        </div>
      </v-container>

      <hr class="sg_hr">

      <v-container>
        <div class="toolbar">
          <div class="pager">
              <p class="amount">
                <strong>11 Item(s)</strong>
              </p>
              <div class="limiter">
                <label>Show</label>
                <select onchange="setLocation(this.value)" class="toolbar-custom">
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?limit=12">
                      12                        
                    </option>
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?limit=24">
                      24                        
                    </option>
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?limit=36" selected="selected">
                      36                        
                    </option>
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?limit=all">
                      All                        
                    </option>
                </select>
                <!--                -->            
              </div>
          </div>
          <div class="sorter">
              <!-- view-mode temporarily disabled until design changes are approved.
                <p class="view-mode">
                                            </p>
                -->
              <div class="sort-by">
                <label>Sort By</label>
                <select onchange="setLocation(this.value)" class="toolbar-custom" title="Sort By">
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?dir=asc&amp;order=position" selected="selected">
                      Best Seller                        
                    </option>
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?dir=asc&amp;order=name">
                      Name                        
                    </option>
                    <option value="https://www.murad.com/skin-concerns/oily-skin-products?dir=asc&amp;order=price">
                      Price                        
                    </option>
                </select>
                <a href="https://www.murad.com/skin-concerns/oily-skin-products?dir=desc&amp;order=position" class="sort-by-switcher sort-by-switcher--asc" title="Set Descending Direction">Set Descending Direction</a>
              </div>
          </div>
        </div>
      </v-container>
    
  </div>
</template>

<script>
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>