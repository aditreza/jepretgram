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
  }
}
</script>

<style>

</style>
