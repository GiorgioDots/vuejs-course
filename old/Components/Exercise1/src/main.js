import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
    methods: {
        changeStatus(status, serverIndex) {
            this.$emit("statusChanged", {
                status: status,
                serverIndex: serverIndex
            });
        }
    }
});

new Vue({
    el: "#app",
    render: h => h(App)
});
