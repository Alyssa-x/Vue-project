<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left"> 
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div> 
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* position: relative; 
  bottom: 49px;  */
   display: flex;
   text-align: center;
}
.bar-item{
  display: flex;
  flex: 1;
}
.bar-item.bar-right{
  flex: 3;
}
.bar-item>div {
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 1px;
  background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service{
  background-position: 0 -54px;
  width: 22.5px;
}
.bar-left .shop{
  background-position: 0 -98px;
}
.bar-right{
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart{
  background-color: #ffe817;
  color:#333;
  /* word-wrap: unset; */
  /* overflow-wrap:nowrap ; */
}
.bar-right .buy{
  background-color: #f69;
}
</style>
