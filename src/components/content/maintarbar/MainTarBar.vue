<template>
  <tar-bar>
    <tar-bar-item path="/home">
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>品类</div>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/me">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from "components/common/tarbar/TarBar";
import TarBarItem from "components/common/tarbar/TarBarItem";

export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBarItem
  }
};
</script>

<style scoped></style>
