<template>
  <div id='vertical-bar'>
    <el-tooltip class="item item1" effect="dark" content="状态面板" placement="right-start" >
      <el-button><i class='el-icon-bangzhu'></i></el-button>
    </el-tooltip>
    <el-tooltip class="item item2" effect="dark" content="链接高亮" placement="right-start">
      <el-button><i class='el-icon-magic-stick'></i></el-button>
    </el-tooltip>
    <el-tooltip class="item item3" effect="dark" content="批注" placement="right-start">
      <el-button><i class='el-icon-tickets'></i></el-button>
    </el-tooltip>
    <el-tooltip class="item item4" effect="dark" content="真机" placement="right-start">
      <el-button><i class='el-icon-sort-down'></i></el-button>
    </el-tooltip>
    <el-tooltip class="item item5" effect="dark" content="网页" placement="right-start">
      <el-button><i class='el-icon-check'></i></el-button>
    </el-tooltip>
    
    
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {

  }
}

</script>
<style scoped>
  #vertical-bar {
    position: absolute;
    left: 330px;
    top: 100px;
  }
  .item {
    width: 30px;
    display: block;
    margin-left: 0;
  }
  .item1 {
    margin-bottom: 10px;
  }
  .item4 {
    margin-bottom: 20px;
  }
  .el-button+.el-button{
    margin-left: 0px;
  }
  #vertical-bar i {
    position: relative;
    right: 7px
  }
</style>