<template>
  <div class="hello">
    <button @click="increase">+</button>
    <span>{{counter | toFixed}}</span>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
import { toFixed } from "@/filters/to-fixed";
import {mixin} from '@/mixins/mixin';
export default {
  name: "HelloWorld",
  data: () => ({
    value: 10.443
  }),
  filters: {
    toFixed
  },
  mixins: [mixin],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 4em;
  font-weight: 700;
  display: flex;
  justify-content: space-between
}

.hello button {
  font-size: 1em;
  flex: 1;
  margin: 0 1em;
}
</style>
