<template>
  <div class="flex bg-blue-500 p-3 m-2 border rounded-xl">
    <div class="m-1 px-1 flex-1">gambar saya</div>
    <div>
      <div class="text-xl capitalize pb-3 text-center">
        {{ judulevent }}
      </div>
      <div>
        {{ keteranganevent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["judulevent", "keteranganevent"],
};
</script>

<style></style>
