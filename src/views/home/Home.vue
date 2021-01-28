<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
      <!-- <div slot="center"></div> -->
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends ="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>
<style>
.home-nav-bar {
  background-color: var(--color-tint);
  color: white;
}
</style>
