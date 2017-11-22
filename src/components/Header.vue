<template>
  <div id="header" class="fadeIn">
    <div class="page">
      <div class="header-language-background">
      <div class="header-language-container">
          <div class="f-left">
              <p class="show-all-text"><a href="/bestsellers-o/">Free Cleanser with $60 Purchase</a>
              </p>
          </div>
          <div class="f-right hide-on-load" style="display: block;">
              <div class="owl-carousel owl-loaded owl-drag" id="offer-banner-carousel" style="display: block;">



                  <div class="owl-stage-outer">
                      <div class="owl-stage" style="transform: translate3d(-600px, 0px, 0px); transition: 2s; width: 1400px;">
                          <div class="owl-item cloned" style="width: 200px;">
                              <div><a href="/customer-favorite-skin-care/bestsellers"><span class="icon-free-shipping-on-fifty">&nbsp;</span></a>
                              </div>
                          </div>
                          <div class="owl-item cloned" style="width: 200px;">
                              <div><a href="/murad-beauty-rewards"><span class="icon-beauty-rewards">&nbsp;</span></a>
                              </div>
                          </div>
                          <div class="owl-item" style="width: 200px;">
                              <div><a href="/customer-favorite-skin-care/bestsellers"><span class="icon-three-free-samples">&nbsp;</span></a>
                              </div>
                          </div>
                          <div class="owl-item active" style="width: 200px;">
                              <div><a href="/customer-favorite-skin-care/bestsellers"><span class="icon-free-shipping-on-fifty">&nbsp;</span></a>
                              </div>
                          </div>
                          <div class="owl-item" style="width: 200px;">
                              <div><a href="/murad-beauty-rewards"><span class="icon-beauty-rewards">&nbsp;</span></a>
                              </div>
                          </div>
                          <div class="owl-item cloned" style="width: 200px;">
                              <div><a href="/customer-favorite-skin-care/bestsellers"><span class="icon-three-free-samples">&nbsp;</span></a>
                              </div>
                          </div>
                          <div class="owl-item cloned" style="width: 200px;">
                              <div><a href="/customer-favorite-skin-care/bestsellers"><span class="icon-free-shipping-on-fifty">&nbsp;</span></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="owl-nav disabled">
                      <div class="owl-prev">prev</div>
                      <div class="owl-next">next</div>
                  </div>
                  <div class="owl-dots">
                      <div class="owl-dot"><span></span>
                      </div>
                      <div class="owl-dot active"><span></span>
                      </div>
                      <div class="owl-dot"><span></span>
                      </div>
                  </div>
              </div>
              <div class="owl-carousel owl-loaded owl-drag" id="mobile-offer-banner-carousel">



                  <div class="owl-stage-outer">
                      <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: 0s;">
                          <div class="owl-item">
                              <div><a href="/customer-favorite-skin-care/bestsellers">Free Shipping on $50</a>
                              </div>
                          </div>
                          <div class="owl-item">
                              <div><a href="/bestsellers-o/">Free Cleanser with $60 Purchase</a>
                              </div>
                          </div>
                          <div class="owl-item">
                              <div><a href="/customer-favorite-skin-care/bestsellers">3 Free Samples</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="owl-nav disabled">
                      <div class="owl-prev">prev</div>
                      <div class="owl-next">next</div>
                  </div>
                  <div class="owl-dots">
                      <div class="owl-dot"><span></span>
                      </div>
                      <div class="owl-dot active"><span></span>
                      </div>
                      <div class="owl-dot"><span></span>
                      </div>
                  </div>
              </div>
          </div>
          <p></p>
      </div>
  </div>

  <div class="page-header-container">
    <a class="logo" href="https://www.murad.com/"><img src=
    "data:image/webp;base64,UklGRo4EAABXRUJQVlA4TIEEAAAvhwAJEM+GoI3UVBpTPnU84IAg26ZqO/jZCLJtyrZz341A0hbeXW3bNgy0OU15o2r/39vACgQAOERwOIAADVp4kkZ9DgcA1OUQjoIzAgQQ8vA0ygYLhyCN4AJpAiL6H3MaAQASocmbww4c1S06I5CJtgAj6Ltb85/wf4aI/k+AbEmyTdsax/a5tm3btm3btm3btm0f+5z+nTXGnGvuue56j+g/BDeSFElRi4euPnwD+XcWwpk0An+Sb8e9q2JON3LnTb8iQEvpvx33IOeiq658ifScoP93TCup6KabBb+GBW66h37snlj0fbAeVwdIf+27RssT76DHLQW2PfJdVV6Ldmltwe+Bdv6r8kxRdrzO1gr4EOzDUvLEZYzOthFYRD6M9ohuaGhhP4HqnhRWv6EiKN1l+KhhPeuFm9jKdx0ysFtV09rIN66hGnsCN0nfvjRnrpMyiuO0ICQyIW04ETXfnY4NTEma+wxyCi6Pi9a/JG7Wcwn6tbmuUfRUoJarzL3AOJdOMOERKaM4rgpCkiCPorJHgbvL+WZ8GvLPLxzea/Cyt47ok/bnv+cXNmY9fZ4HFH0warJY4nOoZMZkIS/JevW+447821j26rsJiZIXsoXfoJOqnVjsMD4OjSAK63AIMCohW2h6SOcw4BDZbv4v7ItQVaEaX2IhP4yUiKEMvJOskHplGUXbxRYHJe000Mt62bgURkbzilF9BaFCpkP4maohLTGrqdgiXxxSaiF+hFsPaeXNrvLP42pB2M+E2TrSQrPogdhiMhMmAmvJfvMMr3SVTQdYUKmECZUDb6zY4j4TbgCN7JedFECKfQEL3lPgxWaIPeoTVQKekv0OUeDdYcFhC9FmKN9Cc4HZHjQz8CIKWbDYRvXFHj/D6RmKy3vQKHKbiIoNGzasXSpYUy3BG2MjuiWEfRsA58njIgfvflcsNCgpUu3thWOAlUYK4cmVwHBvC570U0jSrm2ZN37UC9XeXWB6WCnqL4MKvyMjxtMiTjKjYEurUMHQPOkoeL2tRGshZwd52j5WfK4nEdoaC15/O9VS6uhpHYSiNRmULEBT7SSx+BjsadsY8ZhMorcsWGOpoWKVpWTSUWvJP0unzVrPgtuWihA/YTWN2mmvj4w4Y1YDFhQkmcXEIf0frZRHZdIqJrzUiCI/mif+Ef2oAZb6rbHLM5tulLcJsoOir2oJMNGsEUzI0xziapi3WyiaKYqIi9DZK/1zCN/KqPbQ00ro3ZnWxlUfXUB+slmlc9iwSnpCliCA2klRiNz4GrRRjwLH8LS6RFS8BCV5rl1u3NelfjhCZtE4oV0QRRTV5y4uXzCP1gnGqXalqvXdmYvz97R26vrHQeRu7dOo5eiD+VDDnlbR+k+Xwr72MY2mCXDmrad5yF0RcSKAguflQ520eaFX9XYqu6NQgzq2SQnMO12/xLt2lSLdDA/XGRbvckbzG6/M3HMf81Hy6eyUskRTmTRHeGKYsKutjltx4Y3fRcV/nuwbnUA0x8XuPJhy/F0u/jzZ0IT6Mmkzv5vWlCoIAA=="
    alt=
    "Murad Skin Care Products for Acne Treatment, Anti-Aging and Healthy Skin"
    class="large" data-pagespeed-url-hash="3043654040" onload=
    "pagespeed.CriticalImages.checkImageForCriticality(this);" />
    <img src=
    "data:image/webp;base64,UklGRo4EAABXRUJQVlA4TIEEAAAvhwAJEM+GoI3UVBpTPnU84IAg26ZqO/jZCLJtyrZz341A0hbeXW3bNgy0OU15o2r/39vACgQAOERwOIAADVp4kkZ9DgcA1OUQjoIzAgQQ8vA0ygYLhyCN4AJpAiL6H3MaAQASocmbww4c1S06I5CJtgAj6Ltb85/wf4aI/k+AbEmyTdsax/a5tm3btm3btm3btm0f+5z+nTXGnGvuue56j+g/BDeSFElRi4euPnwD+XcWwpk0An+Sb8e9q2JON3LnTb8iQEvpvx33IOeiq658ifScoP93TCup6KabBb+GBW66h37snlj0fbAeVwdIf+27RssT76DHLQW2PfJdVV6Ldmltwe+Bdv6r8kxRdrzO1gr4EOzDUvLEZYzOthFYRD6M9ohuaGhhP4HqnhRWv6EiKN1l+KhhPeuFm9jKdx0ysFtV09rIN66hGnsCN0nfvjRnrpMyiuO0ICQyIW04ETXfnY4NTEma+wxyCi6Pi9a/JG7Wcwn6tbmuUfRUoJarzL3AOJdOMOERKaM4rgpCkiCPorJHgbvL+WZ8GvLPLxzea/Cyt47ok/bnv+cXNmY9fZ4HFH0warJY4nOoZMZkIS/JevW+447821j26rsJiZIXsoXfoJOqnVjsMD4OjSAK63AIMCohW2h6SOcw4BDZbv4v7ItQVaEaX2IhP4yUiKEMvJOskHplGUXbxRYHJe000Mt62bgURkbzilF9BaFCpkP4maohLTGrqdgiXxxSaiF+hFsPaeXNrvLP42pB2M+E2TrSQrPogdhiMhMmAmvJfvMMr3SVTQdYUKmECZUDb6zY4j4TbgCN7JedFECKfQEL3lPgxWaIPeoTVQKekv0OUeDdYcFhC9FmKN9Cc4HZHjQz8CIKWbDYRvXFHj/D6RmKy3vQKHKbiIoNGzasXSpYUy3BG2MjuiWEfRsA58njIgfvflcsNCgpUu3thWOAlUYK4cmVwHBvC570U0jSrm2ZN37UC9XeXWB6WCnqL4MKvyMjxtMiTjKjYEurUMHQPOkoeL2tRGshZwd52j5WfK4nEdoaC15/O9VS6uhpHYSiNRmULEBT7SSx+BjsadsY8ZhMorcsWGOpoWKVpWTSUWvJP0unzVrPgtuWihA/YTWN2mmvj4w4Y1YDFhQkmcXEIf0frZRHZdIqJrzUiCI/mif+Ef2oAZb6rbHLM5tulLcJsoOir2oJMNGsEUzI0xziapi3WyiaKYqIi9DZK/1zCN/KqPbQ00ro3ZnWxlUfXUB+slmlc9iwSnpCliCA2klRiNz4GrRRjwLH8LS6RFS8BCV5rl1u3NelfjhCZtE4oV0QRRTV5y4uXzCP1gnGqXalqvXdmYvz97R26vrHQeRu7dOo5eiD+VDDnlbR+k+Xwr72MY2mCXDmrad5yF0RcSKAguflQ520eaFX9XYqu6NQgzq2SQnMO12/xLt2lSLdDA/XGRbvckbzG6/M3HMf81Hy6eyUskRTmTRHeGKYsKutjltx4Y3fRcV/nuwbnUA0x8XuPJhy/F0u/jzZ0IT6Mmkzv5vWlCoIAA=="
    alt=
    "Murad Skin Care Products for Acne Treatment, Anti-Aging and Healthy Skin"
    class="small" data-pagespeed-url-hash="3043654040" onload=
    "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
    <div class="store-language-container"></div><!-- Skip Links -->
    <div class="skip-links">
      <!--            -->
      <!--</span>-->
      <div class="mobile-columns mobile-columns-left">
        <a href="#custommenu-mobile" class=
        "skip-link skip-nav fa fa-bars mobile-menu-button"></a>
      </div><a class="logo mobile-logo" href=
      "https://www.murad.com/"><img src=
      "data:image/webp;base64,UklGRo4EAABXRUJQVlA4TIEEAAAvhwAJEM+GoI3UVBpTPnU84IAg26ZqO/jZCLJtyrZz341A0hbeXW3bNgy0OU15o2r/39vACgQAOERwOIAADVp4kkZ9DgcA1OUQjoIzAgQQ8vA0ygYLhyCN4AJpAiL6H3MaAQASocmbww4c1S06I5CJtgAj6Ltb85/wf4aI/k+AbEmyTdsax/a5tm3btm3btm3btm0f+5z+nTXGnGvuue56j+g/BDeSFElRi4euPnwD+XcWwpk0An+Sb8e9q2JON3LnTb8iQEvpvx33IOeiq658ifScoP93TCup6KabBb+GBW66h37snlj0fbAeVwdIf+27RssT76DHLQW2PfJdVV6Ldmltwe+Bdv6r8kxRdrzO1gr4EOzDUvLEZYzOthFYRD6M9ohuaGhhP4HqnhRWv6EiKN1l+KhhPeuFm9jKdx0ysFtV09rIN66hGnsCN0nfvjRnrpMyiuO0ICQyIW04ETXfnY4NTEma+wxyCi6Pi9a/JG7Wcwn6tbmuUfRUoJarzL3AOJdOMOERKaM4rgpCkiCPorJHgbvL+WZ8GvLPLxzea/Cyt47ok/bnv+cXNmY9fZ4HFH0warJY4nOoZMZkIS/JevW+447821j26rsJiZIXsoXfoJOqnVjsMD4OjSAK63AIMCohW2h6SOcw4BDZbv4v7ItQVaEaX2IhP4yUiKEMvJOskHplGUXbxRYHJe000Mt62bgURkbzilF9BaFCpkP4maohLTGrqdgiXxxSaiF+hFsPaeXNrvLP42pB2M+E2TrSQrPogdhiMhMmAmvJfvMMr3SVTQdYUKmECZUDb6zY4j4TbgCN7JedFECKfQEL3lPgxWaIPeoTVQKekv0OUeDdYcFhC9FmKN9Cc4HZHjQz8CIKWbDYRvXFHj/D6RmKy3vQKHKbiIoNGzasXSpYUy3BG2MjuiWEfRsA58njIgfvflcsNCgpUu3thWOAlUYK4cmVwHBvC570U0jSrm2ZN37UC9XeXWB6WCnqL4MKvyMjxtMiTjKjYEurUMHQPOkoeL2tRGshZwd52j5WfK4nEdoaC15/O9VS6uhpHYSiNRmULEBT7SSx+BjsadsY8ZhMorcsWGOpoWKVpWTSUWvJP0unzVrPgtuWihA/YTWN2mmvj4w4Y1YDFhQkmcXEIf0frZRHZdIqJrzUiCI/mif+Ef2oAZb6rbHLM5tulLcJsoOir2oJMNGsEUzI0xziapi3WyiaKYqIi9DZK/1zCN/KqPbQ00ro3ZnWxlUfXUB+slmlc9iwSnpCliCA2klRiNz4GrRRjwLH8LS6RFS8BCV5rl1u3NelfjhCZtE4oV0QRRTV5y4uXzCP1gnGqXalqvXdmYvz97R26vrHQeRu7dOo5eiD+VDDnlbR+k+Xwr72MY2mCXDmrad5yF0RcSKAguflQ520eaFX9XYqu6NQgzq2SQnMO12/xLt2lSLdDA/XGRbvckbzG6/M3HMf81Hy6eyUskRTmTRHeGKYsKutjltx4Y3fRcV/nuwbnUA0x8XuPJhy/F0u/jzZ0IT6Mmkzv5vWlCoIAA=="
      alt=
      "Murad Skin Care Products for Acne Treatment, Anti-Aging and Healthy Skin"
      class="large" data-pagespeed-url-hash="3043654040" onload=
      "pagespeed.CriticalImages.checkImageForCriticality(this);" />
      <img src=
      "data:image/webp;base64,UklGRo4EAABXRUJQVlA4TIEEAAAvhwAJEM+GoI3UVBpTPnU84IAg26ZqO/jZCLJtyrZz341A0hbeXW3bNgy0OU15o2r/39vACgQAOERwOIAADVp4kkZ9DgcA1OUQjoIzAgQQ8vA0ygYLhyCN4AJpAiL6H3MaAQASocmbww4c1S06I5CJtgAj6Ltb85/wf4aI/k+AbEmyTdsax/a5tm3btm3btm3btm0f+5z+nTXGnGvuue56j+g/BDeSFElRi4euPnwD+XcWwpk0An+Sb8e9q2JON3LnTb8iQEvpvx33IOeiq658ifScoP93TCup6KabBb+GBW66h37snlj0fbAeVwdIf+27RssT76DHLQW2PfJdVV6Ldmltwe+Bdv6r8kxRdrzO1gr4EOzDUvLEZYzOthFYRD6M9ohuaGhhP4HqnhRWv6EiKN1l+KhhPeuFm9jKdx0ysFtV09rIN66hGnsCN0nfvjRnrpMyiuO0ICQyIW04ETXfnY4NTEma+wxyCi6Pi9a/JG7Wcwn6tbmuUfRUoJarzL3AOJdOMOERKaM4rgpCkiCPorJHgbvL+WZ8GvLPLxzea/Cyt47ok/bnv+cXNmY9fZ4HFH0warJY4nOoZMZkIS/JevW+447821j26rsJiZIXsoXfoJOqnVjsMD4OjSAK63AIMCohW2h6SOcw4BDZbv4v7ItQVaEaX2IhP4yUiKEMvJOskHplGUXbxRYHJe000Mt62bgURkbzilF9BaFCpkP4maohLTGrqdgiXxxSaiF+hFsPaeXNrvLP42pB2M+E2TrSQrPogdhiMhMmAmvJfvMMr3SVTQdYUKmECZUDb6zY4j4TbgCN7JedFECKfQEL3lPgxWaIPeoTVQKekv0OUeDdYcFhC9FmKN9Cc4HZHjQz8CIKWbDYRvXFHj/D6RmKy3vQKHKbiIoNGzasXSpYUy3BG2MjuiWEfRsA58njIgfvflcsNCgpUu3thWOAlUYK4cmVwHBvC570U0jSrm2ZN37UC9XeXWB6WCnqL4MKvyMjxtMiTjKjYEurUMHQPOkoeL2tRGshZwd52j5WfK4nEdoaC15/O9VS6uhpHYSiNRmULEBT7SSx+BjsadsY8ZhMorcsWGOpoWKVpWTSUWvJP0unzVrPgtuWihA/YTWN2mmvj4w4Y1YDFhQkmcXEIf0frZRHZdIqJrzUiCI/mif+Ef2oAZb6rbHLM5tulLcJsoOir2oJMNGsEUzI0xziapi3WyiaKYqIi9DZK/1zCN/KqPbQ00ro3ZnWxlUfXUB+slmlc9iwSnpCliCA2klRiNz4GrRRjwLH8LS6RFS8BCV5rl1u3NelfjhCZtE4oV0QRRTV5y4uXzCP1gnGqXalqvXdmYvz97R26vrHQeRu7dOo5eiD+VDDnlbR+k+Xwr72MY2mCXDmrad5yF0RcSKAguflQ520eaFX9XYqu6NQgzq2SQnMO12/xLt2lSLdDA/XGRbvckbzG6/M3HMf81Hy6eyUskRTmTRHeGKYsKutjltx4Y3fRcV/nuwbnUA0x8XuPJhy/F0u/jzZ0IT6Mmkzv5vWlCoIAA=="
      alt=
      "Murad Skin Care Products for Acne Treatment, Anti-Aging and Healthy Skin"
      class="small" data-pagespeed-url-hash="3043654040" onload=
      "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
      <div class="account-cart-wrapper">
        <div class="header-item">
          <ul class="desktop-width">
            <li>
              <a href="/murad-beauty-rewards">Beauty Rewards</a>
            </li>
            <li>
              <a href=
              "https://www.murad.com/personalized-skin-care/">Skin
              Advisor</a>
            </li>
            <li>
              <a href="https://help.murad.com" target=
              "_blank">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="header-item">
          <a id="mregister" target="_self" onclick=
          "redirect('https://www.murad.com/customer/account/login/')"
          href="#" class=
          "skip-link skip-account mm-murad-account"><span class=
          "label">Sign In</span></a> 
        </div>
        <div class="header-item">
          <a href="#header-search" class=
          "skip-link skip-search mobile-search"><span class=
          "label">Search</span></a>
        </div><!-- Cart -->
        <div class="header-item">
          <div class="show-cart-container">
            <div class="bag-option" id="new_cart_bag">
              <div class="bag-container">
                <label for="togglebox"><span class="label">Bag</span>
                <span class="count">0</span></label>
              </div>
            </div>
            <div class="bag-option active" id="old_cart_bag">
              <div class="header-minicart">
                <a href="https://www.murad.com/checkout/cart/"
                data-target-element="#header-cart" class=
                "skip-link skip-cart no-count"><span class=
                "label">Bag</span> <span class="count">0</span></a>
                <div id="header-cart" class=
                "block block-cart skip-content">
                  <!--{CART_SIDEBAR_755633c8d370afb590ebbff1338eb900}-->
                  <div id="minicart-error-message" class=
                  "minicart-message"></div>
                  <div id="minicart-success-message" class=
                  "minicart-message"></div>
                  <div class="minicart-wrapper">
                    <p class="block-subtitle">
                      Recently added item(s) <a class=
                      "close skip-link-close" href="#" title=
                      "Close">×</a>
                    </p>
                    <p class="empty">
                      You have no items in your shopping cart.
                    </p>
                  </div>

                  <!--/{CART_SIDEBAR_755633c8d370afb590ebbff1338eb900}-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- Navigation -->
    <div id="header-nav" class="skip-content">
      <div id="custommenu">
        <ul id="primary-nav" class="primary-nav-container">
          <li class="secondary-nav">
            <div class="top-level-menu"></div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content"></div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/new-skin-care-products">WHAT'S
                NEW</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <ul>
                    <li class="first">New Arrivals
                    </li>
                    <li>
                      <a href=
                      "/product/melatonin-sleep-oral-spray/">Beauty
                      RESTore Sleep Oral Spray</a>
                    </li>
                    <li>
                      <a href=
                      "/product/anti-aging-retinol-night-cream">Retinol
                      Youth Renewal Night Cream</a>
                    </li>
                    <li>
                      <a href=
                      "/product/retinol-anti-aging-eye-serum">Retinol
                      Youth Renewal Eye Serum</a>
                    </li>
                    <li>
                      <a href=
                      "/product/pore-extractor-pomegranate-mask">Pore
                      Extractor Pomegranate Mask</a>
                    </li>
                    <li>
                      <a href=
                      "/product/salicylic-acid-acne-spot-treatment">Rapid
                      Relief Acne Spot Treatment</a>
                    </li>
                    <li>
                      <a href=
                      "/product/city-skin-anti-aging-face-sunscreen-spf-50">
                      City Skin Age Defense Broad Spectrum</a>
                    </li>
                    <li>
                      <a href="/new-skin-care-products">Shop What's
                      New</a>
                    </li>
                  </ul>
                  <ul>
                    <li class="first">TV Offers
                    </li>
                    <li>
                      <a href=
                      "/product/resurgence-anti-aging-kit-intensive-age-diffusing-serum">
                      Resurgence</a>
                    </li>
                    <li>
                      <a href=
                      "/product/advanced-breakout-control-regimen-30-day-supply">
                      Advanced Breakout Control</a>
                    </li>
                    <li>
                      <a href=
                      "/product/rapid-lightening-regimen-30-day-supply">
                      Rapid Lightening Regimen</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-care-kits">Shop
                      All</a>
                    </li>
                  </ul><a class="image-holder" href=
                  "/product/melatonin-sleep-oral-spray/"><img alt=
                  "Beauty RESTore Sleep Oral Spray" src=
                  "https://7gpkdt-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/anav-beauty-restore-sleep-spray.1505434325.jpg.pagespeed.ic.t_DcRAyIMh.webp"
                  data-pagespeed-url-hash="3792278208" onload=
                  "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
              </div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/all-murad-products">SKINCARE</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <ul>
                    <li class="first">Category
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-cleansers-and-toners">
                      Cleansers &amp; Toners</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-treatments">Serums
                      &amp; Treatments</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-moisturizers">Moisturizers</a>
                    </li>
                    <li>
                      <a href="/all-murad-products/eye-creams">Eyes
                      &amp; Lips</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/face-skin-treatment-masks">
                      Masks &amp; Exfoliators</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-supplements">Supplements</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/cellulite-solutions">Body</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/spf-sun-block-products">Sun</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-care-kits">Regimens
                      &amp; Kits</a>
                    </li>
                  </ul>
                  <ul>
                    <li class="first">Concerns
                    </li>
                    <li>
                      <a href=
                      "/skin-concerns/top-acne-products">Acne</a>
                    </li>
                    <li>
                      <a href="/skin-concerns/oily-skin-products">Oil
                      Control</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/pore-reform-skin-care-products">
                      Pores</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-moisturizers">Hydration</a>
                    </li>
                    <li>
                      <a href=
                      "/skin-concerns/anti-aging-creams">Lines &amp;
                      Wrinkles</a>
                    </li>
                    <li>
                      <a href=
                      "/skin-concerns/anti-wrinkle-serums">Lifting
                      &amp; Firming</a>
                    </li>
                    <li>
                      <a href="/anti-aging/sun-spots">Dark Spots
                      &amp; Uneven Tone</a>
                    </li>
                    <li>
                      <a href="/anti-aging/sun-spots">Radiance</a>
                    </li>
                    <li>
                      <a href=
                      "/skin-care/sensitive-skin-redness-treatments">Sensitive
                      Skin &amp; Redness</a>
                    </li>
                  </ul>
                  <ul class="last">
                    <li class="first">Collection
                    </li>
                    <li>
                      <a href=
                      "/skin-concerns/top-acne-products">Acne</a>
                    </li>
                    <li>
                      <a href=
                      "/acne-products/best-adult-acne-treatment">Anti-Aging
                      Acne</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/age-reform-anti-aging-products">Age
                      Reform</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/environmental-shield-sun-spots">Environmental
                      Shield</a>
                    </li>
                    <li>
                      <a href=
                      "/invisiblur-perfecting-shield-broad-spectrum-spf-30">
                      Invisiblur</a>
                    </li>
                    <li>
                      <a href="/eye-lift-firming-treatment">Murad
                      Professional</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/pore-reform-skin-care-products">
                      Pore Reform</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/resurgence-anti-aging/">Resurgence</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/redness-therapy-dry-sensitive-skin-care">
                      Redness Therapy</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/youth-builder-body-care">Youth
                      Builder</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skincare-for-men">Murad
                      Man</a>
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/white-brilliance-products">
                      White Brilliance</a>
                    </li>
                  </ul><a class="image-holder" href=
                  "/product/invisiblur-perfecting-shield-broad-spectrum-spf-30"><img alt="Invisiblur Perfecting Shiled"
                  src=
                  "https://6b901r-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/anav-invisiblur.1496362344.jpg.pagespeed.ic.QI8vYaaxgH.webp"
                  data-pagespeed-url-hash="4135618316" onload=
                  "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
              </div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/anti-aging/">ANTI-AGING</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <ul>
                    <li class="first">Category
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/hydrating-skin-cleansers">Cleansers
                      &amp; Toners</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/anti-aging-treatments">Serums
                      &amp; Treatments</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/anti-wrinkle-moisturizers">Moisturizers</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/anti-aging/anti-aging-eye-creams">Eyes &amp;
                      Lips</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/anti-aging/anti-aging-face-mask">Masks &amp;
                      Exfoliators</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/all-murad-products/skin-supplements">Supplements</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/anti-aging/all-effective-anti-aging-products">
                      All Anti-Aging Products</a>
                    </li>
                  </ul>
                  <ul class="first-col">
                    <li class="first">Concerns
                    </li>
                    <li>
                      <a href=
                      "/all-murad-products/skin-moisturizers">Hydration</a>
                    </li>
                    <li>
                      <a href=
                      "/skin-concerns/anti-aging-creams">Lines &amp;
                      Wrinkles</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/menopause-treatments">Lifting
                      &amp; Firming</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href="/anti-aging/sun-spots">Dark Spots
                      &amp; Uneven Tone</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href="/anti-aging/sun-spots">Radiance</a>
                    </li>
                  </ul>
                  <ul class="first-col">
                    <li class="first">Collection
                    </li>
                    <li>
                      <a href=
                      "/acne-products/best-adult-acne-treatment">Anti-Aging
                      Acne</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/age-reform-anti-aging-products">Age
                      Reform</a>
                    </li>
                    <li>
                      <a href=
                      "/anti-aging/environmental-shield-sun-spots">Environmental
                      Shield</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/product/invisiblur-perfecting-shield-broad-spectrum-spf-30">
                      Invisiblur</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/product/eye-lift-firming-treatment">Murad
                      Professional</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/resurgence-skin-care/resurgence-products">Resurgence</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/all-murad-products/youth-builder-body-care">Youth
                      Builder</a>
                    </li>
                  </ul><a class="image-holder" href=
                  "/product/resurgence-anti-aging-kit-intensive-age-diffusing-serum"><img alt="Anti-Aging Regimen"
                  src=
                  "https://7gpkdt-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/anav-rsg-kit.1471035461.jpg.pagespeed.ic.t6f1l_6d5l.webp"
                  data-pagespeed-url-hash="1347745328" onload=
                  "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
              </div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/acne-products/">ACNE</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <ul>
                    <li class="first">Category
                    </li>
                    <li>
                      <a href=
                      "/acne-products/acne-cleansers-and-toners">Cleansers
                      &amp; Toners</a>
                    </li>
                    <li>
                      <a href=
                      "/acne-products/acne-treatment-products">Treatments</a>
                    </li>
                    <li>
                      <a href=
                      "/acne-products/oil-free-moisturizers">Moisturizers</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/product/acne-pills-supplements">Supplements</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/acne-products/acne-treatment-kits">3-Step
                      Kits</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/acne-products/all-effective-acne-products">All
                      Acne Products</a>
                    </li>
                  </ul>
                  <ul class="exclude-mobile">
                    <li class="first">Concern
                    </li>
                    <li>
                      <a href="/acne-products/acne-medications">Acne
                      Breakouts</a>
                    </li>
                    <li>
                      <a href=
                      "/acne-products/best-adult-acne-treatment">Adult
                      Acne</a>
                    </li>
                    <li>
                      <a href=
                      "/skin-concerns/oily-skin-products">Oily
                      Skin</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/acne-products/acne-scars-treatment">Post-Acne
                      Marks</a>
                    </li>
                    <li>
                      <a href=
                      "/acne-products/back-acne-treatment">Back &amp;
                      Body Acne</a>
                    </li>
                    <li>
                      <a href=
                      "/acne-products/blackhead-and-clogged-pore-skin-care">
                      Pores &amp; Blackheads</a>
                    </li>
                  </ul>
                  <ul class="last">
                    <li class="first">Clear Skin Favorites
                    </li>
                    <li>
                      <a href=
                      "/acne-pills-supplements">Supplements</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href=
                      "/product/oil-control-mattifier-spf-15">Oil-Control
                      Mattifier</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href="/product/acne-lotion">Skin Perfecting
                      Lotion</a>
                    </li>
                    <li class="exclude-mobile">
                      <a href="/product/face-cleanser">Clarifying
                      Cleanser</a>
                    </li>
                    <li>
                      <a href="/product/post-acne-gel">Post-Acne Spot
                      Lightening Gel</a>
                    </li>
                    <li>
                      <a href="/product/anti-aging-acne">Anti-Aging
                      Acne Regimen</a>
                    </li>
                  </ul><a class="image-holder" href=
                  "/product/acne-pills-supplements"><img alt=
                  "Pure Skin Clarifying* Dietary Supplement" src=
                  "https://7gpkdt-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/anav-pure-skin-ar.1486600692.jpg.pagespeed.ic.46vIAWz4OO.webp"
                  data-pagespeed-url-hash="633936939" onload=
                  "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
              </div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/customer-favorite-skin-care/bestsellers/">
                BESTSELLERS</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <ul>
                    <li class="first">Customer Favorites
                    </li>
                    <li>
                      <a href="/product/renewing-eye-cream">Renewing
                      Eye Cream</a>
                    </li>
                    <li>
                      <a href=
                      "/product/rapid-collagen-infusion">Rapid
                      Collagen Infusion</a>
                    </li>
                    <li>
                      <a href=
                      "/product/essential-c-day-moisture">Essential-C
                      Day Moisture</a>
                    </li>
                    <li>
                      <a href=
                      "/customer-favorite-skin-care/bestsellers">Shop
                      All Favorites</a>
                    </li>
                  </ul>
                  <ul class="last">
                    <li class="first">Now Trending
                    </li>
                    <li>
                      <a href=
                      "/product/eye-lift-firming-treatment">Eye Lift
                      Firming Treatment</a>
                    </li>
                    <li>
                      <a href=
                      "/product/hydro-dynamic-quenching-essence">Hydro-Dynamic
                      Quenching Essence</a>
                    </li>
                    <li>
                      <a href=
                      "/product/invisiblur-perfecting-shield-broad-spectrum-spf-30">
                      Invisiblur Perfecting Shield</a>
                    </li>
                    <li>
                      <a href=
                      "/customer-favorite-skin-care/hot-now">Shop
                      What's Hot</a>
                    </li>
                  </ul><a class="image-holder" href=
                  "/product/remove-age-spots"><img alt=
                  "Fade Age Spots" src=
                  "https://6b901r-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/anav-raspls.1496362566.jpg.pagespeed.ic.MG8o19zJ3r.webp"
                  data-pagespeed-url-hash="2727082224" onload=
                  "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
              </div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/promo-codes/">OFFERS</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <div style="margin-left: 2em">
                    <ul>
                      <li class="first">Free Gifts
                      </li>
                      <li>
                        <a href="/bestsellers-o">Free Clarifying
                        Cleanser Extended!</a>
                      </li>
                      <li>
                        <a href="/bestsellers-o">Free Essential-C
                        Cleanser Extended!</a>
                      </li>
                      <li>
                        <a href="/promo-codes">All Special Offers</a>
                      </li>
                    </ul>
                    <ul>
                      <li class="first">Value Sets
                      </li>
                      <li>
                        <a href=
                        "/product/retinol-youth-renewal-regimen/">Retinol
                        Youth Renewal Regimen</a>
                      </li>
                      <li>
                        <a href=
                        "/product/acne-control-30-day-kit/">Acne
                        Control 30 Day Kit</a>
                      </li>
                      <li>
                        <a href=
                        "/product/anti-aging-acne/">Anti-Aging Acne
                        Regimen</a>
                      </li>
                      <li>
                        <a href=
                        "/all-murad-products/skin-care-kits">Shop All
                        Value Sets</a>
                      </li>
                    </ul>
                    <ul class="last">
                      <li class="first">Online Exclusives
                      </li>
                      <li>
                        <a href=
                        "/exclusive-offers/skin-care-gift-duos">10%
                        Off Skincare Duos</a>
                      </li>
                      <li>
                        <a href=
                        "/all-murad-products/professional-luxury-size-products">
                        Luxury Size Skincare</a>
                      </li>
                      <li>
                        <a href=
                        "/travel-size-skin-care-products">Travel
                        Essentials</a>
                      </li>
                      <li>
                        <a href="/online-exclusives">Online
                        Exclusives</a>
                      </li>
                      <li>
                        <a href="/gift-cards">Gift Cards</a>
                      </li>
                    </ul>
                  </div><a class="image-holder" href=
                  "/bestsellers-o"><img alt="Tiered Savings" src=
                  "https://7gpkdt-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/anav-sept-free-cleanser.1507590839.jpg.pagespeed.ic.M4yFlkeOFi.webp"
                  data-pagespeed-url-hash="508561925" onload=
                  "pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
                </div>
              </div>
            </div>
          </li>
          <li class="secondary-nav">
            <div class="top-level-menu">
              <div class="megamenu-head">
                <a href=
                "https://www.murad.com/murad-brand-story/">OUR
                STORY</a>
              </div>
            </div>
            <div class="sec-nav-content is-hidden">
              <div class="menu-content">
                <div class="megamenu-content">
                  <div class="image-container" style=
                  "text-align: center;">
                    <div class="image" style=
                    "display: inline-block; width: 24%;">
                      <a style="color: #636363;" href=
                      "/murad-brand-story">Our Story</a>
                    </div>
                    <div class="image" style=
                    "display: inline-block; width: 24%;">
                      <a style="color: #636363;" href=
                      "/skin-care-product-videos">Murad TV</a>
                    </div>
                    <div class="image" style=
                    "display: inline-block; width: 24%;">
                      <a style="color: #636363;" href=
                      "/connected-beauty-healthy-habits">Connected
                      Beauty</a>
                    </div>
                    <div class="image" style=
                    "display: inline-block; width: 24%;">
                      <a style="color: #636363;" href=
                      "/blog">Connected By Murad</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="custommenu-mobile-container" data-mmenu="" class="">
        <div class="mm-murad-user">
          <a id="msiginin" href=
          "/customer/account/create/">Register</a>
        </div>
      </div>
    </div><!-- Start of Lightbox-->
    <div class="fancyboxcontainer">
      <a id="email-signup" href="#data"></a>
      <div style="display:none">
        <div id="data">
          <div class="popup-image-container"></div>
          <div class="email-image-container">
            <!-- Welcome image here - class="lightbox-image-signup" --><img class="lightbox-image-signup"
            alt="" src=
            "https://6b901r-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/awelcome-20.1487876871.jpg.pagespeed.ic.GWSlU7O_SO.webp"
            data-pagespeed-url-hash="4051712239" onload=
            "pagespeed.CriticalImages.checkImageForCriticality(this);" />
            <img class="lightbox-image-thankyou" alt="" src=
            "https://7gpkdt-8ieybj5zerw6.webscalenetworks.net/HJzz2xIdH/media/wysiwyg/awelcome-20-thankyou.1487876876.jpg.pagespeed.ic.aihSJEBcER.webp"
            data-pagespeed-url-hash="601496992" onload=
            "pagespeed.CriticalImages.checkImageForCriticality(this);" />
            </div>
          <div id="emailsignup-container" class="email-signup" style=
          "background-image: url(''); background-repeat:no-repeat;background-size:cover;background-position:center center; height:200px;">
          <form id="emailsign-form" class="emailsign-form" method=
          "post">
              <div class="container-center">
                <h2>
                  Be the first to learn about sales, special<br />
                  promotions, skincare tips and more.<br />
                  <br />
                </h2>
                <div class="model-email-outer">
                  <input name="email" placeholder=
                  "Your Email Address" type="text" id="newsletter"
                  value="" class=
                  "input-text required-entry validate-email" source=
                  "web-lightbox" source_type="email-lightbox"
                  thankyou_url=
                  "/customer-favorite-skin-care?sxid=litebox" />
                  <input name="emailMessage" type="hidden" class=
                  "email-message" id="emailMessage"
                  duplicate_message="Duplicate email found"
                  error_message="Error signing up email" />
                  <button type="button" class="dark-grey" title=
                  "Sign Up"><span><span>Sign
                  Up</span></span></button>
                </div>
                <p class="error-message" style="color: #DD0000;"></p>
              </div>
            </form>
            <div id="footer-newsletter-success" style="display:none"
            class="success">
              <p class="success-message" style="font-size:15px;"></p>
            </div>
          </div>
          <div class="valid-online">
            valid online at murad.com
          </div>
        </div>
      </div><!-- End of LightBox-->
      <!-- Search -->
      <div id="header-search" class="skip-content">
        <form id="search_mini_form" action=
        "https://www.murad.com/nsearch/" method="get">
          <div class="input-box">
            <label for="search">Search:</label> <input id="search"
            type="search" name="q" value="" class=
            "input-text required-entry" maxlength="128" placeholder=
            "Search entire store here..." autocomplete="off" />
            <button type="submit" title="Search" class=
            "button search-button"><span><span>Search</span></span></button>
          </div>
          <div id="search_autocomplete" class="search-autocomplete"
          style="display:none"></div>
        </form>
      </div><!-- Account -->
    </div>
  </div>

    </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeMount() {
      this.$store.dispatch('EMIT_pageHeader', {
        SEND_pageTitle: 'Header',
        SEND_pageLink: '/header'
      })
  },
  mounted() {
    this.$nextTick( () => {
      jQuery(document).ready(function(e){function n(){t()||i();}function i(){e("#custommenu-mobile").is(":visible")||(e(".mrd-ico-hamburger").removeClass("active"),e("div.parent-menu-content").addClass("is-hidden"),e("span.plusButton").removeClass("open"));}function t(){var e=window,n="inner";return"innerWidth"in window||(n="client",e=document.documentElement||document.body),e[n+"Width"]>=s;}var s=1170;n(),e(window).on("resize",function(){window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,300);}),e("#primary-nav li.secondary-nav").on({mouseenter:function(n){t()||n.preventDefault();var i=e(this).children("div.top-level-menu");i.next("div.sec-nav-content").removeClass("is-hidden"),i.parent(".secondary-nav").siblings(".secondary-nav").children("div.sec-nav-content").addClass("is-hidden");},mouseleave:function(n){t()||n.preventDefault(),e(this).children("div.top-level-menu").next("div.sec-nav-content").addClass("is-hidden");}}),e(".mrd-ico-hamburger").click(function(){e(this).toggleClass("active");}),e(".plusButton").click(function(){if(e(this).hasClass("open")){e(this).removeClass("open");var n=e(this).parent("div.parent-menu");n.next("div.parent-menu-content").addClass("is-hidden");}else e(this).addClass("open"),(n=e(this).parent("div.parent-menu")).next("div.parent-menu-content").removeClass("is-hidden"),n.parent(".menu-mobile").siblings(".menu-mobile").children("div.parent-menu-content").addClass("is-hidden"),n.parent(".menu-mobile").siblings(".menu-mobile").children("div.parent-menu").children("span.plusButton").removeClass("open");});});
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
