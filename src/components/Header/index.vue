<template>
  <header class="header">
    <slot></slot>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "猫眼movie",
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: 800;
}

.header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>
