<template>
  <div>
    <button class="btn btn-primary" @click="increment(10)">Increment</button>
    <button class="btn btn-primary" @click="decrease(10)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrease"])
  }
};
</script>