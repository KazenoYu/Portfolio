<template>
  <!-- <Navbar /> -->
  <router-view />
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
export default {
  // components: {
  //   Navbar,
  // },
};
</script>

<style lang="scss">
@mixin flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
  padding: 0;
  background-color: #3e3b3b;
  width: 100vw;
}
</style>
