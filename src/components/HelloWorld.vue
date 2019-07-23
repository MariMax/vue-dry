<template>
  <div class="hello">
    <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    value: 10.443
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 4em;
  font-weight: 700
}
</style>
