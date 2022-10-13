<template>
    <div class="grid grid-cols-1 w-2/3 gap-4 ml-auto mr-auto pt-2">
        <button class="btn btn-block ltbtn bg-blue-600 hover:bg-blue-500" @click="openInNewTab('https://www.guntxjakka.me')"><i class="bi bi-globe mx-2 text-lg"></i>My Website</button>
        <button class="btn btn-block ltbtn bg-black hover:bg-gray-800" @click="openInNewTab('mailto:gunt@guntxjakka.me')"><i class="bi bi-envelope mx-2 text-lg"></i>Email</button>
        <button class="btn btn-block ltbtn igbtn" @click="openInNewTab('https://instagram.com/guntxjakka')"><i class="bi bi-instagram mx-2 text-lg"></i>Instagram</button>
        <button class="btn btn-block ltbtn bg-black hover:bg-gray-800" @click="openInNewTab('https://github.com/gxjakkap')"><i class="bi bi-github mx-2 text-lg"></i>GitHub</button>
        <button class="btn btn-block ltbtn bg-[#1c9bf1] hover:bg-[#41aef7]" @click="openInNewTab('https://twitter.com/guntxjakka')"><i class="bi bi-twitter mx-2 text-lg"></i>Twitter</button>
        <button class="btn btn-block ltbtn bg-[#9046ff] hover:bg-[#9558f0]" @click="openInNewTab('https://twitch.tv/guntxjakka')"><i class="bi bi-twitch mx-2 text-lg"></i>Twitch</button>
        <button class="btn btn-block ltbtn bg-[#fe0100] hover:bg-[#fa3f3f]" @click="openInNewTab('https://www.youtube.com/channel/UCuhb0ovLdYPxw-K0a6d3Dzw')"><i class="bi bi-youtube mx-2 text-lg"></i>Youtube (Vlog)</button>
        <button class="btn btn-block ltbtn bg-[#fe0100] hover:bg-[#fa3f3f]" @click="openInNewTab('https://www.youtube.com/c/GuntxJakkaGaming')"><i class="bi bi-youtube mx-2 text-lg"></i>Youtube (Gaming)</button>
        <button class="btn btn-block ltbtn bg-[#1976f2] hover:bg-[#3588f5]" @click="openInNewTab('https://fb.me/guntchalermphanaphan')"><i class="bi bi-facebook mx-2 text-lg"></i>Facebook</button>
        <button class="btn btn-block ltbtn bg-[#203257] hover:bg-[#2f4268]" @click="openInNewTab('https://steamcommunity.com/id/autumness_')"><i class="bi bi-steam mx-2 text-lg"></i>Steam</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    openInNewTab(url: string) {
      window.open(url)
    }
  }
})
</script>

<style scoped>
  .ltbtn {
    @apply outline-none border-none drop-shadow-2xl;
  }
  .igbtn {
    background: rgb(0,34,150);
    background: linear-gradient(90deg, rgba(0,34,150,1) 0%, rgba(130,0,143,1) 13%, rgba(192,0,122,1) 32%, rgba(234,12,95,1) 48%, rgba(255,83,65,1) 65%, rgba(255,136,32,1) 86%, rgba(246,186,0,1) 100%);
  }
</style>