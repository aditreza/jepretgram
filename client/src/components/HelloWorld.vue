<template>
 <div class="container">
   <div class="row col-md-12 col-md-offset-2">
     <Card/>
   </div>
 </div>
</template>

<script>
import Card from '@/components/card'
export default {
  name: 'HelloWorld',
  components: {
    Card
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
