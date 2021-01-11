<template>
  <section>
    <div>
      <Header title="猫眼movie" />

      <div class="content">
        <div class="movie_menu">
          <router-link tag="div" class="city_name" to="/city">
            <span>{{ $store.state.city.nm }}</span>
            <i class="iconfont icon-arrow"></i>
          </router-link>

          <div class="hot_switch">
            <router-link tag="div" to="/nowshowing" class="hot_item">
              正在上映
            </router-link>
            <router-link tag="div" to="/soonshowing" class="hot_item">
              即将热映
            </router-link>
          </div>

          <router-link tag="div" to="/search" class="search_entry">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
        </div>

        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script>
// 引入头部固件
import Header from "@/components/Header";
import { Messagebox } from "@/components/js";

export default {
  name: "movie",
  components: {
    Header,
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/json/location.json").then((res) => {
        var cityname = res.data.data.citynm;
        var cityid = res.data.data.id;
        if (this.$store.state.city.nm === cityname) {
          //若定位城市相同，则不用弹窗
          return;
        }
        Messagebox({
          title: "定位",
          content: cityname,
          cancel: "取消",
          ok: "切换定位",
          handleOk() {
            window.localStorage.setItem("nowcity", cityname);
            window.localStorage.setItem("nowcityid", cityid);
            window.location.reload();
          },
        });
      });
    }, 3000);
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

.content::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

.content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
  font-size: 15px;
}

.movie_menu .city_name.active {
  color: #ef4238;
}

.movie_menu .hot_switch {
  display: flex;
  height: 100%;
  line-height: 45px;
}

.movie_menu .hot_switch .hot_item {
  font-size: 15px;
  color: #000;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
  flex: 1;
}

.movie_menu .hot_switch .hot_item.router-link-exact-active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}

.movie_menu .hot_switch .hot_item.active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}

.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}

.movie_menu .search_entry.active {
  color: #ef4238;
}

.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
