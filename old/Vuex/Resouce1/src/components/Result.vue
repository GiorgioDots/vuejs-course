<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";
export default {
  computed: {
    ...mapGetters({
      counter: types.DOUBLE_COUNTER
    })
  }
};
/*
export default {
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    }
  }
};*/
</script>