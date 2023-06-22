<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './layout/header.vue'

</script>

<template>
  <header>
    <Header/>
  </header>

  <RouterView />
</template>

<style scss scoped>

</style>
