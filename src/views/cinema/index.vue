<template>
  <section>
    <Header title="猫眼影院" />

    <div class="content">
      <div class="cinema_menu">
        <router-link tag="div" class="city_switch" to="/city">
          <span>全城</span>
          <i class="iconfont icon-arrow"></i>
        </router-link>

        <router-link tag="div" to="/search" class="brand_switch">
          <span>品牌</span>
          <i class="iconfont icon-arrow"></i>
        </router-link>

        <router-link tag="div" to="/search" class="feature_switch">
          <span>特色</span>
          <i class="iconfont icon-arrow"></i>
        </router-link>
      </div>

      <cinemalist />
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header";
import cinemalist from "@/components/cinemalist";

export default {
  name: "cinema",
  components: {
    Header,
    cinemalist,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  overflow: auto;
  margin-top: 50px;
  /* position: relative; */
  align-items: center;
  flex-direction: column;
}

.cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  font-size: 16px;
}
</style>
