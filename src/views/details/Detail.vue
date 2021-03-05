<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        class="good-info"
      />
      <detail-param-info :paramInfo="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommendList" ref="recommend" />
      <div class="bottom-nav"></div>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
    <detail-bottom-bar   @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
import { itemListenerMixin,backTopMixin } from "common/mixin.js";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTopYs: [0, 1000, 3000, 6000],
      currentIndex: 0
    };
  },
  methods: {
    imageLoad() {
      // this.newRefresh();
      this.$refs.scroll.refresh();

      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 49);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 49);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 49);
      console.log(this.themeTopYs);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] , 100);
    },
    contentScroll(position) {
      // console.log(position);
      // 获取y值
      const positionY = -position.y;

      //2.与themeY对比
      let len = this.themeTopYs.length;
      for (let i = 0; i < len; i++) {
        if (
          this.currentIndex !== i &&
          ((i < len - 1 &&
            positionY >= this.themeTopYs[i]  &&
            positionY < this.themeTopYs[i + 1])  ||
            (i === len - 1 && positionY > this.themeTopYs[i] ))
        ) {
          this.currentIndex = i;
          // console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
       // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000;
    },
    addToCart() {
      const product = {};
      // 1. 获取购物车需要展示的信息
      // const product = {
        product.image = this.topImages[0],
        product.title = this.goods.title,
        product.desc = this.goods.desc,
        product.price = this.goods.realPrice,
        product.iid = this.iid
      // };
      // 将商品添加到购物车里
      // this.$store.carList.push(product)
      // this.$store.commit('addCart',product)
      console.log(product);
      this.$store.dispatch('addCart',product).then(res => {
        console.log(res);
      })
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      // 1.获取顶部轮播图
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.获取评论数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }
      // this.themeTopYs = [];
      // this.$nextTick(() => {
      //   //根据最新的数据，dom渲染完，但图片不一定
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // });
    });
    // 3. 请求推荐数据
    getRecommend().then(res => {
      this.recommendList = res.data.list;
    });
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
}
/* .content {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
} */
/* .bottom-nav::after {
  content: "";
  height: 109px;
  width: 100%;
  display: block;
} */
</style>
