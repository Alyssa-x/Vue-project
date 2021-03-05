<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :isChecked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">合计：{{ totalPrice }}</div>

    <div class="calculate">去计算({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.price * item.count + preValue;
          }, 0)
      );
    },
    checkedLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      // return !(this.cartList.filter(item => !item.checked).length)
      // return !this.cartList.find(item => !item.checked)

      for (let i of this.cartList) {
        if (!i.checked) {
          return false;
        }
      }
      return true;
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false);
      } else {
        this.cartList.forEach(item => item.checked = true);
      }
    }
  }
};
</script>

<style>
.bottom-bar {
  height: 40px;
  width: 100%;
  background-color: #eee;
  position: fixed;
  right: 0;
  bottom: 49px;
  left: 0;
  line-height: 40px;
  display: flex;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 80px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  widows: 60px;
  color: #eee;
  background-color: red;
}
</style>
