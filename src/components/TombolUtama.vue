<template>
  <div
    class="
      rounded-full
      items-center
      justify-center
      flex
      w-96
      text-center
      bg-pink-800
      capitalize
      text-xl
      p-3
      m-2
    "
  >
    {{ katatombol }}
  </div>
</template>

<script>
export default {
  props: ["katatombol"],
};
</script>

<style></style>
