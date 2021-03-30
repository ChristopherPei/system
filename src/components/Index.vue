<template>
    <div>
      <el-container id="container">
        <el-header height='60px'>
          <top-head></top-head>
        </el-header> 
        <el-container>
          <el-aside width="400px">
            <left-aside></left-aside>

          </el-aside>
          <el-main>
            <right-main id='main'></right-main>
          </el-main>
        </el-container>

      </el-container>

    </div>
</template>

<script>
import topHead from './child_components/head/head'
import leftAside from './child_components/aside/aside'
import rightMain from './child_components/main/main'
import verticalBar from './child_components/bar/vertical-bar.vue'

export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      topHead,
      leftAside,
      rightMain,
      verticalBar
    }
  }

</script>
<style scoped>

  #container {
    height: 100%;
  }
  .el-header {
    position: relative;
    width: 100%;
    height: 60px;
    padding: 0px;
  }
  .el-aside {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    background-color: #E8B9B9;
  }
  .el-main {
    position: absolute;
    left: 400px;
    right: 0;
    top: 60px;
    padding: 0px;
    bottom: 0;
    overflow-y: scroll;
  }
  #bar {
    position: absolute;
    left: 230px;
    top: 100px;
    background-color: rgb(102, 32, 32);
    width: 30px;
    height: 200px;
  }
  #main {
    width: 2800px;
    height: 2000px;
    box-shadow: 5px 1px 3px #ccc;
  }   
</style>