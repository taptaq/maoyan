<template>
  <section>
    <div class="movie_body">
      <ul>
        <li v-for="item in movielist" :key="item.id">
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
              观众评：
              <span class="grade">{{ item.sc }}</span>
            </p>
            <p>主演：{{ item.star }}</p>
            <p>{{ item.showInfo }}</p>
          </div>

          <div class="btn_mall">购票</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "nowshowing",
  data() {
    return {
      movielist: [],
    };
  },
  mounted() {
    this.axios.get("/json/nowshowing.json").then((res) => {
      var msg = res.statusText;
      if (msg === "OK") {
        this.movielist = res.data.movieList;
        // console.log(this.movielist);
      }
    });
  },
};
</script>

<style scoped>
.movie_body {
  flex: 1;
  overflow: auto;
  height: 86vh;
}

.movie_body::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

.movie_body ul {
  margin: 0 12px;
  overflow: auto;
}

.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
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

.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}

.movie_body .btn_mall {
  width: 47px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background: #f03d37;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
}
</style>
