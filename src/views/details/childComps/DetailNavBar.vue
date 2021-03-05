<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img class="back" @click="backClick" src="~assets/images/common/back.svg" alt="" />
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            class="title-item"
            v-for="(item, index) in titles"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick",index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.back {
  margin-top: 12px;
}
.active {
  color: var(--color-high-text);
}
</style>
