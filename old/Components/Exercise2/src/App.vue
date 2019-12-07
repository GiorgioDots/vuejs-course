<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectComponent('blue')">Load Blue Template</button>
        <button class="btn btn-success" @click="selectComponent('green')">Load Green Template</button>
        <button class="btn btn-danger" @click="selectComponent('red')">Load Red Template</button>
        <hr />
        <component :is="selectedComponent">
          <h1 slot="title">{{ title }}</h1>
          <p>{{ subtitle}}</p>
        </component>
        <!--<app-blue>
          <h1 slot="title">App blue!</h1>
          <p>App blue subtitle</p>
        </app-blue>
        <app-green>
        <h1 slot="title">App green!</h1>-->
        <!--<p>App green subtitle</p>-->
        <!--</app-green>
        <app-red>
          <h1 slot="title">App red!</h1>
          <p>App red subtitle</p>
        </app-red>-->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      title: "Blue app title",
      subtitle: "Blue app subtitle",
      selectedComponent: "appBlue"
    };
  },
  methods: {
    selectComponent(color) {
      color = color.charAt(0).toUpperCase() + color.slice(1);
      this.selectedComponent = `app${color}`;
      this.title = `${color} app title`;
      this.subtitle = `${color} app subtitle`;
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
