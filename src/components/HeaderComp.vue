<template>
  <div class="bg-blue-500 text-white capitalize text-2xl">
    <div class="container mx-auto flex justify-between py-1">
      <router-link to="/" class="rounded-full py-1 px-4 mr-3 bg-blue-600">
        logo event
      </router-link>
      <div class="flex xs:invisible md:visible">
        <router-link
          to="/admin"
          class="
            text-lg
            rounded-full
            py-1
            md:px-4
            xs:px-1
            md:mr-3
            sm:m-1
            bg-blue-600
          "
        >
          admin
        </router-link>
        <router-link
          to="/eventfaq"
          class="
            text-lg
            rounded-full
            py-1
            md:px-4
            xs:px-1
            md:mr-3
            sm:m-1
            bg-blue-600
          "
        >
          event + FAQ </router-link
        ><router-link
          to="/lomba"
          class="
            text-lg
            rounded-full
            py-1
            md:px-4
            xs:px-1
            md:mr-3
            sm:m-1
            bg-blue-600
          "
        >
          lomba </router-link
        ><router-link
          to="/shop"
          class="
            text-lg
            rounded-full
            py-1
            md:px-4
            xs:px-1
            md:mr-3
            sm:m-1
            bg-blue-600
          "
        >
          shop
        </router-link>
        <router-link
          to="/about"
          class="
            text-lg
            rounded-full
            py-1
            md:px-4
            xs:px-1
            md:mr-3
            sm:m-1
            bg-blue-600
          "
        >
          tentang
        </router-link>
        <router-link
          to="/login"
          class="
            text-lg
            rounded-full
            py-1
            md:px-4
            xs:px-1
            md:mr-3
            sm:m-1
            bg-blue-600
          "
        >
          login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
