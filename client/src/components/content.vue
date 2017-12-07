<template>
  <router-view :photos="photos"></router-view>
</template>

<script>
import MainPage from '@/components/MainPage'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    MainPage
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
