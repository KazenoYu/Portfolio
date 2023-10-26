<template>
  <div class="nav">
    <a @click="scroll('about')">About</a>
    <a @click="scroll('project')">Project</a>
    <a @click="scroll('note')">Note</a>
  </div>
</template>

<script>
export default {
  methods: {
    scroll(navName) {
      const element = document.getElementById(navName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  @include flex-container;
  // position: fixed;
  max-width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  justify-content: end;
  padding-right: 16px;
  a {
    margin: 8px;
  }
  a:hover {
    color: white;
  }
}
</style>
