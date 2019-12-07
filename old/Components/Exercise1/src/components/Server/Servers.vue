<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server-status :servers="servers"></app-server-status>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import ServerStatus from "./ServerStatus.vue";
export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Normal" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Normal" }
      ]
    };
  },
  components: {
    "app-server-status": ServerStatus
  },
  created() {
    eventBus.$on("statusChanged", event => {
      this.servers[event.serverIndex].status = event.status;
    });
  }
};
</script>

<style>
</style>
