<template>
  <div id='aside'>

        <img src="~assets/v2_qlfmhx.png" alt="">
        <bottom-line ></bottom-line>
        <i class='el-icon-search'></i>
        <input type="text" placeholder="搜索" class="search">
        <el-tooltip class="item" effect="dark" content="展开页面" placement="top">
          <el-button> 
            <i class='el-icon-caret-bottom'></i>
          </el-button>
        </el-tooltip>
        <el-menu
          default-active="/home"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router>
          <el-menu-item index="/home" >
            <i class="el-icon-menu"></i>
            <span slot="title">易排期后台管理首页</span>
          </el-menu-item>
          <el-menu-item index="/overview" >
            <i class="el-icon-edit-outline"></i>
            <span slot="title">概览</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index='/users'><i class="el-icon-user"></i>用户管理</el-menu-item>
            <el-menu-item index='/vip'><i class="el-icon-user"></i>会员管理</el-menu-item>
            <el-menu-item index='/score'><i class="el-icon-user"></i>积分管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>任务订单</span>
            </template>
            <el-menu-item index="orders"><i class="el-icon-location"></i>订单列表</el-menu-item>
            <el-menu-item index="item1"><i class="el-icon-location"></i>订单详情例1</el-menu-item>
            <el-menu-item index="item2"><i class="el-icon-location"></i>订单详情例2</el-menu-item>
            <el-menu-item index="item3"><i class="el-icon-location"></i>订单详情例3</el-menu-item>
            <el-menu-item index="item4"><i class="el-icon-location"></i>订单详情例4</el-menu-item>
            <el-menu-item index="item5"><i class="el-icon-location"></i>订单详情例5</el-menu-item>
            <el-menu-item index="item6"><i class="el-icon-location"></i>订单详情例6</el-menu-item>
            
          </el-submenu>
          <el-menu-item index="/data">
            <i class="el-icon-s-management"></i>
            <span slot="title">数据管理</span>
          </el-menu-item>
          <el-menu-item index="setting" >
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
          <el-menu-item index="/asset">
            <i class="el-icon-money"></i>
            <span slot="title">资产</span>
          </el-menu-item>
          <el-menu-item index="authority">
            <i class="el-icon-crop"></i>
            <span slot="title">管理权限</span>
          </el-menu-item>
        </el-menu>
  </div>
</template>

<script>
  import bottomLine from 'components/content/line'
  export default {
    data() {
      return {
        paths: ['','/home','/overview','/users','/orders','/data','/setting','/asset','/authority'],
      }
    },
    mounted() {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      item_click(index) {
      }
    },
    components: {
      bottomLine
    }
  }

</script>
<style scoped>
  #aside {
  }
  .el-icon-search {
    position: relative;
    left: 26px;
  }
  .search {
    background-color:#eee;
    -webkit-appearance: none;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    width: 80%;
    line-height: 40px;
    outline: 0;
    padding: 0 30px;
    margin-left: 0px;
    margin-top: 20px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }

  .el-button {
    position: relative;
    left: 5px;
    top: 4px;
    padding: 1px;
    font-size: 26px;
  }
  .el-menu {
    margin-top: 20px;
    background-color: #E8B9B9;
  }
  
  #page {
    padding-left: 30px;
    margin-bottom: 10px;
  }
  img {
    width: 150px;
    position: relative;
    left: 125px;
    padding-top: 20px;
    padding-bottom: 20px;

  }



</style>