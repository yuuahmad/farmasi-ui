<template>
  <div class="border rounded-xl m-3 p-3">
    <div class="capitalize text-2xl text-center">deskripsi lomba</div>
    <div class="bg-blue-500 p-3 m-3 rounded-xl border">
      <div
        v-for="deskripsi in deskripsideskripsi"
        :key="deskripsi"
        class="py-1"
      >
        {{ deskripsi.pertama }}
      </div>
    </div>
    <div
      class="
        border
        bg-blue-600
        rounded-full
        w-72
        text-center
        m-3
        py-1
        px-5
        capitalize
        text-lg
      "
    >
      setujui dan lanjutkan
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
export default {
  data() {
    return {
      deskripsideskripsi: [
        {
          pertama:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores atque adipisci provident veritatis nam quos neque corporis, officiis vero dolorum ea esse magnam quasi a! Molestias minima fuga eum. Nihil non dignissimos porro harum. Sed, laborum impedit quos corrupti, error officia alias inventore vitae minus rerum voluptas? Neque cupiditate quam earum corporis totam velit dolorem et autem illum eveniet.",
        },
        {
          pertama: "ini adalah seratus ",
        },
        {
          pertama: "ini adalah ketiga ",
        },
        {
          pertama: "ini adalah keempat ",
        },
        {
          pertama:
            "ini adalah deskripsi yang panjang saking panjangnya saya malas untuk menulisnya ",
        },
        {
          pertama: "deskripsi terakhir ",
        },
      ],
    };
  },
};
</script>

<style></style>
