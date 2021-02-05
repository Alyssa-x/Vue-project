<template>
  <div class="image-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ imagesInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div :key="index" v-for="(item, index) in imagesInfo.detailImage">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img
          v-for="(image, imageIndex) in item.list"
          :key="imageIndex"
          :src="image"
          @load="imgLoad"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImagesInfo",
  data() {
    return {
      count: 0,
      imagesLength: 0
    };
  },
  props: {
    imagesInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      if(++ this.count === this.imagesLength) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    imagesInfo() {
      this.imagesLength = this.imagesInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scoped>

</style>