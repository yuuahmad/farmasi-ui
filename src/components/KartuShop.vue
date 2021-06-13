<template>
  <div>
    <!-- ini adalah judul dari jenis barang -->
    <div
      class="
        border
        rounded-full
        capitalize
        py-1
        px-5
        m-3
        text-black
        bg-white
        text-2xl
      "
    >
      {{ jenisbarang }}
    </div>
    <!-- ini adalah bagian kartu barang -->
    <div
      class="
        grid
        gap-3
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      "
    >
      <div
        v-for="rincianbarang in rincianbarangbarang"
        :key="rincianbarang"
        class="
          justify-self-center
          bg-blue-500
          capitalize
          text-xl
          h-80
          w-56
          p-3
          m-3
          rounded-xl
          text-center
        "
      >
        <div class="">{{ rincianbarang.nama }}</div>
        <div class="text-lg">{{ rincianbarang.harga }}</div>
        <div class="text-sm">beli</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jenisbarang", "rincianbarangbarang"],
};
</script>

<style></style>
