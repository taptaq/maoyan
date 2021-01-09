<template>
  <section>
    <div class="movie_body">
      <ul>
        <li>
          <div class="pic_show">
            <img src="" alt="" />
          </div>

          <div class="info_list">
            <h2>送你一朵小红花</h2>
            <p>
              <span class="person">17746</span>
              人想看
            </p>
            <p>主演：易烊千玺,刘浩存</p>
            <p>2020-12-31上映</p>
          </div>

          <div class="btn_pre">预告</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "soonshowing",
};
</script>

<style scoped>
.movie_body {
  flex: 1;
  overflow: auto;
}

.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
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
  border: 1px solid #000;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
