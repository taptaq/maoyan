<template>
  <section>
    <Header title="我的猫眼" />

    <div class="content">
      <login />
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header";
import login from "@/components/login";
export default {
  name: "mine",
  components: {
    Header,
    login,
  },
};
</script>

<style scoped></style>
