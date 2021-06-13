<template>
  <div class="bg-pink-700 border rounded-lg p-5 m-3 text-center">
    <div class="flex justify-center pb-3">
      <div
        class="
          rounded-full
          h-48
          w-48
          flex
          items-center
          justify-center
          bg-pink-800
        "
      >
        ini gambar
      </div>
    </div>

    <div class="text-xl capitalize">{{ judulkatamereka }}</div>
    <div class="text-lg pb-3">{{ subjudulkatamereka }}</div>
    <div>
      {{ keterangankatamereka }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["judulkatamereka", "subjudulkatamereka", "keterangankatamereka"],
};
</script>

<style></style>
