<template>
  <Card :photos="photos"></Card>
</template>

<script>
import Card from '@/components/card'
export default {
  name: 'HelloWorld',
  props: ['photos'],
  components: {
    Card
  },
  created: function () {
    console.log(this.photos)
  }
}
</script>

<style>

</style>
