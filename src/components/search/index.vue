<template>
  <section>
    <div class="search_body">
      <div class="search_input">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" />
        </div>
      </div>

      <div class="search_result">
        <h3>电影/电视剧/综艺</h3>
        <ul>
          <li>
            <div class="img">
              <img src="" alt="" />
            </div>

            <div class="info">
              <p><span>送你一朵小红花</span><span>9.3</span></p>
              <p>a little red flower</p>
              <p>剧情/家庭</p>
              <p>2020-12-31</p>
            </div>
          </li>

          <li>
            <div class="img">
              <img src="" alt="" />
            </div>

            <div class="info">
              <p><span>送你一朵小红花</span><span>9.3</span></p>
              <p>a little red flower</p>
              <p>剧情/家庭</p>
              <p>2020-12-31</p>
            </div>
          </li>

          <li>
            <div class="img">
              <img src="" alt="" />
            </div>

            <div class="info">
              <p><span>送你一朵小红花</span><span>9.3</span></p>
              <p>a little red flower</p>
              <p>剧情/家庭</p>
              <p>2020-12-31</p>
            </div>
          </li>

          <li>
            <div class="img">
              <img src="" alt="" />
            </div>

            <div class="info">
              <p><span>送你一朵小红花</span><span>9.3</span></p>
              <p>a little red flower</p>
              <p>剧情/家庭</p>
              <p>2020-12-31</p>
            </div>
          </li>

          <li>
            <div class="img">
              <img src="" alt="" />
            </div>

            <div class="info">
              <p><span>送你一朵小红花</span><span>9.3</span></p>
              <p>a little red flower</p>
              <p>剧情/家庭</p>
              <p>2020-12-31</p>
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
  border: 1px solid #000;
  margin-right: 10px;
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
}

.search_body .search_result li {
  border-bottom: 1px dashed #c9c9c9;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
}
</style>
