<template>
  <section>
    <div class="city_body">
      <div class="city_list">
        <div class="city_hot">
          <h2>热门城市</h2>
          <ul class="clearfix">
            <li>上海</li>
            <li>北京</li>
            <li>成都</li>
          </ul>
        </div>

        <div class="city_sort">
          <div>
            <h2>A</h2>
            <ul>
              <li>鞍山</li>
              <li>安康</li>
            </ul>
          </div>

          <div>
            <h2>B</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
            </ul>
          </div>

          <div>
            <h2>C</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
              <li>北京</li>
              <li>保定</li>
              <li>北京</li>
              <li>保定</li>
              <li>北京</li>
              <li>保定</li>
              <li>北京</li>
              <li>保定</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "city",
};
</script>

<style scoped>
.city_body {
  margin-top: 95px;
  display: flex;
  width: 100%;
  height: 95vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}

.city_body .city_list {
  height: 100%;
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}

.city_body .city_list::-webkit-scrollbar {
  background: transparent;
  width: 0;
}

.city_body .city_hot {
  margin-top: 20px;
}

.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 28px;
  font-size: 20px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 5px;
}

.city_body .city_sort div {
  margin-top: 20px;
}

.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}

.city_body .city_sort ul li {
  line-height: 30px;
}

.city_body .city_index {
  /* margin-top: -200px; */
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #fff5f0;
}
</style>
