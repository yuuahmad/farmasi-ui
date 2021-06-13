<template>
  <header-comp></header-comp>
  <div class="bg-pink-600 text-white p-3">
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
  <footer-comp></footer-comp>
</template>
<script>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";

export default {
  components: { HeaderComp, FooterComp },
};
</script>
<style></style>
