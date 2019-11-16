<template>
  <div class="container">
    <heading></heading>
    <hr />
    <servers></servers>
    <hr />
    <info></info>
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import Servers from "./components/Servers.vue";
import Info from "./components/Info.vue";
export default {
  components: {
    heading: Heading,
    servers: Servers,
    info: Info
  }
};
</script>

<style>
</style>
