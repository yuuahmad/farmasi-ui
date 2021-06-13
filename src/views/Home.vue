<template>
  <div>
    <teks-utama></teks-utama>
    <!-- ini adalah bagian pertama dari tampilan home -->
    <div class="grid sm:grid-cols-1 lg:grid-cols-2">
      <kartu-utama
        class="flex-1"
        v-for="kartu in kartuutama"
        :key="kartu.id"
        :judul="kartu.judul"
      ></kartu-utama>
    </div>
    <!-- bagian kedua (slide) tampilan home -->
    <div class="text-center text-3xl capitalize">tentang farmasi UI</div>
    <slide-utama></slide-utama>
    <!-- bagian ketiga (apa kata mereka) home -->
    <div class="text-center text-3xl capitalize">apa kata mereka</div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <apa-kata-mereka-utama
        class="flex-1"
        v-for="kata in katamereka"
        :key="kata.id"
        :judulkatamereka="kata.judul"
        :subjudulkatamereka="kata.pangkat"
        :keterangankatamereka="kata.keterangan"
      ></apa-kata-mereka-utama>
    </div>
    <!-- bagian keempat rangkaian kegiatan -->
    <div class="text-center text-3xl capitalize">
      rangkaian kegiatan open house FF UI vol.II
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-3">
      <rangkaian-kegiatan
        v-for="katakegiatan in katarangkaiankegiatan"
        :key="katakegiatan.id"
        :judulkegiatan="katakegiatan.judul"
        :subjudulkegiatan="katakegiatan.subjudul"
        class="flex-1"
      ></rangkaian-kegiatan>
    </div>
    <!-- ini bagian terakhir halaman utama (ajakan bergabung)-->
    <div class="text-center text-3xl capitalize">
      anda tertarik dengan kegiatan kami?
    </div>
    <div class="flex justify-center">
      <tombol-utama katatombol="event"></tombol-utama>
      <tombol-utama katatombol="beli tiket sekarang"></tombol-utama>
    </div>
  </div>
</template>

<script>
import Hai from "../components/Hai.vue";
import KartuUtama from "../components/KartuUtama.vue";
import SlideUtama from "../components/SlideUtama.vue";
import TeksUtama from "../components/TeksUtama.vue";
import ApaKataMerekaUtama from "../components/ApaKataMerekaUtama.vue";
import RangkaianKegiatan from "../components/RangkaianKegiatan.vue";
import TombolUtama from "../components/TombolUtama.vue";

export default {
  components: {
    Hai,
    TeksUtama,
    KartuUtama,
    SlideUtama,
    ApaKataMerekaUtama,
    RangkaianKegiatan,
    TombolUtama,
  },
  data() {
    return {
      nama: "ahmad yusuf maulana",
      kartuutama: [
        {
          id: 1,
          judul: "ahmad yusuf maulana",
          keterangan:
            "ini adalah keterangan pertama saya dalam kartu utama yang pertama",
        },
        {
          id: 2,
          judul: "novi lestari",
          keterangan:
            "ini adalah keterangan kedua saya dalam kartu utama yang kedua",
        },
      ],
      katamereka: [
        {
          id: 1,
          judul: "lukman hakim",
          pangkat: "jendral utama",
          keterangan:
            "saya dapat melakukan apa saja dalam event ini karena saya adalah orang dengan pangkat paling tinggi dihadapan para panitianya",
        },
        {
          id: 2,
          judul: "ridho ramadan",
          pangkat: "tidak penting",
          keterangan:
            "saya selalu dikucilkan selama mengikuti event ini karena itulah saya benci event ini",
        },
        {
          id: 3,
          judul: "muhammad ikhwan",
          pangkat: "intinya orang dalam",
          keterangan:
            "saya tidak ada komentar tentang event ini dan ini kata tambah yang saya tambah sendiri agar bisa dibanyakin",
        },
      ],
      katarangkaiankegiatan: [
        {
          id: 1,
          judul: "hari pertama",
          subjudul: [
            { id: 1, kata: "ini pertama dari pertama" },
            { id: 2, kata: "kedua" },
            { id: 3, kata: "ketiga" },
          ],
        },
        {
          id: 2,
          judul: "hari kedua",
          subjudul: [
            { kata: "kedua pertama" },
            { kata: "kedua kedua" },
            { kata: "kedua ketiga" },
          ],
        },
        {
          id: 3,
          judul: "daftar lomba",
          subjudul: [
            { kata: "lomba pertama" },
            { kata: "lomba kedua" },
            { kata: "lomba ketiga" },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
