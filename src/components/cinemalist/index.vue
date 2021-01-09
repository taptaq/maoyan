<template>
  <section>
    <div class="cinema_body">
      <ul>
        <li>
          <div>
            <span>中影美高美影院（坚美广场店）</span>
            <span class="q"><span class="price">22.9</span> 元起</span>
          </div>
          <div class="address">
            <span>鹤山市文明路坚美广场4楼</span>
            <span>3.2km</span>
          </div>
          <div class="card">
            <div>小吃</div>
            <div>折扣卡</div>
          </div>
        </li>

        <li>
          <div>
            <span>大地影院（鹤山广场店）</span>
            <span class="q"><span class="price">22.9</span> 元起</span>
          </div>
          <div class="address">
            <span>鹤山市人民东路18-22双号鹤山广场4楼</span>
            <span>1.7km</span>
          </div>
          <div class="card">
            <div>小吃</div>
            <div>折扣卡</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "cinemalist",
};
</script>

<style scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  font-size: 14px;
}

.cinema_body ul {
  padding: 20px;
}

.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}

.cinema_body div {
  margin-bottom: 10px;
}

.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}

.cinema_body .price {
  font-size: 18px;
}

.cinema_body .address {
  font-size: 13px;
  color: #666;
}

.cinema_body .address span:first-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 75vw;
  float: left;
  border-right: 1px solid #589daf;
  margin-right: 5px;
}

.cinema_body .address span:nth-last-of-type(2) {
  float: left;
}

.cinema_body .card {
  display: flex;
}

.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  margin-right: 5px;
}

.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}

.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
