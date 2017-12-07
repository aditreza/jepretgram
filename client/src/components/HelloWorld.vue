<template>
 <div class="container">
   <div class="row col-md-12">
     <MainPage></MainPage>
   </div>
 </div>
</template>

<script>
import MainPage from '@/components/MainPage'
export default {
  name: 'HelloWorld',
  components: {
    MainPage
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
