<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车(
        <span>{{ length }}</span>
        )
      </div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list />
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar"

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({ length: "cartLength"})
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
