<template>
  <section>
    <div class="movie_body">
      <loading v-if="isloading" />
      <scroller
        v-else
        :handletoscroll="handletoscroll"
        :handletotouchEnd="handletotouchEnd"
      >
        <ul>
          <li class="pulldownmsg">{{ pulldownmessage }}</li>
          <li
            v-for="(item, index) in soonmovielist"
            :key="index"
            @touchstart="handletodetail(item.id)"
          >
            <div class="pic_show">
              <img :src="item.img | setWH('128.180')" alt="" />
            </div>

            <div class="info_list">
              <h2>
                {{ item.nm }}
                <img v-if="item.version == 'v3d imax'" src="@/assets/v3d.png" alt="" />
                <img v-if="item.version == 'v2d imax'" src="@/assets/v2d.png" alt="" />
              </h2>
              <p>
                <span class="person">{{ item.wish }}</span>
                人想看
              </p>
              <p>主演：{{ item.star }}</p>
              <p>{{ item.rt }}上映</p>
            </div>

            <div class="btn_pre">预告</div>
          </li>
        </ul>
      </scroller>
    </div>
  </section>
</template>

<script>
export default {
  name: "soonshowing",
  data() {
    return {
      soonmovielist: [],
      pulldownmessage: "",
      isloading: true,
    };
  },
  mounted() {
    this.axios.get("/json/soonshowing.json").then((res) => {
      this.soonmovielist = res.data.coming;
      this.isloading = false;
      // console.log(this.soonmovielist);
    });
  },
  methods: {
    handletodetail(movieid) {
      this.$router.push("/detail/2/" + movieid);
    },

    handletoscroll(pos) {
      if (pos.y > 30) {
        this.pulldownmessage = "正在获取信息";
      }
    },

    handletotouchEnd(pos) {
      if (pos.y > 30) {
        this.axios.get("/json/nowshowing.json").then((res) => {
          var msg = res.statusText;
          if (msg === "OK") {
            this.pulldownmessage = "获取成功";
            setTimeout(() => {
              this.movielist = res.data.movieList;
              this.pulldownmessage = "";
            }, 1000);
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.movie_body {
  flex: 1;
  overflow: auto;
  height: 80vh;
}

.movie_body::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}

.movie_body ul .pulldownmsg {
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.movie_body ul li {
  margin-top: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 15px;
}

.movie_body .pic_show {
  width: 64px;
  height: 90px;
}

.movie_body .pic_show img {
  width: 100%;
}

.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}

.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  position: relative;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}

.movie_body .info_list h2 img {
  width: 55px;
  height: 22px;
  position: absolute;
  right: -38px;
  top: 3px;
}

.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background: #3c9fe6;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
}
</style>
