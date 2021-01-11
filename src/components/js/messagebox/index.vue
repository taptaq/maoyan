<template>
  <div class="messagebox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <div @touchstart="handleCancel">{{ cancel }}</div>
      <div @touchstart="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messagebox",
};
</script>

<style scoped>
.messagebox {
  width: 200px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 2px 2px 2px #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -100px;
  font-size: 16px;
}

.messagebox h2 {
  text-align: center;
  line-height: 40px;
  font-size: 22px;
}

.messagebox p {
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}

.messagebox > div {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}

.messagebox > div div {
  flex: 1;
  text-align: center;
  line-height: 30px;
  border-right: 1px solid #ccc;
}

.messagebox > div div:last-child {
  border: none;
}
</style>
