<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props: {
    handletoscroll: {
      type: Function,
      default: function () {},
    },
    handletotouchEnd: {
      type: Function,
      default: function () {},
    },
  },
  mounted() {
    this.$nextTick(() => {
      var scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 1,
      });

      this.scroll = scroll;
      // 上拉刷新加载
      scroll.on("scroll", (pos) => {
        this.handletoscroll(pos);
      });

      scroll.on("touchEnd", (pos) => {
        this.handletotouchEnd(pos);
      });
    });
  },
  methods: {
    toscrolltop(y) {
      this.scroll.scrollTo(0, y);
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
