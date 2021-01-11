<template>
  <div class="detailcontainer slide-enter-active">
    <Header title="影片详情">
      <i class="iconfont icon-arrow-right" @touchstart="handletoback"></i>
    </Header>
    <loading v-if="isloading" />
    <div v-else class="contentdetail">
      <div class="detail_list">
        <div
          class="detail_list_bg"
          :style="{
            'background-image': 'url(' + detailinfo.img.replace(/w\.h/, 148.208) + ')',
          }"
        ></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailinfo.img" alt="" />
          </div>
          <div class="detail_list_info">
            <h2>{{ detailinfo.name }}</h2>
            <p>{{ detailinfo.ename }}</p>
            <p>{{ detailinfo.mtype }}</p>
            <p>{{ detailinfo.time }}</p>
            <p>{{ detailinfo.showtime }}</p>
          </div>
        </div>
      </div>

      <div class="detail_intro">
        <p>
          {{ detailinfo.brief }}
        </p>
      </div>

      <div class="detail_player swiper-container" ref="detail_player">
        <ul class="swiper-wrapper">
          <li
            class="swiper-slide"
            style="width: 70px"
            v-for="(item, index) in detailinfo.starphoto"
            :key="index"
          >
            <div>
              <img :src="item" alt="" />
            </div>
          </li>
        </ul>
      </div>

      <div class="back" @touchstart="handletoback">
        <p>回到上一级</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "detail",
  components: {
    Header,
  },
  props: ["movieid"],
  data() {
    return {
      detailinfo: [],
      isloading: true,
    };
  },
  methods: {
    handletoback() {
      this.$router.back();
    },
  },
  mounted() {
    this.axios.get("/json/detail_" + this.movieid + ".json").then((res) => {
      this.detailinfo = res.data[0];
      this.isloading = false;
      // console.log(this.detailinfo);
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.detail_player, {
          autoplay: false, //可选选项，自动滑动
          slidesPerView: "auto", //控制单屏显示的slider的数量（auto为自适应其宽度）
        });
      });
    });
  },
};
</script>

<style scoped>
.detailcontainer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: 1000;
  background: #fff;
}

.slide-enter-active {
  animation: 0.5s slideMove;
}

@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.contentdetail {
  margin-top: 51px;
  display: block;
  margin-bottom: 0;
}

.detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: 0 40%;
  filter: blur(20px);
}

.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #40454d;
  opacity: 0.55;
  /* position: relative; */
}

.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}

.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: 1px solid #f0f2f3;
  margin: 20px;
}

.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}

.detail_list .detail_list_info {
  margin-top: 20px;
}

.detail_list .detail_list_info h2 {
  font-size: 22px;
  color: #fff;
  font-weight: normal;
  line-height: 40px;
}

.detail_list .detail_list_info p {
  color: #fff;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 5px;
}

.detail_intro {
  padding: 10px;
  font-size: 16px;
}

.detail_player {
  margin: 20px;
}

.detail_player .swiper-slide {
  margin-right: 20px;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}

.detail_player .swiper-slide img {
  width: 100%;
  margin-bottom: 5px;
}

.detail_player .swiper-slide p:nth-of-type(2) {
  color: #999;
}

.back {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #ee3434;
  color: #fff;
  font-size: 18px;
}
</style>
