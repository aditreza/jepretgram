<template>
  <Card :photos="photos"></Card>
</template>

<script>
import Card from '@/components/card'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    Card
  },
  computed: {
    ...mapState([
      'photos'
    ])
  },
  methods: {
    ...mapActions([
      'getAllPhoto'
    ])
  },
  created () {
    this.getAllPhoto()
  }
}
</script>

<style>

</style>
