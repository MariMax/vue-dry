<template>
  <div class="hello">
    <span>{{value | toFixed}}</span>
  </div>
</template>

<script>
import { toFixed } from "@/filters/to-fixed";
export default {
  name: "HelloWorld",
  data: () => ({
    value: 10.443
  }),
  filters: {
    toFixed
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 4em;
  font-weight: 700;
}
</style>
