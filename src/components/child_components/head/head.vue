<template>
  <div id='head'>
    <div id="left">易排期后台原型</div>
    <div id="middle">
      <el-dropdown>
        <el-button >
          60%<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>放大</el-dropdown-item>
          <el-dropdown-item>缩小</el-dropdown-item>
          <el-dropdown-item>50%</el-dropdown-item>
          <el-dropdown-item>100%</el-dropdown-item>
          <el-dropdown-item>200%</el-dropdown-item>
          <el-dropdown-item>适应画布</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-tooltip content="预览" placement="top">
          <el-menu-item index="1" ><i class="el-icon-view"></i></el-menu-item>
        </el-tooltip>
        <el-tooltip content="标注" placement="top">
          <el-menu-item index="2" ><i class='el-icon-s-promotion'></i></el-menu-item>
        </el-tooltip>
        
      </el-menu>
    </div>
        
    <div id="right">
      <div id='right-inside'>
        <el-tooltip content="全屏模式" placement="bottom">
          <el-button  icon="el-icon-full-screen" id="full-screen" circle  type='info'></el-button>
        </el-tooltip>
      </div>
    </div>

   
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
    }
  }


</script>
<style scoped>
  #head {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 0.5px 3px #ccc;
  }
  #middle {
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
  }
  #radio {
    vertical-align: middle;
  }
  #left {
    width: 240px;
    color: #665;
    padding-left: 20px;
  }
  #right {
    width:240px;

  }
  #right-inside {
    text-align: center;
  }
  .el-menu-item [class^=el-icon-] {
    font-size: 25px;
  }
  .aaa {
    width: 110px;
  }



</style>