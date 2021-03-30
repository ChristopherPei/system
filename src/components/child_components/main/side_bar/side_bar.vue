<template>
  <div id='side_bar'>
    <img src="~assets/v2_qlfmhx.png" alt="">
    <parting-line style="position:relative;top:50px"></parting-line>
  </div>
</template>

<script>
import partingLine from 'components/content/line.vue'
export default {
  data () {
    return {
    };
  },

  components: {
    partingLine
  },

  computed: {},

  mounted() {},

  methods: {

  }
}

</script>
<style scoped>
  #side_bar {
    background-color: #E8B9B9;
    width: 100px;
    height: 500px
  }
  img {
    width: 50px;
    position: relative;
    top: 25px;
    left: 25px
  }

</style>