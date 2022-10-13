<script setup lang="ts">
  import LinksButton from './components/LinksButton.vue';
  import FooterInfo from './components/FooterInfo.vue';
</script>

<template>
  <div>
    <div class="w-full h-screen pt-5">
      <figure>
        <img src="./assets/thumb-142.webp" class="drop-shadow-xl rounded-full w-[175px] ml-auto mr-auto" alt="GuntxJakka's portrait">
      </figure>
      <h1 class="font-mali text-sky-900 text-center my-3 text-5xl drop-shadow-xl">GuntxJakka</h1>
      <LinksButton/>
      <FooterInfo />
    </div>
  </div>
</template>