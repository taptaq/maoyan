<template>
  <div>
    <Footer />
    <router-view />
  </div>
</template>

<script>
// 引入尾部固件
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
