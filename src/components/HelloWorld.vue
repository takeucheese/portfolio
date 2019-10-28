<template>
  <div class="hello">
    <p>
      Hello!!
      I'm {{name}}
    </p>
    <p><a href="https://github.com/takeucheese" target="_blank" rel="noopener">GitHub</a></p>
    <p><a href="https://twitter.com/hello_ts74" target="_blank" rel="noopener">Twitter</a></p>
    <p><a href="https://www.wantedly.com/users/113967751" target="_blank" rel="noopener">Wantedly</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private name!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
