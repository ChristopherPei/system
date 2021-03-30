<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import Index from 'components/Index.vue'
import sideBar from 'components/child_components/main/side_bar/side_bar.vue'
export default {
  components: {
    Index,
    sideBar
  },
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

</style>
