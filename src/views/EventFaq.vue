<template>
  <div class="text-center text-3xl capitalize mb-3">event open house</div>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <event-event
      v-for="event in kartuevent"
      :key="event"
      :judulevent="event.judul"
      :keteranganevent="event.keterangan"
    ></event-event>
  </div>
  <div class="text-center text-3xl capitalize mb-3">
    pertanyaan yang sering ditanyakan
  </div>
  <pertanyaan-dropdown></pertanyaan-dropdown>
  <pertanyaan-dropdown></pertanyaan-dropdown>
  <pertanyaan-dropdown></pertanyaan-dropdown>
</template>

<script>
import EventEvent from "../components/EventEvent.vue";
import PertanyaanDropdown from "../components/PertanyaanDropdown.vue";
export default {
  components: { EventEvent, PertanyaanDropdown },
  data() {
    return {
      kartuevent: [
        {
          judul: "tour",
          keterangan:
            "ini adalah keterangan saya yang tidak penting dan hanya digunakan untuk uji coba percobaan yang bisa dilakukan oleh semua orang bahkan kata kata yang ada disini tidak punya makna sama sekali",
        },
        {
          judul: "try out",
          keterangan:
            "ini adalah keterangan saya yang tidak penting dan hanya digunakan untuk uji coba percobaan yang bisa dilakukan oleh semua orang bahkan kata kata yang ada disini tidak punya makna sama sekali",
        },
        {
          judul: "kompetisi",
          keterangan:
            "ini adalah keterangan saya yang tidak penting dan hanya digunakan untuk uji coba percobaan yang bisa dilakukan oleh semua orang bahkan kata kata yang ada disini tidak punya makna sama sekali",
        },
        {
          judul: "talk show",
          keterangan:
            "ini adalah keterangan saya yang tidak penting dan hanya digunakan untuk uji coba percobaan yang bisa dilakukan oleh semua orang bahkan kata kata yang ada disini tidak punya makna sama sekali",
        },
        {
          judul: "podcast",
          keterangan:
            "ini adalah keterangan saya yang tidak penting dan hanya digunakan untuk uji coba percobaan yang bisa dilakukan oleh semua orang bahkan kata kata yang ada disini tidak punya makna sama sekali",
        },
        {
          judul: "workshop",
          keterangan:
            "ini adalah keterangan saya yang tidak penting dan hanya digunakan untuk uji coba percobaan yang bisa dilakukan oleh semua orang bahkan kata kata yang ada disini tidak punya makna sama sekali",
        },
      ],
    };
  },
};
</script>

<style></style>
