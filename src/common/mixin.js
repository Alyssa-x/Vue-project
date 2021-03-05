import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop.vue";

export const itemListenerMixin = {
  data() {
    return { itemImgListener: null, newRefresh: null };
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("isLoaded", this.itemImgListener);
    console.log("mixin mounted");
  }
};

export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop:false
    };
  },
  methods: {
    // 回到顶部
    backTop() {
      // 调用子组件里面封装的scrollTo方法即可
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
    
  }
};