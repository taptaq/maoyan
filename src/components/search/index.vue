<template>
  <section>
    <div class="search_body">
      <div class="search_input">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" v-model="message" />
        </div>
      </div>

      <div class="search_result">
        <h3>电影/电视剧/综艺</h3>
        <ul>
          <li v-for="(item, index) in movielist" :key="index">
            <div class="img">
              <img :src="item.img" alt="" />
            </div>

            <div class="info">
              <p>
                <span class="title">{{ item.name }}</span>
                <span class="score">{{ item.score }} 分</span>
              </p>
              <p>{{ item.ename }}</p>
              <p>{{ item.mtype }}</p>
              <p>{{ item.time }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      message: "",
      movielist: [],
    };
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    },
  },
  watch: {
    message(val) {
      var that = this;
      if (val) {
        // 防止请求频繁，取消上一次请求(防抖)
        this.cancelRequest();
        this.axios
          .get("/json/search_" + val + ".json", {
            cancelToken: new this.axios.CancelToken(function executor(c) {
              that.source = c;
            }),
          })
          .then((res) => {
            this.movielist = res.data.lists;
            // console.log(this.movielist);
          })
          .catch((err) => {
            if (this.axios.isCancel(err)) {
              console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
            } else {
              //handle error
              console.log(err);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.search_body {
  flex: 1;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-top: 95px;
}

.search_body::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

.search_body .search_input {
  padding: 8px, 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}

.search_body .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background: #fff;
  display: flex;
}

.search_body .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}

.search_body .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 10px;
  width: 100%;
}

.search_body .search_result {
  overflow: auto;
}

.search_body .search_result .img {
  width: 64px;
  height: 90px;
  /* border: 1px solid #000; */
  margin-right: 15px;
}

.search_body .search_result .img img {
  width: 100%;
  height: 100%;
}

.search_body .search_result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: normal;
}

.search_body .search_result li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  position: relative;
}

.search_body .search_result li .info p {
  margin-bottom: 5px;
}

.search_body .search_result li .info .title {
  font-weight: 800;
  font-size: 18px;
}

.search_body .search_result li .info .score {
  color: rgb(231, 174, 17);
  font-size: 17px;
  position: absolute;
  right: 16px;
  top: 10px;
}
</style>
