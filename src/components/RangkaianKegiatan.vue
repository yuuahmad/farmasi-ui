<template>
  <div class="p-3 m-3 bg-pink-700 border rounded-xl">
    <div class="text-xl capitalize text-center">{{ judulkegiatan }}</div>
    <div
      class="capitalize text-center"
      v-for="kegiatan in subjudulkegiatan"
      :key="kegiatan.id"
    >
      {{ kegiatan.kata }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["judulkegiatan", "subjudulkegiatan"],
};
</script>

<style></style>
