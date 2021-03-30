<template>
  <div id='item'>
    <div>
      <span style="position: relative; top:160px; left: 150px; font-size:30px;">登录管理账户</span>
      <span style="position: relative; top:160px; left: 180px; font-size:30px; color:red;">YPQadmin</span>
    </div>
    <div style="position: relative; top: 200px; left: 150px;">
      <span>
      <span >任务订单编号：</span>
      <span class='red'>ZW2104300000001</span>
      </span>
      <span style="margin-left: 400px">
        <span >用户手机：</span>
        <span class='red'>13392626258</span>
      </span>
      <span style="margin-left: 400px">
        <span>用户昵称：</span>
        <span class='red'>社群软件、天邦酒业、黄金酱酒</span>
      </span>
    </div>
    <div style="position: relative; top: 250px; left: 150px;">
      <span>
      <span >任务类型：</span>
      <span class='red'>财务往来</span>
      </span>
      <span class="text">
        <span style="margin-left: 590px">任务地点：</span>
        <span class='red'>广东广州</span>
      </span>
      <span class="text">
        <span style="margin-left: 470px">任务开始时间：</span>
        <span class='red'>2021年01月09日 14:04:30</span>
      </span>
    </div>
    <div style="position: relative; top: 300px; left: 150px;">
      <span>
        <span >任务完成时间：</span>
        <span class='red'>2021年03月09日 14：00：00</span>
      </span>
    </div>
    <div style="position: relative; top: 350px; left: 150px;">
      <span>
        <span >其它详情：</span>
        <span class='red'>用户13392626258发起账务往来订单：今借到韦浩瀚现金1000元（微信转账），定于2021年04月30日 18：00：00归还</span>
      </span>
    </div>
    <div style="position: relative; top: 400px; left: 150px;">
      <span >附件截图与定位：</span>
    </div>
    <div style="position: relative; top: 450px; left: 150px;">
      <span >阅读与点赞：</span>
      <span class='red'>2 </span>
    </div>
    <div style="position: relative; top: 540px; left: 150px;" id="vx">
      <div class="circle">微信头像</div>
      <div class="circle circle-after">微信头像</div>
      <div class="circle circle-after">微信头像</div>
      <div class="circle circle-after">微信头像</div>
      <div class="circle circle-after">微信头像</div>
      <div class="circle circle-after">微信头像</div>
    </div>
    <div style="position: relative; top: 620px; left: 150px;" id="vx">
      <span >评论与留言管理：</span>
      <span class='red'> 2</span>
    </div>
    <div style="position: relative; top: 700px; left: 150px;" class='bottom'>
      <div class="circle">微信头像</div>
      <span style="color: #2DB6F8; font-size: 40px; width: 700px; line-height: 170px; position: relative; left: 130px">感谢兄弟相助，我定按时归还</span>
      <el-select v-model="value_a" placeholder="删除原因">
        <el-option
          v-for="item in options_a"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
       <el-button type="danger" style="height: 70px; position: relative; top: 50px; border-radius: 20px; width: 150px; left: 300px; ">删除</el-button>      
    </div>
    <div style="position: relative; top: 750px; left: 150px;" class='bottom'>
      <div class="circle">
        微信头像
      </div>
      <span style="color: #2DB6F8; font-size: 40px; width: 700px; line-height: 170px; position: relative; left: 130px">小事情，别客气？</span>
      <el-select v-model="value_b" placeholder="删除原因">
        <el-option
          v-for="item in options_b"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
       <el-button type="danger" style="height: 70px; position: relative; top: 50px; border-radius: 20px; width: 150px; left: 300px; ">删除</el-button>    
    </div>
    <div style="position: relative; top: 780px; left: 550px; width: 1500px; display: flex; justify-content: space-around">
      <el-button type="danger" style="height: 70px; position: relative; top: 50px; border-radius: 20px; width: 200px ">返回</el-button>    
      <el-button type="danger" style="height: 70px; position: relative; top: 50px; border-radius: 20px; width: 200px ">下一条</el-button>    
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options_a: [{
          value: '选项1',
          label: '违反公俗良序'
        }, {
          value: '选项2',
          label: '涉嫌违法'
        }, {
          value: '选项3',
          label: '涉嫌反动言论'
        }],
        options_b: [{
          value: '选项1',
          label: '违反公俗良序'
        }, {
          value: '选项2',
          label: '涉嫌违法'
        }, {
          value: '选项3',
          label: '涉嫌反动言论'
        }],
        value_a: '',
        value_b: '',
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
  #item {
    font-size: 30px;
  }
  .red {
    color: red;
  }
  #vx {
    display: flex;
  }
  .circle {
    width: 180px;
    height: 170px;
    line-height: 170px;
    text-align: center;
    border: 1px solid #CCC;
    border-radius: 1000px;
  }
  .circle-after {
    margin-left: 50px;
  }
  .bottom {
    display: flex;
    width: 2500px;
  }
  .bottom .el-select {
    position: relative;
    left: 250px;
    line-height: 170px;
  }
  .bottom /deep/ .el-input__inner  {
    border-radius: 10px;
    width: 250px;
    height: 60px;
    line-height: 60px;;
  }
</style>