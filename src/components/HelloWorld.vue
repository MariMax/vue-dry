<template>
  <div class="hello">
    <div class="counter">
      <button @click="increase">+</button>
      <span>{{counter | toFixed}}</span>
      <button @click="decrease">-</button>
    </div>

    <div class="scrolling-area" ref="scrollArea">
      <div
        v-for="x in squares"
        :key="x"
        :id="x"
        v-isInTheView="$refs.scrollArea"
        v-on:intersects="intersects($event, x)"
        class="gray-square"
      >{{x}}</div>
    </div>
  </div>
</template>

<script>
import { mixin } from "@/mixins/mixin";

export default {
  name: "HelloWorld",
  data: () => ({
    value: 10.443,
    squares: []
  }),
  mixins: [mixin],
  mounted() {
    this.squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  },
  methods: {
    intersects(event, id) {
      if (event.detail || id) {
        // console.log(id);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 4em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.counter {
  display: flex;
  justify-content: space-between;
}

.counter button {
  font-size: 1em;
  flex: 1;
  margin: 0 1em;
}

.scrolling-area {
  flex: 1;
  overflow-y: auto;
}
</style>
