<template>
  <div class="goods">
    <good-list-item v-for="(item, id) in goods" :goodsItem="item" :key="id"/>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';


export default {
  name: "GoodsList",
  components: {
    GoodListItem

  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>