<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item,index) in list" :key="index" :item="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
import CartListItem from './CartListItem.vue';


export default {
  name: "CartList",
  components:{
    Scroll,
    CartListItem

  },
  computed: {
    ...mapGetters({ list: "cartList" })
  }

}
</script>

<style scoped>
.cart-list {
  width: 100%;
  height: 100%;
  }
.content{
  position: absolute;
  top: 44px;
  right: 0;
  /* bottom: 49px; */
  left: 0;
  bottom: 89px;

  overflow: hidden;
}
</style>