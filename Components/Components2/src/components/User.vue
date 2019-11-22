<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>User age: {{ age }}</p>
        <button @click="changeName">Change my name</button>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :name="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
    data: function() {
        return {
            name: "Giorgio",
            age: 23
        };
    },
    methods: {
        changeName: function() {
            this.name = "Gio";
        },
        resetName: function() {
            this.name = "Giorgio";
        }
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    }
};
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>
