<template>
  <div>
    <li class="list-group-item" v-for="(server, index) in servers">
      <p>Server #{{ server.id }}</p>
      <p>Server status: {{server.status}}</p>
      <button @click="changeStatus(index)">Change status</button>
    </li>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: {
    servers: {
      type: Array
    }
  },
  methods: {
    changeStatus(serverIndex) {
      var newStatus =
        this.servers[serverIndex].status == "Normal" ? "Critical" : "Normal";
      this.servers.status = newStatus;
      eventBus.changeStatus(newStatus, serverIndex);
    }
  }
};
</script>

<style>
</style>
