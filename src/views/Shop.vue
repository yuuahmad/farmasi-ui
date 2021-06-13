<template>
  <div>
    <header-shop></header-shop>
    <kartu-shop
      v-for="barang in kelompokbarang1"
      :key="barang"
      :jenisbarang="barang.jenisbarang"
      :rincianbarangbarang="barang.rincianjenis"
    ></kartu-shop>
    <kartu-shop
      v-for="barang in kelompokbarang2"
      :key="barang"
      :jenisbarang="barang.jenisbarang"
      :rincianbarangbarang="barang.rincianjenis"
    ></kartu-shop>
    <kartu-shop
      v-for="barang in kelompokbarang3"
      :key="barang"
      :jenisbarang="barang.jenisbarang"
      :rincianbarangbarang="barang.rincianjenis"
    ></kartu-shop>
    <kartu-shop
      v-for="barang in kelompokbarang4"
      :key="barang"
      :jenisbarang="barang.jenisbarang"
      :rincianbarangbarang="barang.rincianjenis"
    ></kartu-shop>
    <div>ini halaman shop</div>
  </div>
</template>

<script>
import HeaderShop from "../components/HeaderShop.vue";
import KartuShop from "../components/KartuShop.vue";
export default {
  components: { HeaderShop, KartuShop },
  data() {
    return {
      kelompokbarang1: [
        {
          jenisbarang: "tiket",
          rincianjenis: [
            {
              nama: "prodk pertama",
              harga: "gratis",
            },
            {
              nama: "prodk kedua",
              harga: "bayar 5 ribu",
            },
            {
              nama: "prodk ketiga",
              harga: "gratis",
            },
            {
              nama: "prodk keempat",
              harga: "satu juta",
            },
            {
              nama: "prodk kelima",
              harga: "gratis",
            },
          ],
        },
      ],
      kelompokbarang2: [
        {
          jenisbarang: "merch",
          rincianjenis: [
            {
              nama: "prodk kedua",
              harga: "gratis",
            },
            {
              nama: "merch kedua",
              harga: "bayar 5 ribu",
            },
            {
              nama: "merchandise ketiga",
              harga: "gratis",
            },
            {
              nama: "prodk keempat",
              harga: "satu juta",
            },
            {
              nama: "kmerchandise kelima",
              harga: "mahal gan",
            },
          ],
        },
      ],
      kelompokbarang3: [
        {
          jenisbarang: "workshop",
          rincianjenis: [
            {
              nama: "kegiatan amal",
              harga: "intinya bayar",
            },
            {
              nama: "motivasi belajar",
              harga: "ngak gratis",
            },
          ],
        },
      ],
      kelompokbarang3: [
        {
          jenisbarang: "bundle",
          rincianjenis: [
            {
              nama: "paket miskin",
              harga: "intinya bayar",
            },
            {
              nama: "paket sultan",
              harga: "ngak gratis",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
